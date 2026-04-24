const fs = require('fs');
const path = require('path');

// Basic .env parser
const env = {};
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
    const data = fs.readFileSync(envPath, 'utf8');
    // Split by new line and filter out comments or empty lines
    data.split(/\r?\n/).forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine && !trimmedLine.startsWith('#')) {
            const [key, ...val] = trimmedLine.split('=');
            if (key && val.length > 0) env[key.trim()] = val.join('=').trim();
        }
    });
}

const config = `// AUTO-GENERATED FROM .ENV - DO NOT EDIT MANUALLY
const envUserNames = {
    alpha: "${process.env.ALPHA_USER || env.ALPHA_USER || 'Raushan_143'}",
    beta: "${process.env.BETA_USER || env.BETA_USER || 'Nisha_143'}"
};

const envUsers = {
    "${process.env.ALPHA_USER || env.ALPHA_USER || 'Raushan_143'}": "${process.env.ALPHA_PASS || env.ALPHA_PASS || ''}",
    "${process.env.BETA_USER || env.BETA_USER || 'Nisha_143'}": "${process.env.BETA_PASS || env.BETA_PASS || ''}"
};

const envFirebaseConfig = {
    apiKey: "${process.env.FIREBASE_API_KEY || env.FIREBASE_API_KEY || ''}",
    authDomain: "${process.env.FIREBASE_AUTH_DOMAIN || env.FIREBASE_AUTH_DOMAIN || ''}",
    databaseURL: "${process.env.FIREBASE_DATABASE_URL || env.FIREBASE_DATABASE_URL || ''}",
    projectId: "${process.env.FIREBASE_PROJECT_ID || env.FIREBASE_PROJECT_ID || ''}",
    storageBucket: "${process.env.FIREBASE_STORAGE_BUCKET || env.FIREBASE_STORAGE_BUCKET || ''}",
    messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID || env.FIREBASE_MESSAGING_SENDER_ID || ''}",
    appId: "${process.env.FIREBASE_APP_ID || env.FIREBASE_APP_ID || ''}"
};`;

try {
    fs.writeFileSync(path.join(__dirname, 'Userdetails.js'), config);
    console.log('--------------------------------------------------');
    console.log('✅ Userdetails.js has been successfully updated!');
    console.log('📂 Location: ' + path.join(__dirname, 'Userdetails.js'));
    console.log('🚀 To avoid security errors, please run "node server.js" and open http://localhost:3000');
    console.log('--------------------------------------------------');
} catch (err) {
    console.error('❌ Error writing Userdetails.js:', err.message);
}