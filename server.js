const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

// Load .env file manually
const env = {};
try {
    const envPath = path.join(__dirname, '.env');
    if (fs.existsSync(envPath)) {
        const data = fs.readFileSync(envPath, 'utf8');
        data.split(/\r?\n/).forEach(line => {
            line = line.trim();
            if (!line || line.startsWith('#')) return;
            const parts = line.split('=');
            if (parts.length >= 2) {
                const key = parts[0].trim();
                const val = parts.slice(1).join('=').trim();
                env[key] = val;
            }
        });
    }
} catch (err) {
    console.error("Error loading .env file:", err);
}

const server = http.createServer((req, res) => {

    if (req.url === '/config.js') {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        
        const alphaUser = process.env.ALPHA_USER || env.ALPHA_USER;
        const betaUser = process.env.BETA_USER || env.BETA_USER;

        const usersConfig = { 
            [alphaUser]: process.env.ALPHA_PASS || env.ALPHA_PASS, 
            [betaUser]: process.env.BETA_PASS || env.BETA_PASS 
        };
        const userNamesConfig = { alpha: alphaUser, beta: betaUser };
        
        const firebaseConfig = {
            apiKey: process.env.FIREBASE_API_KEY || env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN || env.FIREBASE_AUTH_DOMAIN,
            databaseURL: process.env.FIREBASE_DATABASE_URL || env.FIREBASE_DATABASE_URL,
            projectId: process.env.FIREBASE_PROJECT_ID || env.FIREBASE_PROJECT_ID,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET || env.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || env.FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.FIREBASE_APP_ID || env.FIREBASE_APP_ID,
            measurementId: process.env.FIREBASE_MEASUREMENT_ID || env.FIREBASE_MEASUREMENT_ID
        };

        const configOutput = `
            const envUsers = ${JSON.stringify(usersConfig)};
            const envUserNames = ${JSON.stringify(userNamesConfig)};
            const envFirebaseConfig = ${JSON.stringify(firebaseConfig)};
        `;
        res.end(configOutput);
        return;
    }

    let filePath = '.' + decodeURI(req.url);
    if (filePath === './') {
        filePath = './milbaat.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    
    // Check Firebase Connection
    let firebaseConfig = null;
    if (process.env.FIREBASE_CONFIG) {
        try { firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG); } catch(e) {}
    } else if (env.FIREBASE_CONFIG) {
        try { firebaseConfig = JSON.parse(env.FIREBASE_CONFIG); } catch(e) {}
    }

    const dbUrl = process.env.DATABASE_URL || env.DATABASE_URL || (firebaseConfig ? firebaseConfig.databaseURL : null);

    if (dbUrl) {
        // Use a timeout to prevent the server start from hanging if Firebase is slow
        const checkUrl = dbUrl.endsWith('/') ? `${dbUrl}.json` : `${dbUrl}/.json`;
        const request = https.get(checkUrl, { timeout: 5000 }, (res) => {
            if (res.statusCode === 200 || res.statusCode === 401) {
                console.log("Firebase connected successfully..");
            } else {
                console.log(`Warning: Firebase Database returned status ${res.statusCode}`);
            }
        }).on('error', (e) => console.error("Error connecting to Firebase:", e.message));
    }
});