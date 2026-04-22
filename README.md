# Milbaat Chat App

A real-time chat application featuring:
- Secure Login (Ministry of Defence Branding)
- Audio & Video Calling (WebRTC)
- Image, Video, and File sharing
- Message Pinning, Replying, and Forwarding
- Light/Dark Mode

## Setup Instructions

1. Clone this repository.
2. Create a `.env` file in the root directory with your Firebase credentials (refer to `generate-config.js` for required keys).
3. Run the configuration generator:
   ```bash
   node generate-config.js
   ```
4. Open `milbaat.html` in your browser or run the local server:
   ```bash
   node server.js
   ```
