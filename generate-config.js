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
    alpha: "${env.ALPHA_USER || 'Raushan_143'}",
    beta: "${env.BETA_USER || 'Nisha_143'}"
};

const envUsers = {
    "${env.ALPHA_USER || 'Raushan_143'}": "${env.ALPHA_PASS || ''}",
    "${env.BETA_USER || 'Nisha_143'}": "${env.BETA_PASS || ''}"
};

const envFirebaseConfig = {
    apiKey: "${env.FIREBASE_API_KEY || ''}",
    authDomain: "${env.FIREBASE_AUTH_DOMAIN || ''}",
    databaseURL: "${env.FIREBASE_DATABASE_URL || ''}",
    projectId: "${env.FIREBASE_PROJECT_ID || ''}",
    storageBucket: "${env.FIREBASE_STORAGE_BUCKET || ''}",
    messagingSenderId: "${env.FIREBASE_MESSAGING_SENDER_ID || ''}",
    appId: "${env.FIREBASE_APP_ID || ''}"
};`;

try {
    fs.writeFileSync(path.join(__dirname, 'Userdetails.js'), config);
    console.log('--------------------------------------------------');
    console.log('✅ Userdetails.js has been successfully updated!');
    console.log('📂 Location: ' + path.join(__dirname, 'Userdetails.js'));
    console.log('🚀 You can now open milbaat.html directly.');
    console.log('--------------------------------------------------');
} catch (err) {
    console.error('❌ Error writing Userdetails.js:', err.message);
}