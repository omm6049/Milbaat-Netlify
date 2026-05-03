// c:\Users\saura\OneDrive\Pictures\Mil Baat App\logic.js

// Logic to handle the "Auto Apply" effect
const acceptBtn = document.getElementById('acceptBtn');
const overlay = document.getElementById('entry-overlay');
const mainContent = document.getElementById('main-content');
const chatInputBar = document.getElementById('chatInputBar');
const body = document.body;
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const menuIconBtn = document.getElementById('menuIconBtn');
const menuOptions = document.getElementById('menuOptions');
const logoutBtn = document.getElementById('logoutBtn');
const logoutModal = document.getElementById('logout-modal');
const confirmLogout = document.getElementById('confirmLogout');
const cancelLogout = document.getElementById('cancelLogout');
const changePassModal = document.getElementById('change-pass-modal');
const oldPassInput = document.getElementById('oldPassInput');
const newPassInput = document.getElementById('newPassInput');
const confirmChangePass = document.getElementById('confirmChangePass');
const cancelChangePass = document.getElementById('cancelChangePass');
const changePassError = document.getElementById('changePassError');
const changePassBtn = document.getElementById('changePassBtn');
const profileBtn = document.getElementById('profileBtn');
const profileModal = document.getElementById('profile-modal');
const closeProfileBtn = document.getElementById('closeProfileBtn');
const uploadTriggerBtn = document.getElementById('uploadTriggerBtn');
const profileFileInput = document.getElementById('profileFileInput');
const profileImageDisplay = document.getElementById('profileImageDisplay');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const sendMsgBtn = document.getElementById('sendMsgBtn');
const msgInput = document.getElementById('msgInput');
const chatMessages = document.getElementById('chatMessages');
const profileUsernameDisplay = document.getElementById('profileUsernameDisplay');
const logoDisplay = document.querySelector('.logo');
const userStatusIndicator = document.getElementById('userStatusIndicator');
const headerTypingIndicator = document.getElementById('headerTypingIndicator');
const lastSeenDisplay = document.getElementById('lastSeenDisplay');
const typingIndicator = document.getElementById('typingIndicator');
const clearChatBtn = document.getElementById('clearChatBtn');
const exportChatBtn = document.getElementById('exportChatBtn');
const deleteMsgModal = document.getElementById('delete-msg-modal');
const confirmDeleteMsg = document.getElementById('confirmDeleteMsg');
const cancelDeleteMsg = document.getElementById('cancelDeleteMsg');
const clearChatModal = document.getElementById('clear-chat-modal');
const confirmClearChat = document.getElementById('confirmClearChat');
const cancelClearChat = document.getElementById('cancelClearChat');
const messageOptionsModal = document.getElementById('message-options-modal');
const forwardMsgModal = document.getElementById('forward-msg-modal');
const forwardFriendsList = document.getElementById('forward-friends-list');
const cancelForwardBtn = document.getElementById('cancelForwardBtn');
const confirmForwardBtn = document.getElementById('confirmForwardBtn');
const pinMsgBtn = document.getElementById('pinMsgBtn');
const deleteMsgOptionBtn = document.getElementById('deleteMsgOptionBtn');
const cancelMsgOptions = document.getElementById('cancelMsgOptions');
const pinnedMessageBar = document.getElementById('pinnedMessageBar');
const pinnedText = document.getElementById('pinnedText');
const replyPreview = document.getElementById('replyPreview');
const replySender = document.getElementById('replySender');
const replyText = document.getElementById('replyText');
const cancelReplyBtn = document.getElementById('cancelReplyBtn');
const attachBtn = document.getElementById('attachBtn');
const cameraBtn = document.getElementById('cameraBtn');
const micBtn = document.getElementById('micBtn');
const chatFileInput = document.getElementById('chatFileInput');
const chatCameraInput = document.getElementById('chatCameraInput');
const imagePreviewOverlay = document.getElementById('image-preview-overlay');
const previewImage = document.getElementById('previewImage');
const retakeBtn = document.getElementById('retakeBtn');
const filterBtn = document.getElementById('filterBtn');
const cropBtn = document.getElementById('cropBtn');
const sendImageBtn = document.getElementById('sendImageBtn');
const imageViewerModal = document.getElementById('image-viewer-modal');
const viewerImage = document.getElementById('viewerImage');
const closeViewerBtn = document.getElementById('closeViewerBtn');
const cameraLiveOverlay = document.getElementById('camera-live-overlay');
const cameraVideo = document.getElementById('cameraVideo');
const closeCameraBtn = document.getElementById('closeCameraBtn');
const flipCameraBtn = document.getElementById('flipCameraBtn');
const captureCameraBtn = document.getElementById('captureCameraBtn');
const flashCameraBtn = document.getElementById('flashCameraBtn');
const audioRecordingOverlay = document.getElementById('audio-recording-overlay');
const recordingTimer = document.getElementById('recordingTimer');
const cancelAudioBtn = document.getElementById('cancelAudioBtn');
const sendAudioBtn = document.getElementById('sendAudioBtn');
const audioVisualizer = document.getElementById('audioVisualizer');
const audioCallBtn = document.getElementById('audioCallBtn');
const videoCallBtn = document.getElementById('videoCallBtn');
const callOverlay = document.getElementById('call-overlay');
const callVideoContainer = document.getElementById('callVideoContainer');
const callLocalVideo = document.getElementById('callLocalVideo');
const callRemoteVideo = document.getElementById('callRemoteVideo');
const callRemoteAudio = document.getElementById('callRemoteAudio');
const callAudioContainer = document.getElementById('callAudioContainer');
const callStatusText = document.getElementById('callStatusText');
const callTimer = document.getElementById('callTimer');
const callMuteBtn = document.getElementById('callMuteBtn');
const callEndBtn = document.getElementById('callEndBtn');
const callFlipBtn = document.getElementById('callFlipBtn');
const callAudioOutputBtn = document.getElementById('callAudioOutputBtn');
const callVideoMuteBtn = document.getElementById('callVideoMuteBtn');
const incomingCallModal = document.getElementById('incoming-call-modal');
const incomingCallTitle = document.getElementById('incomingCallTitle');
const incomingCallType = document.getElementById('incomingCallType');
const acceptCallBtn = document.getElementById('acceptCallBtn');
const rejectCallBtn = document.getElementById('rejectCallBtn');
const callPipBtn = document.getElementById('callPipBtn');

// --- Call UI SVG Icons ---
const CALL_ICONS = {
    minimize: `<svg width="50%" height="50%" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="6" stroke-linecap="square" fill="currentcolor"><path d="M52 8 L31 29" /><path d="M31 15 V29 H45" /><path d="M8 52 L29 31" /><path d="M29 45 V31 H15" /></g></svg>`,
    speaker: `<svg width="70%" height="70%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4 10H7.5L12 6V18L7.5 14H4Z"/><path d="M15 9.2C16.3 10.1 17 11.3 17 12.5C17 13.7 16.3 14.9 15 15.8L13.9 14.6C14.8 13.9 15.2 13.2 15.2 12.5C15.2 11.8 14.8 11.1 13.9 10.4Z"/><path d="M17.6 7.2C19.5 8.7 20.5 10.5 20.5 12.5C20.5 14.5 19.5 16.3 17.6 17.8L16.4 16.5C17.9 15.3 18.7 13.9 18.7 12.5C18.7 11.1 17.9 9.7 16.4 8.5Z"/></svg>`,
    earpiece: `<svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11c0-4.97 4.03-9 9-9s9 4.03 9 9" /><rect x="2" y="11" width="4" height="8" rx="2" fill="currentColor"/><rect x="18" y="11" width="4" height="8" rx="2" fill="currentColor"/><path d="M21 11v1" /><path d="M3 11v1" /></svg>`,
    mic: `<svg width="70%" height="70%" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15a3.5 3.5 0 0 0 3.5-3.5V7.5A3.5 3.5 0 0 0 12 4a3.5 3.5 0 0 0-3.5 3.5v4A3.5 3.5 0 0 0 12 15z"/><path d="M18 11.5a6 6 0 0 1-12 0h-2a8 8 0 0 0 7 7.9V22h2v-2.6a8 8 0 0 0 7-7.9z"/></svg>`,
    micMute: `<svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v2" /><path d="M9 13a3 3 0 0 0 5.12-2.12" /><path d="M15 9.34V5a3 3 0 0 0-3-3" /><path d="M17 11a5 5 0 0 1-2.35 4.25" /><path d="M9.34 15.66A5 5 0 0 1 7 11" /><line x1="12" y1="19" x2="12" y2="22" /><line x1="8" y1="22" x2="16" y2="22" /><line x1="23" y1="1" x2="1" y2="23" /></svg>`,
    video: `<svg width="70%" height="70%" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7c0-1.1-.9-2-2-2H5C3.9 5 3 5.9 3 7v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3.5l4 4v-11l-4 4z"/></svg>`,
    videoMute: `<svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5.23" /><path d="M22 8l-6 4 6 4V8z" /><line x1="23" y1="1" x2="1" y2="23" /></svg>`,
    flip: `<svg width="70%" height="70%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 4.5 C9 4.5 6.8 6.1 6 8.8H4.2 L7.6 12.2 L11 8.8H8.8 C9.4 7.4 10.5 6.7 12 6.7 C14.2 6.7 15.8 7.8 16.5 9.8 L18.6 9 C17.6 6.1 15.3 4.5 12 4.5Z"/><path d="M12 19.5 C15 19.5 17.2 17.9 18 15.2H19.8 L16.4 11.8 L13 15.2H15.2 C14.6 16.6 13.5 17.3 12 17.3 C9.8 17.3 8.2 16.2 7.5 14.2 L5.4 15 C6.4 17.9 8.7 19.5 12 19.5Z"/></svg>`,
    end: `<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="32" fill="#FF3B30"/><path d="M44.5 38.3C44.5 39.5 43.5 40.5 42.3 40.5C39.5 40.5 34.5 39.5 29.5 34.5C24.5 29.5 23.5 24.5 23.5 21.7C23.5 20.5 24.5 19.5 25.7 19.5H30.5C31.2 19.5 31.8 20 31.9 20.7L32.7 25.5C32.8 26.1 32.5 26.8 32 27.2L29.5 29.5C30.5 31.5 32.5 33.5 34.5 34.5L36.8 32C37.2 31.5 37.9 31.2 38.5 31.3L43.3 32.1C44 32.2 44.5 32.8 44.5 33.5V38.3Z" fill="white" transform="rotate(135 32 32)"/></svg>`
};

const THEME_ICON_LIGHT = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4" /><line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="2" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="22" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>`;
const THEME_ICON_DARK = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>`;

const ICON_EYE = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`;
const ICON_EYE_OFF = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>`;

// Create Header Logout Button (for Alpha Chat)
const headerLogoutBtn = document.createElement('div');
headerLogoutBtn.id = 'headerLogoutBtn';
headerLogoutBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px; display: block; margin: auto;"><path d="M20 11H8.8l4.9-4.9L12.3 4.7 5 12l7.3 7.3 1.4-1.4-4.9-4.9H20z"/></svg>';
headerLogoutBtn.style.cssText = 'width: 35px; height: 35px; cursor: pointer; display: none; align-items: center; justify-content: center; margin-right: 5px;';

function showLogoutModal() {
    if (typeof menuOptions !== 'undefined' && menuOptions) menuOptions.style.display = 'none';
    if (typeof menuIconBtn !== 'undefined' && menuIconBtn) menuIconBtn.classList.remove('rotate');
    if (typeof logoutModal !== 'undefined' && logoutModal) {
        logoutModal.style.display = 'flex';
        logoutModal.style.zIndex = '10005';
    }
    if (typeof mainContent !== 'undefined' && mainContent) mainContent.classList.add('blur-content');
    const alphaDash = document.getElementById('alpha-dashboard');
    if (alphaDash) alphaDash.classList.add('blur-content');
}

headerLogoutBtn.addEventListener('click', () => {
    if (currentUser === ALPHA_ADMIN) {
        if (typeof showAlphaHomeScreen === 'function') showAlphaHomeScreen();
    } else {
        showLogoutModal();
    }
});

// --- Dynamic Header Setup ---
(function setupHeader() {
    let header = document.querySelector('header');
    if (!header) {
        header = document.createElement('header');
        document.body.prepend(header);
    }

    // Style: Full width, fixed top, neutral dark glass background (works for Light/Dark themes)
    header.style.cssText = `
        position: absolute; top: 0; left: 0; width: 100%; height: 65px;
        display: flex; align-items: center; justify-content: space-between; padding: 0 10px;
        background: rgba(18, 18, 18, 0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
        border-bottom: 3px solid rgba(255, 255, 255, 0.08); z-index: 1000; box-sizing: border-box;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); color: white;
    `;

    // Left Side Wrapper
    const headerLeftSide = document.createElement('div');
    headerLeftSide.style.cssText = 'display: flex; align-items: center; flex: 1; overflow: hidden;';
    
    if (headerLogoutBtn) {
        headerLeftSide.appendChild(headerLogoutBtn);
    }

    // Left Container (Logo & Status)
    const leftContainer = document.createElement('div');
    leftContainer.style.cssText = 'display: flex; flex-direction: column; justify-content: center; align-items: flex-start; overflow: hidden;';
    if (logoDisplay) {
        logoDisplay.style.margin = '0';
        logoDisplay.style.lineHeight = '1.2';
        leftContainer.appendChild(logoDisplay);
    }
    if (lastSeenDisplay) {
        lastSeenDisplay.style.margin = '0';
        lastSeenDisplay.style.lineHeight = '1.1';
        lastSeenDisplay.style.color = 'rgba(255, 255, 255, 0.7)';
        leftContainer.appendChild(lastSeenDisplay);
    }
    if (userStatusIndicator) leftContainer.appendChild(userStatusIndicator);
    
    headerLeftSide.appendChild(leftContainer);
    header.appendChild(headerLeftSide);

    // Right Container (Icons)
    const rightContainer = document.createElement('div');
    rightContainer.style.cssText = 'display: flex; align-items: center; gap: 5px; margin-left: 5px;';
    
    if (menuIconBtn) {
        menuIconBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px; display: block; margin: auto; transition: transform 0.3s ease;"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg>';
    }

    [videoCallBtn, audioCallBtn, menuIconBtn].forEach(btn => {
        if (btn) {
            btn.style.margin = '0';
            btn.style.border = 'none';
            btn.style.background = 'transparent';
            btn.style.width = '32px';
            btn.style.height = '32px';
            btn.style.padding = '0';
            btn.style.display = 'flex';
            btn.style.alignItems = 'center';
            btn.style.justifyContent = 'center';
            const innerIcon = btn.querySelector('img, svg');
            if (innerIcon) innerIcon.style.cssText = 'width: 24px; height: 24px; object-fit: contain; pointer-events: none; fill: currentColor;';
            rightContainer.appendChild(btn);
        }
    });
    header.appendChild(rightContainer);

    // Push content down so it's not hidden behind header
    if (mainContent) mainContent.style.paddingTop = '60px';
})();

// --- Dynamic Footer Setup ---
(function setupFooter() {
    if (chatInputBar) {
        // Style: Fixed bottom, full width, glassmorphism with a cool dark slate tint
        // Note: display is set to 'none' initially, toggled to 'flex' on login
        chatInputBar.style.cssText = `
            position: absolute; bottom: 0; left: 0; width: 100%; height: 60px; 
            display: none; align-items: center; justify-content: space-between; padding: 5px 8px;
            background: rgba(25, 30, 35, 0.9); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
            border-top: 3px solid rgba(255, 255, 255, 0.08); z-index: 1000; box-sizing: border-box;
            box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2); color: white; gap: 5px; touch-action: none;
        `;

        // --- Input Box Layout Restructuring ---
        let inputWrapper = document.getElementById('input-box-wrapper');
        if (!inputWrapper) {
            inputWrapper = document.createElement('div');
            inputWrapper.id = 'input-box-wrapper';
            
            // Style the wrapper (The "Box")
            inputWrapper.style.cssText = `
                display: flex; align-items: center; flex: 1;
                background: rgba(255, 255, 255, 0.1); border-radius: 25px;
                padding: 5px 8px; position: relative; min-width: 0;
            `;
            
            // Style Input Field
            if (msgInput) {
                // Emoji Button
                const emojiBtn = document.createElement('button');
                emojiBtn.id = 'emojiBtn';
                emojiBtn.innerHTML = '<svg viewBox="0 0 24 24" style="width: 26px; height: 26px;"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="10" r="1.2" fill="currentColor"/><circle cx="15" cy="10" r="1.2" fill="currentColor"/><path d="M8.5 14c1.2 1.5 5.8 1.5 7 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
                emojiBtn.style.cssText = 'background: transparent; border: none; padding: 0 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: rgba(255, 255, 255, 0.7); transition: transform 0.2s;';
                emojiBtn.addEventListener('mouseenter', () => {
                    emojiBtn.style.transform = 'scale(1.1)';
                });
                emojiBtn.addEventListener('mouseleave', () => {
                    emojiBtn.style.transform = 'scale(1)';
                });
                
                inputWrapper.appendChild(emojiBtn);

                msgInput.style.background = 'transparent';
                msgInput.style.border = 'none';
                msgInput.style.color = 'white';
                msgInput.style.flex = '1';
                msgInput.style.padding = '8px';
                msgInput.style.outline = 'none';
                msgInput.placeholder = "Type a Message...";
                inputWrapper.appendChild(msgInput);

                // Emoji Picker Container
                const emojiPicker = document.createElement('div');
                emojiPicker.id = 'emoji-picker';
                emojiPicker.style.cssText = `
                    position: absolute; bottom: 100%; left: 10px; margin-bottom: 10px;
                    width: 300px; max-width: 80vw; height: 250px; overflow-y: auto;
                    background: rgba(30, 30, 40, 0.95); backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 10px;
                    display: none; grid-template-columns: repeat(auto-fill, minmax(35px, 1fr));
                    padding: 10px; gap: 5px; z-index: 2000; box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                `;
                
                const emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "🤡", "💩", "👻", "💀", "☠️", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "👋", "🤚", "🖐", "✋", "🖖", "👌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "💪", "🧠", "🦴", "👀", "👁", "👄", "💋", "🦷", "👅", "👂", "🦻", "👃", "🦵", "🦶", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "☮️", "✝️", "☪️", "🕉", "☸️", "✡️", "🔯", "🕎", "☯️", "☦️", "🛐", "⛎", "♈️", "♉️", "♊️", "♋️", "♌️", "♍️", "♎️", "♏️", "♐️", "♑️", "♒️", "♓️", "🆔", "⚛️", "🉑", "☢️", "☣️", "📴", "📳", "🈶", "🈚️", "🈸", "🈺", "🈷️", "✴️", "🆚", "💮", "🉐", "㊙️", "㊗️", "🈴", "🈵", "🈹", "🈲", "🅰️", "🅱️", "🆎", "🆑", "🅾️", "🆘", "❌", "⭕️", "🛑", "⛔️", "📛", "🚫", "💯", "💢", "♨️", "🚷", "🚯", "🚳", "🚱", "🔞", "📵", "🚭", "❗️", "❕", "❓", "❔", "‼️", "⁉️", "🔅", "🔆", "〽️", "⚠️", "🚸", "🔱", "⚜️", "🔰", "♻️", "✅", "🈯️", "💹", "❇️", "✳️", "❎", "🌐", "🍆", "🍑", "🍓", "🍒", "🥑", "🍔", "🍕", "🍖", "🍗", "🌭", "🥪", "🌮", "🌯", "🥙", "🥚", "🍳", "🥘", "🍲", "🥣", "🥗", "🍿", "🧈", "🧂", "🥫", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍠", "🍢", "🍣", "🍤", "🍥", "🥮", "🍡", "🥟", "🥠", "🥡", "🦀", "🦞", "🦐", "🦑", "🦪", "🍦", "🍧", "🍨", "🍩", "🍪", "🎂", "🍰", "🧁", "🥧", "🍫", "🍬", "🍭", "🍮", "🍯", "🍼", "🥛", "☕️", "🍵", "🍶", "🍾", "🍷", "🍸", "🍹", "🍺", "🍻", "🥂", "🥃", "🥤", "🧃", "🧉", "🧊", "🥢", "🍽", "🍴", "🥄", "🔪", "🏺"];

                emojis.forEach(emoji => {
                    const span = document.createElement('span');
                    span.innerText = emoji;
                    span.style.cssText = 'cursor: pointer; font-size: 1.5rem; padding: 5px; text-align: center; user-select: none; transition: transform 0.1s;';
                    span.onmouseover = () => span.style.transform = 'scale(1.2)';
                    span.onmouseout = () => span.style.transform = 'scale(1)';
                    span.onclick = () => {
                        msgInput.value += emoji;
                        msgInput.focus();
                        msgInput.dispatchEvent(new Event('input'));
                    };
                    emojiPicker.appendChild(span);
                });

                chatInputBar.appendChild(emojiPicker);

                emojiBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    emojiPicker.style.display = emojiPicker.style.display === 'grid' ? 'none' : 'grid';
                });

                document.addEventListener('click', (e) => {
                    if (!emojiPicker.contains(e.target) && e.target !== emojiBtn) {
                        emojiPicker.style.display = 'none';
                    }
                });
            }

            // Style & Move Attach/Camera Icons inside wrapper
            if (attachBtn) {
                attachBtn.innerHTML = '<svg viewBox="0 0 24 24" style="width: 24px; height: 24px;"><path fill="currentColor" d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5a4 4 0 0 0-8 0v12.5c0 3.03 2.47 5.5 5.5 5.5s5.5-2.47 5.5-5.5V6h-1.5z"/></svg>';
            }
            if (cameraBtn) {
                cameraBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px;"><path d="M20 5h-3.2l-1.8-2H9L7.2 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>';
            }

            [attachBtn, cameraBtn].forEach(btn => {
                if (btn) {
                    btn.style.background = 'transparent';
                    btn.style.border = 'none';
                    btn.style.padding = '8px';
                    btn.style.cursor = 'pointer';
                    btn.style.color = 'rgba(255, 255, 255, 0.7)';
                    btn.style.display = 'flex';
                    btn.style.alignItems = 'center';
                    btn.style.justifyContent = 'center';
                    inputWrapper.appendChild(btn);
                }
            });

            chatInputBar.prepend(inputWrapper);
            
            // Style Mic & Send Buttons (Inside Shared Circle)
            const actionContainer = document.createElement('div');
            actionContainer.id = 'mic-send-action-container';
            actionContainer.style.cssText = 'width: 45px; height: 45px; border-radius: 50%; background: #10eb5c; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.2);';

            const btnStyle = `width: 100%; height: 100%; background: transparent !important; border: none !important; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0; color: black !important; box-shadow: none !important;`;
            
            if (micBtn) {
                micBtn.style.cssText = btnStyle;
                micBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 22px; height: 22px;"><path d="M12 15a3.5 3.5 0 0 0 3.5-3.5V7.5A3.5 3.5 0 0 0 12 4a3.5 3.5 0 0 0-3.5 3.5v4A3.5 3.5 0 0 0 12 15z"/><path d="M18 11.5a6 6 0 0 1-12 0h-2a8 8 0 0 0 7 7.9V22h2v-2.6a8 8 0 0 0 7-7.9z"/></svg>';
                actionContainer.appendChild(micBtn);
            }
            if (sendMsgBtn) {
                sendMsgBtn.style.cssText = btnStyle + ' display: none;';
                sendMsgBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 20px; height: 20px; margin-left: 2px;"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>';
                actionContainer.appendChild(sendMsgBtn);
            }
            chatInputBar.appendChild(actionContainer);
        }

        // Fix: Move Reply Preview inside Footer to eliminate gap
        if (replyPreview) {
            chatInputBar.appendChild(replyPreview);
            replyPreview.style.cssText = `
                position: absolute; 
                bottom: 100%; 
                left: 0; 
                width: 100%; 
                display: none; 
                background: rgba(20, 20, 30, 0.95);
                backdrop-filter: blur(10px);
                padding: 10px 15px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                justify-content: space-between;
                align-items: center;
                z-index: 998;
                border-left: 4px solid #00d2ff;
                box-sizing: border-box;
            `;
        }

        // --- Main Chat Cointainer ka design jisme sab message show ho rha hai ---
        // You can modify these values manually to fit your design
        if (chatMessages) {
            chatMessages.style.cssText = `
                width: 100%;
                height: 100vh;           /* Full screen height */
                overflow-y: auto;        /* Enable scrolling */
                padding-top: 70px;       /* Space for Header (Adjust manually) */
                padding-bottom: 65px;   /* Space for Footer (Adjust manually) */
                padding-left: 10px;      /* Left spacing */
                padding-right: 10px;     /* Right spacing */
                box-sizing: border-box;  /* Include padding in width/height */
                position: absolute;      /* Absolute to locked body bounds */
                top: 0;
                left: 0;
                z-index: 0;              /* Behind header/footer */
                display: flex;
                flex-direction: column;
                gap: 10px;
            `;
        }
    }
})();

// --- Scroll to Bottom Button Setup ---
(function setupScrollToBottom() {
    const style = document.createElement('style');
    style.innerHTML = `
        #scrollToBottomBtn {
            position: absolute;
            bottom: 80px; /* Just above the 60px footer */
            right: 15px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(30, 30, 40, 0.85);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            display: none; /* hidden by default */
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 995;
            transition: background 0.3s;
            backdrop-filter: blur(5px);
        }
        #scrollToBottomBtn:active { transform: scale(0.9); }
        body.light-mode #scrollToBottomBtn { background: rgba(255, 255, 255, 0.9); color: #333; border-color: rgba(0,0,0,0.1); }
        
        #scrollUnreadBadge {
            position: absolute;
            top: -6px;
            right: -6px;
            background: #ff4757;
            color: white;
            font-size: 0.7rem;
            font-weight: bold;
            padding: 2px 6px;
            border-radius: 10px;
            display: none;
            border: 2px solid #1E293B;
            pointer-events: none;
        }
        body.light-mode #scrollUnreadBadge { border-color: #ffffff; }
    `;
    document.head.appendChild(style);

    const scrollBtn = document.createElement('div');
    scrollBtn.id = 'scrollToBottomBtn';
    scrollBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px;"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
        <div id="scrollUnreadBadge">0</div>
    `;
    document.body.appendChild(scrollBtn);

    window.scrollUnreadCount = 0;
    window.updateScrollBadge = function(count) {
        const badge = document.getElementById('scrollUnreadBadge');
        if (badge) {
            window.scrollUnreadCount = count;
            if (count > 0) {
                badge.innerText = count > 99 ? '99+' : count;
                badge.style.display = 'block';
            } else {
                badge.style.display = 'none';
            }
        }
    };

    if (chatMessages) {
        chatMessages.addEventListener('scroll', () => {
            // Show button if user scrolls up by more than 150px
            const isScrolledUp = (chatMessages.scrollHeight - chatMessages.scrollTop) > (chatMessages.clientHeight + 150);
            scrollBtn.style.display = isScrolledUp ? 'flex' : 'none';
            
            if (!isScrolledUp && window.scrollUnreadCount > 0) {
                window.updateScrollBadge(0);
            }
        });
    }

    scrollBtn.addEventListener('click', () => {
        window.updateScrollBadge(0);
        if (chatMessages) {
            chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
        }
    });
})();

// --- Setup Custom Voice Message UI Styles ---
(function setupVoiceMessageStyle() {
    const style = document.createElement('style');
    style.innerHTML = `
        .voice-message-bubble {
            background-color: rgba(255,255,255,0.15);
            border-radius: 25px;
            padding: 6px 12px;
            display: flex;
            align-items: center;
            width: fit-content;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            margin-top: 5px;
            border: 1px solid rgba(255,255,255,0.1);
        }
        .cvm-controls { display: flex; align-items: center; gap: 8px; }
        .cvm-play-btn {
            width: 34px; height: 34px; border-radius: 50%;
            background-color: #5865f2; border: none; cursor: pointer;
            display: flex; justify-content: center; align-items: center; flex-shrink: 0;
            transition: transform 0.1s;
        }
        .cvm-play-btn:active { transform: scale(0.9); }
        .cvm-play-icon {
            width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent;
            border-left: 9px solid white; margin-left: 2px;
        }
        .playing .cvm-play-icon {
            width: 10px; height: 10px; border: none;
            background: linear-gradient(to right, white 0%, white 30%, transparent 30%, transparent 70%, white 70%, white 100%);
            margin-left: 0;
        }
        .cvm-waveform { display: flex; align-items: center; gap: 2px; height: 30px; }
        .cvm-bar { width: 2.5px; background-color: #72767d; border-radius: 1px; min-height: 3px; }
        .playing .cvm-bar { animation: cvm-pulse 0.8s infinite ease-in-out; background-color: #5865f2; }
        @keyframes cvm-pulse { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.6); } }
        .cvm-timer { color: inherit; font-size: 13px; font-weight: 600; margin: 0 2px; min-width: 32px; opacity: 0.8; font-family: monospace; }
        .cvm-speaker-btn { background: none; border: none; cursor: pointer; padding: 0; display: flex; align-items: center; pointer-events: none; }
        .cvm-speaker-icon { width: 18px; height: 18px; fill: currentColor; opacity: 0.7; }
    `;
    document.head.appendChild(style);
})();

// --- Initialize Message Bubble Style ---
(function initMsgStyle() {
    const msgStyle = document.createElement('style');
    msgStyle.id = 'dynamic-msg-style';
    // Default Dark Theme (Gray)
    msgStyle.innerHTML = `.message-bubble { max-width: 75%; word-wrap: break-word; padding: 10px; border-radius: 10px; margin-bottom: 5px; } .msg-sent { align-self: flex-end; margin-left: auto; text-align: left; background-color: rgba(45, 52, 54, 0.9) !important; color: white !important; border-bottom-right-radius: 0; } .msg-received { align-self: flex-start; margin-right: auto; text-align: left; background-color: rgba(45, 52, 54, 0.9) !important; color: white !important; border-bottom-left-radius: 0; } #chatMessages .message-bubble.msg-selected, #chatMessages .msg-sent.msg-selected, #chatMessages .msg-received.msg-selected { background: #ff9f43 !important; transition: background 0.2s; }`;
    const isLight = document.body.classList.contains('light-mode');
    const bubbleBgSent = isLight ? '#d9fdd3' : '#005c4b';
    const bubbleBgRcv = isLight ? '#ffffff' : '#202c33';
    const textColor = isLight ? '#000000' : 'white';
    msgStyle.innerHTML = `.message-bubble { max-width: 75%; word-wrap: break-word; padding: 10px; border-radius: 10px; margin-bottom: 5px; } .msg-sent { align-self: flex-end; margin-left: auto; text-align: left; background-color: ${bubbleBgSent} !important; color: ${textColor} !important; border-bottom-right-radius: 0; } .msg-received { align-self: flex-start; margin-right: auto; text-align: left; background-color: ${bubbleBgRcv} !important; color: ${textColor} !important; border-bottom-left-radius: 0; } #chatMessages .message-bubble.msg-selected, #chatMessages .msg-sent.msg-selected, #chatMessages .msg-received.msg-selected { background: #ff9f43 !important; color: white !important; transition: background 0.2s; }`;
    document.head.appendChild(msgStyle);
})();

// --- Initialize Theme Adaptive Styles (Login, Logout, Change Pass) ---
(function initThemeStyles() {
    const style = document.createElement('style');
    style.id = 'theme-adaptive-styles';
    style.innerHTML = `
        /* --- Default Dark Theme --- */
        #entry-overlay { background-color: rgba(18, 18, 18, 0.5) !important; color: #ffffff !important; backdrop-filter: blur(5px); }
        #logout-modal > div, #change-pass-modal > div, #clear-chat-modal > div, #message-options-modal > div, .modal-box { background-color: #2d3436 !important; color: #ffffff !important; border: 1px solid rgba(255,255,255,0.1); }
        #entry-overlay input, #change-pass-modal input { background: rgba(255, 255, 255, 0.1) !important; color: white !important; border: 1px solid rgba(255, 255, 255, 0.2) !important; }
        
        /* --- Light Theme Overrides --- */
        body.light-mode #entry-overlay { background-color: rgba(255, 255, 255, 0.5) !important; color: #000000 !important; backdrop-filter: blur(5px); }
        body.light-mode #logout-modal > div, body.light-mode #change-pass-modal > div, body.light-mode #clear-chat-modal > div, body.light-mode #message-options-modal > div, body.light-mode .modal-box { 
            background-color: #ffffff !important; 
            color: #000000 !important; 
            border: 1px solid #e1e4e8 !important; 
            box-shadow: 0 4px 20px rgba(0,0,0,0.15) !important; 
        }
        body.light-mode #entry-overlay input, body.light-mode #change-pass-modal input { 
            background: #ffffff !important; 
            color: #333333 !important; 
            border: 1px solid #ced4da !important; 
        }
        body.light-mode #entry-overlay input::placeholder, body.light-mode #change-pass-modal input::placeholder { color: #6c757d !important; }
        body.light-mode #cancelLogout, body.light-mode #cancelChangePass, body.light-mode #cancelClearChat { background-color: #e9ecef !important; color: #495057 !important; }

        /* Font Modal Styles */
        .font-option-btn { border: 1px solid rgba(255,255,255,0.2) !important; background: rgba(255,255,255,0.05) !important; color: white !important; }
        body.light-mode .font-option-btn { border: 1px solid #ced4da !important; background: #f8f9fa !important; color: #000000 !important; }
        #font-modal-close { color: rgba(255,255,255,0.7) !important; }
        body.light-mode #font-modal-close { color: #000000 !important; }

        /* Message Highlight Animation */
        @keyframes highlightPulse {
            0% { box-shadow: 0 0 0px transparent; transform: scale(1); filter: brightness(1); }
            50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.6); transform: scale(1.02); filter: brightness(1.2); }
            100% { box-shadow: 0 0 0px transparent; transform: scale(1); filter: brightness(1); }
        }
        .msg-highlight {
            animation: highlightPulse 1.5s ease-in-out;
            z-index: 5;
            position: relative;
        }

        /* --- Message Options Modal Theme --- */
        #message-options-modal .modal-box {
            gap: 8px; /* Adds space between buttons */
        }
        #message-options-modal button {
            background-color: rgba(255, 255, 255, 0.08) !important;
            color: #f1f1f1 !important;
            border: 1px solid rgba(255, 255, 255, 0.15) !important;
        }
        #downloadMsgOptionBtn {
            background-color: rgba(46, 204, 113, 0.15) !important;
            color: #2ecc71 !important;
            border-color: rgba(46, 204, 113, 0.2) !important;
        }
        #deleteMsgOptionBtn {
            background-color: rgba(255, 82, 82, 0.15) !important;
            color: #ff5252 !important;
            border-color: rgba(255, 82, 82, 0.2) !important;
        }

        /* Light Mode for Message Options */
        body.light-mode #message-options-modal button {
            background-color: #f0f2f5 !important;
            color: #333 !important;
            border-color: #e0e0e0 !important;
        }
        body.light-mode #downloadMsgOptionBtn, body.light-mode #deleteMsgOptionBtn {
            background-color: #fff !important; /* Use a clean white background for special buttons in light mode */
        }
        body.light-mode #downloadMsgOptionBtn { color: #28a745 !important; border-color: #28a74544 !important; }
        body.light-mode #deleteMsgOptionBtn { color: #dc3545 !important; border-color: #dc354544 !important; }

        /* --- Pinned Message Bar Styles --- */
        #pinnedMessageBar {
            position: absolute !important;
            top: 65px !important;
            left: 0 !important;
            width: 100% !important;
            z-index: 995 !important;
            box-sizing: border-box !important;
            background: #0F172A !important;
            backdrop-filter: blur(10px);
            border-bottom: 2px solid lightgreen !important;
        }
        body.light-mode #pinnedMessageBar {
            background: #0F172A !important;
            border-bottom: 2px solid lightgreen !important;
        }
    `;
    document.head.appendChild(style);

    // --- Call UI Theme Styles ---
    const callStyle = document.createElement('style');
    callStyle.id = 'call-ui-styles';
    callStyle.innerHTML = `
        #call-overlay .call-header { 
            position: absolute; top: 0; left: 0; width: 100%; height: 65px;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            padding: 0 15px;
            background: #0F172A !important;
            border-bottom: 2px solid rgba(24, 132, 210, 0.934) !important;
            box-sizing: border-box;
            z-index: 100;
            color: white;
        }

        #callHeaderStatusWrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            pointer-events: none;
            padding: 0 10px;
            text-align: center;
        }

        #callStatusText, #callTimer { 
            font-size: 10px;
            font-weight: bold;
            margin: 0;
            letter-spacing: 0.5px; 
        }

        #callHeaderName { 
            font-size: 18px;
            font-weight: bold;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            justify-self: start;
            text-align: left;
            max-width: 100%;
        }

        /* 2. PiP Icon Size */
        #callPipBtn { 
            width: 35px; height: 35px;
            background-color: #1bb5c3ff !important;
            border: none !important;
            outline: none !important;
            color: white;
            padding: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            line-height: 1 !important;
            cursor: pointer !important;
            justify-self: end;
        }
        #callPipBtn svg { pointer-events: none; }

        #call-overlay .call-footer { 
            position: absolute; bottom: 0; left: 0; width: 100%; height: 80px;
            display: flex; align-items: center; justify-content: center;
            padding: 0 20px; box-sizing: border-box; z-index: 100;
            background: #0F172A !important;
            border-top: 2px solid rgba(24, 132, 210, 0.934) !important;
            gap: 15px;
            color: white;
        }
        
        .blink-anim { animation: blinkText 1.5s infinite; }
        @keyframes blinkText { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }

        /* --- Audio Call Specific Styling (3 Icons) --- */
        #call-overlay.audio-only .call-footer {
            gap: 50px;               /* Increased gap for audio calls */
        }

        /* Base Button Style */
        #call-overlay .call-footer button {
            border: none; 
            color: white; 
            display: flex; 
            align-items: center; 
            justify-content: center;
            cursor: pointer; 
            flex-shrink: 0; 
            box-sizing: border-box;
            transition: transform 0.1s;
            
            /* --- Manual Default Icon Settings --- */
            width: 50px;             /* Button Width */
            height: 50px;            /* Button Height */
            border-radius: 50%;      /* Circular: 50%, Rounded: 10-20px */
            background: rgba(184, 211, 75, 1); /* Default Background */
            padding: 2px;           /* Icon padding inside button */
        }
        
        #call-overlay .call-footer button:active { transform: scale(0.95); }
        #call-overlay .call-footer button img { width: 100%; height: 100%; object-fit: contain; pointer-events: none; }

        /* --- Individual Icon Customization --- */
        #callAudioOutputBtn { background-color: rgba(112, 184, 192, 1); }
        #callMuteBtn { background-color: rgba(112, 184, 192, 1); }
        #callVideoMuteBtn { background-color: rgba(112, 184, 192, 1); }
        #callFlipBtn { background-color: rgba(112, 184, 192, 1); }
        
        /* --- Call End Button Styling Section --- */
        #callEndBtn { 
            /* Manual Settings */
            background-color: transparent !important;
            width: 50px !important;  /* Match others */
            height: 50px !important; /* Match others */
            padding: 2px !important; /* Icon padding */
            box-shadow: 0 4px 15px rgba(118, 187, 197, 0.4);
        }

        #callVideoContainer, #callAudioContainer {
            position: absolute !important;
            top: 65px !important;
            bottom: 80px !important;
            left: 0 !important;
            width: 100% !important;
            height: calc(100% - 145px) !important;
            z-index: 1;
            overflow: hidden;
        }

        #callRemoteVideo { width: 100%; height: 100%; object-fit: cover; }
        #callLocalVideo {
            position: absolute; top: 80px; right: 15px; z-index: 11;
            width: clamp(100px, 25vw, 140px); height: clamp(150px, 40vw, 210px);
            border: 2px solid rgba(255, 255, 255, 0.7); border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3); object-fit: cover; 
            cursor: move; background-color: #000;
            transition: top 0.3s ease, left 0.3s ease, right 0.3s ease, bottom 0.3s ease;
        }
        /* Custom PiP View Styles */
        #custom-pip-view {
            position: fixed;
            width: 160px; height: 240px;
            background-color: #2d3436;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.4);
            z-index: 1001;
            display: none;
            flex-direction: column;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.2);
            /* For draggable positioning */
            bottom: 75px; right: 15px; top: auto; left: auto;
            transition: left 0.3s ease, top 0.3s ease, right 0.3s ease, bottom 0.3s ease;
            cursor: move;
        }
        #custom-pip-view .pip-control-btn { background: none; border: none; color: white; font-size: 20px; cursor: pointer; padding: 5px; }
        #pip-header, #pip-footer { background: rgba(0,0,0,0.6); backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px); flex-shrink: 0; z-index: 10; }
        
        /* Light Theme for PiP */
        body.light-mode #custom-pip-view { background-color: #f1f2f6; border-color: rgba(0,0,0,0.1); }
        body.light-mode #pip-header, body.light-mode #pip-footer { background: rgba(255,255,255,0.7); color: #333; }
        body.light-mode #custom-pip-view .pip-control-btn { color: #333; }
    `;
    document.head.appendChild(callStyle);
})();

// --- Dynamic Login Page Branding (Ministry of Defence) ---
(function setupLoginBranding() {
    const overlay = document.getElementById('entry-overlay');
    if (!overlay) return;

    // Inject Font for Branding
    const fontLink = document.createElement('link');
    fontLink.href = "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    // 1. Locate Login Container
    let loginContainer = null;
    const input = document.getElementById('usernameInput');
    if (input) {
        let curr = input;
        while (curr && curr.parentElement && curr.parentElement !== overlay) {
            curr = curr.parentElement;
        }
        if (curr && curr.parentElement === overlay) loginContainer = curr;
    }

    if (loginContainer) {
        // 2. Hide "Admin Login" Text
        const headers = loginContainer.querySelectorAll('h1, h2, h3, h4');
        headers.forEach(h => {
            const text = h.innerText.toLowerCase();
            if (text.includes('admin') || text.includes('login')) h.style.display = 'none';
        });
        // Aggressively hide any element that looks like a login title
        Array.from(loginContainer.children).forEach(child => {
            // Skip inputs, buttons, images, and containers with inputs
            if (['INPUT', 'BUTTON', 'IMG'].includes(child.tagName)) return;
            if (child.id === 'user-pass-view' || child.id === 'facelock-view') return;
            
            const text = child.innerText?.toLowerCase().trim() || "";
            // Only hide if it explicitly says "admin login" to avoid hiding the main UI
            if (text === 'admin login' || text === 'login') child.style.display = 'none';
        });
    }
    // 5. Footer (Security Text) - Outside Container
    const footer = document.createElement('div');
    footer.id = 'login-branding-footer';
    footer.style.cssText = `
        position: relative; width: 100%;
        padding: 0 20px; text-align: center; color: rgba(255,255,255,0.6);
        z-index: 10; font-size: 0.7rem; pointer-events: none; user-select: none;
        background: transparent;
        font-family: sans-serif;
    `;
    
    footer.innerHTML = `
        <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-bottom: 10px;">
            <span style="display:flex; align-items:center; gap:5px;"><span style="color: #f1c40f;">★</span> National Security</span>
            <span style="display:flex; align-items:center; gap:5px;"><span style="color: #f1c40f;">★</span> Cyber Defense</span>
            <span style="display:flex; align-items:center; gap:5px;"><span style="color: #f1c40f;">★</span> Secure Comms</span>
        </div>
        <div style="border-top: 1px solid rgba(255,255,255,0.15); padding-top: 10px; width: 90%; margin: 0 auto;">
            <p style="margin: 0; font-weight: bold; color: #e74c3c; letter-spacing: 1.5px; font-size: 0.65rem;">RESTRICTED ACCESS SYSTEM</p>
            <p style="margin: 5px 0 0 0; opacity: 0.6; font-size: 0.6rem;">Unauthorized access is strictly prohibited and punishable under the Official Secrets Act.</p>
        </div>
    `;

    overlay.appendChild(footer);
})();

// --- Dynamic Password Toggle Setup ---
(function setupPasswordToggle() {
    const pwdInput = document.getElementById('passwordInput');
    const usrInput = document.getElementById('usernameInput');
    if (!pwdInput) return;

    // 1. Fix Size Mismatch: Ensure Username Input uses border-box like Password Input
    if (usrInput) {
        usrInput.style.boxSizing = 'border-box';
        usrInput.style.width = '100%';
    }

    // Create wrapper to ensure correct positioning relative to the input box
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.width = '100%';
    wrapper.style.boxSizing = 'border-box';
    
    // 2. Transfer Margins from Input to Wrapper (Fixes Centering Issue)
    const computedStyle = window.getComputedStyle(pwdInput);
    wrapper.style.marginTop = computedStyle.marginTop;
    wrapper.style.marginBottom = computedStyle.marginBottom;
    wrapper.style.marginLeft = computedStyle.marginLeft;
    wrapper.style.marginRight = computedStyle.marginRight;
    
    // Insert wrapper before input, then move input inside
    pwdInput.parentNode.insertBefore(wrapper, pwdInput);
    wrapper.appendChild(pwdInput);

    // Reset Input Margins (now handled by wrapper)
    pwdInput.style.margin = '0';

    // Create Toggle Button
    const toggleBtn = document.createElement('span');
    toggleBtn.id = 'togglePasswordBtn';
    toggleBtn.innerHTML = ICON_EYE; 
    toggleBtn.style.cssText = `
        position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
        cursor: pointer; font-size: 1.2rem; user-select: none;
        color: rgba(255, 255, 255, 0.7); z-index: 10; display: flex; align-items: center;
    `;

    wrapper.appendChild(toggleBtn);

    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const type = pwdInput.getAttribute('type') === 'password' ? 'text' : 'password';
        pwdInput.setAttribute('type', type);
        toggleBtn.innerHTML = type === 'password' ? ICON_EYE : ICON_EYE_OFF;
        pwdInput.focus();
    });
    
    // Adjust input padding and width
    pwdInput.style.paddingRight = '45px';
    pwdInput.style.width = '100%';
    pwdInput.style.boxSizing = 'border-box';
})();

// --- Num Code System Logic ---
(function setupNumCodeFeatures() {
    const numModal = document.getElementById('numcode-modal');
    const regModal = document.getElementById('numcode-register-modal');
    const display = document.getElementById('numcode-display');
    const regBtn = document.getElementById('registerNumCodeBtn');
    const errDisplay = document.getElementById('numSignupError');
    
    let currentPin = "";
    let numCodeMap = {}; // Maps numCode -> { userId, password }

    // Fetch num codes from Firebase
    async function fetchNumCodes() {
        try {
            const snap = await db.ref('numcode_data').once('value');
            numCodeMap = {};
            if (snap.exists()) {
                const data = snap.val();
                for (let key in data) {
                    if (typeof data[key] === 'object') {
                        numCodeMap[key] = data[key];
                    } else {
                        // Support for legacy format
                        numCodeMap[data[key]] = { userId: key };
                    }
                }
            }
        } catch(e) {
            console.error("Error fetching num codes:", e);
        }
    }

    // Open Num Code Modal
    document.addEventListener('click', (e) => {
        if (e.target.id === 'numCodeLoginLink') {
            currentPin = "";
            if(display) display.innerText = "";
            if(regBtn) {
                regBtn.innerText = "Register";
                regBtn.style.background = "#00d2ff";
            }
            if(numModal) numModal.style.display = 'flex';
            fetchNumCodes(); // Refresh codes
        }
    });

    // Close Num Code Modal
    const cancelBtn = document.getElementById('cancelNumCodeBtn');
    if(cancelBtn) {
        cancelBtn.onclick = () => {
            if(numModal) numModal.style.display = 'none';
        };
    }

    async function processNumLogin() {
        if (numCodeMap[currentPin]) {
            const userData = numCodeMap[currentPin];
            
            if(numModal) numModal.style.display = 'none';
            showToast("Code accepted. Logging in...");
            
            if (typeof usernameInput !== 'undefined') usernameInput.value = userData.userId;
            
            // Directly log in if password exists in the new format
            if (userData.password) {
                if (typeof passwordInput !== 'undefined') passwordInput.value = userData.password;
                validateLoginState();
                acceptBtn.click();
            } else {
                // Fallback fetch user's password for older entries
                try {
                    let foundPassword = null;
                    if (userData.userId === ALPHA_ADMIN || userData.userId === BETA_ADMIN) {
                        const aSnap = await db.ref(`admin_config/${userData.userId}_Password`).once('value');
                        if (aSnap.exists()) foundPassword = String(aSnap.val());
                        else foundPassword = users[userData.userId];
                    } else {
                        const uSnap = await db.ref('Other User Table/' + userData.userId).once('value');
                        if (uSnap.exists()) foundPassword = String(uSnap.val().password);
                    }
                    
                    if (foundPassword) {
                        if (typeof passwordInput !== 'undefined') passwordInput.value = foundPassword;
                        validateLoginState();
                        acceptBtn.click();
                    } else {
                        showToast("User details not found");
                    }
                } catch(err) {
                    console.error(err);
                }
            }
            
            currentPin = "";
            if(display) display.innerText = "";
            if(regBtn) {
                regBtn.innerText = "Register";
                regBtn.style.background = "#00d2ff";
            }
        } else {
            // Failed Login Attempt
            if(display && display.parentElement) triggerShake(display.parentElement); 
            currentPin = "";
            if(display) display.innerText = "";
            if(regBtn) {
                regBtn.innerText = "Register";
                regBtn.style.background = "#00d2ff";
            }
        }
    }

    function processNumpadInput(val) {
        if (val === '*' || val === '#') {
            currentPin = "";
            if(display) display.innerText = "";
            if(regBtn) {
                regBtn.innerText = "Register";
                regBtn.style.background = "#00d2ff";
            }
            return;
        }
        
        if (val === 'Backspace') {
            currentPin = currentPin.slice(0, -1);
            if(display) display.innerText = '*'.repeat(currentPin.length);
            if (currentPin.length === 0 && regBtn) {
                regBtn.innerText = "Register";
                regBtn.style.background = "#00d2ff";
            }
            return;
        }

        currentPin += val;
        if(display) display.innerText = '*'.repeat(currentPin.length);

        // Transform button automatically to Login Mode
        if(regBtn) {
            regBtn.innerText = "Login";
            regBtn.style.background = "#2ecc71";
        }

        if (currentPin.length > 8) {
            if (display && display.parentElement) triggerShake(display.parentElement); 
            currentPin = "";
            if (display) display.innerText = "";
            if (regBtn) {
                regBtn.innerText = "Register";
                regBtn.style.background = "#00d2ff";
            }
        };
    }

    // Handle Numpad Clicks
    document.querySelectorAll('.numpad-btn').forEach(btn => {
        btn.onclick = () => {
            processNumpadInput(btn.innerText);
        };
    });

    // Handle Keyboard Input
    document.addEventListener('keydown', (e) => {
        if (numModal && numModal.style.display === 'flex') {
            const key = e.key;
            if (/^[0-9]$/.test(key) || key === '*' || key === '#') {
                e.preventDefault();
                processNumpadInput(key);
            } else if (key === 'Backspace') {
                e.preventDefault();
                processNumpadInput('Backspace');
            } else if (key === 'Enter') {
                e.preventDefault();
                if (regBtn) regBtn.click();
            } else if (key === 'Escape') {
                if (cancelBtn) cancelBtn.click();
            }
        }
    });

    if(regBtn) {
        regBtn.onclick = () => {
            if (regBtn.innerText === "Register") {
                if(numModal) numModal.style.display = 'none';
                if(regModal) regModal.style.display = 'flex';
                if(errDisplay) errDisplay.style.display = 'none';
            } else {
                // Manual Login Execution via button
                processNumLogin();
            }
        };
    }

    // Close Register Modal
    const cancelRegBtn = document.getElementById('cancelNumRegisterBtn');
    if(cancelRegBtn) {
        cancelRegBtn.onclick = () => {
            if(regModal) regModal.style.display = 'none';
            document.getElementById('numSignupUser').value = '';
            document.getElementById('numSignupPass').value = '';
            document.getElementById('numSignupKey').value = '';
            document.getElementById('numSignupCode').value = '';
            if(errDisplay) errDisplay.style.display = 'none';
        };
    }

    // Submit Registration
    const submitRegBtn = document.getElementById('submitNumRegisterBtn');
    if(submitRegBtn) {
        submitRegBtn.onclick = async () => {
            const userId = document.getElementById('numSignupUser').value.trim();
            const password = document.getElementById('numSignupPass').value.trim();
            const passkey = document.getElementById('numSignupKey').value.trim();
            const codeKey = document.getElementById('numSignupCode').value.trim();

            if (!userId || !password || !codeKey || passkey !== adminPasskey) {
                if (errDisplay) {
                    errDisplay.innerText = "Wrong Data Input";
                    errDisplay.style.display = 'block';
                }
                if(regModal) triggerShake(regModal.querySelector('.modal-box'));
                return;
            }

            try {
                let isValid = false;
                if (userId === ALPHA_ADMIN || userId === BETA_ADMIN) {
                    if (users[userId] && users[userId] === password) isValid = true;
                    else if (db) {
                        const adminSnap = await db.ref(`admin_config/${userId}_Password`).once('value');
                        if (adminSnap.exists() && String(adminSnap.val()) === String(password)) {
                            isValid = true;
                            users[userId] = String(adminSnap.val());
                        }
                    }
                } else {
                    const snap = await db.ref('Other User Table/' + userId).once('value');
                    if (snap.exists() && snap.val().password === password) isValid = true;
                }

                if (isValid) {
                    // Check if code is already used
                    const allCodesSnap = await db.ref('numcode_data').once('value');
                    let codeInUse = false;
                    if (allCodesSnap.exists()) {
                        const data = allCodesSnap.val();
                        for (let key in data) {
                            if (key === codeKey || data[key] === codeKey) {
                                codeInUse = true;
                                break;
                            }
                        }
                    }

                    if (codeInUse) {
                        if (errDisplay) {
                            errDisplay.innerText = "Wrong Data Input (Code In Use)";
                            errDisplay.style.display = 'block';
                        }
                        if(regModal) triggerShake(regModal.querySelector('.modal-box'));
                        return;
                    }

                    // Save data securely directly to the Num Code
                    await db.ref(`numcode_data/${codeKey}`).set({
                        userId: userId,
                        password: password
                    });
                    
                    showToast("Num Code registered successfully!");
                    
                    if(regModal) regModal.style.display = 'none';
                    document.getElementById('numSignupUser').value = '';
                    document.getElementById('numSignupPass').value = '';
                    document.getElementById('numSignupKey').value = '';
                    document.getElementById('numSignupCode').value = '';
                    if(errDisplay) errDisplay.style.display = 'none';
                } else {
                    if (errDisplay) {
                        errDisplay.innerText = "Wrong Data Input";
                        errDisplay.style.display = 'block';
                    }
                    if(regModal) triggerShake(regModal.querySelector('.modal-box'));
                }
            } catch(e) {
                console.error(e);
            }
        };
    }
})();

let cameraStream = null;
let currentFacingMode = 'environment';
let isFlashOn = false;
let currentImageBase64 = null;
let currentVideoBase64 = null;
let currentFileData = null;
let cropper = null;
let baseImageForFilter = null;
let currentFilterMode = 0; // 0:None, 1:Gray, 2:Sepia, 3:Invert

// Define Admin Usernames from Config (or defaults)
const ALPHA_ADMIN = (typeof envUserNames !== 'undefined') ? envUserNames.alpha : "Raushan_143";
const BETA_ADMIN = (typeof envUserNames !== 'undefined') ? envUserNames.beta : "Nisha_143";

const users = (typeof envUsers !== 'undefined') ? envUsers : { [ALPHA_ADMIN]: "asdf@1234", [BETA_ADMIN]: "11041805143" };
let adminPasskey = "Raushan_Mil_Baat_143";

// Initialize Firebase
let db;
try {
    if (typeof envFirebaseConfig !== 'undefined' && envFirebaseConfig.databaseURL) {
        firebase.initializeApp(envFirebaseConfig);
        db = firebase.database();
    } else {
        console.error("Firebase Configuration Missing!");
        alert("Database connection failed. Please check your configuration.");
    }
} catch (e) { console.error("Firebase Init Error:", e); }

// Verify Connection
if (db) {
    db.ref(".info/connected").on("value", (snap) => {
        if (snap.val() === true) {
            console.log("✅ Firebase Realtime Database Connected!");
            
            // Load admin passwords from Firebase to override env config
            db.ref('admin_config').once('value').then(adminSnap => {
                if (adminSnap.exists()) {
                    const configData = adminSnap.val();
                    if (configData[`${ALPHA_ADMIN}_Password`]) {
                        users[ALPHA_ADMIN] = String(configData[`${ALPHA_ADMIN}_Password`]);
                    }
                    if (configData[`${BETA_ADMIN}_Password`]) {
                        users[BETA_ADMIN] = String(configData[`${BETA_ADMIN}_Password`]);
                    }
                    if (configData.passkey) {
                        adminPasskey = String(configData.passkey);
                    }
                }
            }).catch(e => console.error("Error loading admin config:", e));
        } else {
            console.log("❌ Firebase Disconnected (or connecting...)");
        }
    });

    db.ref(".info/serverTimeOffset").on("value", (snap) => {
        serverTimeOffset = snap.val();
    });
}
let serverTimeOffset = 0;

let currentUser = null;
let msgToDeleteId = null;
let selectedMsgId = null;
let replyToMsg = null;
let heartbeatInterval = null;
let statusCheckInterval = null;
let typingCheckInterval = null;
let inputTypingTimeout = null;
let mediaRecorder = null;
let audioChunks = [];
let recordingInterval = null;
let isSendingAudio = false;
let totalRecordedSeconds = 0;
let audioContext = null;
let analyser = null;
let visualizerDataArray = null;
let visualizerAnimationId = null;
let previewAudio = new Audio();
let lastImageSource = null;
let callStream = null;
let callInterval = null;
let isCallMuted = false;
let isVideoMuted = false;
let callFacingMode = 'user';
let isVideoCall = false;
let isSpeakerOn = false;
let pipIsDragging = false;
let pipStartX = 0;
let peerConnection = null;
let incomingSignalData = null;
let currentChatHistory = [];
let otherUserOnlineStatus = false;
let otherUserLastSeen = null;
let isOtherUserTyping = false;
let allMessagesRaw = [];
let currentChatPartner = null;
let candidateQueue = [];
let amICaller = false;
let ringingTimeout = null;
let isCallConnected = false;
let toastTimeout = null;
let selectedMsgIds = new Set();
let isSelectionMode = false;
let blockedUsersSet = new Set();
let lastStatusKey = null;
let callReconnectingTimeout = null;
let isCallReconnecting = false;
let callStartTime = 0;
let currentCallTarget = null;
let callStatusLogged = false;
let callHistoryView = null;
let alphaCallHistoryData = [];
let remoteFacingMode = 'user';

// --- Set Custom Background ---
body.style.background = "none";

// Create blurred background overlay
let bgOverlay = document.getElementById('blur-bg-overlay');
if (!bgOverlay) {
    bgOverlay = document.createElement('div');
    bgOverlay.id = 'blur-bg-overlay';
    bgOverlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;
            filter: blur(0px); transform: scale(1.1); background-color: #0b141a;
    `;

    document.body.appendChild(bgOverlay);
}

let bgImage = document.getElementById('theme-bg-image');
if (!bgImage && bgOverlay) {
    bgImage = document.createElement('img');
    bgImage.id = 'theme-bg-image';
        bgImage.style.cssText = 'width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; display: none;';
    bgOverlay.appendChild(bgImage);
}

// --- Dynamic Selection Header Setup ---
(function setupSelectionHeader() {
    let header = document.getElementById('selection-header');
    if (!header) {
        header = document.createElement('div');
        header.id = 'selection-header';
        document.body.prepend(header);
    }

    header.style.cssText = `
        position: absolute; top: 0; left: 0; width: 100%; height: 65px;
        display: none; align-items: center; justify-content: space-between; padding: 0 15px;
        background: #0F172A !important; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
        border-bottom: 2px solid rgb(31, 191, 231) !important; z-index: 1001; box-sizing: border-box;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); color: white;
    `;
    
    header.innerHTML = '';

    const iconStyle = 'cursor: pointer; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px;';

    const backBtn = document.createElement('div');
    backBtn.id = 'selBackBtn';
    backBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px;"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>';
    backBtn.style.cssText = iconStyle + ' color: white;';
    header.appendChild(backBtn);

    const counterWrapper = document.createElement('div');
    counterWrapper.style.cssText = 'display: flex; align-items: center; justify-content: center; width: 40px; height: 40px;';

    const counter = document.createElement('span');
    counter.id = 'selCounter';
    counter.innerText = '0';
    counter.style.cssText = 'font-size: 18px; font-weight: bold; color: white;';
    counterWrapper.appendChild(counter);
    header.appendChild(counterWrapper);

    const copyBtn = document.createElement('div');
    copyBtn.id = 'selCopyBtn';
    copyBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px; pointer-events: none; color: white;"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>';
    copyBtn.style.cssText = iconStyle;
    header.appendChild(copyBtn);

    const forwardBtn = document.createElement('div');
    forwardBtn.id = 'selForwardBtn';
    forwardBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px; pointer-events: none; color: white;"><path d="M14 5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11v-4z"/></svg>';
    forwardBtn.style.cssText = iconStyle;
    header.appendChild(forwardBtn);

    // Right Group: Three Dots & Dropdown Menu
    const rightGroup = document.createElement('div');
    rightGroup.style.cssText = 'display: flex; align-items: center; justify-content: center; position: relative; width: 40px; height: 40px;';

    const threeDotsBtn = document.createElement('div');
    threeDotsBtn.id = 'selThreeDotsBtn';
    threeDotsBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px; color: white;"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>';
    threeDotsBtn.style.cssText = 'cursor: pointer; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;';
    rightGroup.appendChild(threeDotsBtn);

    const dropdown = document.createElement('div');
    dropdown.id = 'selDropdown';
    dropdown.style.cssText = `
        display: none; position: absolute; top: 40px; right: 0;
        background: #1E293B; border: 1px solid rgba(255,255,255,0.1);
        border-radius: 8px; padding: 5px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        z-index: 2000; flex-direction: column; min-width: 150px;
    `;

    const createDropBtn = (id, text) => {
        const b = document.createElement('div');
        b.id = id;
        b.innerText = text;
        b.style.cssText = 'padding: 10px; cursor: pointer; color: white; font-size: 0.95rem; border-radius: 5px; text-align: left;';
        b.onmouseover = () => b.style.background = 'rgba(255,255,255,0.1)';
        b.onmouseout = () => b.style.background = 'transparent';
        b.addEventListener('click', () => dropdown.style.display = 'none');
        return b;
    };

    const pinBtn = createDropBtn('selPinBtn', 'Pin Message');
    const editBtn = createDropBtn('selEditBtn', 'Edit');
    const unsendBtn = createDropBtn('selUnsendBtn', 'Unsend');
    const deleteBtn = createDropBtn('selDeleteBtn', 'Delete');

    dropdown.appendChild(pinBtn);
    dropdown.appendChild(editBtn);
    dropdown.appendChild(unsendBtn);
    dropdown.appendChild(deleteBtn);

    rightGroup.appendChild(dropdown);
    header.appendChild(rightGroup);

    threeDotsBtn.onclick = (e) => {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
    };

    document.addEventListener('click', (e) => {
        if (!rightGroup.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });

    // Handlers
    backBtn.onclick = exitSelectionMode;

    document.getElementById('selCopyBtn').onclick = () => {
        if (selectedMsgIds.size !== 1) {
            showToast("Select 1 message to copy");
            return;
        }
        const id = Array.from(selectedMsgIds)[0];
        const msg = currentChatHistory.find(m => m.id === id);
        if (msg && msg.text) {
            navigator.clipboard.writeText(msg.text).then(() => {
                showToast("Message copied!");
            }).catch(err => {
                showToast("Failed to copy message");
                console.error('Copy failed:', err);
            });
            exitSelectionMode();
        } else {
            showToast("Only text messages can be copied");
        }
    };

    document.getElementById('selForwardBtn').onclick = () => {
        if (selectedMsgIds.size === 0) return;
        openForwardModal();
    };

    document.getElementById('selPinBtn').onclick = () => {
        if (selectedMsgIds.size !== 1) return showToast("Select 1 message to pin");
        const id = Array.from(selectedMsgIds)[0];
        const msg = currentChatHistory.find(m => m.id === id);
        if (msg && currentUser && currentChatPartner) {
            const chatId = getChatId(currentUser, currentChatPartner);
            db.ref(`pinned_messages/${chatId}`).set(msg);
        }
        exitSelectionMode();
    };

    document.getElementById('selEditBtn').onclick = () => {
        if (selectedMsgIds.size !== 1) return showToast("Select 1 message to edit");
        const id = Array.from(selectedMsgIds)[0];
        selectedMsgId = id; // Set for modal
        const msg = currentChatHistory.find(m => m.id === id);
        if (msg && msg.sender === currentUser && msg.text && msg.status !== 'seen') {
            const editModal = document.getElementById('edit-msg-modal');
            const editInput = document.getElementById('editMsgInput');
            if (editModal && editInput) {
                editInput.value = msg.text;
                editModal.style.display = 'flex';
                mainContent.classList.add('blur-content');
            }
        } else {
            showToast("Cannot edit this message");
        }
        exitSelectionMode();
    };

    document.getElementById('selUnsendBtn').onclick = () => {
        selectedMsgIds.forEach(id => {
            const msg = currentChatHistory.find(m => m.id === id);
            if (msg && msg.sender === currentUser && msg.status === 'seen') {
                const table = msg._tableName || getMessageTable(msg.sender);
                db.ref(`messages/${table}/${msg.id}/status`).set('sent');
                db.ref(`messages/${table}/${msg.id}/seenTimestamp`).remove();
            }
        });
        exitSelectionMode();
    };

    document.getElementById('selDeleteBtn').onclick = () => {
        if (selectedMsgIds.size === 0) return;
        deleteMsgModal.style.display = 'flex';
        mainContent.classList.add('blur-content');
    };
})();

const rtcConfig = {
    iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' }
    ]
};

// Viewer State
let viewerScale = 1;
let viewerPanning = false;
let viewerStartX = 0;
let viewerStartY = 0;
let viewerTranslateX = 0;
let viewerTranslateY = 0;
let initialPinchDistance = 0;
let initialScale = 1;
// Swipe detection variables
let swipeStartX = 0;
let swipeStartY = 0;
let swipeEndX = 0;
let swipeEndY = 0;

// --- Dynamic Edit Modal Creation ---
(function createEditModal() {
    if (!document.getElementById('edit-msg-modal')) {
        const modal = document.createElement('div');
        modal.id = 'edit-msg-modal';
        modal.className = 'modal-overlay'; 
        modal.style.display = 'none';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '1000';
        
        modal.innerHTML = `
            <div class="modal-box" style="background: #2d3436; padding: 20px; border-radius: 15px; width: 85%; max-width: 400px; text-align: center; color: white;">
                <h3 style="margin-bottom: 15px;">Edit Message</h3>
                <textarea id="editMsgInput" style="width: 100%; height: 100px; margin-bottom: 15px; padding: 10px; border-radius: 8px; border: none; background: rgba(255,255,255,0.1); color: white; resize: none;"></textarea>
                <div class="modal-actions" style="display: flex; justify-content: space-between;">
                    <button id="cancelEditMsg" style="padding: 10px 20px; border: none; border-radius: 8px; background: #ff4757; color: white; cursor: pointer; width: 45%;">Cancel</button>
                    <button id="confirmEditMsg" style="padding: 10px 20px; border: none; border-radius: 8px; background: #2ecc71; color: white; cursor: pointer; width: 45%;">Send</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        document.getElementById('cancelEditMsg').addEventListener('click', () => {
            modal.style.display = 'none';
            if (mainContent) mainContent.classList.remove('blur-content');
        });

        document.getElementById('confirmEditMsg').addEventListener('click', () => {
            const newText = document.getElementById('editMsgInput').value.trim();
            if (selectedMsgId && newText !== "") {
                const m = currentChatHistory.find(x => x.id === selectedMsgId);
                if (m) {
                    const table = m._tableName || getMessageTable(m.sender);
                    db.ref(`messages/${table}/${selectedMsgId}`).update({ text: newText });
                }
            }
            modal.style.display = 'none';
            if (mainContent) mainContent.classList.remove('blur-content');
        });
    }
})();

// --- Dynamic Call UI Structure ---
(function setupCallUI() {
    const overlay = document.getElementById('call-overlay');
    if (!overlay) return;

    // 1. Create Header
    let header = overlay.querySelector('.call-header');
    if (!header) {
        header = document.createElement('div');
        header.className = 'call-header';
        overlay.prepend(header);
    }

    // Clear existing header to rebuild layout
    header.innerHTML = '';

    // 2. Left: Name Display
    let nameEl = document.createElement('div');
    nameEl.id = 'callHeaderName';
    nameEl.style.fontWeight = 'bold';
    nameEl.style.textShadow = '0 0 5px rgba(0,0,0,0.5)';
    header.appendChild(nameEl);

    // 2.5 Center Wrapper: Status/Timer
    const status = document.getElementById('callStatusText');
    const timer = document.getElementById('callTimer');
    let centerWrapper = document.getElementById('callHeaderStatusWrapper');
    if (!centerWrapper) {
        centerWrapper = document.createElement('div');
        centerWrapper.id = 'callHeaderStatusWrapper';
    }
    centerWrapper.innerHTML = '';
    if (status) centerWrapper.appendChild(status);
    if (timer) centerWrapper.appendChild(timer);
    header.appendChild(centerWrapper);

    // 3. Right: PiP Button (Re-append existing button)
    if (callPipBtn) {
        // Update Icon to SVG
        callPipBtn.innerHTML = CALL_ICONS.minimize;
        header.appendChild(callPipBtn);
    }

    // Remove legacy centerEl if exists
    let legacyCenter = document.getElementById('callHeaderCenter');
    if (legacyCenter) legacyCenter.remove();

    // 2. Create Footer
    let footer = overlay.querySelector('.call-footer');
    if (!footer) {
        footer = document.createElement('div');
        footer.className = 'call-footer';
        
        const buttons = [
            document.getElementById('callAudioOutputBtn'), document.getElementById('callMuteBtn'),
            document.getElementById('callVideoMuteBtn'), document.getElementById('callFlipBtn'),
            document.getElementById('callEndBtn')
        ];
        buttons.forEach(btn => { if (btn) footer.appendChild(btn); });
        overlay.appendChild(footer);
    }

    // 3. Ensure local video is a direct child for absolute positioning
    const localVideo = document.getElementById('callLocalVideo');
    const videoContainer = document.getElementById('callVideoContainer');
    if (localVideo && videoContainer && localVideo.parentElement === videoContainer) {
        overlay.appendChild(localVideo);
    }
})();

// --- Dynamic Camera UI Setup ---
(function setupCameraUI() {
    const overlay = document.getElementById('camera-live-overlay');
    if (!overlay) return;

    // 1. Create Header for Top Controls (Back, Label, Flash)
    let header = overlay.querySelector('.camera-header');
    if (!header) {
        header = document.createElement('div');
        header.className = 'camera-header';
        overlay.prepend(header);
    }

    // Create Label
    let camLabel = document.getElementById('cameraFacingLabel');
    if (!camLabel) {
        camLabel = document.createElement('span');
        camLabel.id = 'cameraFacingLabel';
        camLabel.innerText = 'Back Cam';
    }

    if (closeCameraBtn) {
        closeCameraBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px;"><path d="M20 11H8.8l4.9-4.9L12.3 4.7 5 12l7.3 7.3 1.4-1.4-4.9-4.9H20z"/></svg>';
    }

    if (flashCameraBtn) {
        flashCameraBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 2L17 2L13.5 10H17L7 22L10.5 14H7L7 2Z" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/></svg>';
    }

    header.innerHTML = '';
    if (closeCameraBtn) header.appendChild(closeCameraBtn);
    header.appendChild(camLabel);
    if (flashCameraBtn) header.appendChild(flashCameraBtn);

    // 2. Create Footer for Bottom Controls (Flip, Capture, Filter)
    let footer = overlay.querySelector('.camera-footer');
    if (!footer) {
        footer = document.createElement('div');
        footer.className = 'camera-footer';
        overlay.appendChild(footer);

        // Create Filter Button (Right)
        const filterBtn = document.createElement('button');
        filterBtn.id = 'cameraFilterBtn';
        filterBtn.innerHTML = '<svg width="28" height="28" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><path d="M250 10 C 118 10, 10 118, 10 250 C 10 382, 118 490, 250 490 V 10 Z" fill="#ffdf4a"/><path d="M250 10 C 382 10, 490 118, 490 250 C 490 316, 464 376, 421 421 C 400 400, 360 380, 310 380 C 260 380, 250 420, 250 420 V 10 Z" fill="#fca121"/><path d="M421 421 C 421 421, 400 400, 310 400 C 220 400, 250 490, 250 490 H 250 V 420 C 250 420, 260 380, 310 380 C 360 380, 400 400, 421 421 Z" fill="#fca121" opacity="0.3"/><circle cx="130" cy="160" r="45" fill="#a4d13e"/><circle cx="250" cy="100" r="45" fill="#9376e1"/><circle cx="370" cy="160" r="45" fill="#e23326"/><circle cx="110" cy="300" r="60" fill="#3864b4"/><circle cx="235" cy="385" r="60" fill="#ffffff"/></svg>';
        filterBtn.onclick = () => {
            const video = document.getElementById('cameraVideo');
            let fIdx = parseInt(video.dataset.filterIndex || '0');
            fIdx = (fIdx + 1) % 4;
            video.dataset.filterIndex = fIdx;
            const filters = ['none', 'grayscale(100%)', 'sepia(100%)', 'invert(100%)'];
            video.style.filter = filters[fIdx];
        };
        
        if (flipCameraBtn) {
            flipCameraBtn.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" style="width: 28px; height: 28px;"><path d="M12 4.5 C9 4.5 6.8 6.1 6 8.8H4.2 L7.6 12.2 L11 8.8H8.8 C9.4 7.4 10.5 6.7 12 6.7 C14.2 6.7 15.8 7.8 16.5 9.8 L18.6 9 C17.6 6.1 15.3 4.5 12 4.5Z"/><path d="M12 19.5 C15 19.5 17.2 17.9 18 15.2H19.8 L16.4 11.8 L13 15.2H15.2 C14.6 16.6 13.5 17.3 12 17.3 C9.8 17.3 8.2 16.2 7.5 14.2 L5.4 15 C6.4 17.9 8.7 19.5 12 19.5Z"/></svg>';
            footer.appendChild(flipCameraBtn);
        }
        if (captureCameraBtn) footer.appendChild(captureCameraBtn);
        footer.appendChild(filterBtn);
    }

    // 3. Inject Styles
    const style = document.createElement('style');
    style.innerHTML = `
        #camera-live-overlay {
            display: none; /* Default hidden */
            flex-direction: column;
            justify-content: space-between;
        }
        
        .camera-header {
            position: absolute; top: 0; left: 0; width: 100%; height: 65px;
            display: flex; align-items: center; justify-content: space-between; padding: 0 15px;
            z-index: 10; box-sizing: border-box;
            background: #0F172A !important;
            border-bottom: 2px solid rgb(31, 191, 231) !important;
        }

        #cameraFacingLabel {
            position: absolute; left: 50%; transform: translateX(-50%);
            font-size: 1rem; font-weight: bold; color: white; letter-spacing: 0.5px;
            text-shadow: 0 2px 5px rgba(0,0,0,0.5); pointer-events: none;
        }

        .camera-footer {
            position: absolute; bottom: 0; left: 0; width: 100%; height: 90px;
            display: flex; align-items: center; justify-content: space-between;
            padding: 0 30px; z-index: 10; box-sizing: border-box;
            background: #0F172A !important;
            border-top: 2px solid rgb(31, 191, 231) !important;
        }

        /* General Button Styles */
        .camera-footer button, .camera-header button {
            width: 45px; height: 45px;
            border-radius: 50%;
            border: none !important;
            background: transparent !important;
            color: white;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer; outline: none; padding: 0;
            transition: transform 0.2s;
        }
        
        .camera-footer button:active, .camera-header button:active { transform: scale(0.95); }
        
        /* Capture Button (Center) */
        #captureCameraBtn {
            width: 70px !important; height: 70px !important;
            border: 4px solid #27fb10 !important;
            background: transparent !important;
        }
        #captureCameraBtn::after {
            content: ''; display: block;
            width: 55px; height: 55px;
            background: white; border-radius: 50%;
        }

        /* Filter Button (Right) */
        #cameraFilterBtn {
            background-color: transparent !important;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Tap to Focus Animation */
        .focus-ring {
            position: absolute;
            width: 60px; height: 60px;
            border: 2px solid rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
            pointer-events: none;
            transform: translate(-50%, -50%);
            animation: focusEffect 0.8s ease-out forwards;
            z-index: 15;
        }
        @keyframes focusEffect {
            0% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; border-color: white; }
            20% { transform: translate(-50%, -50%) scale(1); opacity: 1; border-color: #ffd700; }
            80% { transform: translate(-50%, -50%) scale(1); opacity: 1; border-color: #ffd700; }
            100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // 4. Tap to Focus Listener
    overlay.addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.closest('.camera-header') || e.target.closest('.camera-footer')) return;
        
        const rect = overlay.getBoundingClientRect();
        const ring = document.createElement('div');
        ring.className = 'focus-ring';
        ring.style.left = (e.clientX - rect.left) + 'px';
        ring.style.top = (e.clientY - rect.top) + 'px';
        overlay.appendChild(ring);
        setTimeout(() => ring.remove(), 800);
    });
})();

// --- Dynamic Custom PiP View ---
(function createCustomPipView() {
    if (document.getElementById('custom-pip-view')) return;

    const pipView = document.createElement('div');
    pipView.id = 'custom-pip-view';
    
    pipView.innerHTML = `
        <div id="pip-header" style="padding: 5px 8px; text-align: center; color: white; font-size: 12px; cursor: move; display: flex; justify-content: space-between; align-items: center;">
            <span>Video Call</span>
            <button id="pip-expand-btn" title="Expand" style="background:none; border:none; color:white; font-size:14px; cursor:pointer;">&#x26F6;</button>
        </div>
        <div style="position: relative; flex: 1; display: flex; align-items: center; justify-content: center; background: #2d3436; overflow: hidden;">
            <video id="pip-remote-video" playsinline autoplay style="width: 100%; height: 100%; object-fit: cover;"></video>
            <img id="pip-profile-pic" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; position: absolute; display: none; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
        </div>
        <div id="pip-footer" style="display: flex; justify-content: space-around; align-items: center; padding: 8px 5px; background: rgba(0,0,0,0.6);">
            <button id="pip-speaker-btn" class="pip-control-btn" style="width: 35px; height: 35px; padding: 5px;">${CALL_ICONS.speaker}</button>
            <button id="pip-end-btn" class="pip-control-btn pip-end-call" style="width: 40px; height: 40px; padding: 8px; background: transparent; border-radius: 50%;">${CALL_ICONS.end}</button>
            <button id="pip-mute-btn" class="pip-control-btn" style="width: 35px; height: 35px; padding: 5px;">${CALL_ICONS.mic}</button>
        </div>
    `;
    document.body.appendChild(pipView);

    function expandToFullScreen() {
        if (pipView.style.display === 'flex') {
            pipView.style.display = 'none';
            callOverlay.style.display = 'flex';
            mainContent.style.display = 'none';
            chatInputBar.style.display = 'none';
        }
    }

    // Event listeners for controls
    document.getElementById('pip-expand-btn').addEventListener('click', expandToFullScreen);
    document.getElementById('pip-remote-video').addEventListener('dblclick', expandToFullScreen);

    document.getElementById('pip-speaker-btn').addEventListener('click', (e) => { e.stopPropagation(); callAudioOutputBtn.click(); });
    document.getElementById('pip-end-btn').addEventListener('click', (e) => { e.stopPropagation(); callEndBtn.click(); });
    document.getElementById('pip-mute-btn').addEventListener('click', (e) => { e.stopPropagation(); callMuteBtn.click(); });

    // Draggable Logic
    let isDragging = false;
    let startX, startY, initialX, initialY;

    function dragStart(e) {
        if (e.target.tagName === 'BUTTON') return;
        isDragging = true;
        const rect = pipView.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        startX = clientX;
        startY = clientY;
        initialX = rect.left;
        initialY = rect.top;
        pipView.style.transition = 'none';
        pipView.style.right = 'auto';
        pipView.style.bottom = 'auto';
    }

    function dragMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const dx = clientX - startX;
        const dy = clientY - startY;
        
        let newX = initialX + dx;
        let newY = initialY + dy;

        // Boundary Checks
        newX = Math.max(0, Math.min(newX, window.innerWidth - pipView.offsetWidth));
        newY = Math.max(0, Math.min(newY, window.innerHeight - pipView.offsetHeight));

        pipView.style.left = `${newX}px`;
        pipView.style.top = `${newY}px`;
    }

    function dragEnd() {
        if (isDragging) {
            isDragging = false;
            pipView.style.transition = 'left 0.3s ease, top 0.3s ease, right 0.3s ease, bottom 0.3s ease';
        }
    }

    pipView.addEventListener('mousedown', dragStart);
    window.addEventListener('mousemove', dragMove);
    window.addEventListener('mouseup', dragEnd);
    
    pipView.addEventListener('touchstart', dragStart, { passive: false });
    window.addEventListener('touchmove', dragMove, { passive: false });
    window.addEventListener('touchend', dragEnd);
})();

// --- Dynamic Preview Close Button ---
(function setupPreviewCloseBtn() {
    const overlay = document.getElementById('image-preview-overlay');
    const closeBtn = document.getElementById('closePreviewBtn');
    if (overlay && closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (cropper) {
                cropper.destroy();
                cropper = null;
                resetCropButton();
            }
            overlay.style.display = 'none';
            currentImageBase64 = null;
            previewImage.src = '';
            baseImageForFilter = null;
            currentFilterMode = 0;
            currentFileData = null;
            currentVideoBase64 = null;
            
            const info = document.getElementById('file-preview-info');
            if(info) info.style.display = 'none';
            
            const vidPreview = document.getElementById('previewVideo');
            if(vidPreview) {
                vidPreview.pause();
                vidPreview.style.display = 'none';
            }
        });
    }
})();

// --- Dynamic Preview UI Setup ---
(function setupPreviewUI() {
    const overlay = document.getElementById('image-preview-overlay');
    if (!overlay) return;

    let saveBtn = document.getElementById('saveImageBtn');
    if (saveBtn) {
        saveBtn.onclick = () => {
            const link = document.createElement('a');
            if (currentImageBase64) {
                link.href = currentImageBase64;
                link.download = `MilBaat_Img_${Date.now()}.jpg`;
            } else if (currentVideoBase64) {
                link.href = currentVideoBase64;
                link.download = `MilBaat_Vid_${Date.now()}.mp4`;
            } else { return; }
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast("Saved to Gallery");
        };
    }
    
    // Inject Styles
    const style = document.createElement('style');
    style.innerHTML = `
        .preview-footer button {
            width: 50px; height: 50px;
            border: none !important;
            background: transparent !important;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer; padding: 2px;
            transition: transform 0.2s;
            color: white; font-size: 0; box-sizing: border-box;
            flex-shrink: 0;
            margin: 0;
        }
        .preview-footer button svg { width: 28px; height: 28px; pointer-events: none; }
        .preview-footer button:active { transform: scale(0.95); }
        #filterBtn { font-size: 0; }
        #cropBtn.apply-mode { width: auto !important; height: 40px !important; padding: 0 30px !important; border-radius: 20px !important; font-size: 15px !important; font-weight: bold; background: #0EA5E9 !important; color: white !important; }
        #cropBtn.apply-mode svg { display: none; }
    `;
    document.head.appendChild(style);
})();

function triggerShake(element) {
    element.classList.add('shake');
    setTimeout(() => {
        element.classList.remove('shake');
    }, 500);
}

function showToast(message) {
    const toast = document.getElementById('toast-notification');
    if (toast) {
        toast.innerText = message;
        toast.classList.add("show");
        if (toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }
}

// Helper to format date for divider
function getFormattedDate(dateObj) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[dateObj.getDay()];
    const d = String(dateObj.getDate()).padStart(2, '0');
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const y = dateObj.getFullYear();
    const datePart = `${d}/${m}/${y}`;
    return `${dayName}, ${datePart}`;
}

function updateSelectionHeaderIcons() {
    const editBtn = document.getElementById('selEditBtn');
    const unsendBtn = document.getElementById('selUnsendBtn');
    const pinBtn = document.getElementById('selPinBtn');
    const copyBtn = document.getElementById('selCopyBtn');
    const forwardBtn = document.getElementById('selForwardBtn');
    const counter = document.getElementById('selCounter');
    
    if (counter) counter.innerText = selectedMsgIds.size;
    
    if (!editBtn || !unsendBtn || !pinBtn || !copyBtn) return;

    let canEdit = false;
    let canUnsend = false;
    let canPin = (selectedMsgIds.size === 1);
    let canCopy = false;
    let canForward = (selectedMsgIds.size > 0);

    if (selectedMsgIds.size === 1) {
        const id = Array.from(selectedMsgIds)[0];
        const msg = currentChatHistory.find(m => m.id === id);
        // Edit Criteria: Sender is Me, Has Text, Not Seen
        if (msg && msg.sender === currentUser && msg.text && msg.status !== 'seen') {
            canEdit = true;
        }
        // Copy Criteria: Has Text
        if (msg && msg.text) {
            canCopy = true;
        }
    }

    // Unsend Criteria: At least one message is (Sender is Me AND Status is Seen)
    for (let id of selectedMsgIds) {
        const msg = currentChatHistory.find(m => m.id === id);
        if (msg && msg.sender === currentUser && msg.status === 'seen') {
            canUnsend = true;
            break;
        }
    }

    const setState = (btn, active) => {
        btn.style.opacity = active ? '1' : '0.3';
        btn.style.pointerEvents = active ? 'auto' : 'none';
    };

    setState(editBtn, canEdit);
    setState(unsendBtn, canUnsend);
    setState(pinBtn, canPin);
    setState(copyBtn, canCopy);
    if (forwardBtn) setState(forwardBtn, canForward);
}

function toggleSelection(id) {
    if (selectedMsgIds.has(id)) {
        selectedMsgIds.delete(id);
    } else {
        selectedMsgIds.add(id);
    }
    
    const el = document.getElementById('msg-' + id);
    if (el) el.classList.toggle('msg-selected');
    
    const header = document.getElementById('selection-header');
    if (selectedMsgIds.size > 0) {
        isSelectionMode = true;
        if (header) header.style.display = 'flex';
        updateSelectionHeaderIcons();
    } else {
        exitSelectionMode();
    }
    if (navigator.vibrate) navigator.vibrate(20);
}

function exitSelectionMode() {
    isSelectionMode = false;
    selectedMsgIds.clear();
    document.querySelectorAll('.msg-selected').forEach(el => el.classList.remove('msg-selected'));
    const header = document.getElementById('selection-header');
    if (header) header.style.display = 'none';
}

// Helper for long press to delete
function addLongPressHandler(element, id) {
    let pressTimer;
    const start = () => {
        pressTimer = setTimeout(() => {
            selectedMsgId = id;
            
            toggleSelection(id);
        }, 600);
    };
    const cancel = () => { clearTimeout(pressTimer); };
    
    element.addEventListener('touchstart', start, {passive: true});
    element.addEventListener('touchend', cancel);
    element.addEventListener('touchmove', cancel);
    element.addEventListener('mousedown', start);
    element.addEventListener('mouseup', cancel);
    element.addEventListener('mouseleave', cancel);
    element.addEventListener('contextmenu', e => e.preventDefault());
}

// Helper for Swipe to Reply
function addSwipeHandler(element, msg) {
    let startX = 0;
    let currentX = 0;
    
    element.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        currentX = startX;
        element.style.transition = 'none';
    }, {passive: true});

    element.addEventListener('touchmove', (e) => {
        currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        if (diff > 0) { // Swipe Right
             // Add resistance
             const move = Math.min(diff, 120);
             element.style.transform = `translateX(${move}px)`;
        }
    }, {passive: true});

    element.addEventListener('touchend', () => {
        const diff = currentX - startX;
        element.style.transition = 'transform 0.3s ease';
        element.style.transform = 'translateX(0)';
        
        if (diff > 100) {
            startReply(msg);
            if (navigator.vibrate) navigator.vibrate(30);
        }
    });
}

function startReply(msg) {
    replyToMsg = msg;
    replyPreview.style.display = 'flex';
    replySender.innerText = msg.sender === currentUser ? 'You' : msg.sender;
    
    const imageSvg = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 5px; margin-bottom: 2px;"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>';
    const videoSvg = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 5px; margin-bottom: 2px;"><path d="M17 10.5V7c0-1.1-.9-2-2-2H5C3.9 5 3 5.9 3 7v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3.5l4 4v-11l-4 4z"/></svg>';
    const audioSvg = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 5px; margin-bottom: 2px;"><path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .4 3 .4.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C10.4 22.2 1.8 13.6 1.8 3.2 1.8 2.5 2.3 2 3 2h4.5c.7 0 1.2.5 1.2 1.2 0 1 .1 2 .4 3 .1.4 0 .9-.3 1.2l-2.2 2.4z"/></svg>';
    const fileSvg = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 5px; margin-bottom: 2px;"><path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/></svg>';

    let displayText = msg.text;
    let isMissedCall = false;

    if (!displayText) {
        if (msg.image) displayText = imageSvg + ' Image';
        else if (msg.video) displayText = videoSvg + ' Video';
        else if (msg.audio) displayText = audioSvg + ' Audio';
        else if (msg.file) displayText = fileSvg + ' File';
    } else {
        displayText = displayText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        if (displayText.includes("Missed Video Call") || displayText.includes("Missed Audio Call")) {
            isMissedCall = true;
        }
        displayText = displayText.replace('📹', videoSvg).replace('📞', audioSvg);
        
        if (isMissedCall) {
            displayText = `<span style="color: #ff4757; font-weight: bold;">${displayText}</span>`;
        }
    }
    replyText.innerHTML = displayText;
    msgInput.focus();
}

function getMessageTable(sender) {
    if (sender === ALPHA_ADMIN) return 'alpha';
    if (sender === BETA_ADMIN) return 'beta';
    return sender;
}

function getUserRole(username) {
    if (username === ALPHA_ADMIN) return 'Alpha';
    if (username === BETA_ADMIN) return 'Beta';
    return username;
}

function getChatId(u1, u2) {
    if (!u1 || !u2) return 'global';
    return [u1, u2].sort().join('_');
}

async function sendNotificationAlert(recipient) {
    // Only send a notification alert if the recipient is the Alpha user (Raushan_143).
    // Logic removed: Messages should not trigger the alert. Only incoming calls trigger it now.
    return;
}

window.showUnblockPrompt = function() {
    let modal = document.getElementById('unblock-prompt-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'unblock-prompt-modal';
        modal.className = 'modal-overlay';
        modal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10005; align-items: center; justify-content: center; backdrop-filter: blur(5px);';
        modal.innerHTML = `
            <div class="modal-box" style="background: #1E293B; padding: 25px; border-radius: 15px; width: 85%; max-width: 350px; text-align: center; color: white; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <h3 style="margin-bottom: 15px; color: #ff4757;">User Blocked</h3>
                <p style="margin-bottom: 20px; opacity: 0.8; font-size: 0.95rem;">Unblock user to continue chat...</p>
                <div class="modal-actions" style="display: flex; justify-content: space-between; gap: 10px;">
                    <button id="cancelUnblockPrompt" class="modal-btn cancel-btn">Cancel</button>
                    <button id="confirmUnblockPrompt" class="modal-btn confirm-btn" style="background: #2ecc71;">Unblock</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        document.getElementById('cancelUnblockPrompt').onclick = () => {
            modal.style.display = 'none';
        };
    }
    
    document.getElementById('confirmUnblockPrompt').onclick = () => {
        const partner = currentChatPartner;
        if (partner) {
            const updates = {};
            updates[`blocked_users/${currentUser}/${partner}`] = null;
            if (partner === ALPHA_ADMIN) {
                updates[`blocked_users/${ALPHA_ADMIN}/${currentUser}`] = null;
            }
            db.ref().update(updates).then(() => {
                showToast("User unblocked.");
                modal.style.display = 'none';
            });
        }
    };
    
    modal.style.display = 'flex';
};

function updateBlockOverlay() {
    let overlay = document.getElementById('block-input-overlay');
    if (overlay) overlay.style.display = 'none';
    if (msgInput) msgInput.disabled = false;
}

function updateAlphaUnreadBadges() {
    if (currentUser !== ALPHA_ADMIN || !allMessagesRaw) return;
    
    const unreadCounts = {};
    allMessagesRaw.forEach(msg => {
        if (msg && msg.recipient === currentUser && msg.status !== 'seen') {
            if (msg[`deletedBy_${currentUser}`]) return; // Respect local deletion
            unreadCounts[msg.sender] = (unreadCounts[msg.sender] || 0) + 1;
        }
    });
    
    // Synchronously update the DOM badges in < 1ms
    document.querySelectorAll('[id^="badge-container-"]').forEach(container => {
        const fid = container.id.replace('badge-container-', '');
        const badge = document.getElementById(`unread-badge-${fid}`);
        const count = unreadCounts[fid] || 0;
        
        if (badge) {
            if (count > 0) {
                badge.innerText = count;
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        }
    });
}

let lastRenderedPartner = null;

function filterAndRenderChat() {
    if (!allMessagesRaw) return;

    // Instantly update unread badges on the Alpha dashboard whenever messages change
    if (currentUser === ALPHA_ADMIN) {
        updateAlphaUnreadBadges();
    }

    // If Alpha is on home screen, don't render a chat, just update friend list counts.
    if (currentUser === ALPHA_ADMIN && !currentChatPartner) {
        renderAlphaFriendList();
        return;
    }

    // If not in a chat, do nothing.
    if (!currentUser || !currentChatPartner) {
        currentChatHistory = [];
        if (chatMessages) chatMessages.innerHTML = '';
        updateBlockOverlay();
        return;
    }

    updateBlockOverlay();

    let history = allMessagesRaw.filter(msg => {
        if (!msg || typeof msg !== 'object' || !msg.timestamp) return false;
        
        // Filter out messages soft-deleted by the current user
        if (msg[`deletedBy_${currentUser}`]) return false;

        if (msg.recipient === currentUser && blockedUsersSet.has(msg.sender)) return false;
        const p1 = msg.sender === currentUser && msg.recipient === currentChatPartner;
        const p2 = msg.sender === currentChatPartner && msg.recipient === currentUser;
        return p1 || p2;
    });

    history.sort((a, b) => (a.rawDate || "") < (b.rawDate || "") ? -1 : 1);
    
    let oldHistoryLength = 0;
    if (lastRenderedPartner === currentChatPartner && currentChatHistory) {
        oldHistoryLength = currentChatHistory.length;
    } else {
        if (typeof window.updateScrollBadge === 'function') window.updateScrollBadge(0);
    }
    lastRenderedPartner = currentChatPartner;
    
    currentChatHistory = history;
    renderChat(history, oldHistoryLength);
}

// --- Chat History Logic ---
function setupFirebaseListeners() {
    // 1. Chat Messages Listener
    db.ref('messages').on('value', snapshot => {
        try {
            const data = snapshot.val();
            let raw = [];
            if (data) {
                Object.keys(data).forEach(key => {
                    const msgs = data[key];
                    if (msgs && typeof msgs === 'object') {
                        Object.values(msgs).forEach(m => {
                            if (m && typeof m === 'object') {
                                m._tableName = key;
                                raw.push(m);
                            }
                        });
                    }
                });
            }
            allMessagesRaw = raw;
            
            // Notification alert logic for messages removed.
            filterAndRenderChat();
        } catch (e) {
            console.error("Error processing chat data:", e);
        }
    });

    // Pinned Message Listener is now handled dynamically in updatePinnedMessageListener()

    // 3. Signaling Listeners (New Structure)
    const myRole = getUserRole(currentUser);

    // Listen for Incoming Signals (Offer, Answer)
    ['Audio', 'Video'].forEach(cType => {
        db.ref(`signals/${myRole}_incoming_${cType}`).on('value', snapshot => {
            const data = snapshot.val();
            
            // If data is null, the call was ended remotely
            if (!data || data.type === 'reject') {
                const isVideo = (cType === 'Video');
                let shouldEnd = false;

                // Filter by recipient if data exists
                if (data && data.recipient && data.recipient !== currentUser) return;

                // 1. I am the Caller (or active participant)
                if (callStream && isVideoCall === isVideo) {
                    shouldEnd = true;
                }
                // 2. I am the Receiver (pending call)
                else if (incomingSignalData && incomingSignalData.isVideo === isVideo) {
                    shouldEnd = true;
                }

                if (shouldEnd) {
                    if (data && data.type === 'reject') {
                        showToast("🚫 Call Rejected");
                    }
                    endCall(true);
                }
                return;
            }

            // Handle Offer (Incoming Call)
            if (data.type === 'offer' && data.sender !== currentUser) {
                if (data.recipient && data.recipient !== currentUser) return;
                handleIncomingSignal({
                    type: 'offer',
                    sender: data.sender,
                    data: data.sdp,
                    isVideo: cType === 'Video',
                    facingMode: data.facingMode || 'user'
                });
            }
            // Handle Answer (Call Accepted)
            else if (data.type === 'answer' && data.sender !== currentUser) {
                if (data.recipient && data.recipient !== currentUser) return;
                handleIncomingSignal({
                    type: 'answer',
                    sender: data.sender,
                    data: data.sdp,
                    isVideo: cType === 'Video',
                    facingMode: data.facingMode || 'user'
                });
            }
        });
    });

    db.ref(`signals/${myRole}_facingMode`).on('value', snapshot => {
        const data = snapshot.val();
        if (data && data.sender !== currentUser) {
            handleIncomingSignal({
                type: 'facingMode',
                facingMode: data.facingMode
            });
        }
    });

    // Listen for Candidates
    db.ref(`signals/${myRole}_candidates`).on('child_added', snapshot => {
        const val = snapshot.val();
        if (val && val.sender !== currentUser) {
            if (val.recipient && val.recipient !== currentUser) return;
            handleIncomingSignal({
                type: 'candidate',
                sender: val.sender,
                data: val.candidate
            });
        }
    });

    // 4. Status & Typing Listeners (Using Global Variables)
    // Removed shadowing let declarations so that the UI interval picks up global changes

    if (currentUser !== ALPHA_ADMIN) {
        // For non-Alpha users (Beta/Other), the partner is fixed (Alpha)
        db.ref(`status/${currentChatPartner}`).on('value', snapshot => {
            const partnerData = snapshot.val() || {};
            otherUserLastSeen = partnerData.lastSeen;
            otherUserOnlineStatus = partnerData.online;
            // Instantly update UI for status < 1ms
            updateStatusUI(otherUserOnlineStatus, otherUserLastSeen, isOtherUserTyping);
        });
    }

    if (statusCheckInterval) clearInterval(statusCheckInterval);
    statusCheckInterval = setInterval(() => {
        updateStatusUI(otherUserOnlineStatus, otherUserLastSeen, isOtherUserTyping);
    }, 100);

    // 5. Typing Listener
    db.ref('typing').on('value', snapshot => {
        const data = snapshot.val() || {};
        if (currentChatPartner && data[currentChatPartner] === true) {
            isOtherUserTyping = true;
        } else {
            isOtherUserTyping = false;
        }
        // Instantly update UI for typing < 1ms
        updateStatusUI(otherUserOnlineStatus, otherUserLastSeen, isOtherUserTyping);
    });

    // 6. Profile Picture Listener (Load saved photo)
    const userRole = getUserRole(currentUser);
    db.ref(`Profile Pic/${userRole}_Profile_Pic`).on('value', snapshot => {
        const photo = snapshot.val();
        if (photo) {
            profileImageDisplay.src = photo;
        }
    });

    // 7. Font Preference Listener
    db.ref(`User_Font_Style/${userRole}_Font`).on('value', snapshot => {
        const font = snapshot.val();
        if (font) {
            document.body.style.fontFamily = `'${font}', sans-serif`;
            localStorage.setItem('appFont', font);
        }
    });

    // 8. Blocked Users Listener
    db.ref(`blocked_users/${currentUser}`).on('value', snapshot => {
        blockedUsersSet.clear();
        if (snapshot.exists()) {
            snapshot.forEach(child => {
                blockedUsersSet.add(child.key);
            });
        }
        // Re-render chat in case a currently viewed user was blocked/unblocked
        filterAndRenderChat();
    });

    // 9. Friend Request Listener (for notification badge)
    if (currentUser !== ALPHA_ADMIN) {
        db.ref(`friend_requests/${currentUser}`).on('value', snapshot => {
            const badge = document.getElementById('pending-req-badge');
            if (badge) {
                const count = snapshot.numChildren();
                badge.innerText = count;
                badge.style.display = count > 0 ? 'inline-block' : 'none';
            }
        });
    }
}

function renderChat(history, oldHistoryLength = 0) {
    let historyChanged = false;
    let lastDateDivider = '';

    const wasScrolledUp = chatMessages.scrollHeight > 0 && (chatMessages.scrollHeight - chatMessages.scrollTop) > (chatMessages.clientHeight + 150);
    const prevScrollTop = chatMessages.scrollTop;

    // Mark messages from the OTHER user as 'seen' when I load them
    history.forEach(msg => {
        // Safety check
        if (!msg || !msg.id) return;

        if (msg.sender !== currentUser && msg.status !== 'seen' && msg.id) {
            // Update status in Firebase
            const table = msg._tableName || getMessageTable(msg.sender);
            db.ref(`messages/${table}/${msg.id}/status`).set('seen');
            
            const now = new Date();
            const d = String(now.getDate()).padStart(2, '0');
            const m = String(now.getMonth() + 1).padStart(2, '0');
            const y = now.getFullYear();
            const datePart = `${d}/${m}/${y}`;
            const timePart = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase();
            
            db.ref(`messages/${table}/${msg.id}/seenTimestamp`).set(`${datePart} ${timePart}`);
        }
    });

    chatMessages.innerHTML = ''; // Clear current view
    
    history.forEach(msg => {
        if (!msg) return;

        // Date Divider Logic
        let msgDateObj = new Date(); // Default to now if missing (for old messages)
        if (msg.rawDate) {
            msgDateObj = new Date(msg.rawDate);
        }
        const dateString = getFormattedDate(msgDateObj);
        
        if (dateString !== lastDateDivider) {
            const divider = document.createElement('div');
            divider.className = 'chat-date-divider';
            divider.innerHTML = `<span>${dateString}</span>`;
            chatMessages.appendChild(divider);
            lastDateDivider = dateString;
        }

        const msgDiv = document.createElement('div');
        const isSent = msg.sender === currentUser;
        msgDiv.classList.add('message-bubble', isSent ? 'msg-sent' : 'msg-received');
        
        if (selectedMsgIds.has(msg.id)) {
            msgDiv.classList.add('msg-selected');
        }

        if (msg.id) msgDiv.id = 'msg-' + msg.id;

        // Render Reply Context if exists
        if (msg.replyTo) {
            const replyDiv = document.createElement('div');
            replyDiv.className = 'replied-msg-context';
            
            let repliedTextContent = msg.replyTo.text;
            let isMissedCall = false;
            
            repliedTextContent = repliedTextContent.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            if (repliedTextContent.includes("Missed Video Call") || repliedTextContent.includes("Missed Audio Call")) {
                isMissedCall = true;
            }

            const videoSvgText = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; vertical-align: middle; margin-right: 3px; margin-bottom: 2px;"><path d="M17 10.5V7c0-1.1-.9-2-2-2H5C3.9 5 3 5.9 3 7v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3.5l4 4v-11l-4 4z"/></svg>';
            const audioSvgText = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; vertical-align: middle; margin-right: 3px; margin-bottom: 2px;"><path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .4 3 .4.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C10.4 22.2 1.8 13.6 1.8 3.2 1.8 2.5 2.3 2 3 2h4.5c.7 0 1.2.5 1.2 1.2 0 1 .1 2 .4 3 .1.4 0 .9-.3 1.2l-2.2 2.4z"/></svg>';
            const imageSvgText = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; vertical-align: middle; margin-right: 3px; margin-bottom: 2px;"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>';
            const fileSvgText = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; vertical-align: middle; margin-right: 3px; margin-bottom: 2px;"><path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/></svg>';
            
            repliedTextContent = repliedTextContent.replace('📹', videoSvgText).replace('📞', audioSvgText).replace('📷', imageSvgText).replace('📄', fileSvgText);
            if (isMissedCall) {
                repliedTextContent = `<span style="color: #ff4757; font-weight: bold;">${repliedTextContent}</span>`;
            }

            replyDiv.innerHTML = `
                <span class="replied-sender">${msg.replyTo.sender === currentUser ? 'You' : msg.replyTo.sender}</span>
                <span class="replied-text">${repliedTextContent}</span>
            `;
            
            replyDiv.addEventListener('click', (e) => {
                e.stopPropagation();
                if (msg.replyTo.id) {
                    const target = document.getElementById('msg-' + msg.replyTo.id);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        target.classList.remove('msg-highlight');
                        void target.offsetWidth; // Trigger reflow
                        target.classList.add('msg-highlight');
                        setTimeout(() => target.classList.remove('msg-highlight'), 1500);
                    } else {
                        showToast("Message not found");
                    }
                }
            });
            
            msgDiv.appendChild(replyDiv);
        }
        
        // Render Image if exists
        if (msg.image) {
            const img = document.createElement('img');
            img.src = msg.image;
            img.className = 'msg-image';
            img.dataset.msgId = msg.id; // Added for viewer sync
            msgDiv.appendChild(img);
        }
        
        // Render Video if exists
        if (msg.video) {
            const vidDiv = document.createElement('div');
            vidDiv.className = 'msg-video-wrapper';
            vidDiv.style.cssText = 'position: relative; display: inline-block; cursor: pointer; margin: 5px 0;';
            
            const vidThumb = document.createElement('video');
            vidThumb.src = msg.video;
            vidThumb.style.cssText = 'max-width: 200px; max-height: 200px; border-radius: 8px; object-fit: cover; background: #000;';
            vidThumb.preload = 'metadata'; // Load first frame
            
            const iconOverlay = document.createElement('div');
            iconOverlay.innerHTML = '▶';
            iconOverlay.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 40px; height: 40px; background: rgba(0,0,0,0.6); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; pointer-events: none; border: 2px solid white;';
            
            vidDiv.appendChild(vidThumb);
            vidDiv.appendChild(iconOverlay);
            vidDiv.onclick = () => openVideoViewer(msg.video);
            msgDiv.appendChild(vidDiv);
        }
        
        // Render Audio if exists
        if (msg.audio) {
            const audioWrapper = document.createElement('div');
            audioWrapper.className = 'voice-message-bubble';
            
            const controls = document.createElement('div');
            controls.className = 'cvm-controls';
            
            const playBtn = document.createElement('button');
            playBtn.className = 'cvm-play-btn';
            const playIcon = document.createElement('div');
            playIcon.className = 'cvm-play-icon';
            playBtn.appendChild(playIcon);
            
            const waveform = document.createElement('div');
            waveform.className = 'cvm-waveform';
            const heights = [6, 12, 10, 22, 16, 8, 14, 26, 12, 8, 20, 10, 6];
            for (let i = 0; i < heights.length; i++) {
                const bar = document.createElement('div');
                bar.className = 'cvm-bar';
                bar.style.height = `${heights[i]}px`;
                bar.style.animationDelay = `${i * 0.05}s`;
                waveform.appendChild(bar);
            }
            
            const timerDisplay = document.createElement('div');
            timerDisplay.className = 'cvm-timer';
            timerDisplay.innerText = '0:00';
            
            const speakerBtn = document.createElement('button');
            speakerBtn.className = 'cvm-speaker-btn';
            speakerBtn.innerHTML = `<svg class="cvm-speaker-icon" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg>`;
            
            controls.appendChild(playBtn);
            controls.appendChild(waveform);
            controls.appendChild(timerDisplay);
            controls.appendChild(speakerBtn);
            audioWrapper.appendChild(controls);

            const actualAudio = document.createElement('audio');
            actualAudio.src = msg.audio;
            actualAudio.style.display = 'none';
            audioWrapper.appendChild(actualAudio);
            
            msgDiv.appendChild(audioWrapper);

            const formatTime = (time) => {
                if (isNaN(time) || !isFinite(time)) return '0:00';
                const m = Math.floor(time / 60);
                const s = Math.floor(time % 60).toString().padStart(2, '0');
                return `${m}:${s}`;
            };

            actualAudio.addEventListener('loadedmetadata', () => {
                if (isFinite(actualAudio.duration)) timerDisplay.innerText = formatTime(actualAudio.duration);
            });

            actualAudio.addEventListener('timeupdate', () => {
                timerDisplay.innerText = formatTime(actualAudio.currentTime);
            });

            actualAudio.addEventListener('ended', () => {
                audioWrapper.classList.remove('playing');
                if (isFinite(actualAudio.duration)) timerDisplay.innerText = formatTime(actualAudio.duration);
                else timerDisplay.innerText = '0:00';
            });

            playBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (actualAudio.paused) {
                    document.querySelectorAll('audio').forEach(a => {
                        if (a !== actualAudio && !a.paused) {
                            a.pause();
                            a.currentTime = 0;
                            if (a.parentElement && a.parentElement.classList) a.parentElement.classList.remove('playing');
                        }
                    });
                    actualAudio.play();
                    audioWrapper.classList.add('playing');
                } else {
                    actualAudio.pause();
                    audioWrapper.classList.remove('playing');
                }
            });
        }
        
        // Render File if exists
        if (msg.file) {
            const fileDiv = document.createElement('div');
            fileDiv.style.cssText = 'background: rgba(0,0,0,0.1); padding: 10px; border-radius: 8px; margin: 5px 0; max-width: 200px;';
            fileDiv.innerHTML = `
                <a href="${msg.file.data}" download="${msg.file.name}" style="text-decoration:none; color:inherit; display:flex; align-items:center; gap:10px;">
                    <span style="font-size:24px">📄</span>
                    <div style="overflow:hidden;">
                        <div style="font-weight:bold; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${msg.file.name}</div>
                        <div style="font-size:10px; opacity:0.7;">Tap to Download</div>
                    </div>
                </a>
            `;
            msgDiv.appendChild(fileDiv);
        }

        if (msg.text) {
            const textSpan = document.createElement('span');
            
            if (msg.text === "📹 Missed Video Call" || msg.text === "📞 Missed Audio Call") {
                textSpan.style.color = '#ff4757';
                textSpan.style.fontWeight = 'bold';
            }
            
            // Escape HTML to prevent XSS
            const escapedText = msg.text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            // Linkify URLs
            const linkedText = escapedText.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: #00a8ff; text-decoration: underline;">$1</a>');
            
            // Replace Missed Call emojis with SVGs
            const videoSvgText = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 5px; margin-bottom: 2px;"><path d="M17 10.5V7c0-1.1-.9-2-2-2H5C3.9 5 3 5.9 3 7v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3.5l4 4v-11l-4 4z"/></svg>';
            const audioSvgText = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 5px; margin-bottom: 2px;"><path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .4 3 .4.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C10.4 22.2 1.8 13.6 1.8 3.2 1.8 2.5 2.3 2 3 2h4.5c.7 0 1.2.5 1.2 1.2 0 1 .1 2 .4 3 .1.4 0 .9-.3 1.2l-2.2 2.4z"/></svg>';
            
            const finalText = linkedText.replace('📹', videoSvgText).replace('📞', audioSvgText);
            
            textSpan.innerHTML = finalText;
            msgDiv.appendChild(textSpan);
        }

        if (msg.id) {
            addLongPressHandler(msgDiv, msg.id);
            addSwipeHandler(msgDiv, msg);
        }

        // Selection Click Handlers
        msgDiv.addEventListener('click', (e) => {
            if (isSelectionMode) {
                e.preventDefault();
                e.stopPropagation();
                toggleSelection(msg.id);
            }
        });
        msgDiv.addEventListener('dblclick', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!isSelectionMode) {
                toggleSelection(msg.id);
            }
        });
        
        const timeSpan = document.createElement('span');
        timeSpan.className = 'msg-time';
        let displayTime = msg.timestamp;
        
        // Add ticks only for sent messages
        let tickHtml = '';
        if (isSent) {
            const tickClass = msg.status === 'seen' ? 'msg-tick seen' : 'msg-tick';
            const tickIcon = msg.status === 'seen' ? '✓✓' : '✓';
            tickHtml = `<span class="${tickClass}">${tickIcon}</span>`;
            
            if (msg.status === 'seen' && msg.seenTimestamp) {
                displayTime = msg.seenTimestamp;
            }
        }

        // Extract only the time part from the timestamp string
        if (displayTime && typeof displayTime === 'string') {
            const parts = displayTime.split(' ');
            // Assumes format "DATE TIME", takes everything after the first space
            if (parts.length > 1) displayTime = parts.slice(1).join(' ').toUpperCase();
        }

        timeSpan.innerHTML = `${displayTime} ${tickHtml}`;
        msgDiv.appendChild(timeSpan);
        
        chatMessages.appendChild(msgDiv);
    });
    
    if (wasScrolledUp) {
        chatMessages.scrollTop = prevScrollTop;
        const newMessages = history.length - oldHistoryLength;
        if (newMessages > 0) {
            const lastMsg = history[history.length - 1];
            if (lastMsg && lastMsg.sender === currentUser) {
                chatMessages.scrollTop = chatMessages.scrollHeight;
                if (typeof window.updateScrollBadge === 'function') window.updateScrollBadge(0);
            } else if (typeof window.updateScrollBadge === 'function') {
                window.updateScrollBadge((window.scrollUnreadCount || 0) + newMessages);
            }
        }
    } else {
        chatMessages.scrollTop = chatMessages.scrollHeight;
        if (typeof window.updateScrollBadge === 'function') window.updateScrollBadge(0);
    }
    
    if (isSelectionMode) updateSelectionHeaderIcons();
}

// --- Login Validation Logic ---

// Initialize Button State
acceptBtn.disabled = true;
acceptBtn.style.opacity = '0.5';
acceptBtn.style.cursor = 'not-allowed';

function validateLoginState() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (username !== "" && password !== "") {
        acceptBtn.disabled = false;
        acceptBtn.style.opacity = '1';
        acceptBtn.style.cursor = 'pointer';
    } else {
        acceptBtn.disabled = true;
        acceptBtn.style.opacity = '0.5';
        acceptBtn.style.cursor = 'not-allowed';
    }
}

// 1. Password Focus: Check Username Validity
passwordInput.addEventListener('focus', () => {
    usernameError.style.display = 'none';
});

// 2. Input Listeners for Real-time Validation
usernameInput.addEventListener('input', () => {
    usernameError.style.display = 'none';
    validateLoginState();
});

passwordInput.addEventListener('input', () => {
    passwordError.style.display = 'none';
    validateLoginState();
});

// Allow pressing "Enter" to login
function handleEnterKey(e) {
    if (e.key === 'Enter') {
        if (!acceptBtn.disabled) {
            acceptBtn.click();
        }
    }
}
usernameInput.addEventListener('keydown', handleEnterKey);
passwordInput.addEventListener('keydown', handleEnterKey);

// --- Biometric Scan Animation Helper ---
function startBiometricUI(btn) {
    const rect = btn.getBoundingClientRect();
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed; top: ${rect.top}px; left: ${rect.left}px;
        width: ${rect.width}px; height: ${rect.height}px;
        background: rgba(10, 10, 10, 0.95); z-index: 10000;
        border-radius: ${window.getComputedStyle(btn).borderRadius};
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 0 15px #00d2ff; border: 1px solid #00d2ff;
        transition: all 0.3s ease; cursor: wait;
    `;
    
    // Fingerprint SVG with scanning line
    overlay.innerHTML = `
        <div style="position: relative; width: 30px; height: 30px;">
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#00d2ff" stroke-width="1.5">
                <path d="M12 12c0-3 2.5-3 3-6a5 5 0 0 0-10 0c.5 3 3 3 3 6z"/>
                <path d="M12 12v.01"/>
                <path d="M8.5 16a6 6 0 0 0 7 0"/>
                <path d="M7 18.5a9 9 0 0 0 10 0"/>
                <path d="M12 8v4"/>
                <path d="M9 10a3 3 0 0 1 6 0"/>
            </svg>
            <div style="
                position: absolute; top: 0; left: 0; width: 100%; height: 2px;
                background: #00ff00; box-shadow: 0 0 5px #00ff00;
                animation: scanBeam 1.5s infinite linear;
            "></div>
        </div>
    `;

    // Inject Keyframes if missing
    if (!document.getElementById('bio-keyframes')) {
        const style = document.createElement('style');
        style.id = 'bio-keyframes';
        style.innerHTML = `@keyframes scanBeam { 0% { top: 0; opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { top: 100%; opacity: 0; } }`;
        document.head.appendChild(style);
    }

    document.body.appendChild(overlay);
    return overlay;
}

function updateBiometricUI(overlay, success) {
    return new Promise(resolve => {
        if (success) {
            overlay.style.background = 'rgba(0, 180, 0, 0.95)';
            overlay.style.borderColor = '#00ff00';
            overlay.style.boxShadow = '0 0 20px #00ff00';
            overlay.innerHTML = '<span style="color: white; font-weight: bold; font-size: 12px; letter-spacing: 1px;">GRANTED</span>';
        } else {
            overlay.style.background = 'rgba(180, 0, 0, 0.95)';
            overlay.style.borderColor = '#ff0000';
            overlay.style.boxShadow = '0 0 20px #ff0000';
            overlay.innerHTML = '<span style="color: white; font-weight: bold; font-size: 12px; letter-spacing: 1px;">REJECTED</span>';
        }
        
        setTimeout(() => {
            overlay.remove();
            resolve();
        }, 800);
    });
}

acceptBtn.addEventListener('click', async (e) => {
    if(e) e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    let hasError = false;

    // Check empty fields
    if (username === "") {
        usernameError.style.display = 'block';
        triggerShake(usernameInput);
        hasError = true;
    }
    if (password === "") {
        passwordError.innerText = "Please Enter Password"; // Reset text
        passwordError.style.display = 'block';
        triggerShake(passwordInput);
        hasError = true;
    }
    if (hasError) return;

    // 1. Start Biometric Scan UI
    const bioOverlay = startBiometricUI(acceptBtn);
    
    // 2. Wait for animation (simulated processing time)
    await new Promise(r => setTimeout(r, 1500));

    // 3. Perform Auth Check
    let authResult = null;

    // Helper function for successful login
    const performLogin = (user, displayName, isAlpha, isBeta, customData = null) => {
        currentUser = user;
        profileUsernameDisplay.innerText = displayName;
        logoDisplay.innerText = displayName;
        
        localStorage.setItem('milbaat_user', user);

        body.classList.remove('user-alpha', 'user-beta');
        if (isAlpha) body.classList.add('user-alpha');
        if (isBeta) body.classList.add('user-beta');
        
        if (isAlpha) {
            if (typeof initAlphaUI === 'function') initAlphaUI();
            showAlphaHomeScreen();
            
            // Clean up legacy Raushan_Home node from the database if it still exists
            if (db) {
                db.ref('status/Raushan_Home').remove().catch(() => {});
            }
        } else {
            // Ensure Alpha UI elements are hidden for non-Alpha users
            if (typeof alphaBackBtn !== 'undefined' && alphaBackBtn) alphaBackBtn.style.display = 'none';
            if (typeof alphaHomeHeader !== 'undefined' && alphaHomeHeader) alphaHomeHeader.style.display = 'none';
            if (typeof alphaFriendListContainer !== 'undefined' && alphaFriendListContainer) alphaFriendListContainer.style.display = 'none';
            if (typeof alphaAddFriendFab !== 'undefined' && alphaAddFriendFab) alphaAddFriendFab.style.display = 'none';

            // Ensure Default Header and Chat are visible for Beta/Other users
            const defaultHeader = document.querySelector('header');
            if (defaultHeader) defaultHeader.style.display = 'flex';
            if (chatMessages) chatMessages.style.display = 'flex';

            currentChatPartner = ALPHA_ADMIN;
            chatInputBar.style.display = 'flex';
            
            if (typeof headerLogoutBtn !== 'undefined' && headerLogoutBtn) headerLogoutBtn.style.display = 'none';
        }
        
        updatePinnedMessageListener();
        // Ensure mainContent is visible for everyone (Fix for Alpha user chat visibility)
        setTimeout(() => {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 50);
        
        // Store custom data for session if needed
        if (customData) {
            currentUserData = customData; // Global variable to hold extra data like uniqueCode
        }

        history.pushState({ loggedIn: true }, "", window.location.href);
        setupFirebaseListeners();
        if (!isAlpha) {
            startHeartbeat();
        }

        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        body.style.overflow = 'auto';
        mainContent.style.display = 'flex';
        
        // Disable login inputs so mobile browser autofill ignores them during chat
        if (usernameInput) usernameInput.disabled = true;
        if (passwordInput) {
            passwordInput.type = 'text';
            passwordInput.disabled = true;
        }
    };

    // Check Hardcoded Users or Admin Config
    let isAlpha = (username === ALPHA_ADMIN);
    let isBeta = (username === BETA_ADMIN);
    let isAdminValid = false;

    if (isAlpha || isBeta) {
        if (users[username] && users[username] === password) {
            isAdminValid = true;
        } else if (db) {
            try {
                const adminSnap = await db.ref(`admin_config/${username}_Password`).once('value');
                if (adminSnap.exists() && String(adminSnap.val()) === String(password)) {
                    isAdminValid = true;
                    users[username] = String(adminSnap.val()); // Update local cache
                }
            } catch (e) {
                console.error("Admin Config Check Error:", e);
            }
        }
    }

    if (isAdminValid) {
        let displayName = isAlpha ? 'Alpha' : 'Beta';
        authResult = { user: username, displayName, isAlpha, isBeta };
    } 
    // Check Firebase "Other User Table"
    else if (db) {
        try {
            const snapshot = await db.ref('Other User Table/' + username).once('value');
            if (snapshot.exists()) {
                const userData = snapshot.val();
                if (userData && String(userData.password) === String(password)) {
                    authResult = { user: username, displayName: userData.name, isAlpha: false, isBeta: true, customData: userData };
                }
            }
        } catch (e) {
            console.error("Login Error:", e);
        }
    }

    // 4. Update UI with Result
    await updateBiometricUI(bioOverlay, !!authResult);

    if (authResult) {
        performLogin(authResult.user, authResult.displayName, authResult.isAlpha, authResult.isBeta, authResult.customData);
    } else {
        passwordError.innerText = "Incorrect Username or Password";
        passwordError.style.display = 'block';
        triggerShake(usernameInput);
        triggerShake(passwordInput);
    }
});

let currentUserData = null; // To store extra data for new users

// --- Online Status Logic ---
function startHeartbeat(customUser = null) {
    const targetUser = customUser || currentUser;
    if (!targetUser || !db) return;

    const statusRef = db.ref(`status/${targetUser}`);

    // Set online status immediately
    statusRef.update({
        online: true,
        lastSeen: "Active"
    });

    // Reliability: Firebase automatically handles connection loss
    statusRef.onDisconnect().update({
        online: false,
        lastSeen: firebase.database.ServerValue.TIMESTAMP
    });
    
    db.ref(`typing/${targetUser}`).onDisconnect().set(false);

    if (targetUser === BETA_ADMIN) {
        db.ref(`Notification Alert/${ALPHA_ADMIN}`).set(true).catch(e => console.error(e));
        setTimeout(() => {
            db.ref(`Notification Alert/${ALPHA_ADMIN}`).set(false).catch(e => console.error(e));
        }, 5000);
    }
}

function stopHeartbeat(customUser = null) {
    const targetUser = customUser || currentUser;
    if (!targetUser || !db) return;

    const statusRef = db.ref(`status/${targetUser}`);
    statusRef.update({
        online: false,
        lastSeen: firebase.database.ServerValue.TIMESTAMP
    });
    statusRef.onDisconnect().cancel();
    
    db.ref(`typing/${targetUser}`).set(false);
    db.ref(`typing/${targetUser}`).onDisconnect().cancel();
}

// Handle Tab visibility changes to immediately update online/offline status
document.addEventListener("visibilitychange", () => {
    if (!currentUser || !db) return;
    
    const statusRef = db.ref(`status/${currentUser}`);
    
    if (document.visibilityState === "visible") {
        if (currentUser !== ALPHA_ADMIN || currentChatPartner) {
            statusRef.update({
                online: true,
                lastSeen: "Active"
            });
            startHeartbeat();
        }
    } else {
        statusRef.update({
            online: false,
            lastSeen: firebase.database.ServerValue.TIMESTAMP
        });
        db.ref(`typing/${currentUser}`).set(false);
    }
});

function updateStatusUI(isOnline, lastSeen, isTyping) {
    if (!lastSeenDisplay) return;
    
    // Hide the old signal indicator (dot in header)
    if (userStatusIndicator) userStatusIndicator.style.display = 'none';

    lastSeenDisplay.style.marginLeft = '0';
    lastSeenDisplay.style.fontSize = '0.75rem';
    lastSeenDisplay.style.display = 'block';
    lastSeenDisplay.style.marginTop = '2px';

    if (isOnline && isTyping) {
        lastSeenDisplay.innerText = "Typing...";
        lastSeenDisplay.style.color = '#2ecc71';
        return;
    }

    if (isOnline) {
        lastSeenDisplay.innerText = "Online";
        lastSeenDisplay.style.color = '#2ecc71';
    } else {
        lastSeenDisplay.style.color = 'rgba(255, 255, 255, 0.6)';
        
        if (lastSeen && typeof lastSeen === 'number') {
            const date = new Date(lastSeen);
            const now = new Date();
            const isToday = date.toDateString() === now.toDateString();
            const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase();
            
            if (isToday) {
                lastSeenDisplay.innerText = `Last seen today at ${timeStr}`;
            } else {
                const d = String(date.getDate()).padStart(2, '0');
                const m = String(date.getMonth() + 1).padStart(2, '0');
                const y = date.getFullYear();
                lastSeenDisplay.innerText = `Last seen ${d}/${m}/${y} ${timeStr}`;
            }
        } else {
            lastSeenDisplay.innerText = "Offline";
        }
    }
}

// --- Font Change Logic ---
(function setupFontFeature() {
    // 1. Inject Google Fonts
    const fontLink = document.createElement('link');
    fontLink.href = "https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Bangers&family=Cinzel&family=Comic+Neue&family=Courgette&family=Dancing+Script&family=Fredoka+One&family=Great+Vibes&family=Indie+Flower&family=Lobster&family=Montserrat&family=Orbitron&family=Oswald&family=Pacifico&family=Permanent+Marker&family=Playfair+Display&family=Poppins&family=Raleway&family=Righteous&family=Roboto&family=Satisfy&family=Shadows+Into+Light&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    const fontList = [
        'Roboto', 'Poppins', 'Montserrat', 'Raleway', 'Oswald',
        'Playfair Display', 'Cinzel', 'Pacifico', 'Dancing Script', 'Great Vibes',
        'Lobster', 'Bangers', 'Orbitron', 'Indie Flower', 'Shadows Into Light',
        'Comic Neue', 'Permanent Marker', 'Architects Daughter', 'Courgette', 'Satisfy',
        'Righteous', 'Fredoka One'
    ];

    // Check for saved font
    const savedFont = localStorage.getItem('appFont');
    if (savedFont) {
        document.body.style.fontFamily = `'${savedFont}', sans-serif`;
    }

    // 2. Add Button to Menu
    const changeFontBtn = document.createElement('button');
    changeFontBtn.id = 'changeFontBtn';
    changeFontBtn.innerHTML = '🔠 Change Font';
    changeFontBtn.style.cssText = "display: block; width: 100%; padding: 12px 15px; text-align: left; background: none; border: none; color: white; cursor: pointer; font-size: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);";
    changeFontBtn.onmouseover = () => changeFontBtn.style.background = 'rgba(255,255,255,0.1)';
    changeFontBtn.onmouseout = () => changeFontBtn.style.background = 'none';

    if (menuOptions) {
        if (logoutBtn) menuOptions.insertBefore(changeFontBtn, logoutBtn);
        else menuOptions.appendChild(changeFontBtn);
    }

    // 3. Create Modal
    const modal = document.createElement('div');
    modal.id = 'font-modal';
    modal.className = 'modal-overlay';
    modal.style.cssText = "display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 2000; align-items: center; justify-content: center;";

    const modalBox = document.createElement('div');
    modalBox.className = 'modal-box';
    modalBox.style.cssText = "padding: 20px; border-radius: 15px; width: 90%; max-width: 500px; max-height: 80vh; overflow-y: auto; text-align: center; display: flex; flex-direction: column; gap: 10px; position: relative;";

    // Close Button (Top Right)
    const topCloseBtn = document.createElement('button');
    topCloseBtn.id = 'font-modal-close';
    topCloseBtn.innerHTML = '✖';
    topCloseBtn.style.cssText = "position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 18px; cursor: pointer; padding: 5px;";
    topCloseBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        if (mainContent) mainContent.classList.remove('blur-content');
    });
    modalBox.appendChild(topCloseBtn);

    const title = document.createElement('h3');
    title.innerText = "Select App Font";
    modalBox.appendChild(title);

    const grid = document.createElement('div');
    grid.style.cssText = "display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;";

    fontList.forEach(font => {
        const btn = document.createElement('button');
        btn.innerText = font;
        btn.className = 'font-option-btn';
        btn.style.cssText = `font-family: '${font}', sans-serif; padding: 10px; border-radius: 8px; cursor: pointer; font-size: 16px; width: 100%;`;
        
        btn.addEventListener('click', () => {
            document.body.style.fontFamily = `'${font}', sans-serif`;
            localStorage.setItem('appFont', font); // Save to localStorage
            if (currentUser && db) {
                const role = getUserRole(currentUser);
                db.ref(`User_Font_Style/${role}_Font`).set(font);
            }
            modal.style.display = 'none';
            if (mainContent) mainContent.classList.remove('blur-content');
        });
        grid.appendChild(btn);
    });

    modalBox.appendChild(grid);

    const closeBtn = document.createElement('button');
    closeBtn.innerText = "Cancel";
    closeBtn.style.cssText = "margin-top: 15px; padding: 10px; background: #ff4757; color: white; border: none; border-radius: 8px; cursor: pointer;";
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        if (mainContent) mainContent.classList.remove('blur-content');
    });

    modal.appendChild(modalBox);
    document.body.appendChild(modal);

    changeFontBtn.addEventListener('click', () => {
        if (menuOptions) menuOptions.style.display = 'none';
        if (menuIconBtn) menuIconBtn.classList.remove('rotate');
        modal.style.display = 'flex';
        if (mainContent) mainContent.classList.add('blur-content');
    });
})();

// --- Menu & Logout Logic ---

// Toggle Menu
menuIconBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menuOptions.style.display === 'flex') {
        menuOptions.style.display = 'none';
        menuIconBtn.classList.remove('rotate');
    } else {
        // --- Menu Reordering & Visibility Logic ---
        const isAlpha = (currentUser === ALPHA_ADMIN);
        const isBeta = (currentUser === BETA_ADMIN);
        
        const order = [
            'profileBtn', 'themeToggleBtn', 'alphaStatusBtn', 'menuBackToBetaBtn', 
            'menuPendingBtn', 'menuAddFriendBtn', 'menuFriendsBtn', 
            'clearChatBtn', 'exportChatBtn', 'changePassBtn', 'changeFontBtn', 'logoutBtn'
        ];

        order.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                // Determine Visibility
                let isVisible = true;
                if (isAlpha) {
                    // Alpha: Only Profile, Clear Chat & Export Chat
                    if (id !== 'profileBtn' && id !== 'clearChatBtn' && id !== 'exportChatBtn') isVisible = false;
                    if (id === 'exportChatBtn' && !currentChatPartner) isVisible = false; // Only show in chat
                } else {
                    if (id === 'menuBackToBetaBtn') isVisible = false;
                    else if (id === 'alphaStatusBtn') isVisible = isBeta;
                    else if (id === 'menuAddFriendBtn' || id === 'menuFriendsBtn') isVisible = false;
                    else if (id === 'menuPendingBtn') isVisible = (!isBeta);
                    else if (id === 'exportChatBtn') isVisible = false; // Hidden for non-Alpha
                }

                el.style.display = isVisible ? (id === 'menuPendingBtn' ? 'flex' : 'block') : 'none';
                
                // Re-append to enforce order
                menuOptions.appendChild(el);
            }
        });

        menuOptions.style.display = 'flex';
        menuIconBtn.classList.add('rotate');
        
        // Apply 70% Blur/Glass Effect to Menu
        menuOptions.style.cssText = `
            display: flex; flex-direction: column; position: fixed; top: 65px; right: 10px;
            background: rgba(44, 62, 80, 0.9); backdrop-filter: blur(70px); -webkit-backdrop-filter: blur(90px);
            border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 10px; padding: 10px;
            z-index: 2000; min-width: 160px; gap: 5px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            color: white;
            opacity: 1;
            visibility: visible;
        `;

        // Ensure text is white in both modes
        Array.from(menuOptions.children).forEach(child => child.style.color = 'white');
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuIconBtn.contains(e.target) && !menuOptions.contains(e.target)) {
        menuOptions.style.display = 'none';
        menuIconBtn.classList.remove('rotate');
    }
});

// --- Theme Toggle Logic ---
if (themeToggleBtn) {
    const isLightInit = document.body.classList.contains('light-mode');
    themeToggleBtn.innerHTML = isLightInit ? 
        `<div style="display:flex; align-items:center; gap:8px;">${THEME_ICON_DARK} Dark Mode</div>` : 
        `<div style="display:flex; align-items:center; gap:8px;">${THEME_ICON_LIGHT} Light Mode</div>`;
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    
    themeToggleBtn.innerHTML = isLight ? 
        `<div style="display:flex; align-items:center; gap:8px;">${THEME_ICON_DARK} Dark Mode</div>` : 
        `<div style="display:flex; align-items:center; gap:8px;">${THEME_ICON_LIGHT} Light Mode</div>`;

    // Switch Message Bubble Background
    let msgStyle = document.getElementById('dynamic-msg-style');
    if (!msgStyle) {
        msgStyle = document.createElement('style');
        msgStyle.id = 'dynamic-msg-style';
        document.head.appendChild(msgStyle);
    }
    // Light Mode -> All Bubbles Blue | Dark Mode -> All Bubbles Gray
    const bubbleColor = isLight ? 'rgba(0, 123, 255, 0.85)' : 'rgba(45, 52, 54, 0.9)';
    msgStyle.innerHTML = `.message-bubble { max-width: 75%; word-wrap: break-word; padding: 10px; border-radius: 10px; margin-bottom: 5px; } .msg-sent { align-self: flex-end; margin-left: auto; text-align: left; background-color: ${bubbleColor} !important; color: white !important; border-bottom-right-radius: 0; } .msg-received { align-self: flex-start; margin-right: auto; text-align: left; background-color: ${bubbleColor} !important; color: white !important; border-bottom-left-radius: 0; } #chatMessages .message-bubble.msg-selected, #chatMessages .msg-sent.msg-selected, #chatMessages .msg-received.msg-selected { background: #ff9f43 !important; transition: background 0.2s; }`;

    const bubbleBgSent = isLight ? '#d9fdd3' : '#005c4b';
    const bubbleBgRcv = isLight ? '#ffffff' : '#202c33';
    const textColor = isLight ? '#000000' : 'white';
    msgStyle.innerHTML = `.message-bubble { max-width: 75%; word-wrap: break-word; padding: 10px; border-radius: 10px; margin-bottom: 5px; } .msg-sent { align-self: flex-end; margin-left: auto; text-align: left; background-color: ${bubbleBgSent} !important; color: ${textColor} !important; border-bottom-right-radius: 0; } .msg-received { align-self: flex-start; margin-right: auto; text-align: left; background-color: ${bubbleBgRcv} !important; color: ${textColor} !important; border-bottom-left-radius: 0; } #chatMessages .message-bubble.msg-selected, #chatMessages .msg-sent.msg-selected, #chatMessages .msg-received.msg-selected { background: #ff9f43 !important; color: white !important; transition: background 0.2s; }`;

    // Switch background image based on theme
    if (bgOverlay) {
        let bgImage = document.getElementById('theme-bg-image');

        if (!bgImage) {
            bgImage = document.createElement('img');
            bgImage.id = 'theme-bg-image';
            bgImage.style.cssText = 'width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;';
            bgOverlay.appendChild(bgImage);
        }

        bgOverlay.style.backgroundImage = 'none';
        if (isLight) {
            bgImage.style.display = 'none';
            bgOverlay.style.backgroundColor = '#efeae2';
        } else {
            bgImage.style.display = 'none';
        bgOverlay.style.backgroundColor = '#0b141a';
        }
    }
});

// --- Double Click Logo to Toggle Theme ---
const landingLogo = document.getElementById('landingLogo');
if (landingLogo) {
    landingLogo.style.userSelect = 'none'; 
    let lastTapTime = 0;

    // For Desktop
    landingLogo.addEventListener('dblclick', (e) => {
        e.preventDefault();
        if (themeToggleBtn) themeToggleBtn.click();
    });

    // For Mobile
    landingLogo.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTapTime;
        if (tapLength < 500 && tapLength > 0) {
            e.preventDefault();
            if (themeToggleBtn) themeToggleBtn.click();
            lastTapTime = 0;
        } else {
            lastTapTime = currentTime;
        }
    });
}

// --- Clear Chat Logic ---
clearChatBtn.addEventListener('click', () => {
    menuOptions.style.display = 'none';
    menuIconBtn.classList.remove('rotate');
    clearChatModal.style.display = 'flex';
    mainContent.classList.add('blur-content');
});

confirmClearChat.addEventListener('click', () => {
    if (db && currentChatHistory.length > 0) {
        const updates = {};
        currentChatHistory.forEach(msg => {
            if (msg.id) {
                const table = msg._tableName || getMessageTable(msg.sender);
                        const path = `messages/${table}/${msg.id}`;
                        
                        if (currentUser === ALPHA_ADMIN) {
                            // Alpha clears permanently
                            updates[path] = null;
                        } else {
                            // Others only hide for themselves
                            updates[`${path}/deletedBy_${currentUser}`] = true;
                        }
            }
        });
        // Also clear pinned message for this chat
        if (currentUser && currentChatPartner) {
            const chatId = getChatId(currentUser, currentChatPartner);
            updates[`pinned_messages/${chatId}`] = null;
        }
        db.ref().update(updates).catch(e => console.error(e));
    }
    clearChatModal.style.display = 'none';
    mainContent.classList.remove('blur-content');
});

cancelClearChat.addEventListener('click', () => {
    clearChatModal.style.display = 'none';
    mainContent.classList.remove('blur-content');
});

// --- Export Chat to PDF Logic ---
async function getBase64ImageFromUrl(imageUrl) {
    if (!imageUrl) return null;
    if (imageUrl.startsWith('data:image')) return imageUrl;
    try {
        const res = await fetch(imageUrl, { mode: 'cors' });
        const blob = await res.blob();
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    } catch(e) {
        console.warn("Failed to fetch image for PDF:", e);
        return null; // Silent fail keeps the PDF generation running without image
    }
}

if (exportChatBtn) {
    exportChatBtn.addEventListener('click', async () => {
        menuOptions.style.display = 'none';
        menuIconBtn.classList.remove('rotate');

        if (!currentChatPartner || currentChatHistory.length === 0) {
            showToast("No chat history to export.");
            return;
        }

        showToast("Generating PDF... Please wait.");
        
        // Re-filter history locally to ensure all messages are captured
        const exportHistory = allMessagesRaw.filter(msg => {
            if (!msg || !msg.timestamp) return false;
            
            // Respect deletions even in export
            if (msg[`deletedBy_${currentUser}`]) return false;

            const u1 = String(msg.sender).trim();
            const u2 = String(msg.recipient).trim();
            const c1 = String(currentUser).trim();
            const c2 = String(currentChatPartner).trim();
            return (u1 === c1 && u2 === c2) || (u1 === c2 && u2 === c1);
        }).sort((a, b) => (a.rawDate || "") < (b.rawDate || "") ? -1 : 1);

        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF('p', 'pt', 'a4');
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();

            let partnerName = currentChatPartner;
            if (currentChatPartner === BETA_ADMIN) partnerName = "Beta";
            else {
                const uSnap = await db.ref(`Other User Table/${currentChatPartner}`).once('value');
                if (uSnap.exists() && uSnap.val().name) partnerName = uSnap.val().name;
            }

            let alphaPicUrl = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
            let partnerPicUrl = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
            
            const aSnap = await db.ref(`Profile Pic/Alpha_Profile_Pic`).once('value');
            if (aSnap.exists()) alphaPicUrl = aSnap.val();
            
            const pSnap = await db.ref(`Profile Pic/${getUserRole(currentChatPartner)}_Profile_Pic`).once('value');
            if (pSnap.exists()) partnerPicUrl = pSnap.val();

            const alphaPicBase64 = await getBase64ImageFromUrl(alphaPicUrl);
            const partnerPicBase64 = await getBase64ImageFromUrl(partnerPicUrl);

            const renderAesthetics = (pageNumber) => {
                // 2. Page Border
                doc.setDrawColor(44, 62, 80);
                doc.setLineWidth(1.5);
                doc.rect(20, 20, pageWidth - 40, pageHeight - 40);

                // 3. Header Logos
                if (alphaPicBase64) try { doc.addImage(alphaPicBase64, 'JPEG', 40, 40, 45, 45); } catch(e){}
                if (partnerPicBase64) try { doc.addImage(partnerPicBase64, 'JPEG', pageWidth - 85, 40, 45, 45); } catch(e){}

                // 4. Ministry Branding Text
                doc.setTextColor(44, 62, 80);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(16);
                doc.text("MINISTRY OF DEFENCE", pageWidth / 2, 55, { align: "center" });
                doc.setFontSize(9);
                doc.setFont("helvetica", "normal");
                doc.text(`Alpha - ${partnerName} Communication`, pageWidth / 2, 70, { align: "center" });

                doc.setDrawColor(200, 200, 200);
                doc.line(40, 95, pageWidth - 40, 95);

                // 5. Page Numbers
                doc.setFontSize(8);
                doc.setTextColor(150);
                doc.text(`Page ${pageNumber}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
            };

            const head = [['Sender', 'Receiver', 'Send Date & Time', 'Received Date & Time', 'Message']];
            const bodyData = exportHistory.map(msg => {
                const senderLabel = msg.sender === ALPHA_ADMIN ? "Alpha" : partnerName;
                const receiverLabel = msg.recipient === ALPHA_ADMIN ? "Alpha" : partnerName;
                let content = msg.text || "";
                if (msg.image) content += " [IMAGE]";
                if (msg.video) content += " [VIDEO]";
                if (msg.audio) content += " [AUDIO]";
                if (msg.file) content += ` [FILE: ${msg.file.name}]`;
                return [senderLabel, receiverLabel, msg.timestamp || 'N/A', msg.seenTimestamp || 'Unread', content];
            });

            doc.autoTable({
                head: head,
                body: bodyData,
                startY: 110,
                theme: 'grid',
                headStyles: { fillColor: [44, 62, 80], textColor: [255, 255, 255] },
                bodyStyles: { textColor: [0, 0, 0], fillColor: false }, 
                styles: { fontSize: 9, cellPadding: 5 },
                margin: { top: 110 }, // Ensures table starts below header on all pages
                columnStyles: { 4: { cellWidth: 'auto' } },
                didParseCell: (data) => {
                    if (data.section === 'body') {
                        // Ensure row background is transparent for watermark visibility
                        data.cell.styles.fillColor = false;
                        // All text defaults to black
                        data.cell.styles.textColor = [0, 0, 0];
                        
                        if (data.column.index === 4) {
                            const sender = data.row.cells[0].raw;
                            if (sender === "Alpha") {
                                data.cell.styles.textColor = [0, 0, 255]; // Blue for sended
                            } else {
                                data.cell.styles.textColor = [0, 128, 0]; // Green for received
                            }
                        }
                    }
                },
                didDrawPage: (data) => {
                    renderAesthetics(data.pageNumber);
                }
            });

            doc.save(`Log_Alpha_${partnerName}_${Date.now()}.pdf`);
            showToast("Chat exported successfully!");
        } catch (err) {
            console.error("PDF Generation Error:", err);
            showToast("Failed to generate PDF. Check console.");
        }
    });
}

// --- Message Options & Pinning Logic ---

function closeOptionsModal() {
    messageOptionsModal.style.display = 'none';
    mainContent.classList.remove('blur-content');
}

cancelMsgOptions.addEventListener('click', () => {
    closeOptionsModal();
    selectedMsgId = null;
});

deleteMsgOptionBtn.addEventListener('click', () => {
    msgToDeleteId = selectedMsgId;
    closeOptionsModal();
    // Open delete confirmation
    deleteMsgModal.style.display = 'flex';
    mainContent.classList.add('blur-content');
});

pinMsgBtn.addEventListener('click', () => {
    // Fetch message details from DB to pin
    const msg = currentChatHistory.find(m => m.id === selectedMsgId);
    if (msg && currentUser && currentChatPartner) {
        const chatId = getChatId(currentUser, currentChatPartner);
        db.ref(`pinned_messages/${chatId}`).set(msg);
    }
    closeOptionsModal();
});

let currentPinnedRef = null;
function updatePinnedMessageListener() {
    if (currentPinnedRef) {
        currentPinnedRef.off();
        currentPinnedRef = null;
    }
    renderPinnedMessage(null);
    if (currentUser && currentChatPartner && db) {
        const chatId = getChatId(currentUser, currentChatPartner);
        currentPinnedRef = db.ref(`pinned_messages/${chatId}`);
        currentPinnedRef.on('value', snapshot => {
            renderPinnedMessage(snapshot.val());
        });
    }
}

function renderPinnedMessage(pinnedMsg) {
    if (pinnedMsg) {
        pinnedMessageBar.style.display = 'flex';
        // Adjust chat padding so messages don't overlap (Header 65px + Pinned Bar ~50px)
        if (chatMessages) chatMessages.style.paddingTop = '125px';
        
        const imageSvg = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 5px; margin-bottom: 2px;"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>';
        const videoSvg = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 5px; margin-bottom: 2px;"><path d="M17 10.5V7c0-1.1-.9-2-2-2H5C3.9 5 3 5.9 3 7v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3.5l4 4v-11l-4 4z"/></svg>';
        const audioSvg = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 5px; margin-bottom: 2px;"><path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .4 3 .4.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C10.4 22.2 1.8 13.6 1.8 3.2 1.8 2.5 2.3 2 3 2h4.5c.7 0 1.2.5 1.2 1.2 0 1 .1 2 .4 3 .1.4 0 .9-.3 1.2l-2.2 2.4z"/></svg>';
        const fileSvg = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 5px; margin-bottom: 2px;"><path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/></svg>';

        let displayText = pinnedMsg.text;
        let isMissedCall = false;

        if (!displayText) {
            if (pinnedMsg.image) displayText = imageSvg + ' Image';
            else if (pinnedMsg.video) displayText = videoSvg + ' Video';
            else if (pinnedMsg.audio) displayText = audioSvg + ' Audio Message';
            else if (pinnedMsg.file) displayText = fileSvg + ' File';
            else displayText = 'Message';
        } else {
            displayText = displayText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            if (displayText.includes("Missed Video Call") || displayText.includes("Missed Audio Call")) {
                isMissedCall = true;
            }
            
            if (isMissedCall) {
                displayText = displayText.replace('📹', videoSvg.replace('currentColor', '#ff4757')).replace('📞', audioSvg.replace('currentColor', '#ff4757'));
            } else {
                displayText = displayText.replace('📹', videoSvg).replace('📞', audioSvg);
            }
        }
        
        pinnedText.innerHTML = displayText;

        let unpinModal = document.getElementById('unpin-msg-modal');
        if (!unpinModal) {
            unpinModal = document.createElement('div');
            unpinModal.id = 'unpin-msg-modal';
            unpinModal.className = 'modal-overlay';
            unpinModal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 2000; align-items: center; justify-content: center; backdrop-filter: blur(5px);';
            unpinModal.innerHTML = `
                <div class="modal-box" style="background: #1E293B; padding: 15px; border-radius: 10px; width: 80%; max-width: 250px; border: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; gap: 5px;">
                    <button id="unpinActionBtn" style="padding: 15px; background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 8px; color: white; font-size: 1rem; text-align: center; cursor: pointer; font-weight: bold;">Unpin Message</button>
                    <button id="cancelUnpinBtn" style="padding: 15px; background: transparent; border: none; color: gray; font-size: 1rem; text-align: center; cursor: pointer;">Cancel</button>
                </div>
            `;
            document.body.appendChild(unpinModal);
            
            document.getElementById('cancelUnpinBtn').onclick = () => {
                unpinModal.style.display = 'none';
            };
        }

        let pressTimer;
        let isLongPress = false;
        let startX = 0;
        let currentX = 0;
        let isSwiping = false;
        
        const startPress = (e) => {
            isLongPress = false;
            isSwiping = false;
            startX = e.touches ? e.touches[0].clientX : e.clientX;
            currentX = startX;
            pinnedMessageBar.style.transition = 'none';
            
            pressTimer = setTimeout(() => {
                if (!isSwiping) {
                    isLongPress = true;
                    unpinModal.style.display = 'flex';
                    document.getElementById('unpinActionBtn').onclick = () => {
                        if (currentUser && currentChatPartner) {
                            const chatId = getChatId(currentUser, currentChatPartner);
                            db.ref(`pinned_messages/${chatId}`).remove();
                        }
                        unpinModal.style.display = 'none';
                    };
                    if (navigator.vibrate) navigator.vibrate(30);
                }
            }, 600);
        };
        
        const movePress = (e) => {
            if (!startX) return;
            currentX = e.touches ? e.touches[0].clientX : e.clientX;
            const diff = currentX - startX;
            
            if (Math.abs(diff) > 10) {
                isSwiping = true;
                clearTimeout(pressTimer);
                pinnedMessageBar.style.transform = `translateX(${diff}px)`;
                pinnedMessageBar.style.opacity = 1 - (Math.abs(diff) / window.innerWidth);
            }
        };
        
        const cancelPress = () => { 
            clearTimeout(pressTimer);
            if (isSwiping) {
                pinnedMessageBar.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
                pinnedMessageBar.style.transform = 'translateX(0)';
                pinnedMessageBar.style.opacity = 1;
                isSwiping = false;
            }
            startX = 0;
        };
        
        const endPress = (e) => {
            clearTimeout(pressTimer);
            if (isSwiping) {
                const diff = currentX - startX;
                if (Math.abs(diff) > 100) {
                    pinnedMessageBar.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
                    pinnedMessageBar.style.transform = 'translateX(0)';
                    pinnedMessageBar.style.opacity = 1;
                    
                    unpinModal.style.display = 'flex';
                    document.getElementById('unpinActionBtn').onclick = () => {
                        if (currentUser && currentChatPartner) {
                            const chatId = getChatId(currentUser, currentChatPartner);
                            db.ref(`pinned_messages/${chatId}`).remove();
                        }
                        unpinModal.style.display = 'none';
                    };
                    if (navigator.vibrate) navigator.vibrate(30);
                } else {
                    pinnedMessageBar.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
                    pinnedMessageBar.style.transform = 'translateX(0)';
                    pinnedMessageBar.style.opacity = 1;
                }
                setTimeout(() => { isSwiping = false; startX = 0; }, 50);
            } else if (!isLongPress) {
                const el = document.getElementById('msg-' + pinnedMsg.id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    el.classList.remove('msg-highlight');
                    void el.offsetWidth;
                    el.classList.add('msg-highlight');
                    setTimeout(() => el.classList.remove('msg-highlight'), 1500);
                } else {
                    showToast("Message not found");
                }
            }
        };

        pinnedMessageBar.oncontextmenu = (e) => e.preventDefault();
        pinnedMessageBar.onmousedown = startPress;
        pinnedMessageBar.ontouchstart = startPress;
        pinnedMessageBar.onmousemove = movePress;
        pinnedMessageBar.ontouchmove = movePress;
        pinnedMessageBar.onmouseup = endPress;
        pinnedMessageBar.ontouchend = endPress;
        pinnedMessageBar.onmouseleave = cancelPress;

    } else {
        pinnedMessageBar.style.display = 'none';
        pinnedMessageBar.onmousedown = null;
        pinnedMessageBar.ontouchstart = null;
        pinnedMessageBar.onmousemove = null;
        pinnedMessageBar.ontouchmove = null;
        pinnedMessageBar.onmouseup = null;
        pinnedMessageBar.ontouchend = null;
        pinnedMessageBar.onmouseleave = null;
        if (chatMessages) chatMessages.style.paddingTop = '70px';
    }
}

// --- Delete Message Logic ---
confirmDeleteMsg.addEventListener('click', () => {
    const idsToDelete = isSelectionMode ? Array.from(selectedMsgIds) : (msgToDeleteId ? [msgToDeleteId] : []);
    
    idsToDelete.forEach(id => {
        const msg = currentChatHistory.find(m => m.id === id);
        if (msg) {
            const table = msg._tableName || getMessageTable(msg.sender);
            const path = `messages/${table}/${id}`;

            if (currentUser === ALPHA_ADMIN) {
                // Alpha user deletes permanently from database
                db.ref(path).remove();
            } else {
                // Other users only mark it as deleted for themselves
                db.ref(path).update({ [`deletedBy_${currentUser}`]: true });
            }
            
            // Check if deleted message was pinned
            const chatId = getChatId(currentUser, currentChatPartner);
            db.ref(`pinned_messages/${chatId}`).once('value').then(snapshot => {
                const pinnedMsg = snapshot.val();
                if (pinnedMsg && pinnedMsg.id === id) {
                    db.ref(`pinned_messages/${chatId}`).remove();
                }
            });
        }
    });

    deleteMsgModal.style.display = 'none';
    mainContent.classList.remove('blur-content');
    msgToDeleteId = null;
    exitSelectionMode();
});

cancelDeleteMsg.addEventListener('click', () => {
    deleteMsgModal.style.display = 'none';
    mainContent.classList.remove('blur-content');
    msgToDeleteId = null;
});

cancelReplyBtn.addEventListener('click', () => {
    replyToMsg = null;
    replyPreview.style.display = 'none';
});

// --- Change Password Logic ---
changePassBtn.addEventListener('click', () => {
    menuOptions.style.display = 'none';
    menuIconBtn.classList.remove('rotate');
    changePassModal.style.display = 'flex';
    mainContent.classList.add('blur-content');
    // Reset fields
    oldPassInput.value = '';
    newPassInput.value = '';
    changePassError.style.display = 'none';
});

cancelChangePass.addEventListener('click', () => {
    changePassModal.style.display = 'none';
    mainContent.classList.remove('blur-content');
});

confirmChangePass.addEventListener('click', () => {
    const isOtherUser = currentUser !== ALPHA_ADMIN && currentUser !== BETA_ADMIN;
    const currentPass = isOtherUser && currentUserData ? currentUserData.password : users[currentUser];

    if (oldPassInput.value === currentPass) {
        if (newPassInput.value.trim() !== "") {
            const newPass = newPassInput.value.trim();
            
            if (!isOtherUser) {
                users[currentUser] = newPass;
                if (db) db.ref(`admin_config/${currentUser}_Password`).set(newPass).catch(e => console.error("Error saving admin password:", e));
            } else {
                if (currentUserData) currentUserData.password = newPass;
                if (db) db.ref(`Other User Table/${currentUser}/password`).set(newPass).catch(e => console.error("Error saving user password:", e));
            }
            
            // Also update numcode_data if the user has registered num codes
            if (db) {
                db.ref('numcode_data').once('value').then(snap => {
                    if (snap.exists()) {
                        const data = snap.val();
                        const updates = {};
                        for (let codeKey in data) {
                            if (data[codeKey] && data[codeKey].userId === currentUser) {
                                updates[`numcode_data/${codeKey}/password`] = newPass;
                            }
                        }
                        if (Object.keys(updates).length > 0) {
                            db.ref().update(updates).catch(e => console.error("Error updating numcode password:", e));
                        }
                    }
                });
            }
            
            alert("Password Updated Successfully!");
            changePassModal.style.display = 'none';
            mainContent.classList.remove('blur-content');
        } else {
            changePassError.innerText = "New password cannot be empty";
            changePassError.style.display = 'block';
            triggerShake(newPassInput);
        }
    } else {
        changePassError.innerText = "Incorrect Old Password";
        changePassError.style.display = 'block';
        triggerShake(oldPassInput);
    }
});

// --- Profile Logic ---
profileBtn.addEventListener('click', async () => {
    menuOptions.style.display = 'none';
    menuIconBtn.classList.remove('rotate');
    profileModal.style.display = 'flex';
    mainContent.classList.add('blur-content');

    // --- UI Updates for Profile Modal ---
    // 1. Close Button Position
    if (closeProfileBtn.parentNode) {
        closeProfileBtn.parentNode.style.position = 'relative';
    }
    closeProfileBtn.style.cssText = 'position: absolute; top: 12px; right: 15px; background: transparent; border: none; font-size: 1.2rem; cursor: pointer; padding: 0; box-shadow: none; color: white;';
    closeProfileBtn.innerHTML = '❌';

    // --- Unique Code Display ---
    let uniqueCodeDisplay = document.getElementById('userUniqueCodeDisplay');
    if (!uniqueCodeDisplay) {
        uniqueCodeDisplay = document.createElement('div');
        uniqueCodeDisplay.id = 'userUniqueCodeDisplay';
            uniqueCodeDisplay.style.cssText = 'margin-top: 10px; font-size: 1rem; font-weight: bold; letter-spacing: 1px;';
        // Insert after profile image
        if (profileImageDisplay && profileImageDisplay.parentNode) {
            profileImageDisplay.parentNode.insertBefore(uniqueCodeDisplay, profileImageDisplay.nextSibling);
        }
    }

        // --- Account Opening Date Display ---
        let accountDateDisplay = document.getElementById('userAccountDateDisplay');
        if (!accountDateDisplay) {
            accountDateDisplay = document.createElement('div');
            accountDateDisplay.id = 'userAccountDateDisplay';
            accountDateDisplay.style.cssText = 'margin-top: 5px; font-size: 0.9rem; font-weight: 500;';
            if (uniqueCodeDisplay && uniqueCodeDisplay.parentNode) {
                uniqueCodeDisplay.parentNode.insertBefore(accountDateDisplay, uniqueCodeDisplay.nextSibling);
            }
        }

        const isLightMode = document.body.classList.contains('light-mode');
        uniqueCodeDisplay.style.color = isLightMode ? '#0052d4' : '#00d2ff';
        accountDateDisplay.style.color = isLightMode ? '#555' : 'rgba(255,255,255,0.7)';

    // --- Block Button Setup ---
    let blockUserBtn = document.getElementById('blockUserBtn');
    if (!blockUserBtn) {
        blockUserBtn = document.createElement('button');
        blockUserBtn.id = 'blockUserBtn';
        blockUserBtn.className = 'modal-btn';
        blockUserBtn.style.cssText = 'margin-top: 15px; padding: 10px; width: 100%; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; color: white; display: none;';
        closeProfileBtn.parentNode.insertBefore(blockUserBtn, closeProfileBtn);
    }

    // --- Fresh Button Logic (Change Picture) ---
    if (uploadTriggerBtn) {
        uploadTriggerBtn.style.display = 'block';
        uploadTriggerBtn.innerText = "📸 Change Picture";
        uploadTriggerBtn.style.background = "rgba(255,255,255,0.15)";
        uploadTriggerBtn.style.color = "white";
        uploadTriggerBtn.style.width = "100%";
        uploadTriggerBtn.style.border = "none";
    }

    // Hide legacy save button if it exists
    let saveBtn = document.getElementById('saveProfileBtn');
    let btnContainer = document.getElementById('profileActionsContainer');
    if (saveBtn) saveBtn.style.display = 'none';
    if (btnContainer) btnContainer.style.display = 'none';

    const roleText = profileUsernameDisplay.nextElementSibling;
    const isAlpha = (currentUser === ALPHA_ADMIN);

    if (isAlpha && currentChatPartner) {
        // --- Show Chat Partner's Profile ---
        if (uploadTriggerBtn) uploadTriggerBtn.style.display = 'none';
        profileImageDisplay.style.cursor = 'default';
        blockUserBtn.style.display = 'block';
        
        let partnerName = currentChatPartner;
        let partnerPic = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
        let partnerCode = "";
        let partnerDate = "";
        let partnerRole = "User";

        profileUsernameDisplay.innerText = "Loading...";

        if (currentChatPartner === BETA_ADMIN) {
            partnerName = "Beta";
            partnerRole = "System Admin";
            const pSnap = await db.ref(`Profile Pic/Beta_Profile_Pic`).once('value');
            if (pSnap.exists()) partnerPic = pSnap.val();
        } else if (currentChatPartner === ALPHA_ADMIN) {
            partnerName = "Alpha";
            partnerRole = "System Admin";
            const pSnap = await db.ref(`Profile Pic/Alpha_Profile_Pic`).once('value');
            if (pSnap.exists()) partnerPic = pSnap.val();
        } else {
            const uSnap = await db.ref(`Other User Table/${currentChatPartner}`).once('value');
            if (uSnap.exists()) {
                const u = uSnap.val();
                partnerName = u.name || currentChatPartner;
                partnerCode = u.uniqueCode || "";
                partnerDate = u.accountOpeningDate || "";
                if (u.profilePic) partnerPic = u.profilePic;
            }
            // Check latest pic
            const pSnap = await db.ref(`Profile Pic/${currentChatPartner}_Profile_Pic`).once('value');
            if (pSnap.exists()) partnerPic = pSnap.val();
        }

        profileImageDisplay.src = partnerPic;
        profileUsernameDisplay.innerText = partnerName;
        uniqueCodeDisplay.innerText = partnerCode ? `Code: ${partnerCode}` : '';
        accountDateDisplay.innerText = partnerDate ? `Joined: ${partnerDate}` : '';

        if (roleText && roleText.tagName === 'DIV') {
            if (currentChatPartner === ALPHA_ADMIN) {
                roleText.innerText = "Administrator";
                roleText.style.display = 'block';
            } else {
                roleText.style.display = 'none';
            }
        }

        // Block Button Status
        const updateBlockBtn = () => {
            const isBlocked = blockedUsersSet.has(currentChatPartner);
            if (currentChatPartner === ALPHA_ADMIN) {
                blockUserBtn.innerText = isBlocked ? 'Unblock Alpha' : 'Block Alpha';
            } else {
                blockUserBtn.innerText = isBlocked ? 'Unblock User' : 'Block User';
            }
            blockUserBtn.style.background = isBlocked ? '#2ecc71' : '#ff4757';
        };
        updateBlockBtn();

        blockUserBtn.onclick = () => {
            const currentlyBlocked = blockedUsersSet.has(currentChatPartner);
            const updates = {};
            if (currentlyBlocked) {
                // Unblock logic
                updates[`blocked_users/${currentUser}/${currentChatPartner}`] = null;
                if (currentChatPartner === ALPHA_ADMIN) {
                    updates[`blocked_users/${ALPHA_ADMIN}/${currentUser}`] = null;
                }
                db.ref().update(updates).then(() => {
                    showToast(`${partnerName} unblocked.`);
                    updateBlockBtn();
                });
            } else {
                // Block logic
                updates[`blocked_users/${currentUser}/${currentChatPartner}`] = true;
                if (currentChatPartner === ALPHA_ADMIN) {
                    updates[`blocked_users/${ALPHA_ADMIN}/${currentUser}`] = true;
                }
                db.ref().update(updates).then(() => {
                    showToast(`${partnerName} blocked.`);
                    updateBlockBtn();
                });
            }
        };

    } else {
        // --- Show Own Profile ---
        if (uploadTriggerBtn) uploadTriggerBtn.style.display = 'block';
        profileImageDisplay.style.cursor = 'pointer';
        blockUserBtn.style.display = 'none';
        
        uniqueCodeDisplay.innerText = (currentUserData && currentUserData.uniqueCode) ? `Code: ${currentUserData.uniqueCode}` : '';
        accountDateDisplay.innerText = (currentUserData && currentUserData.accountOpeningDate) ? `Joined: ${currentUserData.accountOpeningDate}` : '';
        
        const myRole = getUserRole(currentUser);
        db.ref(`Profile Pic/${myRole}_Profile_Pic`).once('value').then(snap => {
            if (snap.exists()) profileImageDisplay.src = snap.val();
            else profileImageDisplay.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
        });

        let displayName = currentUser;
        if (currentUser === ALPHA_ADMIN) displayName = 'Alpha';
        else if (currentUser === BETA_ADMIN) displayName = 'Beta';
        else if (currentUserData && currentUserData.name) displayName = currentUserData.name;
        
        profileUsernameDisplay.innerText = displayName;
        if (roleText && roleText.tagName === 'DIV') {
            if (currentUser === ALPHA_ADMIN) {
                roleText.innerText = "Administrator";
                roleText.style.display = 'block';
            } else {
                roleText.style.display = 'none';
            }
        }
    }
});

closeProfileBtn.addEventListener('click', () => {
    profileModal.style.display = 'none';
    mainContent.classList.remove('blur-content');
});

// Trigger file input when Change button is clicked
uploadTriggerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    profileFileInput.click();
});

// Handle profile picture selection with confirmation modal
profileFileInput.addEventListener('change', function(event) {
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newImageSrc = e.target.result;
            showProfilePicConfirmation(newImageSrc);
        };
        reader.readAsDataURL(this.files[0]);
    }
    // Reset input so the same file can be selected again
    event.target.value = '';
});

function showProfilePicConfirmation(newImageSrc) {
    let confirmModal = document.getElementById('profile-pic-confirm-modal');
    if (!confirmModal) {
        confirmModal = document.createElement('div');
        confirmModal.id = 'profile-pic-confirm-modal';
        confirmModal.className = 'modal-overlay';
        confirmModal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10005; align-items: center; justify-content: center; backdrop-filter: blur(5px);';
        
        confirmModal.innerHTML = `
            <div class="modal-box" style="background: #2d3436; padding: 25px; border-radius: 15px; width: 85%; max-width: 350px; text-align: center; color: white; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <h3 style="margin-bottom: 15px;">Crop Profile Picture</h3>
                <div style="width: 100%; height: 250px; background: #000; margin-bottom: 20px; border-radius: 10px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <img id="confirmProfilePicPreview" src="" style="max-width: 100%; max-height: 100%;">
                </div>
                <div class="modal-actions" style="display: flex; justify-content: space-between; gap: 10px; margin-top: 5px;">
                    <button id="cancelProfilePicChange" class="modal-btn cancel-btn">Cancel</button>
                    <button id="confirmProfilePicChange" class="modal-btn confirm-btn" style="background: #00d2ff;">Confirm</button>
                </div>
            </div>
        `;
        document.body.appendChild(confirmModal);

        document.getElementById('cancelProfilePicChange').addEventListener('click', () => {
            confirmModal.style.display = 'none';
        });
    }

    const previewImg = document.getElementById('confirmProfilePicPreview');
    previewImg.src = newImageSrc;
    
    const confirmBtn = document.getElementById('confirmProfilePicChange');
    const newConfirmBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
    
    confirmModal.style.display = 'flex';

    if (previewImg.cropperInstance) {
        previewImg.cropperInstance.destroy();
    }
    setTimeout(() => {
        previewImg.cropperInstance = new Cropper(previewImg, {
            aspectRatio: 1,
            viewMode: 1,
            autoCropArea: 1,
            background: false
        });
    }, 50);

    newConfirmBtn.addEventListener('click', () => {
        if (!currentUser) return alert("Please log in first.");
        
        newConfirmBtn.innerText = 'Updating...';
        newConfirmBtn.disabled = true;

        let finalImageSrc = newImageSrc;
        if (previewImg.cropperInstance) {
            finalImageSrc = previewImg.cropperInstance.getCroppedCanvas({
                width: 400, height: 400
            }).toDataURL('image/jpeg', 0.8);
        }

        profileImageDisplay.src = finalImageSrc; // Update immediately
        
        const role = getUserRole(currentUser);
        db.ref(`Profile Pic/${role}_Profile_Pic`).set(finalImageSrc)
            .then(() => {
                showToast("Profile Picture Updated Successfully!");
                confirmModal.style.display = 'none';
                newConfirmBtn.innerText = 'Confirm';
                newConfirmBtn.disabled = false;
                if (previewImg.cropperInstance) previewImg.cropperInstance.destroy();
            })
            .catch(err => {
                alert("Failed to save: " + err.message);
                confirmModal.style.display = 'none';
                newConfirmBtn.innerText = 'Confirm';
                newConfirmBtn.disabled = false;
                if (previewImg.cropperInstance) previewImg.cropperInstance.destroy();
            });
    });

    document.getElementById('cancelProfilePicChange').addEventListener('click', () => {
        if (previewImg.cropperInstance) previewImg.cropperInstance.destroy();
    });
}

// Make profile picture clickable to change it
profileImageDisplay.addEventListener('click', () => {
    const isAlpha = (currentUser === ALPHA_ADMIN);
    if (isAlpha && currentChatPartner) {
        // Prevent changing partner's profile pic
        return;
    }
    profileFileInput.click();
});

// --- Mobile Keyboard Overlay Fix ---
function handleViewportResize() {
    const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    
    // Prevent overall page scroll & rubber-banding completely
    document.documentElement.style.height = vh + 'px';
    document.body.style.height = vh + 'px';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    
    // Use absolute positioning relative to the rigidly sized body bounds
    if (chatInputBar && chatInputBar.style.display !== 'none') {
        chatInputBar.style.position = 'absolute';
        chatInputBar.style.bottom = '0px';
        chatInputBar.style.top = 'auto';
    }
    
    // Adjust Alpha Nav Footer if it's visible
    const alphaNav = document.getElementById('alpha-footer-nav');
    if (alphaNav && alphaNav.style.display !== 'none') {
        alphaNav.style.position = 'absolute';
        alphaNav.style.bottom = '0px';
        alphaNav.style.top = 'auto';
    }

    // Adjust Scroll To Bottom Button
    const scrollBtn = document.getElementById('scrollToBottomBtn');
    if (scrollBtn) {
        scrollBtn.style.position = 'absolute';
        scrollBtn.style.bottom = '80px';
        scrollBtn.style.top = 'auto';
    }

    // Keep Chat Messages container correctly sized
    if (chatMessages) {
        chatMessages.style.position = 'absolute';
        chatMessages.style.height = '100%';
        setTimeout(() => {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 50);
    }
}

if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', handleViewportResize);
    window.visualViewport.addEventListener('scroll', handleViewportResize);
} else {
    window.addEventListener('resize', handleViewportResize);
    window.addEventListener('scroll', handleViewportResize);
}

setTimeout(handleViewportResize, 500); // Set initial state

if (msgInput) {
    msgInput.addEventListener('focus', () => {
        setTimeout(() => {
            handleViewportResize(); // Ensure layout tracks precisely when focused
            if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 300);
    });
}

// Typing detection
msgInput.addEventListener('input', () => {
    const text = msgInput.value.trim();
    // Toggle Mic / Send
    if (text.length > 0) {
        if (micBtn) micBtn.style.display = 'none';
        if (sendMsgBtn) sendMsgBtn.style.display = 'flex';
        if (cameraBtn) cameraBtn.style.display = 'none';
    } else {
        if (micBtn) micBtn.style.display = 'flex';
        if (sendMsgBtn) sendMsgBtn.style.display = 'none';
        if (cameraBtn) cameraBtn.style.display = 'inline-block';
    }

    if (currentUser && db) {
        const typingRef = db.ref(`typing/${currentUser}`);
        typingRef.set(true);
        if (inputTypingTimeout) clearTimeout(inputTypingTimeout);
        // Clear typing status after 2 seconds of inactivity
        inputTypingTimeout = setTimeout(() => typingRef.set(false), 2000);
    }
});

// Enter key to send message
msgInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendMsgBtn.click();
    }
});

// --- Chat Functionality ---
sendMsgBtn.addEventListener('click', () => {
    if (currentChatPartner && blockedUsersSet.has(currentChatPartner)) {
        showUnblockPrompt();
        return;
    }
    const text = msgInput.value.trim();
    
    if (!currentUser) {
        alert("You appear to be logged out. Please refresh the page.");
        return;
    }
    if (!db) {
        alert("Database not connected. Cannot send message.");
        return;
    }

    if (text !== "") {
        const now = new Date();
        // Format: DD/MM HH:MM AM/PM
        const d = String(now.getDate()).padStart(2, '0');
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const y = now.getFullYear();
        const datePart = `${d}/${m}/${y}`;
        const timePart = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase();
        const timeString = `${datePart} ${timePart}`;
        const rawDate = now.toISOString();

        // Stop typing status immediately
        if (currentUser) db.ref(`typing/${currentUser}`).set(false).catch(e => console.error(e));

        const table = getMessageTable(currentUser);
        const newMsgRef = db.ref(`messages/${table}`).push();
        const recipient = currentChatPartner;
        const newMsg = {
            id: newMsgRef.key,
            sender: currentUser,
            recipient: recipient,
            text: text,
            timestamp: timeString,
            rawDate: rawDate,
            status: 'sent', // Initial status
            // Add reply info
            replyTo: replyToMsg ? (() => {
                const rText = replyToMsg.text || (replyToMsg.image ? '📷 Image' : (replyToMsg.video ? '🎥 Video' : (replyToMsg.audio ? '🎤 Audio' : (replyToMsg.file ? '📄 File' : 'Message'))));
                return {
                    id: replyToMsg.id,
                    sender: replyToMsg.sender,
                    text: rText
                };
            })() : null
        };
        newMsgRef.set(newMsg).catch(error => {
            console.error("Send Error:", error);
            alert("Failed to send message: " + error.message);
        });
        sendNotificationAlert(recipient);

        // Clear reply state
        replyToMsg = null;
        replyPreview.style.display = 'none';
        msgInput.value = '';
        
        // Reset Mic/Send State
        if (micBtn) micBtn.style.display = 'flex';
        if (sendMsgBtn) sendMsgBtn.style.display = 'none';
        if (cameraBtn) cameraBtn.style.display = 'inline-block';
    }
});

// --- Chat Actions (Attachment, Camera, Mic) ---
attachBtn.addEventListener('click', () => {
    if (currentChatPartner && blockedUsersSet.has(currentChatPartner)) {
        showUnblockPrompt();
        return;
    }
    chatFileInput.click();
    // Ensure we accept all files
    chatFileInput.removeAttribute('accept');
});

// --- Live Camera Logic ---
cameraBtn.addEventListener('click', () => {
    if (currentChatPartner && blockedUsersSet.has(currentChatPartner)) {
        showUnblockPrompt();
        return;
    }
    cameraLiveOverlay.style.display = 'flex';
    startCameraStream();
});

async function startCameraStream() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
    }
    
    // Mirror effect: Only mirror the view for the front (user) camera
    cameraVideo.style.transform = (currentFacingMode === 'user') ? 'scaleX(-1)' : 'none';

    const label = document.getElementById('cameraFacingLabel');
    if (label) label.innerText = currentFacingMode === 'user' ? 'Front Cam' : 'Back Cam';

    try {
        try {
            cameraStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: currentFacingMode, width: { ideal: 3840 }, height: { ideal: 2160 }, frameRate: { ideal: 30 } }
            });
        } catch (e) {
            console.warn("High quality specific facingMode failed, trying best available 4K...", e);
            cameraStream = await navigator.mediaDevices.getUserMedia({
                video: { width: { ideal: 3840 }, height: { ideal: 2160 } } // Attempt 4K in fallback
            });
        }

        cameraVideo.srcObject = cameraStream;
        cameraVideo.setAttribute('playsinline', 'true'); // Required for iOS
        cameraVideo.setAttribute('autoplay', 'true');
        await cameraVideo.play();

        // Ensure 1x zoom if supported by the device
        const track = cameraStream.getVideoTracks()[0];
        const caps = track.getCapabilities ? track.getCapabilities() : {};
        if (caps.zoom) {
            track.applyConstraints({ advanced: [{ zoom: 1 }] }).catch(err => console.warn("Zoom constraint failed:", err));
        }

        // Show flash only for back camera
        
        // Check capabilities for torch support to ensure button only shows if working
        if ('torch' in caps) {
            flashCameraBtn.style.display = caps.torch ? 'flex' : 'none';
        } else {
            flashCameraBtn.style.display = (currentFacingMode === 'environment') ? 'flex' : 'none';
        }

        isFlashOn = false;
        flashCameraBtn.style.color = 'white';
    } catch (err) {
        console.error(err);
        alert("Unable to access camera. Ensure permissions are granted and site is HTTPS.");
        cameraLiveOverlay.style.display = 'none';
    }
}

flipCameraBtn.addEventListener('click', () => {
    currentFacingMode = currentFacingMode === 'environment' ? 'user' : 'environment';
    startCameraStream();
});

flashCameraBtn.addEventListener('click', () => {
    if (cameraStream) {
        const track = cameraStream.getVideoTracks()[0];
        const targetState = !isFlashOn;

        track.applyConstraints({
            advanced: [{ torch: targetState }]
        }).then(() => {
            isFlashOn = targetState;
            flashCameraBtn.style.color = isFlashOn ? '#ffd700' : 'white';
        }).catch(err => {
            console.error("Flash error:", err);
            showToast("Flash not supported on this device");
            // Reset UI if we failed to turn it on
            if (targetState) {
                isFlashOn = false;
                flashCameraBtn.style.color = 'white';
            }
        });
    }
});

function stopCamera() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }
    cameraLiveOverlay.style.display = 'none';
    cameraVideo.style.filter = 'none';
    cameraVideo.dataset.filterIndex = '0';
}

closeCameraBtn.addEventListener('click', stopCamera);

captureCameraBtn.addEventListener('click', () => {
    const W_d = cameraVideo.clientWidth;
    const H_d = cameraVideo.clientHeight;
    const W_s = cameraVideo.videoWidth;
    const H_s = cameraVideo.videoHeight;

    // object-fit: cover scales the video to cover the container. Find the scale factor.
    const scale = Math.max(W_d / W_s, H_d / H_s);

    const renderedWidth = W_s * scale;
    const renderedHeight = H_s * scale;

    // Find offsets due to centering 
    const offsetX = (renderedWidth - W_d) / 2;
    const offsetY = (renderedHeight - H_d) / 2;

    // Define the visible area we want to capture (subtract header: 65px and footer: 90px)
    const visibleY = 65;
    const visibleHeight = H_d - 65 - 90;

    // Map display pixel coordinates back to the source video dimensions
    const sx = offsetX / scale;
    const sy = (offsetY + visibleY) / scale;
    const sWidth = W_d / scale;
    const sHeight = visibleHeight / scale;

    const canvas = document.createElement('canvas');
    // Create high-res canvas representing ONLY the cropped visible area
    canvas.width = sWidth; 
    canvas.height = sHeight;
    const ctx = canvas.getContext('2d');
    
    // Mirror the capture only if the front camera is used
    if (currentFacingMode === 'user') {
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
    }
    
    // Apply Filter from Live View
    const fIdx = parseInt(cameraVideo.dataset.filterIndex || '0');
    const filters = ['none', 'grayscale(100%)', 'sepia(100%)', 'invert(100%)'];
    if (fIdx > 0) ctx.filter = filters[fIdx];

    // Draw only the cropped portion directly from the video onto the canvas
    ctx.drawImage(cameraVideo, sx, sy, sWidth, sHeight, 0, 0, sWidth, sHeight);
    
    // Get image
    currentImageBase64 = canvas.toDataURL('image/jpeg', 1.0); // Use 1.0 for highest quality
    baseImageForFilter = currentImageBase64;
    currentFilterMode = 0;
    lastImageSource = 'camera';
    currentFileData = null;
    currentVideoBase64 = null;
    
    // Stop camera and show preview
    stopCamera();
    
    // Show existing preview overlay
    previewImage.src = currentImageBase64;
    previewImage.style.display = 'block';
    
    // Show image controls (Crop & Filter) just like attachment preview
    cropBtn.style.display = 'flex';
    filterBtn.style.display = 'flex';
    retakeBtn.style.display = 'flex';

    // Hide file/video elements if they were visible
    const info = document.getElementById('file-preview-info');
    if(info) info.style.display = 'none';
    const vidPreview = document.getElementById('previewVideo');
    if(vidPreview) vidPreview.style.display = 'none';

    imagePreviewOverlay.style.display = 'flex';
});

// --- Call Logic (Audio/Video) ---

audioCallBtn.addEventListener('click', () => startCall(false));
videoCallBtn.addEventListener('click', () => startCall(true));

async function startCall(video, isIncoming = false) {
    if (!isIncoming && currentChatPartner && blockedUsersSet.has(currentChatPartner)) {
        showUnblockPrompt();
        return false;
    }
    menuOptions.style.display = 'none';
    menuIconBtn.classList.remove('rotate');
    isVideoCall = video;
    amICaller = !isIncoming;
    isCallConnected = false;
    callStartTime = 0;
    callStatusLogged = false;
    currentCallTarget = isIncoming ? (incomingSignalData ? incomingSignalData.sender : currentChatPartner) : currentChatPartner;

    // Reset local video position
    const localVideo = document.getElementById('callLocalVideo');
    if (localVideo) {
        localVideo.style.top = '80px';
        localVideo.style.left = 'auto';
        localVideo.style.right = '15px';
        localVideo.style.bottom = 'auto';
    }
    // 1. UI Setup
    callOverlay.style.display = 'flex';
    callOverlay.classList.remove('pip-mode'); // Reset PiP

    if (video) callOverlay.classList.remove('audio-only');
    else callOverlay.classList.add('audio-only');
    
    // Reset Media Elements
    callRemoteAudio.srcObject = null;
    callRemoteVideo.srcObject = null;
    callLocalVideo.srcObject = null;
    
    // Reset Buttons
    isCallMuted = false;
    isVideoMuted = false;
    callMuteBtn.innerHTML = CALL_ICONS.mic;
    callVideoMuteBtn.innerHTML = CALL_ICONS.video;
    isSpeakerOn = false;
    callAudioOutputBtn.innerHTML = CALL_ICONS.speaker;
    callFlipBtn.innerHTML = CALL_ICONS.flip;
    callEndBtn.innerHTML = CALL_ICONS.end;
    
    callAudioOutputBtn.style.display = 'flex';

    // Set Header Name
    const targetUser = currentUser === ALPHA_ADMIN ? BETA_ADMIN : ALPHA_ADMIN;
    const targetDisplayName = targetUser === ALPHA_ADMIN ? "Alpha" : "Beta";
    const nameEl = document.getElementById('callHeaderName');
    if (nameEl) nameEl.innerText = targetDisplayName;

    // Configure UI based on call type
    if (video) {
        callVideoContainer.style.display = 'block';
        callAudioContainer.style.display = 'none';
        callRemoteVideo.style.display = 'block';
        callFlipBtn.style.display = 'flex';
        callVideoMuteBtn.style.display = 'flex';
        callFacingMode = 'user';
        if (callLocalVideo) callLocalVideo.style.display = 'block';
    } else {
        callVideoContainer.style.display = 'none';
        callAudioContainer.style.display = 'flex';
        callRemoteVideo.style.display = 'none';
        callFlipBtn.style.display = 'none';
        callVideoMuteBtn.style.display = 'none';
        if (callLocalVideo) callLocalVideo.style.display = 'none';

        // Fetch and display target user's profile picture
        const targetRole = getUserRole(targetUser);
        
        db.ref(`Profile Pic/${targetRole}_Profile_Pic`).once('value').then(snap => {
            const pic = snap.val();
            const audioImg = callAudioContainer.querySelector('img');
            if (audioImg) {
                audioImg.src = pic || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
            }
        });
    }

    callStatusText.innerText = "Ringing";
    callStatusText.style.display = 'block';
    callStatusText.classList.add('blink-anim');
    
    callTimer.style.display = 'none';
    callTimer.innerText = "00:00";

    // 2. Get Local Media
    try {
        const constraints = {
            audio: true,
            video: video ? { facingMode: callFacingMode } : false
        };
        
        callStream = await navigator.mediaDevices.getUserMedia(constraints);
        
        // Force enable tracks and set video resolution/framerate
        callStream.getAudioTracks().forEach(t => t.enabled = true);
        
        // Initialize Audio Output (Default to Earpiece)
        updateAudioOutput();
        
        if (video) {
            callStream.getVideoTracks().forEach(t => t.enabled = true);
            callStream.getVideoTracks().forEach(t => {
                t.applyConstraints({ width: { ideal: 3840 }, height: { ideal: 2160 }, frameRate: { ideal: 30 } });
            });
            callLocalVideo.srcObject = callStream;
            updateVideoMirroring();
        }

        // 3. Initiate Connection if Caller
        if (!isIncoming) {
            createPeerConnection(true);
            
            if (ringingTimeout) clearTimeout(ringingTimeout);
            ringingTimeout = setTimeout(() => {
                if (!isCallConnected) {
                    showToast("No answer");
                    endCall(false); 
                }
            }, 15000);
        }
        
        return true;
    } catch (err) {
        console.error("Media Error:", err);
        alert("Could not access Camera/Microphone. Please check permissions.");
        endCall();
        return false;
    }
}


function createPeerConnection(isInitiator) {
    peerConnection = new RTCPeerConnection(rtcConfig);

    // ICE Candidates
    peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
            sendSignal('candidate', event.candidate);
        }
    };

    // Remote Stream Handling
    peerConnection.ontrack = (event) => {
        const stream = event.streams[0] || new MediaStream([event.track]);
        
        const mediaElement = isVideoCall ? callRemoteVideo : callRemoteAudio;
        
        // Only set if different to avoid resets
        if (mediaElement.srcObject !== stream) {
            mediaElement.srcObject = stream;
            console.log("Remote stream attached to", isVideoCall ? "Video" : "Audio");
            
            // Update PiP if active
            const pipView = document.getElementById('custom-pip-view');
            const pipVideo = document.getElementById('pip-remote-video');
            if (isVideoCall && pipView && pipView.style.display === 'flex' && pipVideo) {
                pipVideo.srcObject = stream;
                pipVideo.play().catch(e => console.error("PiP Auto-play error:", e));
            }
        }
        
        // Robust Playback
        mediaElement.autoplay = true;
        mediaElement.playsInline = true;
        mediaElement.muted = false;
        mediaElement.volume = 1.0;
        
        const playPromise = mediaElement.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error("Auto-play failed:", error);
                // Fallback: Play on interaction
                document.body.addEventListener('click', () => mediaElement.play(), { once: true });
            });
        }
        updateAudioOutput();
        updateVideoMirroring();
    };

    // Add Local Tracks
    if (callStream) {
        callStream.getTracks().forEach(track => peerConnection.addTrack(track, callStream));
    }

    // Offer Logic
    if (isInitiator) {
        peerConnection.createOffer()
            .then(offer => peerConnection.setLocalDescription(offer))
            .then(() => {
                sendSignal('offer', peerConnection.localDescription);
            })
            .catch(e => console.error("Offer Error:", e));
    }
}

function sendSignal(type, data) {
    const myRole = getUserRole(currentUser);
    const targetUser = currentChatPartner;
    const targetRole = getUserRole(targetUser);
    const callType = isVideoCall ? 'Video' : 'Audio';
    
    // Paths
    const incomingPath = `signals/${targetRole}_incoming_${callType}`; // Where I write offers
    const myIncomingPath = `signals/${myRole}_incoming_${callType}`; // Where I write answers (if I am receiver)
    const candidatePath = `signals/${targetRole}_candidates`;
    const facingModePath = `signals/${targetRole}_facingMode`;

    if (type === 'offer') {
        const ref = db.ref(incomingPath);
        ref.set({
            type: 'offer',
            sender: currentUser,
            recipient: targetUser,
            sdp: JSON.parse(JSON.stringify(data)),
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            facingMode: callFacingMode
        });
        ref.onDisconnect().remove();

        if (targetUser === ALPHA_ADMIN) {
            // Set notifications to active/true
            db.ref(`Notification Alert/Incoming call`).set('active');
            db.ref(`Notification Alert/${ALPHA_ADMIN}`).set(true);

            // After 4 seconds, set them to deactive/false
            setTimeout(() => {
                db.ref(`Notification Alert/Incoming call`).set('deactive');
                db.ref(`Notification Alert/${ALPHA_ADMIN}`).set(false);
            }, 4000);
        }
    } else if (type === 'answer') {
        // Send answer to the caller's inbox so they receive it
        db.ref(incomingPath).set({
            type: 'answer',
            sender: currentUser,
            recipient: targetUser,
            sdp: JSON.parse(JSON.stringify(data)),
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            facingMode: callFacingMode
        });

        if (currentUser === ALPHA_ADMIN) {
            db.ref(`Notification Alert/Incoming call`).set('deactive');
            db.ref(`Notification Alert/${ALPHA_ADMIN}`).set(false).catch(e => console.error(e));
        }
    } else if (type === 'candidate') {
        db.ref(candidatePath).push({
            candidate: JSON.parse(JSON.stringify(data)),
            sender: currentUser,
            recipient: targetUser
        });
    } else if (type === 'facingMode') {
        db.ref(facingModePath).set({
            sender: currentUser,
            facingMode: data,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });
    } else if (type === 'end') {
        // Remove all signal nodes for this call type
        db.ref(`signals/${myRole}_incoming_${callType}`).remove();
        db.ref(`signals/${targetRole}_incoming_${callType}`).remove();
        db.ref(`signals/${myRole}_candidates`).remove();
        db.ref(`signals/${targetRole}_candidates`).remove();
        db.ref(`signals/${myRole}_facingMode`).remove();
        db.ref(`signals/${targetRole}_facingMode`).remove();

        if (targetUser === ALPHA_ADMIN || currentUser === ALPHA_ADMIN) {
            db.ref(`Notification Alert/Incoming call`).set('deactive');
            db.ref(`Notification Alert/${ALPHA_ADMIN}`).set(false).catch(e => console.error(e));
        }
    }
}

function handleIncomingSignal(signal) {
    // At the very top, ignore signals from blocked users.
    if (blockedUsersSet.has(signal.sender)) {
        console.log(`Ignoring signal from blocked user: ${signal.sender}`);
        return;
    }

    // 1. Offer (Incoming Call)
    if (signal.type === 'offer') {
        // Alpha User Restriction: Only show incoming call if currently chatting with the caller
        if (currentUser === ALPHA_ADMIN && currentChatPartner !== signal.sender) {
            return;
        }

        incomingSignalData = signal;
        currentCallTarget = signal.sender;
        isVideoCall = signal.isVideo;
        remoteFacingMode = signal.facingMode || 'user';
        
        let displayName = signal.sender;
        if (signal.sender === ALPHA_ADMIN) displayName = "Alpha";
        else if (signal.sender === BETA_ADMIN) displayName = "Beta";

        incomingCallTitle.innerText = `Incoming Call From ${displayName}`;
        incomingCallType.innerText = signal.isVideo ? "Video Call" : "Audio Call";
        
        // Show Caller Profile Picture
        const callerRole = getUserRole(signal.sender);
        db.ref(`Profile Pic/${callerRole}_Profile_Pic`).once('value').then(snap => {
            const pic = snap.val();
            
            // Target the existing image in the HTML instead of creating a new one
            const existingImg = document.querySelector('#incoming-call-modal .profile-pic img');
            
            // Clean up: Remove any rogue images directly inside the modal box (artifacts from old code)
            const modalBox = document.querySelector('#incoming-call-modal .modal-box');
            if (modalBox) {
                const rogueImages = modalBox.querySelectorAll(':scope > img');
                rogueImages.forEach(img => img.remove());
                const oldIdImg = document.getElementById('incomingCallImage');
                if (oldIdImg) oldIdImg.remove();
            }

            if (existingImg) {
                existingImg.src = pic || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
            }
        });

        incomingCallModal.style.display = 'flex';
        mainContent.classList.add('blur-content');
    } 
    // 2. Answer (Call Accepted)
    else if (signal.type === 'answer') {
        if (peerConnection && peerConnection.signalingState !== 'stable') {
            const desc = new RTCSessionDescription(signal.data);
            remoteFacingMode = signal.facingMode || 'user';
            peerConnection.setRemoteDescription(desc)
                .then(() => {
                    if (ringingTimeout) clearTimeout(ringingTimeout);
                    isCallConnected = true;
                    console.log("Remote Description Set (Answer)");
                    callStatusText.innerText = "Connected";
                    startCallTimer();
                    processCandidateQueue();
                    updateVideoMirroring();
                })
                .catch(e => console.error("Set Remote Desc Error:", e));
        }
    } 
    // 3. Candidate
    else if (signal.type === 'candidate') {
        const candidate = new RTCIceCandidate(signal.data);
        if (peerConnection && peerConnection.remoteDescription) {
            peerConnection.addIceCandidate(candidate).catch(e => console.error("Add ICE Error:", e));
        } else {
            candidateQueue.push(candidate);
        }
    } else if (signal.type === 'facingMode') {
        remoteFacingMode = signal.facingMode || 'user';
        updateVideoMirroring();
    }
}

function processCandidateQueue() {
    if (peerConnection && peerConnection.remoteDescription) {
        while (candidateQueue.length > 0) {
            const cand = candidateQueue.shift();
            peerConnection.addIceCandidate(cand).catch(e => console.error("Queue ICE Error:", e));
        }
    }
}

acceptCallBtn.addEventListener('click', () => {
    incomingCallModal.style.display = 'none';
    mainContent.classList.remove('blur-content');
    
    if (incomingSignalData) {
        // Start call as receiver
        startCall(incomingSignalData.isVideo, true).then(success => {
            if (success) {
                createPeerConnection(false); // Not initiator
                
                const desc = new RTCSessionDescription(incomingSignalData.data);
                peerConnection.setRemoteDescription(desc)
                    .then(() => peerConnection.createAnswer())
                    .then(answer => peerConnection.setLocalDescription(answer))
                    .then(() => {
                        sendSignal('answer', peerConnection.localDescription);
                        isCallConnected = true;
                        callStatusText.innerText = "Connected";
                        startCallTimer();
                        processCandidateQueue();
                    })
                    .catch(e => console.error("Answer Error:", e));
            }
        });
    }
});

rejectCallBtn.addEventListener('click', () => {
    // If we have data, we know the type to clean up
    if (incomingSignalData) {
        const targetUser = currentUser === ALPHA_ADMIN ? BETA_ADMIN : ALPHA_ADMIN;
        const targetRole = getUserRole(targetUser);
        const type = incomingSignalData.isVideo ? 'Video' : 'Audio';
        
        // Set global isVideoCall so endCall() targets the correct signal path
        isVideoCall = incomingSignalData.isVideo;

        // Send explicit reject signal so caller detects it
        db.ref(`signals/${targetRole}_incoming_${type}`).set({
            type: 'reject',
            sender: currentUser
        });
        
        // Delay cleanup slightly to ensure caller receives the reject signal
        setTimeout(() => {
            endCall(false); // This will clean up nodes via sendSignal('end')
        }, 500);
    } else {
        endCall(true);
    }
});

callEndBtn.addEventListener('click', () => endCall(false));

function endCall(remoteEnded = false) {
    // Clear Timeout
    if (ringingTimeout) {
        clearTimeout(ringingTimeout);
        ringingTimeout = null;
    }

    // Clear Reconnecting State
    isCallReconnecting = false;
    if (callReconnectingTimeout) {
        clearTimeout(callReconnectingTimeout);
        callReconnectingTimeout = null;
    }
    const reconnectOverlay = document.getElementById('callReconnectingOverlay');
    if (reconnectOverlay) reconnectOverlay.style.display = 'none';

    // --- Call History Logging ---
    if (!callStatusLogged && currentCallTarget && currentUser) {
        callStatusLogged = true;
        let duration = (isCallConnected && callStartTime > 0) ? Math.floor((Date.now() - callStartTime) / 1000) : 0;
        let callStatus = isCallConnected ? 'Completed' : 'Missed';
        if (!isCallConnected && remoteEnded && amICaller) callStatus = 'Rejected';
        if (!isCallConnected && !remoteEnded && !amICaller) callStatus = 'Rejected';
        
        const callRecord = {
            partner: currentCallTarget,
            type: amICaller ? 'Outgoing' : 'Incoming',
            isVideo: isVideoCall,
            status: callStatus,
            duration: duration,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        };
        db.ref(`call_history/${currentUser}`).push(callRecord).catch(e => console.error("Call history err:", e));
    }

    // Send Missed Call Message if I am caller, call wasn't connected, and it wasn't rejected remotely
    if (amICaller && !isCallConnected && !remoteEnded) {
        sendMissedCallMessage(isVideoCall);
    }

    // 1. Stop Timer
    if (callInterval) clearInterval(callInterval);
    
    // 2. Send End Signal (if local)
    if (!remoteEnded) {
        sendSignal('end');
    }
    
    // 3. Stop Tracks
    if (callStream) {
        callStream.getTracks().forEach(track => track.stop());
        callStream = null;
    }
    
    // 4. Close Peer Connection
    if (peerConnection) {
        peerConnection.close();
        peerConnection = null;
    }
    
    // 5. Reset UI
    callOverlay.style.display = 'none';
    
    const pipView = document.getElementById('custom-pip-view');
    if (pipView) pipView.style.display = 'none';

    incomingCallModal.style.display = 'none';
    mainContent.classList.remove('blur-content');
    
    // Restore main content and chat bar in case they were hidden (e.g. by PiP expansion)
    if (currentUser) {
        if (mainContent) mainContent.style.display = 'flex';
        if (chatInputBar) chatInputBar.style.display = 'flex';
    }

    // 6. Clear Media Elements
    callRemoteVideo.srcObject = null;
    callRemoteAudio.srcObject = null;
    callLocalVideo.srcObject = null;
    
    candidateQueue = [];
    incomingSignalData = null;
    amICaller = false;
    isCallConnected = false;
    currentCallTarget = null;
}

function startCallTimer() {
    if (callInterval) clearInterval(callInterval);
    
    // Switch from Ringing to Timer
    callStatusText.style.display = 'none';
    callStatusText.classList.remove('blink-anim');
    callTimer.style.display = 'block';

    let seconds = 0;
    callTimer.innerText = "00:00";
    callStartTime = Date.now();
    callInterval = setInterval(() => {
        seconds++;
        const m = String(Math.floor(seconds / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        callTimer.innerText = `${m}:${s}`;
    }, 1000);
}

function sendMissedCallMessage(isVideo) {
    const text = isVideo ? "📹 Missed Video Call" : "📞 Missed Audio Call";
    
    const now = new Date();
    const d = String(now.getDate()).padStart(2, '0');
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const y = now.getFullYear();
    const datePart = `${d}/${m}/${y}`;
    const timePart = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase();
    const timeString = `${datePart} ${timePart}`;
    const rawDate = now.toISOString();

    const table = getMessageTable(currentUser);
    const newMsgRef = db.ref(`messages/${table}`).push();
    const recipient = currentChatPartner;
    
    newMsgRef.set({
        id: newMsgRef.key,
        sender: currentUser,
        recipient: recipient,
        text: text,
        timestamp: timeString,
        rawDate: rawDate,
        status: 'sent',
        replyTo: null
    });
    sendNotificationAlert(recipient);
}

// Mute/Flip/Output Handlers
callMuteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (callStream) {
        const track = callStream.getAudioTracks()[0];
        if (track) {
            isCallMuted = !isCallMuted;
            track.enabled = !isCallMuted;
            callMuteBtn.innerHTML = isCallMuted ? CALL_ICONS.micMute : CALL_ICONS.mic;
            syncPipControls();
        }
    }
});

callVideoMuteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (callStream && isVideoCall) {
        const track = callStream.getVideoTracks()[0];
        if (track) {
            isVideoMuted = !isVideoMuted;
            track.enabled = !isVideoMuted;
            callVideoMuteBtn.innerHTML = isVideoMuted ? CALL_ICONS.videoMute : CALL_ICONS.video;
        }
    }
});

function updateVideoMirroring() {
    if (!isVideoCall) return;

    const isLocalInSmallBox = (callLocalVideo.srcObject === callStream);
    
    if (isLocalInSmallBox) {
        callLocalVideo.style.transform = (callFacingMode === 'user') ? 'scaleX(-1)' : 'none';
        callRemoteVideo.style.transform = (remoteFacingMode === 'user') ? 'scaleX(-1)' : 'none';
    } else {
        callRemoteVideo.style.transform = (callFacingMode === 'user') ? 'scaleX(-1)' : 'none';
        callLocalVideo.style.transform = (remoteFacingMode === 'user') ? 'scaleX(-1)' : 'none';
    }
    
    const pipVideo = document.getElementById('pip-remote-video');
    if (pipVideo) {
        const isLocalInBigBox = (callRemoteVideo.srcObject === callStream);
        if (isLocalInBigBox) {
            pipVideo.style.transform = (callFacingMode === 'user') ? 'scaleX(-1)' : 'none';
        } else {
            pipVideo.style.transform = (remoteFacingMode === 'user') ? 'scaleX(-1)' : 'none';
        }
    }
}

// --- Swap Video Feeds on Tap ---
function swapVideoFeeds() {
    if (!isVideoCall || !callLocalVideo.srcObject || !callRemoteVideo.srcObject) {
        return; // Only for video calls with both streams active
    }

    const localVideoSrc = callLocalVideo.srcObject;
    const remoteVideoSrc = callRemoteVideo.srcObject;

    // Swap the streams
    callLocalVideo.srcObject = remoteVideoSrc;
    callRemoteVideo.srcObject = localVideoSrc;

    updateVideoMirroring();

    // Ensure playback continues
    callLocalVideo.play().catch(e => console.error("Local video play failed after swap:", e));
    callRemoteVideo.play().catch(e => console.error("Remote video play failed after swap:", e));
}

function syncPipControls() {
    const pipMuteBtn = document.getElementById('pip-mute-btn');
    const pipSpeakerBtn = document.getElementById('pip-speaker-btn');

    if (pipMuteBtn) {
        pipMuteBtn.innerHTML = isCallMuted ? CALL_ICONS.micMute : CALL_ICONS.mic;
    }
    if (pipSpeakerBtn) {
        pipSpeakerBtn.innerHTML = isSpeakerOn ? CALL_ICONS.earpiece : CALL_ICONS.speaker;
    }
}

callFlipBtn.addEventListener('click', async (e) => {
    e.stopPropagation();
    if (callStream && isVideoCall) {
        callStream.getVideoTracks().forEach(t => t.stop());
        callFacingMode = callFacingMode === 'user' ? 'environment' : 'user';
        try {
            const newStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: callFacingMode }
            });
            const newVideoTrack = newStream.getVideoTracks()[0];
            
            // Replace track in Peer Connection
            const sender = peerConnection.getSenders().find(s => s.track && s.track.kind === 'video');
            if (sender) await sender.replaceTrack(newVideoTrack);

            // Update local callStream object
            const oldVideoTrack = callStream.getVideoTracks()[0];
            callStream.removeTrack(oldVideoTrack);
            callStream.addTrack(newVideoTrack);

            updateVideoMirroring();
            sendSignal('facingMode', callFacingMode);
            
            // Restore Mute State
            if (newVideoTrack) newVideoTrack.enabled = !isVideoMuted;
        } catch (err) { console.error(err); }
    }
});

async function updateAudioOutput(isManual = false) {
    const element = isVideoCall ? callRemoteVideo : callRemoteAudio;
    
    if (typeof element.setSinkId !== 'function') {
        console.warn("Audio output switching not supported.");
        return;
    }
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const outputs = devices.filter(d => d.kind === 'audiooutput');
        if (!outputs.length) return;
        
        const speaker = outputs.find(d => /speaker/i.test(d.label));
        const earpiece = outputs.find(d => /earpiece|handset|receiver|phone/i.test(d.label));
        
        let targetId = 'default';
        if (isSpeakerOn) {
            if (speaker) targetId = speaker.deviceId;
        } else {
            if (earpiece) targetId = earpiece.deviceId;
            else if (speaker && outputs.length > 1) {
                const other = outputs.find(d => d.deviceId !== speaker.deviceId);
                if (other) targetId = other.deviceId;
            }
        }
        
        await element.setSinkId(targetId);
        callAudioOutputBtn.innerHTML = isSpeakerOn ? CALL_ICONS.earpiece : CALL_ICONS.speaker;
        syncPipControls();
    } catch(e) { console.error(e); }
}

callAudioOutputBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    isSpeakerOn = !isSpeakerOn;
    updateAudioOutput(true);
});

// --- PiP Mode Logic ---
callPipBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    
    if (!isCallConnected) {
        showToast("Call not connected yet");
        return;
    }

    // Hide full screen call & show chat
    callOverlay.style.display = 'none';
    mainContent.style.display = 'flex';
    chatInputBar.style.display = 'flex';

    // Show and configure custom PiP view
    const pipView = document.getElementById('custom-pip-view');
    const pipVideo = document.getElementById('pip-remote-video');
    const pipHeader = document.querySelector('#pip-header span');
    const pipProfilePic = document.getElementById('pip-profile-pic');

    pipView.style.display = 'flex';
    
    if (isVideoCall) {
        pipVideo.style.display = 'block';
        if (pipProfilePic) pipProfilePic.style.display = 'none';
        pipVideo.srcObject = callRemoteVideo.srcObject;
        if (pipHeader) pipHeader.innerText = "Video Call";
        
        updateVideoMirroring();
    } else {
        pipVideo.style.display = 'none';
        if (pipProfilePic) {
            pipProfilePic.style.display = 'block';
            const mainImg = document.querySelector('#callAudioContainer img');
            if (mainImg) pipProfilePic.src = mainImg.src;
        }
        pipVideo.srcObject = callRemoteAudio.srcObject;
        if (pipHeader) pipHeader.innerText = "Audio Call";
    }

    pipVideo.play().catch(e => console.error("PiP Play Error:", e));
    
    syncPipControls();
});

// --- Draggable Local Video Logic ---
let localVideoIsDragging = false;
let localVideoDidMove = false;
let localVideoStartX = 0, localVideoStartY = 0;
let localVideoInitialX = 0, localVideoInitialY = 0;

const localVideoDraggable = document.getElementById('callLocalVideo');

function handleLocalVideoDragStart(e) {
    if (!callOverlay.style.display || callOverlay.style.display === 'none') return;
    e.preventDefault();
    localVideoIsDragging = true;
    localVideoDidMove = false; // Reset on start

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const rect = localVideoDraggable.getBoundingClientRect();
    localVideoDraggable.style.right = 'auto';
    localVideoDraggable.style.bottom = 'auto';
    localVideoDraggable.style.left = `${rect.left}px`;
    localVideoDraggable.style.top = `${rect.top}px`;

    localVideoStartX = clientX;
    localVideoStartY = clientY;
    localVideoInitialX = rect.left;
    localVideoInitialY = rect.top;

    localVideoDraggable.style.transition = 'none';
}

function handleLocalVideoDragMove(e) {
    if (!localVideoIsDragging) return;
    e.preventDefault();

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const dx = clientX - localVideoStartX;
    const dy = clientY - localVideoStartY;

    // If moved more than a threshold, consider it a drag
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        localVideoDidMove = true;
    }

    let newX = localVideoInitialX + dx;
    let newY = localVideoInitialY + dy;

    const overlayRect = callOverlay.getBoundingClientRect();
    const videoRect = localVideoDraggable.getBoundingClientRect();
    const headerHeight = 65;
    const footerHeight = 80;

    newX = Math.max(5, Math.min(newX, overlayRect.width - videoRect.width - 5));
    newY = Math.max(headerHeight, Math.min(newY, overlayRect.height - videoRect.height - footerHeight));

    localVideoDraggable.style.left = `${newX}px`;
    localVideoDraggable.style.top = `${newY}px`;
}

function handleLocalVideoDragEnd() {
    if (!localVideoIsDragging) return;

    // If the video was not dragged, treat it as a tap/click to swap feeds
    if (!localVideoDidMove) {
        swapVideoFeeds();
    }

    localVideoIsDragging = false;
    localVideoDraggable.style.transition = 'top 0.3s ease, left 0.3s ease, right 0.3s ease, bottom 0.3s ease';
}

if (localVideoDraggable) {
    localVideoDraggable.addEventListener('mousedown', handleLocalVideoDragStart);
    localVideoDraggable.addEventListener('touchstart', handleLocalVideoDragStart, { passive: false });
}
window.addEventListener('mousemove', handleLocalVideoDragMove);
window.addEventListener('touchmove', handleLocalVideoDragMove, { passive: false });
window.addEventListener('mouseup', handleLocalVideoDragEnd);
window.addEventListener('touchend', handleLocalVideoDragEnd);

// --- Audio Recording Logic ---
micBtn.addEventListener('click', () => {
    if (currentChatPartner && blockedUsersSet.has(currentChatPartner)) {
        showUnblockPrompt();
        return;
    }
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                startRecording(stream);
            })
            .catch(err => {
                console.error(err);
                alert("Microphone Access Denied or Not Supported.");
            });
    } else {
        alert("Microphone API not supported in this browser context.");
    }
});

let isAudioPaused = false;
const waveBarCount = 20;
const waveBarWidth = 3;
const waveBarSpacing = 3;
const waveColorsL = ["#e65100", "#ff9800", "#fdd835"]; 
const waveColorsR = ["#d81b60", "#9c27b0", "#3f51b5"];
let wavesInitialized = false;
let smoothedAudioVolume = 0;

function initAudioWaves() {
    if (wavesInitialized) return;
    function createBars(svgId, isRight) {
        const svg = document.getElementById(svgId);
        if (!svg) return;
        svg.innerHTML = '';
        for (let i = 0; i < waveBarCount; i++) {
            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            const xPos = isRight ? i * (waveBarWidth + waveBarSpacing) : 150 - (i + 1) * (waveBarWidth + waveBarSpacing);
            rect.setAttribute("x", xPos);
            rect.setAttribute("width", waveBarWidth);
            rect.setAttribute("rx", 1.5);
            rect.style.transition = "height 0.1s ease-out, y 0.1s ease-out";
            const colorArr = isRight ? waveColorsR : waveColorsL;
            rect.setAttribute("fill", colorArr[Math.floor((i / waveBarCount) * colorArr.length)]);
            svg.appendChild(rect);
        }
    }
    createBars("wave-left", false);
    createBars("wave-right", true);
    wavesInitialized = true;
}

function startRecording(stream) {
    audioChunks = [];
    mediaRecorder = new MediaRecorder(stream);
    isAudioPaused = false;
    
    const pauseIcon = document.getElementById('pauseAudioIcon');
    const resumeIcon = document.getElementById('resumeAudioIcon');
    const centerMic = document.getElementById('recordCenterMic');
    if (pauseIcon) pauseIcon.style.display = 'block';
    if (resumeIcon) resumeIcon.style.display = 'none';
    if (centerMic) centerMic.style.backgroundColor = '#2ecc71';

    initAudioWaves();
    
    mediaRecorder.ondataavailable = event => {
        audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
        if (isSendingAudio) {
            const audioBlob = new Blob(audioChunks, { type: mediaRecorder.mimeType || 'audio/webm' });
            const reader = new FileReader();
            reader.readAsDataURL(audioBlob);
            reader.onloadend = () => {
                sendAudioMessage(reader.result);
            };
        }
        // Stop all tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
    };

    mediaRecorder.start();
    audioRecordingOverlay.style.display = 'flex';
    
    startVisualizer(stream);
    
    // Timer Logic
    totalRecordedSeconds = 0;
    recordingTimer.innerText = "00:00";
    recordingInterval = setInterval(() => {
        if (!isAudioPaused) {
            totalRecordedSeconds++;
            const m = String(Math.floor(totalRecordedSeconds / 60)).padStart(2, '0');
            const s = String(totalRecordedSeconds % 60).padStart(2, '0');
            recordingTimer.innerText = `${m}:${s}`;
        }
    }, 1000);
}

function stopRecording(sending) {
    previewAudio.pause();
    previewAudio.currentTime = 0;
    previewAudio.ontimeupdate = null;
    const centerMic = document.getElementById('recordCenterMic');
    if (centerMic) centerMic.style.opacity = '1';

    [cancelAudioBtn, sendAudioBtn, pauseResumeAudioBtn].forEach(btn => {
        if (btn) {
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        }
    });

    isSendingAudio = sending;
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
    }
    clearInterval(recordingInterval);
    
    if (audioContext) {
        audioContext.close();
        audioContext = null;
    }
    cancelAnimationFrame(visualizerAnimationId);
    
    audioRecordingOverlay.style.display = 'none';
}

function startVisualizer(stream) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createMediaStreamSource(stream);
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 64;
    source.connect(analyser);
    const bufferLength = analyser.frequencyBinCount;
    visualizerDataArray = new Uint8Array(bufferLength);
    drawVisualizer();
}

function drawVisualizer() {
    visualizerAnimationId = requestAnimationFrame(drawVisualizer);
    if (!analyser) return;

    const barsL = document.getElementById("wave-left")?.children;
    const barsR = document.getElementById("wave-right")?.children;
    if (!barsL || !barsR || barsL.length === 0) return;

    // When paused, flatten the wave layout
    if (isAudioPaused) {
        for (let i = 0; i < waveBarCount; i++) {
            barsL[i].setAttribute("height", 6);
            barsL[i].setAttribute("y", 27);
            barsR[i].setAttribute("height", 6);
            barsR[i].setAttribute("y", 27);
        }
        return;
    }

    analyser.getByteFrequencyData(visualizerDataArray);
    
    // Calculate average volume for reactivity
    let sum = 0;
    for(let i = 0; i < visualizerDataArray.length; i++) {
        sum += visualizerDataArray[i];
    }
    let avg = sum / visualizerDataArray.length;
    let targetVolume = avg / 30; // Threshold mapping for natural speech
    
    // Smooth out jittery mic input to maintain the fluid wave feel
    smoothedAudioVolume = smoothedAudioVolume * 0.8 + targetVolume * 0.2;
    let volumeScale = smoothedAudioVolume;
    if (volumeScale < 0.1) volumeScale = 0.1;
    if (volumeScale > 1.2) volumeScale = 1.2;

    const time = Date.now() * 0.008;

    // Update the SVGs using the symmetrical wave math modulated by audio volume
    for (let i = 0; i < waveBarCount; i++) {
        let baseNoise = (Math.sin(i * 0.4 - time) + 1) / 2;
        let noise = baseNoise * volumeScale;
        
        if (i < 5 && noise < 0.25) noise = 0.25; // Keeping middle base visibility

        const height = 6 + (noise * 44); 
        const y = (60 - height) / 2;

        barsL[i].setAttribute("height", height);
        barsL[i].setAttribute("y", y);
        barsR[i].setAttribute("height", height);
        barsR[i].setAttribute("y", y);
    }
}

const pauseResumeAudioBtn = document.getElementById('pauseResumeAudioBtn');
if (pauseResumeAudioBtn) {
    pauseResumeAudioBtn.addEventListener('click', () => {
        if (!mediaRecorder) return;
        const pauseIcon = document.getElementById('pauseAudioIcon');
        const resumeIcon = document.getElementById('resumeAudioIcon');
        const centerMic = document.getElementById('recordCenterMic');

        if (mediaRecorder.state === 'recording') {
            mediaRecorder.requestData(); // Flush current data for preview
            mediaRecorder.pause();
            isAudioPaused = true;
            if(pauseIcon) pauseIcon.style.display = 'none';
            if(resumeIcon) resumeIcon.style.display = 'block';
            if(centerMic) centerMic.style.backgroundColor = '#ff4757';
        } else if (mediaRecorder.state === 'paused') {
            previewAudio.pause();
            previewAudio.currentTime = 0;
            if(centerMic) centerMic.style.opacity = '1';

            mediaRecorder.resume();
            isAudioPaused = false;
            if(pauseIcon) pauseIcon.style.display = 'block';
            if(resumeIcon) resumeIcon.style.display = 'none';
            if(centerMic) centerMic.style.backgroundColor = '#2ecc71';
        }
    });
}

const centerMicBtn = document.getElementById('recordCenterMic');
if (centerMicBtn) {
    function setAudioControlsDisabled(disabled) {
        [cancelAudioBtn, sendAudioBtn, pauseResumeAudioBtn].forEach(btn => {
            if (btn) {
                btn.style.opacity = disabled ? '0.5' : '1';
                btn.style.pointerEvents = disabled ? 'none' : 'auto';
            }
        });
    }
    
    function restoreRecordingTimer() {
        const m = String(Math.floor(totalRecordedSeconds / 60)).padStart(2, '0');
        const s = String(totalRecordedSeconds % 60).padStart(2, '0');
        if (recordingTimer) recordingTimer.innerText = `${m}:${s}`;
    }

    centerMicBtn.addEventListener('click', () => {
        if (isAudioPaused && mediaRecorder && mediaRecorder.state === 'paused') {
            if (!previewAudio.paused && previewAudio.currentTime > 0) {
                // Stop playback
                previewAudio.pause();
                previewAudio.currentTime = 0;
                previewAudio.ontimeupdate = null;
                centerMicBtn.style.opacity = '1';
                
                setAudioControlsDisabled(false);
                restoreRecordingTimer();
            } else {
                // Start playback
                const audioBlob = new Blob(audioChunks, { type: mediaRecorder.mimeType || 'audio/webm' });
                const audioUrl = URL.createObjectURL(audioBlob);
                previewAudio.src = audioUrl;
                previewAudio.play();
                centerMicBtn.style.opacity = '0.5'; // Dim mic while playing
                
                setAudioControlsDisabled(true);
                
                previewAudio.ontimeupdate = () => {
                    const currentSecs = Math.floor(previewAudio.currentTime);
                    const m = String(Math.floor(currentSecs / 60)).padStart(2, '0');
                    const s = String(currentSecs % 60).padStart(2, '0');
                    if (recordingTimer) recordingTimer.innerText = `${m}:${s}`;
                };
                
                previewAudio.onended = () => {
                    centerMicBtn.style.opacity = '1';
                    URL.revokeObjectURL(audioUrl);
                    previewAudio.ontimeupdate = null;
                    
                    setAudioControlsDisabled(false);
                    restoreRecordingTimer();
                };
            }
        }
    });
}

cancelAudioBtn.addEventListener('click', () => stopRecording(false));
sendAudioBtn.addEventListener('click', () => {
    if (currentChatPartner && blockedUsersSet.has(currentChatPartner)) {
        showUnblockPrompt();
        return;
    }
    stopRecording(true);
});

function sendAudioMessage(base64Audio) {
    const now = new Date();
    const d = String(now.getDate()).padStart(2, '0');
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const y = now.getFullYear();
    const datePart = `${d}/${m}/${y}`;
    const timePart = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase();
    const timeString = `${datePart} ${timePart}`;
    const rawDate = now.toISOString();

    const table = getMessageTable(currentUser);
    const newMsgRef = db.ref(`messages/${table}`).push();
    const recipient = currentChatPartner;
    newMsgRef.set({
        id: newMsgRef.key,
        sender: currentUser,
        recipient: recipient,
        text: '', 
        audio: base64Audio,
        timestamp: timeString,
        rawDate: rawDate,
        status: 'sent',
        replyTo: null
    });
    sendNotificationAlert(recipient);
}

// --- Image Preview & Send Logic ---
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        lastImageSource = 'file';
        const reader = new FileReader();
        
        // Check if it is an image
        if (file.type.startsWith('image/')) {
            reader.onload = function(e) {
                currentImageBase64 = e.target.result;
                baseImageForFilter = currentImageBase64;
                currentFileData = null;
                currentVideoBase64 = null;
                currentFilterMode = 0;
                
                previewImage.src = currentImageBase64;
                previewImage.style.display = 'block';
                
                // Show image controls
                cropBtn.style.display = 'flex';
                filterBtn.style.display = 'flex';
                retakeBtn.style.display = 'flex';
                
                // Hide file info if exists
                const info = document.getElementById('file-preview-info');
                if(info) info.style.display = 'none';
                
                const vidPreview = document.getElementById('previewVideo');
                if(vidPreview) vidPreview.style.display = 'none';

                imagePreviewOverlay.style.display = 'flex';
            };
        } else if (file.type.startsWith('video/')) {
            // Check file size
            if (file.size > 20 * 1024 * 1024) {
                alert("Video is too large. Maximum size is 20MB.");
                event.target.value = '';
                return;
            }
            reader.onload = function(e) {
                currentVideoBase64 = e.target.result;
                currentImageBase64 = null;
                currentFileData = null;
                
                // Hide Image UI
                previewImage.style.display = 'none';
                cropBtn.style.display = 'none';
                filterBtn.style.display = 'none';
                const info = document.getElementById('file-preview-info');
                if(info) info.style.display = 'none';
                
                // Ensure send button is visible
                sendImageBtn.style.display = 'flex';
                retakeBtn.style.display = 'flex';

                // Show Video Preview
                let vidPreview = document.getElementById('previewVideo');
                if (!vidPreview) {
                    vidPreview = document.createElement('video');
                    vidPreview.id = 'previewVideo';
                    vidPreview.controls = true;
                    vidPreview.style.cssText = 'max-width: 100%; max-height: 60vh; border-radius: 10px;';
                    previewImage.parentNode.insertBefore(vidPreview, previewImage);
                }
                vidPreview.src = currentVideoBase64;
                vidPreview.style.display = 'block';
                
                imagePreviewOverlay.style.display = 'flex';
            };
        } else {
            // Handle generic files (PDF, DOC, APK, etc.)
            if (file.size > 20 * 1024 * 1024) {
                alert("File is too large. Maximum size is 20MB.");
                event.target.value = '';
                return;
            }
            reader.onload = function(e) {
                currentFileData = {
                    name: file.name,
                    type: file.type,
                    data: e.target.result
                };
                currentImageBase64 = null;
                currentVideoBase64 = null;
                
                // Hide image controls
                previewImage.style.display = 'none';
                cropBtn.style.display = 'none';
                filterBtn.style.display = 'none';
                retakeBtn.style.display = 'flex';
                
                let info = document.getElementById('file-preview-info');
                if(!info) {
                    info = document.createElement('div');
                    info.id = 'file-preview-info';
                    info.style.color = 'white';
                    info.style.textAlign = 'center';
                    info.style.marginTop = '50px';
                    // Insert before buttons
                    const container = document.querySelector('.preview-actions') || imagePreviewOverlay;
                    if(container === imagePreviewOverlay) container.insertBefore(info, previewImage);
                }
                info.style.display = 'block';
                
                const vidPreview = document.getElementById('previewVideo');
                if(vidPreview) vidPreview.style.display = 'none';
                
                info.innerHTML = `
                    <div style="font-size: 50px; margin-bottom: 10px;">📄</div>
                    <h3 style="word-break: break-all; max-width: 80vw;">${file.name}</h3>
                    <p>${(file.size/1024).toFixed(1)} KB</p>
                `;
                
                imagePreviewOverlay.style.display = 'flex';
            };
        }
        reader.readAsDataURL(file);
    }
    // Reset input so same file can be selected again
    event.target.value = '';
}

chatFileInput.addEventListener('change', handleFileSelect);
chatCameraInput.addEventListener('change', handleFileSelect);

retakeBtn.addEventListener('click', () => {
    if (cropper) {
        cropper.destroy();
        cropper = null;
        resetCropButton();
    }
    imagePreviewOverlay.style.display = 'none';
    currentImageBase64 = null;
    previewImage.src = '';
    baseImageForFilter = null;
    currentFilterMode = 0;
    currentFileData = null;
    currentVideoBase64 = null;
    const info = document.getElementById('file-preview-info');
    if(info) info.style.display = 'none';
    
    const vidPreview = document.getElementById('previewVideo');
    if(vidPreview) {
        vidPreview.pause();
        vidPreview.style.display = 'none';
    }

    if (lastImageSource === 'camera') {
        cameraLiveOverlay.style.display = 'flex';
        startCameraStream();
    } else if (lastImageSource === 'file') {
        chatFileInput.click();
    }
});

function resetCropButton() {
    cropBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 28px; height: 28px;"> <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15" /> <path d="M1 6.13L16 6a2 2 0 0 1 2 2v15" /> </svg>`;
    cropBtn.classList.remove('apply-mode');
    cropBtn.style.background = "";
    filterBtn.style.display = ''; // Show filter button
    sendImageBtn.style.display = 'flex';
    if (lastImageSource === 'viewer') {
        retakeBtn.style.display = 'none';
    } else {
        retakeBtn.style.display = '';
    }
    let saveBtn = document.getElementById('saveImageBtn');
    if (saveBtn) saveBtn.style.display = '';
}

cropBtn.addEventListener('click', () => {
    if (!cropper) {
        // Start Cropping
        cropper = new Cropper(previewImage, {
            viewMode: 1,
            autoCropArea: 0.8,
            dragMode: 'move',
            toggleDragModeOnDblclick: false,
        });
        cropBtn.innerText = "Apply";
        cropBtn.classList.add('apply-mode');
        filterBtn.style.display = 'none'; // Hide filter button while cropping
        sendImageBtn.style.display = 'none';
        retakeBtn.style.display = 'none';
        let saveBtn = document.getElementById('saveImageBtn');
        if (saveBtn) saveBtn.style.display = 'none';
    } else {
        // Apply Crop
        const canvas = cropper.getCroppedCanvas();
        currentImageBase64 = canvas.toDataURL('image/jpeg');
        baseImageForFilter = currentImageBase64; // Commit crop as new base
        currentFilterMode = 0; // Reset filter cycle
        
        // Destroy first to reveal image element
        cropper.destroy();
        cropper = null;
        
        // Update image source
        previewImage.src = currentImageBase64;
        
        resetCropButton();
    }
});

filterBtn.addEventListener('click', () => {
    if (!baseImageForFilter) return;
    
    currentFilterMode = (currentFilterMode + 1) % 4;
    
    const img = new Image();
    img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        
        if (currentFilterMode === 1) ctx.filter = 'grayscale(100%)';
        else if (currentFilterMode === 2) ctx.filter = 'sepia(100%)';
        else if (currentFilterMode === 3) ctx.filter = 'invert(100%)';
        else ctx.filter = 'none';
        
        ctx.drawImage(img, 0, 0);
        currentImageBase64 = canvas.toDataURL('image/jpeg');
        previewImage.src = currentImageBase64;
    };
    img.src = baseImageForFilter;
});

sendImageBtn.addEventListener('click', () => {
    if (currentChatPartner && blockedUsersSet.has(currentChatPartner)) {
        showUnblockPrompt();
        return;
    }
    if (currentImageBase64 || currentFileData || currentVideoBase64) {
        const now = new Date();
        const d = String(now.getDate()).padStart(2, '0');
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const y = now.getFullYear();
        const datePart = `${d}/${m}/${y}`;
        const timePart = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase();
        const timeString = `${datePart} ${timePart}`;
        const rawDate = now.toISOString();

        const table = getMessageTable(currentUser);
        const newMsgRef = db.ref(`messages/${table}`).push();
        const recipient = currentChatPartner;
        
        const msgData = {
            id: newMsgRef.key,
            sender: currentUser,
            recipient: recipient,
            text: '', 
            timestamp: timeString,
            rawDate: rawDate,
            status: 'sent',
            replyTo: null
        };

        if (currentImageBase64) {
            msgData.image = currentImageBase64;
        } else if (currentFileData) {
            msgData.file = currentFileData;
        } else if (currentVideoBase64) {
            msgData.video = currentVideoBase64;
        }

        newMsgRef.set(msgData).catch(err => {
            console.error("Send Error:", err);
            alert("Failed to send. File might be too large.");
        });
        sendNotificationAlert(recipient);

        // Cleanup
        imagePreviewOverlay.style.display = 'none';
        currentImageBase64 = null;
        currentFileData = null;
        currentVideoBase64 = null;
        const info = document.getElementById('file-preview-info');
        if(info) info.style.display = 'none';
        const vidPreview = document.getElementById('previewVideo');
        if(vidPreview) {
            vidPreview.pause();
            vidPreview.style.display = 'none';
        }
    }
});

function downloadViewerMedia(mode) {
    const img = document.getElementById('viewerImage');
    const video = document.getElementById('viewerVideoElement');
    let src = null;
    let ext = 'jpg';

    if (img && img.style.display !== 'none') {
        src = img.src;
    } else if (video && video.style.display !== 'none') {
        src = video.src;
        ext = 'mp4';
    }

    if (src) {
        const link = document.createElement('a');
        link.href = src;
        link.download = `MilBaat_${Date.now()}.${ext}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        if (mode === 'gallery') {
            showToast("Saved to Gallery");
        } else {
            showToast("Downloading...");
        }
    }
}

async function shareViewerMedia() {
    const img = document.getElementById('viewerImage');
    const video = document.getElementById('viewerVideoElement');
    let src = null;
    let type = 'image/jpeg';
    let ext = 'jpg';

    if (img && img.style.display !== 'none') {
        src = img.src;
    } else if (video && video.style.display !== 'none') {
        src = video.src;
        type = 'video/mp4';
        ext = 'mp4';
    }

    if (!src) {
        showToast("No media to share.");
        return;
    }

    if (!navigator.share || !navigator.canShare) {
        showToast("Sharing is not supported on your browser.");
        return;
    }

    try {
        const response = await fetch(src);
        const blob = await response.blob();
        const file = new File([blob], `MilBaat_Media.${ext}`, { type });
        
        if (navigator.canShare({ files: [file] })) {
            await navigator.share({ files: [file], title: 'Shared from Mil Baat' });
        } else {
            showToast("This file type cannot be shared.");
        }
    } catch (error) {
        if (error.name !== 'AbortError') console.error('Share error:', error);
    }
}

// --- Image Viewer Logic (Zoom, Pan, & Navigation) ---

let currentViewerImages = [];
let currentViewerIndex = -1;

function openImageViewer(msgId, defaultSrc) {
    currentViewerImages = currentChatHistory.filter(m => m.image);
    currentViewerIndex = currentViewerImages.findIndex(m => m.id === msgId);

    imageViewerModal.style.display = 'flex';
    
    if (currentViewerIndex !== -1) {
        updateImageViewer();
    } else {
        viewerImage.src = defaultSrc;
        viewerImage.dataset.msgId = msgId;
        const prevBtn = document.getElementById('viewerPrevBtn');
        const nextBtn = document.getElementById('viewerNextBtn');
        if(prevBtn) { prevBtn.style.opacity = '0.3'; prevBtn.style.pointerEvents = 'none'; }
        if(nextBtn) { nextBtn.style.opacity = '0.3'; nextBtn.style.pointerEvents = 'none'; }
    }
    
    const editBtn = document.getElementById('viewerEditBtn');
    if (editBtn) editBtn.style.display = 'flex';

    const forwardBtn = document.getElementById('viewerForwardBtn');
    if (forwardBtn) forwardBtn.style.display = 'flex';

    const prevBtn = document.getElementById('viewerPrevBtn');
    const nextBtn = document.getElementById('viewerNextBtn');
    if (prevBtn) prevBtn.style.display = 'flex';
    if (nextBtn) nextBtn.style.display = 'flex';

    viewerScale = 1;
    viewerTranslateX = 0;
    viewerTranslateY = 0;
    updateViewerTransform();
    
    const v = document.getElementById('viewerVideoElement');
    if(v) {
        v.style.display = 'none';
        v.pause();
    }
    viewerImage.style.display = 'block';
}

function updateImageViewer() {
    if (currentViewerIndex >= 0 && currentViewerIndex < currentViewerImages.length) {
        const msg = currentViewerImages[currentViewerIndex];
        viewerImage.src = msg.image;
        viewerImage.dataset.msgId = msg.id;

        const prevBtn = document.getElementById('viewerPrevBtn');
        const nextBtn = document.getElementById('viewerNextBtn');

        if (prevBtn) {
            if (currentViewerIndex > 0) {
                prevBtn.style.opacity = '1';
                prevBtn.style.pointerEvents = 'auto';
            } else {
                prevBtn.style.opacity = '0.3';
                prevBtn.style.pointerEvents = 'none';
            }
        }

        if (nextBtn) {
            if (currentViewerIndex < currentViewerImages.length - 1) {
                nextBtn.style.opacity = '1';
                nextBtn.style.pointerEvents = 'auto';
            } else {
                nextBtn.style.opacity = '0.3';
                nextBtn.style.pointerEvents = 'none';
            }
        }
    }
}

// Open Viewer
chatMessages.addEventListener('click', (e) => {
    if (e.target.classList.contains('msg-image')) {
        const msgId = e.target.dataset.msgId;
        openImageViewer(msgId, e.target.src);
    }
});

function openVideoViewer(src) {
    imageViewerModal.style.display = 'flex';
    viewerImage.style.display = 'none';
    
    let viewerVideo = document.getElementById('viewerVideoElement');
    if (!viewerVideo) {
        viewerVideo = document.createElement('video');
        viewerVideo.id = 'viewerVideoElement';
        viewerVideo.controls = true;
        viewerVideo.style.cssText = 'max-width: 100%; max-height: 80vh; display: block; margin: auto;';
        
        const container = document.querySelector('.viewer-image-container');
        container.appendChild(viewerVideo);
    }
    viewerVideo.src = src;
    viewerVideo.style.display = 'block';
    viewerVideo.play();

    const editBtn = document.getElementById('viewerEditBtn');
    if (editBtn) editBtn.style.display = 'none';
    
    const forwardBtn = document.getElementById('viewerForwardBtn');
    if (forwardBtn) forwardBtn.style.display = 'flex';

    const prevBtn = document.getElementById('viewerPrevBtn');
    const nextBtn = document.getElementById('viewerNextBtn');
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
}

const viewerBackBtn = document.getElementById('viewerBackBtn');
const viewerDownloadBtn = document.getElementById('viewerDownloadBtn');
const viewerForwardBtn = document.getElementById('viewerForwardBtn');
const viewerEditBtn = document.getElementById('viewerEditBtn');
const viewerShareBtn = document.getElementById('viewerShareBtn');
const viewerPrevBtn = document.getElementById('viewerPrevBtn');
const viewerNextBtn = document.getElementById('viewerNextBtn');

if (viewerBackBtn) {
    viewerBackBtn.addEventListener('click', () => {
        imageViewerModal.style.display = 'none';
        const v = document.getElementById('viewerVideoElement');
        if(v) {
            v.pause();
            v.src = '';
        }
    });
}

if (viewerDownloadBtn) {
    viewerDownloadBtn.addEventListener('click', () => {
        downloadViewerMedia('download');
    });
}

if (viewerForwardBtn) {
    viewerForwardBtn.addEventListener('click', () => {
        const msgId = viewerImage.dataset.msgId;
        if (msgId) {
            selectedMsgIds.clear();
            selectedMsgIds.add(msgId);
            openForwardModal();
        }
    });
}

if (viewerEditBtn) {
    viewerEditBtn.addEventListener('click', () => {
        const imgSrc = viewerImage.src;
        if (imgSrc) {
            currentImageBase64 = imgSrc;
            baseImageForFilter = imgSrc;
            currentFileData = null;
            currentVideoBase64 = null;
            currentFilterMode = 0;
            lastImageSource = 'viewer';
            
            const previewOverlay = document.getElementById('image-preview-overlay');
            const previewImg = document.getElementById('previewImage');
            
            previewImg.src = imgSrc;
            previewImg.style.display = 'block';
            
            cropBtn.style.display = 'flex';
            filterBtn.style.display = 'flex';
            retakeBtn.style.display = 'none';
            
            const info = document.getElementById('file-preview-info');
            if(info) info.style.display = 'none';
            
            const vidPreview = document.getElementById('previewVideo');
            if(vidPreview) vidPreview.style.display = 'none';

            previewOverlay.style.display = 'flex';
            
            imageViewerModal.style.display = 'none';
        }
    });
}

if (viewerShareBtn) {
    viewerShareBtn.addEventListener('click', () => {
        shareViewerMedia();
    });
}

if (viewerPrevBtn) {
    viewerPrevBtn.addEventListener('click', () => {
        if (currentViewerIndex > 0) {
            currentViewerIndex--;
            updateImageViewer();
            viewerScale = 1;
            viewerTranslateX = 0;
            viewerTranslateY = 0;
            updateViewerTransform();
        }
    });
}

if (viewerNextBtn) {
    viewerNextBtn.addEventListener('click', () => {
        if (currentViewerIndex < currentViewerImages.length - 1) {
            currentViewerIndex++;
            updateImageViewer();
            viewerScale = 1;
            viewerTranslateX = 0;
            viewerTranslateY = 0;
            updateViewerTransform();
        }
    });
}

// Update Transform
function updateViewerTransform() {
    // Reset if scale is at or below 1, and exit.
    if (viewerScale <= 1) {
        viewerScale = 1;
        viewerTranslateX = 0;
        viewerTranslateY = 0;
        viewerImage.style.transform = `translate(0px, 0px) scale(1)`;
        if (viewerImage.style.cursor !== 'zoom-in') viewerImage.style.cursor = 'zoom-in';
        return;
    }

    if (viewerImage.style.cursor !== 'grab') viewerImage.style.cursor = 'grab';

    // --- Boundary calculation for panning when zoomed in ---
    const container = viewerImage.parentElement;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    const imageRenderedWidth = viewerImage.offsetWidth;
    const imageRenderedHeight = viewerImage.offsetHeight;

    const scaledWidth = imageRenderedWidth * viewerScale;
    const scaledHeight = imageRenderedHeight * viewerScale;

    const maxX = Math.max(0, (scaledWidth - containerWidth) / 2);
    const maxY = Math.max(0, (scaledHeight - containerHeight) / 2);

    // Clamp the translation values
    viewerTranslateX = Math.max(-maxX, Math.min(maxX, viewerTranslateX));
    viewerTranslateY = Math.max(-maxY, Math.min(maxY, viewerTranslateY));

    viewerImage.style.transform = `translate(${viewerTranslateX}px, ${viewerTranslateY}px) scale(${viewerScale})`;
}

// Touch Gestures (Pinch to Zoom & Pan)

// --- Add mouse events for desktop panning and zooming ---
viewerImage.addEventListener('mousedown', (e) => {
    if (viewerScale > 1) {
        e.preventDefault();
        viewerPanning = true;
        viewerImage.style.cursor = 'grabbing';
        viewerStartX = e.pageX - viewerTranslateX;
        viewerStartY = e.pageY - viewerTranslateY;
    }
});

// Listen on the modal to allow dragging outside the image bounds
imageViewerModal.addEventListener('mousemove', (e) => {
    if (viewerPanning) { // No need to check scale > 1, panning is only true if it is
        e.preventDefault();
        viewerTranslateX = e.pageX - viewerStartX;
        viewerTranslateY = e.pageY - viewerStartY;
        updateViewerTransform();
    }
});

// Listen on the window for mouseup to catch it anywhere
window.addEventListener('mouseup', () => {
    if (viewerPanning) {
        viewerPanning = false;
        viewerImage.style.cursor = 'grab';
    }
});

// Mouse wheel to zoom
viewerImage.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2; // Zoom sensitivity
    const newScale = viewerScale + delta;
    viewerScale = Math.min(Math.max(1, newScale), 8); // Max zoom 8x
    updateViewerTransform();
}, { passive: false });

// Update cursor on hover
viewerImage.addEventListener('mouseenter', () => {
    viewerImage.style.cursor = viewerScale > 1 ? 'grab' : 'zoom-in';
});
viewerImage.addEventListener('mouseleave', () => {
    viewerImage.style.cursor = 'default';
});

viewerImage.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
        e.preventDefault(); // Prevent browser zoom
        initialPinchDistance = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY
        );
        initialScale = viewerScale;
    } else if (e.touches.length === 1) {
        viewerPanning = true;
        viewerStartX = e.touches[0].pageX - viewerTranslateX;
        viewerStartY = e.touches[0].pageY - viewerTranslateY;
        // For swipe detection
        swipeStartX = e.touches[0].pageX;
        swipeStartY = e.touches[0].pageY;
        swipeEndX = e.touches[0].pageX; // Initialize to start
        swipeEndY = e.touches[0].pageY;
    }
});

viewerImage.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2 && initialPinchDistance > 0) {
        e.preventDefault();
        const currentDistance = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY
        );
        const diff = currentDistance / initialPinchDistance;
        viewerScale = Math.min(Math.max(1, initialScale * diff), 5);
        updateViewerTransform();
    } else if (e.touches.length === 1 && viewerPanning) {
        // For swipe detection
        swipeEndX = e.touches[0].pageX;
        swipeEndY = e.touches[0].pageY;

        if (viewerScale > 1) {
            e.preventDefault(); // Prevent page scroll only when panning a zoomed image
            viewerTranslateX = e.touches[0].pageX - viewerStartX;
            viewerTranslateY = e.touches[0].pageY - viewerStartY;
            updateViewerTransform();
        }
    }
});

viewerImage.addEventListener('touchend', (e) => {
    // If it was a multi-touch gesture, just end it.
    if (e.touches.length > 0) {
        viewerPanning = false;
        return;
    }

    // Handle swipe logic for single touch end
    if (viewerPanning && viewerScale === 1 && swipeStartX !== 0) {
        const diffX = swipeEndX - swipeStartX;
        const diffY = swipeEndY - swipeStartY;
        const swipeThreshold = 50; // Minimum pixels to be considered a swipe

        // Check for a clear horizontal swipe
        if (Math.abs(diffX) > swipeThreshold && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
            if (diffX > 0 && viewerPrevBtn && viewerPrevBtn.style.pointerEvents !== 'none') {
                viewerPrevBtn.click();
            } else if (diffX < 0 && viewerNextBtn && viewerNextBtn.style.pointerEvents !== 'none') {
                viewerNextBtn.click();
            }
        }
    }

    viewerPanning = false;
    swipeStartX = swipeStartY = swipeEndX = swipeEndY = 0; // Reset swipe tracking
});

// Double tap to reset
viewerImage.addEventListener('dblclick', () => {
    viewerScale = 1;
    viewerTranslateX = 0;
    viewerTranslateY = 0;
    updateViewerTransform();
});

// Show Logout Confirmation
logoutBtn.addEventListener('click', () => {
    showLogoutModal();
});

// Cancel Logout
cancelLogout.addEventListener('click', () => {
    logoutModal.style.display = 'none';
    if (mainContent) mainContent.classList.remove('blur-content');
    const alphaDash = document.getElementById('alpha-dashboard');
    if (alphaDash) alphaDash.classList.remove('blur-content');
});

// Confirm Logout
confirmLogout.addEventListener('click', () => {
    // Hide Modal & Remove Blur
    logoutModal.style.display = 'none';
    if (mainContent) mainContent.classList.remove('blur-content');
    const alphaDash = document.getElementById('alpha-dashboard');
    if (alphaDash) alphaDash.classList.remove('blur-content');
    
    // Hide Main Content & Nav
    mainContent.style.display = 'none';
    mainContent.style.opacity = '0';
    mainContent.style.transform = 'translateY(20px)';
    chatInputBar.style.display = 'none';
    if (typeof alphaFriendListContainer !== 'undefined' && alphaFriendListContainer) {
        alphaFriendListContainer.style.display = 'none';
    }
    if (typeof alphaAddFriendFab !== 'undefined' && alphaAddFriendFab) {
        alphaAddFriendFab.style.display = 'none';
    }
    if (headerLogoutBtn) headerLogoutBtn.style.display = 'none';
    
    // Hide Headers on Logout to prevent them showing on login screen
    const defaultHeader = document.querySelector('header');
    if (defaultHeader) defaultHeader.style.display = 'none';
    if (typeof alphaHomeHeader !== 'undefined' && alphaHomeHeader) alphaHomeHeader.style.display = 'none';
    
    // Hide Alpha Dashboard and reset to Home view
    const dashboard = document.getElementById('alpha-dashboard');
    if (dashboard) {
        dashboard.style.display = 'none';
        const homeNavBtn = document.querySelector('#alpha-footer-nav > div:nth-child(1)');
        if (homeNavBtn) homeNavBtn.click();
    }

    // Show Login Overlay & Reset
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    usernameInput.value = '';
    passwordInput.value = '';
    acceptBtn.disabled = true;
    acceptBtn.style.opacity = '0.5';
    acceptBtn.style.cursor = 'not-allowed';
    body.style.overflow = 'hidden';
    body.classList.remove('user-alpha', 'user-beta');
    
    // Re-enable password fields upon logout
    if (usernameInput) usernameInput.disabled = false;
    if (passwordInput) {
        passwordInput.type = 'password';
        passwordInput.disabled = false;
    }
    
    localStorage.removeItem('milbaat_user');
    
    // Update status one last time before clearing
    if (currentUser && db) {
        const userRole = currentUser === ALPHA_ADMIN ? 'Alpha' : 'Beta';
        
        // Explicitly set offline status on logout
        db.ref(`status/${currentUser}`).update({
            online: false,
            lastSeen: firebase.database.ServerValue.TIMESTAMP
        });

        db.ref(`status/${currentUser}`).onDisconnect().cancel();
        db.ref(`typing/${currentUser}`).onDisconnect().cancel();

        db.ref('messages').off();
        if (currentPinnedRef) currentPinnedRef.off();
        db.ref('status').off();
        
        // Detach friend/block listeners
        db.ref(`blocked_users/${currentUser}`).off();
        if (currentUser !== ALPHA_ADMIN) {
            db.ref(`friend_requests/${currentUser}`).off();
        }

        if (currentUser === ALPHA_ADMIN) {
            db.ref('typing').off();
        } else {
            db.ref(`typing/${ALPHA_ADMIN}`).off();
        }

        db.ref(`Profile Pic/${userRole}_Profile_Pic`).off();
        db.ref(`signals/${userRole}_incoming_Audio`).off();
        db.ref(`signals/${userRole}_incoming_Video`).off();
        db.ref(`signals/${userRole}_candidates`).off();
    }

    // Clear Status Logic
    // Reset Profile Image to default
    profileImageDisplay.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
    
    clearInterval(heartbeatInterval);
    if (typeof alphaListInterval !== 'undefined' && alphaListInterval) clearInterval(alphaListInterval);
    userStatusIndicator.style.display = 'none';
    lastSeenDisplay.style.display = 'none';
    headerTypingIndicator.style.display = 'none';
    currentUser = null;
});

// Listen for storage changes (for real-time sync between tabs)
// Removed window.addEventListener('storage') as Firebase handles real-time updates

// Handle Browser Back/Forward Buttons
window.addEventListener('popstate', (e) => {
    // Wrap in setTimeout to ensure mobile WebViews reliably register the new state push
    setTimeout(() => {
        history.pushState({ trap: Date.now() }, "", window.location.href);
    }, 0);

    const isVisible = (el) => el && (el.style.display === 'block' || el.style.display === 'flex');

    // --- Pre-Login Navigation Handling ---
    if (!currentUser) {
        const preLoginModals = [
            { el: document.getElementById('create-user-modal'), closeBtn: 'cancelCreateBtn' },
            { el: document.getElementById('forgot-pass-modal'), closeBtn: 'cancelResetBtn' },
            { el: document.getElementById('numcode-modal'), closeBtn: 'cancelNumCodeBtn' },
            { el: document.getElementById('numcode-register-modal'), closeBtn: 'cancelNumRegisterBtn' }
        ];
        for (let m of preLoginModals) {
            if (isVisible(m.el)) {
                const btn = document.getElementById(m.closeBtn);
                if (btn) btn.click();
                return;
            }
        }
        return;
    }

    // --- Post-Login Navigation Handling ---
    
    // 1. Close Menu if open
    if (isVisible(menuOptions)) {
        menuOptions.style.display = 'none';
        if (menuIconBtn) menuIconBtn.classList.remove('rotate');
        return;
    }

    // 2. Handle Overlays & Modals (Closes top-most layer first)
    const overlayHandlers = [
        { el: forwardMsgModal, closeBtn: 'cancelForwardBtn' },
        { el: imageViewerModal, closeBtn: 'viewerBackBtn' },
        { el: cameraLiveOverlay, closeBtn: 'closeCameraBtn' },
        { el: document.getElementById('image-preview-overlay'), closeBtn: 'closePreviewBtn', fallback: 'retakeBtn' },
        { el: audioRecordingOverlay, closeBtn: 'cancelAudioBtn' },
        { el: incomingCallModal, closeBtn: 'rejectCallBtn' },
        { el: profileModal, closeBtn: 'closeProfileBtn' },
        { el: changePassModal, closeBtn: 'cancelChangePass' },
        { el: deleteMsgModal, closeBtn: 'cancelDeleteMsg' },
        { el: clearChatModal, closeBtn: 'cancelClearChat' },
        { el: messageOptionsModal, closeBtn: 'cancelMsgOptions' },
        { el: document.getElementById('font-modal'), closeBtn: 'font-modal-close' },
        { el: document.getElementById('add-friend-modal'), closeClass: '.close-modal-btn' },
        { el: document.getElementById('friends-list-modal'), closeClass: '.close-modal-btn' },
        { el: document.getElementById('pending-req-modal'), closeClass: '.close-modal-btn' },
        { el: document.getElementById('status-confirm-modal'), closeBtn: 'cancelStatusConfirm' },
        { el: document.getElementById('profile-pic-confirm-modal'), closeBtn: 'cancelProfilePicChange' },
        { el: document.getElementById('delete-status-modal'), closeBtn: 'cancel-del-status' },
        { el: document.getElementById('edit-msg-modal'), closeBtn: 'cancelEditMsg' },
        { el: document.getElementById('clear-specific-call-modal'), closeBtn: 'closeSpecificCallModal' },
        { el: document.getElementById('confirm-specific-call-modal'), closeBtn: 'cancelSpecificCallClear' },
        { el: document.getElementById('unblock-prompt-modal'), closeBtn: 'cancelUnblockPrompt' },
        { el: document.getElementById('blocked-friends-modal'), closeBtn: 'closeBlockedModalBtn' },
        { el: document.getElementById('update-passkey-modal'), closeBtn: 'cancelUpdatePasskey' }
    ];

    for (let m of overlayHandlers) {
        if (isVisible(m.el)) {
            if (m.closeBtn) {
                const btn = document.getElementById(m.closeBtn) || document.getElementById(m.fallback);
                if (btn) btn.click();
            } else if (m.closeClass) {
                const btn = m.el.querySelector(m.closeClass);
                if (btn) btn.click();
            } else if (m.closeSelector) {
                const btn = m.el.querySelector(m.closeSelector);
                if (btn) btn.click();
            }
            return;
        }
    }

    // Handle Call Overlay (Minimize to PiP instead of closing completely)
    if (isVisible(callOverlay)) {
        if (!callOverlay.classList.contains('pip-mode') && typeof callPipBtn !== 'undefined') {
            callPipBtn.click();
            return;
        }
    }

    // 3. Exit Message Selection Mode
    if (isSelectionMode) {
        exitSelectionMode();
        return;
    }

    // 4. If Logout Modal is already open, close it to allow backing out
    if (isVisible(logoutModal)) {
        const cBtn = document.getElementById('cancelLogout');
        if (cBtn) cBtn.click();
        return;
    }

    // 5. Navigation Handling
    if (currentUser === ALPHA_ADMIN) {
        // Case 5a: If in a Chat Page, go back to Main Home Dashboard
        if (currentChatPartner) {
            if (typeof showAlphaHomeScreen === 'function') {
                showAlphaHomeScreen();
                return;
            }
        } 
        // Case 5b: If on Dashboard
        else {
            const alphaMsgView = document.getElementById('alpha-view-message');
            if (alphaMsgView && alphaMsgView.style.display === 'none') {
                // Navigate back to 'Message' tab
                const msgTabBtn = document.querySelector('#alpha-footer-nav > div:nth-child(1)');
                if (msgTabBtn) {
                    msgTabBtn.click();
                    return; // Stop here, do not show logout prompt
                }
            } else {
                // We are on the Message tab. Explicitly show the logout modal.
                showLogoutModal();
                return;
            }
        }
    } else {
        // Default: Beta/Other users are always on the chat screen at root level
        showLogoutModal();
        return;
    }
});

// --- Create New User & Forgot Password Logic ---
(function setupAuthUI() {
    // 1. Inject Links below Password Input
    const pwdInput = document.getElementById('passwordInput');
    if (!pwdInput) return;
    
    // Find the wrapper created by setupPasswordToggle
    const wrapper = pwdInput.closest('div') || pwdInput.parentNode;
    
    // Container for links
    const linksContainer = document.createElement('div');
    linksContainer.style.cssText = 'display: flex; justify-content: space-between; margin-top: 5px; margin-bottom: 15px; width: 100%; box-sizing: border-box; padding: 0 5px;';

    // Forgot Password Link
    const forgotLink = document.createElement('span');
    forgotLink.id = 'forgotPassLink';
    forgotLink.innerText = 'Forgot Password?';
    forgotLink.style.cssText = 'color: #ff6b6b; cursor: pointer; font-size: 0.85rem; text-decoration: underline;';
    
    // Create User Link
    const createLink = document.createElement('span');
    createLink.id = 'createUserLink';
    createLink.innerText = 'Create New User?';
    createLink.style.cssText = 'color: #00d2ff; cursor: pointer; font-size: 0.85rem; text-decoration: underline;';

    // Num Code Login Link Container (Centered below)
    const faceLinkContainer = document.createElement('div');
    faceLinkContainer.style.cssText = 'display: flex; justify-content: center; margin-top: 15px; width: 100%;';
    const numCodeLoginLink = document.createElement('span');
    numCodeLoginLink.id = 'numCodeLoginLink';
    numCodeLoginLink.innerText = 'Num Code Login';
    numCodeLoginLink.style.cssText = 'color: #00d2ff; cursor: pointer; font-size: 0.9rem; text-decoration: underline; font-weight: bold;';
    faceLinkContainer.appendChild(numCodeLoginLink);

    linksContainer.appendChild(forgotLink);
    linksContainer.appendChild(createLink);

    if (wrapper.parentNode) {
        wrapper.parentNode.insertBefore(linksContainer, wrapper.nextSibling);
    }
    
    const loginBtn = document.getElementById('acceptBtn');
    if (loginBtn && loginBtn.parentNode) {
        loginBtn.parentNode.insertBefore(faceLinkContainer, loginBtn.nextSibling);
    } else if (wrapper.parentNode) {
        wrapper.parentNode.insertBefore(faceLinkContainer, linksContainer.nextSibling);
    }

    // 2. Create User Modal
    const createModal = document.createElement('div');
    createModal.id = 'create-user-modal';
    createModal.className = 'modal-overlay';
    // Fix: Increased z-index to 10001 to ensure it's on top of everything
    createModal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10001; align-items: center; justify-content: center; backdrop-filter: blur(5px);';
    
    createModal.innerHTML = `
        <div class="modal-box" style="background: #2d3436; padding: 25px; border-radius: 15px; width: 90%; max-width: 400px; color: white; display: flex; flex-direction: column; gap: 15px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <h2 style="text-align: center; margin: 0 0 10px 0;">Create New User</h2>
            
            <input type="text" id="newUsername" placeholder="Username (Login ID)" style="padding: 10px; border-radius: 5px; border: 1px solid #555; background: rgba(0,0,0,0.2); color: white;">
            <input type="text" id="newName" placeholder="Display Name" style="padding: 10px; border-radius: 5px; border: 1px solid #555; background: rgba(0,0,0,0.2); color: white;">
            <div style="position: relative; width: 100%;">
                <input type="password" id="newPass" placeholder="Password" style="width: 100%; box-sizing: border-box; padding: 10px; padding-right: 40px; border-radius: 5px; border: 1px solid #555; background: rgba(0,0,0,0.2); color: white;">
                <span id="toggleNewPass" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); cursor: pointer; color: rgba(255,255,255,0.7); display: flex; align-items: center;">${ICON_EYE}</span>
            </div>
            <div style="position: relative; width: 100%;">
                <input type="password" id="confirmPass" placeholder="Confirm Password" style="width: 100%; box-sizing: border-box; padding: 10px; padding-right: 40px; border-radius: 5px; border: 1px solid #555; background: rgba(0,0,0,0.2); color: white;">
                <span id="toggleConfirmPass" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); cursor: pointer; color: rgba(255,255,255,0.7); display: flex; align-items: center;">${ICON_EYE}</span>
            </div>
            <input type="text" id="passkeyInput" placeholder="Passkey" style="padding: 10px; border-radius: 5px; border: 1px solid #555; background: rgba(0,0,0,0.2); color: white;">
            
            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                <button id="cancelCreateBtn" style="padding: 10px 20px; border: none; border-radius: 5px; background: #ff4757; color: white; cursor: pointer;">Cancel</button>
                <button id="createAccountBtn" disabled style="padding: 10px 20px; border: none; border-radius: 5px; background: #555; color: rgba(255,255,255,0.5); cursor: not-allowed;">Create</button>
            </div>
        </div>
    `;
    document.body.appendChild(createModal);

    // 3. Forgot Password Modal
    const forgotModal = document.createElement('div');
    forgotModal.id = 'forgot-pass-modal';
    forgotModal.className = 'modal-overlay';
    forgotModal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10001; align-items: center; justify-content: center; backdrop-filter: blur(5px);';
    
    forgotModal.innerHTML = `
        <div class="modal-box" style="background: #2d3436; padding: 25px; border-radius: 15px; width: 90%; max-width: 400px; color: white; display: flex; flex-direction: column; gap: 15px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <h2 style="text-align: center; margin: 0 0 10px 0;">Reset Password</h2>
            
            <input type="text" id="resetUsername" placeholder="Username" style="padding: 10px; border-radius: 5px; border: 1px solid #555; background: rgba(0,0,0,0.2); color: white;">
            <input type="text" id="resetUniqueCode" placeholder="Unique Code (e.g. MILBAAT...)" style="padding: 10px; border-radius: 5px; border: 1px solid #555; background: rgba(0,0,0,0.2); color: white;">
            <input type="text" id="resetPasskey" placeholder="Passkey" style="padding: 10px; border-radius: 5px; border: 1px solid #555; background: rgba(0,0,0,0.2); color: white;">
            <div style="position: relative; width: 100%;">
                <input type="password" id="resetNewPass" placeholder="New Password" style="width: 100%; box-sizing: border-box; padding: 10px; padding-right: 40px; border-radius: 5px; border: 1px solid #555; background: rgba(0,0,0,0.2); color: white;">
                <span id="toggleResetNewPass" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); cursor: pointer; color: rgba(255,255,255,0.7); display: flex; align-items: center;">${ICON_EYE}</span>
            </div>
            <div style="position: relative; width: 100%;">
                <input type="password" id="resetConfirmPass" placeholder="Confirm New Password" style="width: 100%; box-sizing: border-box; padding: 10px; padding-right: 40px; border-radius: 5px; border: 1px solid #555; background: rgba(0,0,0,0.2); color: white;">
                <span id="toggleResetConfirmPass" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); cursor: pointer; color: rgba(255,255,255,0.7); display: flex; align-items: center;">${ICON_EYE}</span>
            </div>
            
            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                <button id="cancelResetBtn" style="padding: 10px 20px; border: none; border-radius: 5px; background: #ff4757; color: white; cursor: pointer;">Cancel</button>
                <button id="confirmResetBtn" disabled style="padding: 10px 20px; border: none; border-radius: 5px; background: #555; color: rgba(255,255,255,0.5); cursor: not-allowed;">Reset</button>
            </div>
        </div>
    `;
    document.body.appendChild(forgotModal);

    // --- Password Toggle Logic ---
    const setupToggle = (inputId, toggleId) => {
        const input = document.getElementById(inputId);
        const toggle = document.getElementById(toggleId);
        if (input && toggle) {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                toggle.innerHTML = type === 'password' ? ICON_EYE : ICON_EYE_OFF;
            });
        }
    };
    setupToggle('newPass', 'toggleNewPass');
    setupToggle('confirmPass', 'toggleConfirmPass');
    setupToggle('resetNewPass', 'toggleResetNewPass');
    setupToggle('resetConfirmPass', 'toggleResetConfirmPass');

    // --- Create User Logic ---
    const createInputs = ['newUsername', 'newName', 'newPass', 'confirmPass', 'passkeyInput'].map(id => document.getElementById(id));
    const [uUser, uName, uPass, uConf, uKey] = createInputs;
    const createBtn = document.getElementById('createAccountBtn');
    const cancelCreateBtn = document.getElementById('cancelCreateBtn');

    createLink.addEventListener('click', () => {
        createModal.style.display = 'flex';
        createInputs.forEach(i => i.value = '');
        validateCreate();
    });

    cancelCreateBtn.addEventListener('click', () => createModal.style.display = 'none');

    function validateCreate() {
        const isValid = uUser.value.trim() && uName.value.trim() && uPass.value && uConf.value && uKey.value === adminPasskey && (uPass.value === uConf.value);
        
        if (isValid) {
            createBtn.disabled = false;
            createBtn.style.background = '#00d2ff';
            createBtn.style.color = 'white';
            createBtn.style.cursor = 'pointer';
        } else {
            createBtn.disabled = true;
            createBtn.style.background = '#555';
            createBtn.style.color = 'rgba(255,255,255,0.5)';
            createBtn.style.cursor = 'not-allowed';
        }
    }

    createInputs.forEach(i => i.addEventListener('input', validateCreate));

    createBtn.addEventListener('click', () => {
        if (createBtn.disabled) return;
        
        const username = uUser.value.trim();
        // Validate username for invalid Firebase key characters
        if (/[.$#[\]/]/.test(username)) {
            alert("Username cannot contain '.', '$', '#', '[', ']', or '/'");
            return;
        }

        const uniqueCode = "MILBAAT" + Math.floor(10000000 + Math.random() * 90000000);
        const dateObj = new Date();
        const formattedDate = String(dateObj.getDate()).padStart(2, '0') + '/' + String(dateObj.getMonth() + 1).padStart(2, '0') + '/' + dateObj.getFullYear();
        const userData = {
            username: username,
            name: uName.value.trim(),
            password: uPass.value,
            uniqueCode: uniqueCode,
            profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            accountOpeningDate: formattedDate
        };

        if (db) {
            db.ref('Other User Table/' + userData.username).set(userData).then(() => {
                alert("User Creation successfully");
                createModal.style.display = 'none';
                
                // Auto Login
                usernameInput.value = userData.username;
                passwordInput.value = userData.password;
                acceptBtn.click();
            }).catch(e => {
                console.error("Create User Error:", e);
                // Show detailed error message
                alert("Error creating user: " + e.message + "\n\n(If PERMISSION_DENIED, check Firebase Database Rules)");
            });
        } else {
            alert("Database not connected. Please check your configuration.");
        }
    });

    // --- Forgot Password Logic ---
    const resetInputs = ['resetUsername', 'resetUniqueCode', 'resetPasskey', 'resetNewPass', 'resetConfirmPass'].map(id => document.getElementById(id));
    const [rUser, rCode, rKey, rPass, rConf] = resetInputs;
    const resetBtn = document.getElementById('confirmResetBtn');
    const cancelResetBtn = document.getElementById('cancelResetBtn');

    // Auto Uppercase for Unique Code
    if (rCode) {
        rCode.addEventListener('input', function() {
            this.value = this.value.toUpperCase();
        });
    }

    forgotLink.addEventListener('click', () => {
        forgotModal.style.display = 'flex';
        resetInputs.forEach(i => i.value = '');
        validateReset();
    });

    cancelResetBtn.addEventListener('click', () => forgotModal.style.display = 'none');

    function validateReset() {
        const isValid = rUser.value.trim() && rCode.value.trim() && rKey.value === adminPasskey && rPass.value && (rPass.value === rConf.value);
        
        if (isValid) {
            resetBtn.disabled = false;
            resetBtn.style.background = '#00d2ff';
            resetBtn.style.color = 'white';
            resetBtn.style.cursor = 'pointer';
        } else {
            resetBtn.disabled = true;
            resetBtn.style.background = '#555';
            resetBtn.style.color = 'rgba(255,255,255,0.5)';
            resetBtn.style.cursor = 'not-allowed';
        }
    }

    resetInputs.forEach(i => i.addEventListener('input', validateReset));

    resetBtn.addEventListener('click', () => {
        if (resetBtn.disabled) return;

        if (db) {
            const username = rUser.value.trim();
            db.ref('Other User Table/' + username).once('value').then(snapshot => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    if (data.uniqueCode === rCode.value.trim()) {
                        // Update Password
                        db.ref('Other User Table/' + username + '/password').set(rPass.value).then(() => {
                            // Update numcode_data password as well
                            db.ref('numcode_data').once('value').then(snap => {
                                if (snap.exists()) {
                                    const numData = snap.val();
                                    const updates = {};
                                    for (let codeKey in numData) {
                                        if (numData[codeKey] && numData[codeKey].userId === username) {
                                            updates[`numcode_data/${codeKey}/password`] = rPass.value;
                                        }
                                    }
                                    if (Object.keys(updates).length > 0) {
                                        db.ref().update(updates).catch(e => console.error("Error updating numcode password:", e));
                                    }
                                }
                            });
                            
                            alert("Password Reset Successfully! Please Login.");
                            forgotModal.style.display = 'none';
                        });
                    } else {
                        alert("Invalid Unique Code for this user.");
                    }
                } else {
                    alert("User not found.");
                }
            }).catch(e => {
                console.error(e);
                alert("Error resetting password.");
            });
        }
    });
})();

function makeImageZoomable(img) {
    let scale = 1;
    let panning = false;
    let pointX = 0, pointY = 0;
    let startX = 0, startY = 0;
    let initialDistance = 0;
    let initialScale = 1;

    const updateTransform = () => {
        img.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
        img.style.transformOrigin = 'center center';
        img.style.transition = panning ? 'none' : 'transform 0.1s ease-out';
    };

    img.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
        if (delta > 0) scale *= 1.1;
        else scale /= 1.1;
        scale = Math.min(Math.max(1, scale), 2);
        if (scale === 1) { pointX = 0; pointY = 0; }
        updateTransform();
    }, { passive: false });

    img.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
            e.preventDefault();
            initialDistance = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
            initialScale = scale;
        } else if (e.touches.length === 1) {
            panning = true;
            startX = e.touches[0].pageX - pointX;
            startY = e.touches[0].pageY - pointY;
        }
    }, { passive: false });

    img.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2) {
            e.preventDefault();
            const currentDistance = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
            scale = Math.min(Math.max(1, initialScale * (currentDistance / initialDistance)), 2);
            updateTransform();
        } else if (e.touches.length === 1 && panning && scale > 1) {
            e.preventDefault();
            pointX = e.touches[0].pageX - startX;
            pointY = e.touches[0].pageY - startY;
            updateTransform();
        }
    }, { passive: false });

    img.addEventListener('touchend', () => {
        panning = false;
    });

    img.addEventListener('dblclick', () => {
        scale = 1; pointX = 0; pointY = 0;
        updateTransform();
    });
    
    img.style.touchAction = 'none';
}

function createStatusSlider(container, imageUrls, isEditable, dotsContainerNode = null) {
    container.innerHTML = ''; // Clear previous content
    if (dotsContainerNode) dotsContainerNode.innerHTML = '';

    if (!imageUrls || imageUrls.length === 0) {
        container.innerHTML = '<p style="text-align:center; opacity:0.7; color: white;">No status to display.</p>';
        return;
    }

    // 1. Create Slider Wrapper
    const sliderWrapper = document.createElement('div');
    sliderWrapper.style.cssText = `
        display: flex;
        width: 100%;
        height: 100%;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none; /* Firefox */
        border-radius: inherit;
    `;
    sliderWrapper.style.setProperty('-ms-overflow-style', 'none');  /* IE and Edge */
    sliderWrapper.className = 'status-slider-wrapper';

    const sliderStyle = document.createElement('style');
    if (!document.querySelector('#status-slider-styles')) {
        sliderStyle.id = 'status-slider-styles';
        sliderStyle.innerHTML = `.status-slider-wrapper::-webkit-scrollbar { display: none; }`;
        document.head.appendChild(sliderStyle);
    }

    // 2. Create Slides
    imageUrls.forEach(url => {
        const slide = document.createElement('div');
        slide.style.cssText = `
            flex: 0 0 100%;
            width: 100%;
            height: 100%;
            scroll-snap-align: center;
            scroll-snap-stop: always;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        const img = document.createElement('img');
        img.src = url;
        img.style.cssText = `
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            display: block;
        `;
        slide.appendChild(img);
        sliderWrapper.appendChild(slide);
    });

    container.appendChild(sliderWrapper);

    // 3. Create Dots
    if (imageUrls.length > 0) {
        let actualDotsContainer = dotsContainerNode;
        if (!actualDotsContainer) {
            actualDotsContainer = document.createElement('div');
            actualDotsContainer.style.cssText = `
                position: absolute;
                bottom: 15px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                gap: 8px;
                z-index: 10;
            `;
            container.appendChild(actualDotsContainer);
        }

        for (let i = 0; i < imageUrls.length; i++) {
            const dot = document.createElement('span');
            dot.style.cssText = `
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: rgba(128, 128, 128, 0.5);
                transition: background-color 0.3s;
            `;
            actualDotsContainer.appendChild(dot);
        }

        const updateDots = () => {
            const scrollLeft = sliderWrapper.scrollLeft;
            const slideWidth = sliderWrapper.offsetWidth;
            const currentIndex = Math.round(scrollLeft / slideWidth) || 0;
            
            actualDotsContainer.childNodes.forEach((dot, index) => {
                dot.style.backgroundColor = (index === currentIndex) ? 'white' : 'rgba(128, 128, 128, 0.5)';
            });
        };

        sliderWrapper.addEventListener('scroll', updateDots);
        updateDots(); // Initial call
    }
}

function openBetaStatusModal() {
    db.ref('beta_status_feed').once('value').then(snap => {
        const data = snap.val();
        const imageUrls = (data && data.images) ? data.images : (data && data.image ? [data.image] : []);

        if (imageUrls.length > 0) {
            currentViewerImages = imageUrls.map((url, index) => ({ id: 'status_' + index, image: url }));
            currentViewerIndex = 0;

            imageViewerModal.style.display = 'flex';
            updateImageViewer();

            const editBtn = document.getElementById('viewerEditBtn');
            if (editBtn) editBtn.style.display = 'none';

            const forwardBtn = document.getElementById('viewerForwardBtn');
            if (forwardBtn) forwardBtn.style.display = 'none';

            const prevBtn = document.getElementById('viewerPrevBtn');
            const nextBtn = document.getElementById('viewerNextBtn');
            if (prevBtn) prevBtn.style.display = 'flex';
            if (nextBtn) nextBtn.style.display = 'flex';

            viewerScale = 1;
            viewerTranslateX = 0;
            viewerTranslateY = 0;
            updateViewerTransform();
            
            const v = document.getElementById('viewerVideoElement');
            if(v) {
                v.style.display = 'none';
                v.pause();
            }
            viewerImage.style.display = 'block';
        } else {
            showToast("No status uploaded yet.");
        }
    });
}

// --- Friend System Logic ---
(function setupFriendSystem() {
    // 1. Create Modals
    const createModal = (id, title) => {
        if (document.getElementById(id)) return document.getElementById(id);
        const modal = document.createElement('div');
        modal.id = id;
        modal.className = 'modal-overlay';
        modal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10001; align-items: center; justify-content: center; backdrop-filter: blur(5px);';
        modal.innerHTML = `
            <div class="modal-box" style="background: #2d3436; padding: 20px; border-radius: 15px; width: 90%; max-width: 400px; color: white; display: flex; flex-direction: column; gap: 15px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5); max-height: 80vh; overflow-y: auto;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h3 style="margin:0;">${title}</h3>
                    <button class="close-modal-btn" style="background:none; border:none; color:white; font-size:1.2rem; cursor:pointer;">✖</button>
                </div>
                <div class="modal-content" style="display:flex; flex-direction:column; gap:10px;"></div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.querySelector('.close-modal-btn').onclick = () => {
            modal.style.display = 'none';
            if (mainContent) mainContent.classList.remove('blur-content');
        };
        return modal;
    };

    createModal('add-friend-modal', 'Add Friend');
    createModal('friends-list-modal', 'My Friends');
    createModal('pending-req-modal', 'Pending Requests');

    // 2. Add Menu Items
    const menu = document.getElementById('menuOptions');
    if (menu) {
        const createMenuBtn = (id, text, onClick) => {
            const btn = document.createElement('button');
            btn.id = id;
            btn.innerHTML = text;
            btn.style.cssText = "display: none; width: 100%; padding: 12px 15px; text-align: left; background: none; border: none; color: white; cursor: pointer; font-size: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);";
            btn.onmouseover = () => btn.style.background = 'rgba(255,255,255,0.1)';
            btn.onmouseout = () => btn.style.background = 'none';
            btn.onclick = () => {
                menu.style.display = 'none';
                document.getElementById('menuIconBtn').classList.remove('rotate');
                onClick();
            };
            return btn;
        };

        const addFriendBtn = createMenuBtn('menuAddFriendBtn', 'Add Friends', openAddFriendModal);
        const friendsBtn = createMenuBtn('menuFriendsBtn', 'Friends', openFriendsListModal);
        const pendingBtn = createMenuBtn('menuPendingBtn', `Pending Requests <span id="pending-req-badge" style="background-color: #ff4757; color: white; border-radius: 10px; padding: 2px 6px; font-size: 12px; font-weight: bold; display: none; margin-left: 8px;"></span>`, openPendingReqModal);
        const alphaStatusBtn = createMenuBtn('alphaStatusBtn', 'Alpha Status', openBetaStatusModal);
        const backToBetaBtn = createMenuBtn('menuBackToBetaBtn', 'Back to Beta', () => {
            if (currentChatPartner === BETA_ADMIN) {
                alert("Already in Beta user...");
            } else {
                currentChatPartner = BETA_ADMIN;
                const logo = document.querySelector('.logo');
                if(logo) logo.innerText = "Beta";
                filterAndRenderChat();
                updatePinnedMessageListener();
                showToast("Back to Beta Chat");
                startHeartbeat();
            }
        });

        // Append to menu (Order is handled by menuIconBtn click handler)
        menu.appendChild(backToBetaBtn);
        menu.appendChild(alphaStatusBtn);
        menu.appendChild(pendingBtn);
        menu.appendChild(friendsBtn);
        menu.appendChild(addFriendBtn);
    }

    function openAddFriendModal() {
        const modal = document.getElementById('add-friend-modal');
        const content = modal.querySelector('.modal-content');
        content.innerHTML = `
            <div style="display:flex; gap:10px;">
                <input type="text" id="friendSearchInput" placeholder="Enter Unique ID" style="flex:1; padding:10px; border-radius:5px; border:none; background:rgba(29, 23, 23, 0.2); color:white;">
                <button id="friendSearchBtn" style="padding:10px; border-radius:5px; border:none; background:#0984e3; color:white; cursor:pointer;">Search</button>
            </div>
            <div id="friendSearchResult" style="margin-top:15px;"></div>
        `;
        
        document.getElementById('friendSearchBtn').onclick = () => {
            const code = document.getElementById('friendSearchInput').value.trim().toUpperCase();
            if(!code) return;
            const resDiv = document.getElementById('friendSearchResult');
            resDiv.innerHTML = 'Searching...';
            
            db.ref('Other User Table').orderByChild('uniqueCode').equalTo(code).once('value').then(snap => {
                if(snap.exists()) {
                    const uid = Object.keys(snap.val())[0];
                    const user = snap.val()[uid];
                    if (uid === currentUser) { resDiv.innerHTML = '<p style="color:orange;">That is you!</p>'; return; }

                    resDiv.innerHTML = `
                        <div style="display:flex; align-items:center; gap:15px; background:rgba(255,255,255,0.1); padding:10px; border-radius:10px;">
                            <img src="${user.profilePic || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}" style="width:50px; height:50px; border-radius:50%; object-fit:cover;">
                            <div style="flex:1;">
                                <div style="font-weight:bold;">${user.name}</div>
                            </div>
                            <button id="sendReqBtn" style="padding:8px 12px; border-radius:5px; border:none; background:#00b894; color:white; cursor:pointer;">Add Friend</button>
                        </div>
                    `;
                    document.getElementById('sendReqBtn').onclick = () => {
                        db.ref(`friend_requests/${uid}/${currentUser}`).set({ sender: currentUser, timestamp: firebase.database.ServerValue.TIMESTAMP })
                            .then(() => resDiv.innerHTML = '<p style="color:#00b894;">Friend Request Sent!</p>');
                    };
                } else { resDiv.innerHTML = '<p style="color:#ff7675;">User not found.</p>'; }
            });
        };
        modal.style.display = 'flex';
        if (mainContent) mainContent.classList.add('blur-content');
    }

    function openPendingReqModal() {
        const modal = document.getElementById('pending-req-modal');
        const content = modal.querySelector('.modal-content');
        content.innerHTML = 'Loading...';
        
        db.ref(`friend_requests/${currentUser}`).once('value').then(snap => {
            content.innerHTML = '';
            if(!snap.exists()) { content.innerHTML = '<p style="text-align:center; opacity:0.7;">No pending requests.</p>'; return; }
            
            snap.forEach(child => {
                const req = child.val();
                const senderId = req.sender;
                const senderRole = getUserRole(senderId);
                db.ref(`Profile Pic/${senderRole}_Profile_Pic`).once('value').then(picSnap => {
                    const pic = picSnap.val() || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
                    const name = (senderId === ALPHA_ADMIN) ? 'Alpha' : senderId;
                    const item = document.createElement('div');
                    item.style.cssText = 'display:flex; align-items:center; gap:15px; background:rgba(255,255,255,0.1); padding:10px; border-radius:10px; margin-bottom:10px;';
                    item.innerHTML = `<img src="${pic}" style="width:50px; height:50px; border-radius:50%; object-fit:cover;"><div style="flex:1;"><div style="font-weight:bold;">${name}</div></div><button class="confirm-req-btn" style="padding:8px 12px; border-radius:5px; border:none; background:#0984e3; color:white; cursor:pointer;">Confirm</button>`;
                    item.querySelector('.confirm-req-btn').onclick = () => {
                        db.ref(`friends/${senderId}/${currentUser}`).set({ since: firebase.database.ServerValue.TIMESTAMP });
                        db.ref(`friend_requests/${currentUser}/${senderId}`).remove();
                        item.innerHTML = '<p style="color:#00b894; width:100%; text-align:center;">Request Accepted!</p>';
                        setTimeout(() => item.remove(), 2000);
                    };
                    content.appendChild(item);
                });
            });
        });
        modal.style.display = 'flex';
        if (mainContent) mainContent.classList.add('blur-content');
    }

    function openFriendsListModal() {
        const modal = document.getElementById('friends-list-modal');
        const content = modal.querySelector('.modal-content');
        content.innerHTML = 'Loading...';
        db.ref(`friends/${currentUser}`).once('value').then(snap => {
            content.innerHTML = '';
            if(!snap.exists()) { content.innerHTML = '<p style="text-align:center; opacity:0.7;">No friends yet.</p>'; return; }
            snap.forEach(child => {
                const friendId = child.key;
                db.ref(`Other User Table/${friendId}`).once('value').then(userSnap => {
                    let name = friendId, pic = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
                    if(userSnap.exists()) { const u = userSnap.val(); name = u.name; if (u.profilePic) pic = u.profilePic; }
                    const item = document.createElement('div');
                    item.style.cssText = 'display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.1); padding:10px; border-radius:10px; margin-bottom:10px;';

                    item.innerHTML = `
                        <img src="${pic}" style="width:50px; height:50px; border-radius:50%; object-fit:cover;">
                        <div style="flex:1;"><div style="font-weight:bold;">${name}</div></div>
                        <button class="unfriend-btn" style="padding:8px 12px; border-radius:5px; border:none; background:#ff4757; color:white; cursor:pointer;">Unfriend</button>
                    `;

                    item.querySelector('.unfriend-btn').onclick = () => {
                        if (confirm(`Are you sure you want to unfriend ${name}?`)) {
                            const updates = {};
                            updates[`friends/${currentUser}/${friendId}`] = null;
                            updates[`friends/${friendId}/${currentUser}`] = null; // Remove both ways

                            db.ref().update(updates).then(() => {
                                showToast(`You are no longer friends with ${name}.`);
                                item.remove();
                            }).catch(err => {
                                showToast(`Failed to unfriend: ${err.message}`);
                            });
                        }
                    };

                    content.appendChild(item);
                });
            });
        });
        modal.style.display = 'flex';
        if (mainContent) mainContent.classList.add('blur-content');
    }
})();

// --- Specific Call History Clear Logic ---
window.openClearSpecificCallModal = function() {
    let modal = document.getElementById('clear-specific-call-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'clear-specific-call-modal';
        modal.className = 'modal-overlay';
        modal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10005; align-items: center; justify-content: center; backdrop-filter: blur(5px);';
        modal.innerHTML = `
            <div class="modal-box" style="background: var(--alpha-card-bg, #1E293B); padding: 20px; border-radius: 15px; width: 90%; max-width: 400px; color: var(--alpha-text, white); display: flex; flex-direction: column; gap: 15px; border: 1px solid var(--alpha-border, rgba(255,255,255,0.1)); max-height: 80vh;">
                <h3 style="margin:0; text-align: center;">Clear Call History</h3>
                <p style="text-align: center; opacity: 0.7; font-size: 0.9rem; margin: 0;">Select a user to clear their call history</p>
                <div id="specific-call-list" style="flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; padding-right: 5px;"></div>
                <button id="closeSpecificCallModal" class="modal-btn cancel-btn" style="padding: 10px; border-radius: 8px; cursor: pointer; border: none; background: rgba(128,128,128,0.2); color: var(--alpha-text, white); font-weight: bold;">Cancel</button>
            </div>
        `;
        document.body.appendChild(modal);
        document.getElementById('closeSpecificCallModal').onclick = () => {
            modal.style.display = 'none';
            const dash = document.getElementById('alpha-dashboard');
            if (dash) dash.classList.remove('blur-content');
        };
    }

    const listContainer = document.getElementById('specific-call-list');
    listContainer.innerHTML = '';

    const uniquePartners = [...new Set(alphaCallHistoryData.map(r => r.partner))];
    
    if (uniquePartners.length === 0) {
        listContainer.innerHTML = '<div style="text-align:center; padding: 20px; color: gray;">No call history available.</div>';
    } else {
        // Add "All Users" option at the top
        const allItem = document.createElement('div');
        allItem.style.cssText = 'padding: 12px 15px; background: rgba(255,71,87,0.1); border-radius: 10px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; border: 1px solid rgba(255,71,87,0.2); transition: background 0.2s; margin-bottom: 15px;';
        allItem.onmouseover = () => allItem.style.background = 'rgba(255,71,87,0.2)';
        allItem.onmouseout = () => allItem.style.background = 'rgba(255,71,87,0.1)';
        allItem.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: #ff4757; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: white;">🗑️</div>
                <span style="font-weight: bold; font-size: 1.1rem; color: #ff4757;">Clear All Call History</span>
            </div>
        `;
        allItem.onclick = () => {
            openConfirmSpecificCallModal('ALL', 'All Users');
        };
        listContainer.appendChild(allItem);

        uniquePartners.forEach(partner => {
            let displayName = partner;
            if (partner === BETA_ADMIN) displayName = "Beta";
            else if (partner === ALPHA_ADMIN) displayName = "Alpha";
            
            const item = document.createElement('div');
            item.style.cssText = 'padding: 12px 15px; background: rgba(255,255,255,0.05); border-radius: 10px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; border: 1px solid rgba(255,255,255,0.05); transition: background 0.2s;';
            item.onmouseover = () => item.style.background = 'rgba(255,255,255,0.1)';
            item.onmouseout = () => item.style.background = 'rgba(255,255,255,0.05)';
            item.innerHTML = `
                <div style="display: flex; align-items: center; gap: 12px;">
                    <img id="specific-clear-pic-${partner}" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
                    <span class="partner-name-display" style="font-weight: bold; font-size: 1.05rem;">${displayName}</span>
                </div>
                <span style="color: #ff4757; font-size: 1.2rem;">🗑️</span>
            `;
            
            if (partner !== BETA_ADMIN && partner !== ALPHA_ADMIN) {
                db.ref(`Other User Table/${partner}`).once('value').then(s => {
                    if (s.exists() && s.val().name) {
                        displayName = s.val().name;
                        const nameSpan = item.querySelector('.partner-name-display');
                        if (nameSpan) nameSpan.innerText = displayName;
                    }
                });
            }
            
            // Load profile picture
            const picEl = item.querySelector(`#specific-clear-pic-${partner}`);
            const role = getUserRole(partner);
            db.ref(`Profile Pic/${role}_Profile_Pic`).once('value').then(s => { 
                if(s.exists() && picEl) picEl.src = s.val(); 
            });
            
            item.onclick = () => {
                openConfirmSpecificCallModal(partner, displayName);
            };
            listContainer.appendChild(item);
        });
    }

    modal.style.display = 'flex';
    const dash = document.getElementById('alpha-dashboard');
    if (dash) dash.classList.add('blur-content');
};

window.openConfirmSpecificCallModal = function(partnerId, partnerName) {
    let confirmModal = document.getElementById('confirm-specific-call-modal');
    if (!confirmModal) {
        confirmModal = document.createElement('div');
        confirmModal.id = 'confirm-specific-call-modal';
        confirmModal.className = 'modal-overlay';
        confirmModal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10006; align-items: center; justify-content: center; backdrop-filter: blur(5px);';
        confirmModal.innerHTML = `
            <div class="modal-box" style="background: var(--alpha-card-bg, #1E293B); padding: 25px; border-radius: 15px; width: 85%; max-width: 350px; color: var(--alpha-text, white); display: flex; flex-direction: column; gap: 15px; border: 1px solid var(--alpha-border, rgba(255,255,255,0.1)); text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <h3 style="margin:0; font-size: 1.3rem;">Confirm Delete</h3>
                <p id="confirm-specific-call-text" style="opacity: 0.8; font-size: 1rem; margin: 0; line-height: 1.4;"></p>
                <div style="display: flex; gap: 10px; margin-top: 10px;">
                    <button id="cancelSpecificCallClear" class="modal-btn cancel-btn" style="flex: 1; padding: 10px; border-radius: 8px; cursor: pointer; border: none; background: rgba(128,128,128,0.2); color: var(--alpha-text, white); font-weight: bold;">Cancel</button>
                    <button id="confirmSpecificCallClear" class="modal-btn confirm-btn" style="flex: 1; padding: 10px; border-radius: 8px; cursor: pointer; border: none; background: #ff4757; color: white; font-weight: bold;">Delete</button>
                </div>
            </div>
        `;
        document.body.appendChild(confirmModal);
        
        document.getElementById('cancelSpecificCallClear').onclick = () => {
            confirmModal.style.display = 'none';
        };
    }

    if (partnerId === 'ALL') {
        document.getElementById('confirm-specific-call-text').innerHTML = `Are you sure you want to delete <b style="color:#ff4757; font-size: 1.1rem;">ALL</b> call history? <br>This action cannot be undone.`;
    } else {
        document.getElementById('confirm-specific-call-text').innerHTML = `Are you sure you want to delete all call history with <br><b style="color:#0EA5E9; font-size: 1.1rem;">${partnerName}</b>?`;
    }
    
    const confirmBtn = document.getElementById('confirmSpecificCallClear');
    confirmBtn.onclick = () => {
        confirmBtn.innerText = 'Deleting...';
        confirmBtn.disabled = true;

        if (partnerId === 'ALL') {
            db.ref(`call_history/${currentUser}`).remove().then(() => {
                showToast(`All call history cleared`);
                confirmModal.style.display = 'none';
                document.getElementById('clear-specific-call-modal').style.display = 'none';
                const dash = document.getElementById('alpha-dashboard');
                if (dash) dash.classList.remove('blur-content');
            }).catch(err => {
                showToast("Failed to clear call history");
                console.error(err);
            }).finally(() => {
                confirmBtn.innerText = 'Delete';
                confirmBtn.disabled = false;
            });
        } else {
            const updates = {};
            alphaCallHistoryData.forEach(record => {
                if (record.partner === partnerId) {
                    updates[`call_history/${currentUser}/${record.id}`] = null;
                }
            });

            db.ref().update(updates).then(() => {
                showToast(`Call history with ${partnerName} deleted`);
                confirmModal.style.display = 'none';
                document.getElementById('clear-specific-call-modal').style.display = 'none';
                const dash = document.getElementById('alpha-dashboard');
                if (dash) dash.classList.remove('blur-content');
            }).catch(err => {
                showToast("Failed to delete call history");
                console.error(err);
            }).finally(() => {
                confirmBtn.innerText = 'Delete';
                confirmBtn.disabled = false;
            });
        }
    };

    confirmModal.style.display = 'flex';
};

window.openBlockedFriendsModal = function() {
    let modal = document.getElementById('blocked-friends-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'blocked-friends-modal';
        modal.className = 'modal-overlay';
        modal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10005; align-items: center; justify-content: center; backdrop-filter: blur(5px);';
        modal.innerHTML = `
            <div class="modal-box" style="background: var(--alpha-card-bg, #1E293B); padding: 20px; border-radius: 15px; width: 90%; max-width: 400px; color: var(--alpha-text, white); display: flex; flex-direction: column; gap: 15px; border: 1px solid var(--alpha-border, rgba(255,255,255,0.1)); box-shadow: 0 10px 30px rgba(0,0,0,0.5); max-height: 80vh;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h3 style="margin:0;">Blocked Friends</h3>
                    <button id="closeBlockedModalBtn" style="background:none; border:none; color: var(--alpha-text, white); font-size:1.2rem; cursor:pointer;">✖</button>
                </div>
                <div id="blocked-friends-list" style="display:flex; flex-direction:column; gap:10px; overflow-y:auto; padding-right: 5px;"></div>
            </div>
        `;
        document.body.appendChild(modal);
        document.getElementById('closeBlockedModalBtn').onclick = () => {
            modal.style.display = 'none';
            const dash = document.getElementById('alpha-dashboard');
            if (dash) dash.classList.remove('blur-content');
        };
    }
    
    const listContainer = document.getElementById('blocked-friends-list');
    listContainer.innerHTML = '';
    
    if (blockedUsersSet.size === 0) {
        listContainer.innerHTML = '<p style="text-align:center; opacity:0.7;">No blocked users.</p>';
    } else {
        blockedUsersSet.forEach(userId => {
            const item = document.createElement('div');
            item.style.cssText = 'display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.05); padding:10px; border-radius:10px; border:1px solid rgba(255,255,255,0.05);';
            item.innerHTML = `
                <img id="blocked-pic-${userId}" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" style="width:40px; height:40px; border-radius:50%; object-fit:cover;">
                <div style="flex:1; font-weight:bold; overflow:hidden; text-overflow:ellipsis; text-align: left;" id="blocked-name-${userId}">${userId}</div>
                <button class="unblock-btn" style="padding:8px 12px; border-radius:5px; border:none; background:#2ecc71; color:white; cursor:pointer; font-weight:bold;">Unblock</button>
            `;
            
            item.querySelector('.unblock-btn').onclick = () => {
                const updates = {};
                updates[`blocked_users/${currentUser}/${userId}`] = null;
                if (userId === ALPHA_ADMIN) {
                    updates[`blocked_users/${ALPHA_ADMIN}/${currentUser}`] = null;
                }
                db.ref().update(updates).then(() => {
                    showToast("User unblocked.");
                    item.remove();
                    if (listContainer.children.length === 0) {
                        listContainer.innerHTML = '<p style="text-align:center; opacity:0.7;">No blocked users.</p>';
                    }
                });
            };
            
            listContainer.appendChild(item);
            
            let displayName = userId;
            if (userId === BETA_ADMIN) displayName = "Beta";
            else if (userId === ALPHA_ADMIN) displayName = "Alpha";
            else {
                db.ref(`Other User Table/${userId}`).once('value').then(s => {
                    if (s.exists() && s.val().name) {
                        const nameEl = document.getElementById(`blocked-name-${userId}`);
                        if (nameEl) nameEl.innerText = s.val().name;
                    }
                });
            }
            if (userId === BETA_ADMIN || userId === ALPHA_ADMIN) {
                const nameEl = document.getElementById(`blocked-name-${userId}`);
                if (nameEl) nameEl.innerText = displayName;
            }
            
            const role = getUserRole(userId);
            db.ref(`Profile Pic/${role}_Profile_Pic`).once('value').then(s => { 
                if (s.exists()) {
                    const picEl = document.getElementById(`blocked-pic-${userId}`);
                    if (picEl) picEl.src = s.val();
                }
            });
        });
    }
    
    modal.style.display = 'flex';
    const dash = document.getElementById('alpha-dashboard');
    if (dash) dash.classList.add('blur-content');
};

window.openUpdatePasskeyModal = function() {
    let modal = document.getElementById('update-passkey-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'update-passkey-modal';
        modal.className = 'modal-overlay';
        modal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10005; align-items: center; justify-content: center; backdrop-filter: blur(5px);';
        modal.innerHTML = `
            <div class="modal-box" style="background: var(--alpha-card-bg, #1E293B); padding: 25px; border-radius: 15px; width: 90%; max-width: 400px; color: var(--alpha-text, white); display: flex; flex-direction: column; gap: 15px; border: 1px solid var(--alpha-border, rgba(255,255,255,0.1)); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <h3 style="margin:0; text-align: center;">Update Admin Passkey</h3>
                <input type="text" id="oldAdminPasskey" placeholder="Old Passkey" style="padding: 10px; border-radius: 5px; border: 1px solid #555; background: rgba(0,0,0,0.2); color: white; width: 100%; box-sizing: border-box;">
                <input type="text" id="newAdminPasskey" placeholder="New Passkey" style="padding: 10px; border-radius: 5px; border: 1px solid #555; background: rgba(0,0,0,0.2); color: white; width: 100%; box-sizing: border-box;">
                <div id="updatePasskeyError" style="color: #ff4757; font-size: 0.85rem; display: none; text-align: center; font-weight: bold;"></div>
                <div style="display: flex; gap: 10px; margin-top: 10px;">
                    <button id="cancelUpdatePasskey" class="modal-btn cancel-btn" style="flex: 1; padding: 10px; border-radius: 8px; cursor: pointer; border: none; background: rgba(128,128,128,0.2); color: var(--alpha-text, white); font-weight: bold;">Cancel</button>
                    <button id="confirmUpdatePasskey" class="modal-btn confirm-btn" style="flex: 1; padding: 10px; border-radius: 8px; cursor: pointer; border: none; background: #0EA5E9; color: white; font-weight: bold;">Update</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        document.getElementById('cancelUpdatePasskey').onclick = () => {
            modal.style.display = 'none';
            const dash = document.getElementById('alpha-dashboard');
            if (dash) dash.classList.remove('blur-content');
        };

        document.getElementById('confirmUpdatePasskey').onclick = () => {
            const oldP = document.getElementById('oldAdminPasskey').value.trim();
            const newP = document.getElementById('newAdminPasskey').value.trim();
            const err = document.getElementById('updatePasskeyError');

            if (oldP !== adminPasskey) {
                err.innerText = "Incorrect Old Passkey";
                err.style.display = 'block';
                triggerShake(document.getElementById('oldAdminPasskey'));
                return;
            }
            if (!newP) {
                err.innerText = "New Passkey cannot be empty";
                err.style.display = 'block';
                triggerShake(document.getElementById('newAdminPasskey'));
                return;
            }

            // Update local state & Database
            adminPasskey = newP;
            db.ref('admin_config/passkey').set(newP).then(() => {
                showToast("Admin Passkey updated successfully!");
                modal.style.display = 'none';
                const dash = document.getElementById('alpha-dashboard');
                if (dash) dash.classList.remove('blur-content');
            }).catch(e => {
                err.innerText = "Error saving to database";
                err.style.display = 'block';
            });
        };
    }
    
    document.getElementById('oldAdminPasskey').value = '';
    document.getElementById('newAdminPasskey').value = '';
    document.getElementById('updatePasskeyError').style.display = 'none';
    
    modal.style.display = 'flex';
    const dash = document.getElementById('alpha-dashboard');
    if (dash) dash.classList.add('blur-content');
};

// --- Alpha User Home Screen Logic ---
let alphaFriendListContainer;
let alphaBackBtn;
let alphaHomeHeader;
let alphaAddFriendFab;
let alphaStatusListener = null;
let alphaTypingListener = null;
let alphaListInterval = null;

function initAlphaUI() {
    if (document.getElementById('alpha-dashboard')) return;

    const dashboard = document.createElement('div');
    dashboard.id = 'alpha-dashboard';
    dashboard.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: var(--alpha-bg, #0F172A); display: none; flex-direction: column;
        z-index: 900;
    `;
    document.body.appendChild(dashboard);

    // 2. Header
    alphaHomeHeader = document.createElement('div');
    alphaHomeHeader.id = 'alpha-home-header';
    alphaHomeHeader.style.cssText = `
        width: 100%; height: 65px;
        display: flex; align-items: center; justify-content: space-between; padding: 0 15px;
        background: var(--alpha-header-bg,#0F172A);
        border-bottom: 2px solid rgba(24, 132, 210, 0.934); z-index: 1000; box-sizing: border-box;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); color: var(--alpha-text, white); flex-shrink: 0;
        
    `;

    const titleText = document.createElement('div');
    titleText.innerText = 'Mil Baat';
    titleText.style.cssText = `
        font-size: 1.6rem; font-weight: bold; letter-spacing: 1px; color: #176bf2; text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    `;
    alphaHomeHeader.appendChild(titleText);

    let currentStatusCount = 0;
    
    const headerActionBtn = document.createElement('div');
    headerActionBtn.id = 'alpha-header-action-btn';
    headerActionBtn.style.cssText = 'cursor: pointer; display: flex; align-items: center; justify-content: center; position: relative; padding: 5px;';
    
    const headerActionIcon = document.createElement('div');
    headerActionIcon.style.cssText = 'font-size: 1.5rem; display: flex; align-items: center; justify-content: center;';
    headerActionBtn.appendChild(headerActionIcon);

    const headerDropdown = document.createElement('div');
    headerDropdown.id = 'alpha-header-dropdown';
    headerDropdown.style.cssText = `
        display: none; position: absolute; top: 40px; right: 0;
        background: var(--alpha-card-bg, #1E293B);
        border: 1px solid var(--alpha-border, rgba(255,255,255,0.1));
        border-radius: 8px; padding: 5px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        z-index: 2000; flex-direction: column; min-width: 150px;
    `;
    headerActionBtn.appendChild(headerDropdown);
    alphaHomeHeader.appendChild(headerActionBtn);

    document.addEventListener('click', (e) => {
        if (!headerActionBtn.contains(e.target)) {
            headerDropdown.style.display = 'none';
        }
    });

    const updateThemeToggleLogic = () => {
        themeToggleBtn.click();
        const isLight = document.body.classList.contains('light-mode');
        headerActionIcon.innerHTML = isLight ? THEME_ICON_DARK : THEME_ICON_LIGHT;
        dashboard.style.setProperty('--alpha-bg', isLight ? '#efeae2' : '#0F172A');
        dashboard.style.setProperty('--alpha-header-bg', isLight ? '#ffffff' : '#0F172A');
        dashboard.style.setProperty('--alpha-text', isLight ? '#080707' : '#e6e9ee');
        dashboard.style.setProperty('--alpha-card-bg', isLight ? '#ffffff' : '#1E293B');
        dashboard.style.setProperty('--alpha-card-hover', isLight ? '#f0f0f0' : '#283548');
        dashboard.style.setProperty('--alpha-border', isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.05)');
        const footerNav = document.getElementById('alpha-footer-nav');
        if (footerNav) footerNav.style.background = isLight ? '#ffffff' : '#0F172A';
    };

    // Ensure dark/light toggle is visible and active immediately on login
    const isLightInitial = document.body.classList.contains('light-mode');
    headerActionIcon.innerHTML = isLightInitial ? THEME_ICON_DARK : THEME_ICON_LIGHT;
    headerActionBtn.onclick = (e) => {
        e.stopPropagation();
        updateThemeToggleLogic();
    };

    dashboard.appendChild(alphaHomeHeader);

    // 3. Search Box
    const searchContainer = document.createElement('div');
    searchContainer.style.cssText = `
        padding: 10px 15px; flex-shrink: 0;
    `;
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';
    searchInput.style.cssText = `
        width: 100%; padding: 10px 15px; border-radius: 18px;  outline: none;
        font-size: 16px; color: #a59a9a;  box-sizing: border-box;
        background: var(--alpha-card-bg, #25272b)  !important; border: 1px solid #3e4248 !important;
    `;
    
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        // Filter Message List
        if (alphaFriendListContainer && alphaFriendListContainer.style.display !== 'none') {
            Array.from(alphaFriendListContainer.children).forEach(child => {
                const nameEl = child.querySelector('.friend-name');
                if (nameEl) {
                    const name = nameEl.innerText.toLowerCase();
                    child.style.display = name.includes(val) ? 'flex' : 'none';
                }
            });
        }
        // Filter Call History
        if (callHistoryView && callHistoryView.style.display !== 'none') {
            Array.from(callHistoryView.children).forEach(child => {
                const nameEl = child.querySelector('[id^="call-name-"]');
                if (nameEl) {
                    const name = nameEl.innerText.toLowerCase();
                    child.style.display = name.includes(val) ? 'flex' : 'none';
                }
            });
        }
    });
    searchContainer.appendChild(searchInput);
    dashboard.appendChild(searchContainer);

    // 4. Content Area
    const contentArea = document.createElement('div');
    contentArea.id = 'alpha-content-area';
    contentArea.style.cssText = `
        flex: 1; overflow-y: auto; position: relative; padding-bottom: 70px;
    `;
    dashboard.appendChild(contentArea);

    // --- Views ---
    
    // Status View
    const statusView = document.createElement('div');
    statusView.id = 'alpha-view-status';
    statusView.style.cssText = `display: none; flex-direction: column; padding: 15px; box-sizing: border-box; color: var(--alpha-text, white); height: 100%; position: relative; gap: 15px;`;

    const statusEmptyText = document.createElement('div');
    statusEmptyText.id = 'alpha-status-empty-text';
    statusEmptyText.style.cssText = `flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: gray; text-align: center; gap: 5px;`;
    statusEmptyText.innerHTML = `
        <img id="alpha-status-empty-pic" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 3px solid #0EA5E9; box-shadow: 0 4px 15px rgba(0,0,0,0.3); margin-bottom: 10px;">
        <h3 style="margin: 0; color: var(--alpha-text, white); font-size: 1.3rem;">No Status Feeds</h3>
        <p style="margin: 0; font-size: 0.95rem; opacity: 0.7;">Official updates will appear here</p>
    `;

    if (typeof db !== 'undefined' && db) {
        db.ref('Profile Pic/Alpha_Profile_Pic').on('value', snap => {
            const pic = document.getElementById('alpha-status-empty-pic');
            if (pic && snap.exists()) pic.src = snap.val();
        });
    }

    const statusDisplayContainer = document.createElement('div');
    statusDisplayContainer.style.cssText = `width: 100%; flex: 1; display: none; flex-direction: column; align-items: center; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); overflow: hidden; padding: 15px; box-sizing: border-box;`;

    const statusDotsContainer = document.createElement('div');
    statusDotsContainer.id = 'alpha-status-dots-container';
    statusDotsContainer.style.cssText = `display: flex; justify-content: center; gap: 8px; align-items: center; min-height: 15px; display: none;`;

    const statusSendBtn = document.createElement('button');
    statusSendBtn.id = 'alpha-status-send-btn';
    statusSendBtn.innerText = "Set Status";
    statusSendBtn.style.cssText = `width: 100%; max-width: 400px; align-self: center; padding: 15px 30px; border-radius: 25px; border: none; background: linear-gradient(90deg, #2ecc71, #27ae60); color: white; font-size: 1.1rem; font-weight: bold; cursor: pointer; display: none; box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4); flex-shrink: 0; z-index: 100;`;

    const statusRemoveBtn = document.createElement('button');
    statusRemoveBtn.id = 'alpha-status-remove-btn';
    statusRemoveBtn.innerText = "Remove Status";
    statusRemoveBtn.style.cssText = `width: 100%; max-width: 400px; align-self: center; padding: 15px 30px; border-radius: 25px; border: none; background: linear-gradient(90deg, #ff4757, #ff6b81); color: white; font-size: 1.1rem; font-weight: bold; cursor: pointer; display: none; box-shadow: 0 4px 15px rgba(255, 71, 87, 0.4); flex-shrink: 0; z-index: 100;`;
    
    const statusAddMoreBtn = document.createElement('button');
    statusAddMoreBtn.id = 'alpha-status-add-more-btn';
    statusAddMoreBtn.innerText = "+ Add More";
    statusAddMoreBtn.style.cssText = `background: none; border: none; color: #0EA5E9; font-size: 1.1rem; font-weight: bold; cursor: pointer; display: none; align-self: center; padding: 10px; margin-top: 5px; z-index: 100; text-decoration: underline;`;

    const statusFab = document.createElement('div');
    statusFab.id = 'alpha-status-fab';
    statusFab.style.cssText = `
        position: absolute; bottom: 20px; right: 20px;
        width: 60px; height: 60px; border-radius: 50%;
        background: #0EA5E9; box-shadow: 0 4px 15px rgba(14, 165, 233, 0.4);
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; z-index: 1000; transition: transform 0.2s;
    `;
    statusFab.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 30px; height: 30px; color: white; pointer-events: none;"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';

    const statusFileInput = document.createElement('input');
    statusFileInput.type = 'file';
    statusFileInput.accept = 'image/*';
    statusFileInput.multiple = false;
    statusFileInput.style.display = 'none';

    let isAddingMore = false;
    let pendingStatusImages = [];
    
    statusFab.onclick = () => { isAddingMore = false; statusFileInput.click(); };
    statusAddMoreBtn.onclick = () => { isAddingMore = true; statusFileInput.click(); };

    db.ref('beta_status_feed').on('value', snap => {
        const activeStatusData = snap.val();
        const imageUrls = (activeStatusData && activeStatusData.images) ? activeStatusData.images : [];
        currentStatusCount = imageUrls.length;
        if (imageUrls.length > 0) {
            createStatusSlider(statusDisplayContainer, imageUrls, true, statusDotsContainer);
            statusDisplayContainer.style.display = 'flex';
            statusDotsContainer.style.display = 'flex';
            statusEmptyText.style.display = 'none';
        } else {
            statusDisplayContainer.innerHTML = '';
            statusDotsContainer.innerHTML = '';
            statusDisplayContainer.style.display = 'none';
            statusDotsContainer.style.display = 'none';
            statusEmptyText.style.display = 'flex';
        }
    });
    
    statusRemoveBtn.onclick = () => {
        db.ref('beta_status_feed').once('value').then(snap => {
            const data = snap.val();
            const imageUrls = (data && data.images) ? data.images : (data && data.image ? [data.image] : []);
            
            if (imageUrls.length === 0) return;

            let delModal = document.getElementById('delete-status-modal');
            if (!delModal) {
                delModal = document.createElement('div');
                delModal.id = 'delete-status-modal';
                delModal.className = 'modal-overlay';
                delModal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 2000; align-items: center; justify-content: center; backdrop-filter: blur(10px);';
                document.body.appendChild(delModal);
            }

            let imagesHtml = '';
            imageUrls.forEach((url, index) => {
                imagesHtml += `
                    <label style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px; cursor: pointer; text-align: left; background: rgba(255,255,255,0.05); padding: 10px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1);">
                        <input type="checkbox" class="delete-status-cb" value="${index}" style="width: 20px; height: 20px; accent-color: #ff4757;">
                        <img src="${url}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
                        <span style="font-weight: bold;">Image ${index + 1}</span>
                    </label>
                `;
            });

            delModal.innerHTML = `
                <div class="modal-box" style="background: var(--alpha-header-bg, #1E293B); padding: 25px; border-radius: 15px; text-align: center; color: var(--alpha-text, white); border: 1px solid var(--alpha-border, rgba(255,255,255,0.1)); max-width: 350px; width: 90%; max-height: 80vh; display: flex; flex-direction: column;">
                    <h3 style="margin-bottom: 10px; flex-shrink: 0;">Delete Status?</h3>
                    <p style="margin-bottom: 15px; opacity: 0.7; font-size: 0.9rem; flex-shrink: 0;">Select images to remove:</p>
                    <div style="display: flex; flex-direction: column; overflow-y: auto; margin-bottom: 20px; padding-right: 5px;">
                        ${imagesHtml}
                    </div>
                    <div style="display: flex; gap: 10px; flex-shrink: 0;">
                        <button id="cancel-del-status" style="flex: 1; padding: 10px; background: rgba(128,128,128,0.2); border: none; color: var(--alpha-text, white); border-radius: 10px; cursor: pointer; font-weight: bold;">Cancel</button>
                        <button id="confirm-del-status" style="flex: 1; padding: 10px; background: #ff4757; border: none; color: white; border-radius: 10px; cursor: pointer; font-weight: bold;">Delete</button>
                    </div>
                </div>`;

            document.getElementById('cancel-del-status').onclick = () => {
                delModal.style.display = 'none';
                const dashboard = document.getElementById('alpha-dashboard');
                if (dashboard) dashboard.classList.remove('blur-content');
            };

            document.getElementById('confirm-del-status').onclick = () => {
                const checkboxes = delModal.querySelectorAll('.delete-status-cb');
                const indicesToDelete = Array.from(checkboxes).filter(cb => cb.checked).map(cb => parseInt(cb.value));
                
                if (indicesToDelete.length === 0) {
                    showToast("Select at least one image to delete");
                    return;
                }

                const remainingImages = imageUrls.filter((_, index) => !indicesToDelete.includes(index));

                if (remainingImages.length === 0) {
                    db.ref('beta_status_feed').remove().then(() => { 
                        showToast("All status images deleted"); 
                        delModal.style.display = 'none'; 
                        const dashboard = document.getElementById('alpha-dashboard');
                        if (dashboard) dashboard.classList.remove('blur-content');
                    });
                } else {
                    db.ref('beta_status_feed').set({
                        images: remainingImages,
                        timestamp: firebase.database.ServerValue.TIMESTAMP
                    }).then(() => {
                        showToast("Selected images deleted");
                        delModal.style.display = 'none'; 
                        const dashboard = document.getElementById('alpha-dashboard');
                        if (dashboard) dashboard.classList.remove('blur-content');
                    });
                }
            };

            delModal.style.display = 'flex';
            const dashboard = document.getElementById('alpha-dashboard');
            if (dashboard) dashboard.classList.add('blur-content');
        });
    };

    statusFileInput.onchange = (e) => {
        const files = e.target.files;
        
        db.ref('beta_status_feed').once('value').then(snap => {
            const data = snap.val();
            const existingImages = (isAddingMore && data && data.images) ? data.images : [];
            const spaceLeft = 5 - existingImages.length;

            if (files.length > spaceLeft) {
                alert(`You can only add ${spaceLeft} more image(s). Maximum is 5.`);
                statusFileInput.value = ''; // Reset file input
                return;
            }
            
            if (files.length > 0) {
                const filePromises = Array.from(files).map(file => {
                    return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                            const img = new Image();
                            img.onload = () => {
                                const canvas = document.createElement('canvas');
                                const MAX_WIDTH = 1080;
                                const MAX_HEIGHT = 1920;
                                let width = img.width;
                                let height = img.height;

                                if (width > height && width > MAX_WIDTH) {
                                    height *= MAX_WIDTH / width;
                                    width = MAX_WIDTH;
                                } else if (height > width && height > MAX_HEIGHT) {
                                    width *= MAX_HEIGHT / height;
                                    height = MAX_HEIGHT;
                                }

                                canvas.width = width;
                                canvas.height = height;
                                const ctx = canvas.getContext('2d');
                                ctx.drawImage(img, 0, 0, width, height);
                                resolve(canvas.toDataURL('image/jpeg', 0.6)); // Compress to 60% quality JPEG
                            };
                            img.onerror = reject;
                            img.src = ev.target.result;
                        };
                        reader.onerror = reject;
                        reader.readAsDataURL(file);
                    });
                });

                Promise.all(filePromises).then(base64Images => {
                    let modal = document.getElementById('status-confirm-modal');
                    if (!modal) {
                        modal = document.createElement('div');
                        modal.id = 'status-confirm-modal';
                        modal.className = 'modal-overlay';
                        modal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10005; align-items: center; justify-content: center; backdrop-filter: blur(5px);';
                        document.body.appendChild(modal);
                    }

                    modal.innerHTML = `
                        <div class="modal-box" style="background: var(--alpha-header-bg, #1E293B); padding: 25px; border-radius: 15px; width: 90%; max-width: 400px; text-align: center; color: var(--alpha-text, white); border: 1px solid var(--alpha-border, rgba(255,255,255,0.1)); box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: flex; flex-direction: column;">
                            <h3 style="margin-bottom: 15px; flex-shrink: 0;">Crop & Confirm Status</h3>
                            <div id="status-crop-container" style="flex: 1; overflow-y: auto; max-height: 50vh; display: flex; flex-direction: column; gap: 20px; margin-bottom: 15px; padding-right: 5px;"></div>
                            <div class="modal-actions" style="display: flex; justify-content: space-between; gap: 10px; flex-shrink: 0;">
                                <button id="cancelStatusConfirm" class="modal-btn cancel-btn" style="flex: 1; padding: 10px; border-radius: 10px;">Cancel</button>
                                <button id="saveStatusConfirm" class="modal-btn confirm-btn" style="flex: 1; padding: 10px; border-radius: 10px; background: #0EA5E9; color: white; border: none;">Confirm</button>
                            </div>
                        </div>
                    `;

                    const container = document.getElementById('status-crop-container');
                    let cropperInstances = [];

                    base64Images.forEach((src) => {
                        const wrapper = document.createElement('div');
                        wrapper.style.cssText = 'width: 100%; background: #000; border-radius: 10px; overflow: hidden;';
                        const img = document.createElement('img');
                        img.src = src;
                        img.style.cssText = 'max-width: 100%; display: block;';
                        wrapper.appendChild(img);
                        container.appendChild(wrapper);
                    });

                    modal.style.display = 'flex';

                    setTimeout(() => {
                        container.querySelectorAll('img').forEach((img) => {
                            const cropper = new Cropper(img, {
                                viewMode: 1,
                                autoCropArea: 1,
                                background: false,
                                zoomable: false
                            });
                            cropperInstances.push(cropper);
                        });
                    }, 50);

                    document.getElementById('cancelStatusConfirm').onclick = () => {
                        cropperInstances.forEach(c => c.destroy());
                        modal.style.display = 'none';
                        statusFileInput.value = '';
                    };

                    document.getElementById('saveStatusConfirm').onclick = () => {
                        const btn = document.getElementById('saveStatusConfirm');
                        btn.innerText = "Processing...";
                        btn.disabled = true;

                        const finalImages = cropperInstances.map(c => c.getCroppedCanvas().toDataURL('image/jpeg', 0.8));
                        cropperInstances.forEach(c => c.destroy());
                        modal.style.display = 'none';

                        if (isAddingMore) {
                            const combinedImages = existingImages.concat(finalImages);
                            db.ref('beta_status_feed').update({
                                images: combinedImages,
                                timestamp: firebase.database.ServerValue.TIMESTAMP
                            }).then(() => {
                                showToast("Status added");
                                statusFileInput.value = '';
                            }).catch(err => {
                                alert("Upload failed: " + err.message);
                            });
                        } else {
                            db.ref('beta_status_feed').set({
                                images: finalImages,
                                timestamp: firebase.database.ServerValue.TIMESTAMP
                            }).then(() => {
                                showToast("Status set successfully");
                                statusFileInput.value = '';
                            }).catch(err => {
                                alert("Upload failed: " + err.message);
                            });
                        }
                    };
                }).catch(err => {
                    alert("Error processing images: " + err.message);
                });
            }
        });
    };

    statusView.appendChild(statusEmptyText);
    statusView.appendChild(statusDisplayContainer);
    statusView.appendChild(statusDotsContainer);
    statusView.appendChild(statusFileInput);
    contentArea.appendChild(statusView);

    // Message View (Friend List)
    alphaFriendListContainer = document.createElement('div');
    alphaFriendListContainer.id = 'alpha-view-message';
    alphaFriendListContainer.style.cssText = `display: none; flex-direction: column; padding: 10px;`;
    contentArea.appendChild(alphaFriendListContainer);

    // Call History View
    callHistoryView = document.createElement('div');
    callHistoryView.id = 'alpha-view-call';
    callHistoryView.style.cssText = `display: none; flex-direction: column; padding: 10px; overflow-y: auto; height: 100%; color: var(--alpha-text, white); background: var(--alpha-bg, #0F172A);`;
    contentArea.appendChild(callHistoryView);

    // Fetch Call History
    db.ref(`call_history/${ALPHA_ADMIN}`).on('value', snap => {
        alphaCallHistoryData = [];
        snap.forEach(child => {
            alphaCallHistoryData.push({ id: child.key, ...child.val() });
        });
        if (callHistoryView.style.display !== 'none') {
            renderAlphaCallHistory();
        }
    });

    window.renderAlphaCallHistory = function() {
        if (!callHistoryView) return;
        callHistoryView.innerHTML = '';
        if (alphaCallHistoryData.length === 0) {
            callHistoryView.innerHTML = '<div style="text-align:center; padding: 20px; color: gray;">No call records found.</div>';
            return;
        }
        
        const sortedHistory = [...alphaCallHistoryData].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
        
        sortedHistory.forEach(record => {
            let durStr = "00:00";
            if (record.duration > 0) {
                const m = String(Math.floor(record.duration / 60)).padStart(2, '0');
                const s = String(record.duration % 60).padStart(2, '0');
                durStr = `${m}:${s}`;
            }

            const dateObj = new Date(record.timestamp);
            const timeStr = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            let dateStr = dateObj.toLocaleDateString();
            if (new Date().toDateString() === dateObj.toDateString()) dateStr = 'Today';

            const arrow = record.type === 'Incoming' ? (record.status === 'Missed' ? '↙️ (Missed)' : '↙️') : '↗️';
            const color = (record.status === 'Missed' || record.status === 'Rejected') ? '#ff4757' : '#2ecc71';
            
            const videoSvg = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 20px; height: 20px;"><path d="M17 10.5V7c0-1.1-.9-2-2-2H5C3.9 5 3 5.9 3 7v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3.5l4 4v-11l-4 4z"/></svg>';
            const audioSvg = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 20px; height: 20px;"><path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .4 3 .4.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C10.4 22.2 1.8 13.6 1.8 3.2 1.8 2.5 2.3 2 3 2h4.5c.7 0 1.2.5 1.2 1.2 0 1 .1 2 .4 3 .1.4 0 .9-.3 1.2l-2.2 2.4z"/></svg>';
            const callIcon = record.isVideo ? videoSvg : audioSvg;

            const card = document.createElement('div');
            card.style.cssText = `
                display: flex; align-items: center; padding: 12px 15px; margin-bottom: 12px;
                background: var(--alpha-card-bg, #1E293B); border-radius: 16px;
                border: 1px solid var(--alpha-border, rgba(255, 255, 255, 0.05));
                box-shadow: 0 4px 6px rgba(0,0,0,0.2); position: relative;
            `;

            card.innerHTML = `
                <img id="call-pic-${record.id}" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; margin-right: 15px;">
                <div style="flex: 1; overflow: hidden; padding-right: 70px;">
                    <div style="font-size: 1.1rem; font-weight: bold; color: var(--alpha-text, white); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" id="call-name-${record.id}">${record.partner}</div>
                    <div style="font-size: 0.85rem; color: ${color}; display: flex; align-items: center; gap: 5px;">
                        <span>${arrow}</span> <span>${record.status}</span> • <span>${durStr}</span>
                    </div>
                </div>
                <div style="position: absolute; right: 15px; top: 12px; display: flex; flex-direction: column; align-items: flex-end;">
                    <div style="color: #0EA5E9; margin-bottom: 5px; display: flex; align-items: center; justify-content: center;">${callIcon}</div>
                    <div style="font-size: 0.7rem; color: gray; text-align: right; line-height: 1.2;">
                        ${timeStr}<br>${dateStr}
                    </div>
                </div>
            `;
            callHistoryView.appendChild(card);

            const fid = record.partner;
            const nameEl = document.getElementById(`call-name-${record.id}`);
            const picEl = document.getElementById(`call-pic-${record.id}`);
            
            if (fid === BETA_ADMIN) {
                if (nameEl) nameEl.innerText = "Beta";
                db.ref('Profile Pic/Beta_Profile_Pic').once('value').then(s => { if(s.exists() && picEl) picEl.src = s.val(); });
            } else if (fid === ALPHA_ADMIN) {
                if (nameEl) nameEl.innerText = "Alpha";
                db.ref('Profile Pic/Alpha_Profile_Pic').once('value').then(s => { if(s.exists() && picEl) picEl.src = s.val(); });
            } else {
                db.ref(`Other User Table/${fid}`).once('value').then(s => { if(s.exists() && nameEl) { const u = s.val(); nameEl.innerText = u.name || fid; if (u.profilePic && picEl) picEl.src = u.profilePic; } });
                db.ref(`Profile Pic/${fid}_Profile_Pic`).once('value').then(s => { if(s.exists() && picEl) picEl.src = s.val(); });
            }
        });
    };

    // Menu View
    const menuView = document.createElement('div');
    menuView.id = 'alpha-view-menu';
    menuView.style.cssText = `display: none; flex-direction: column; padding: 20px; gap: 15px; color: var(--alpha-text, white);`;
    
    const createMenuBtn = (text, onClick) => {
        const btn = document.createElement('button');
        btn.innerText = text;
        btn.style.cssText = `
            padding: 15px; border-radius: 10px; border: none; background: var(--alpha-header-bg, #1E293B); 
            color: var(--alpha-text, white); font-size: 1.1rem; text-align: left; cursor: pointer;
            border-left: 4px solid #0EA5E9; box-shadow: 0 4px 6px rgba(0,0,0,0.2);
        `;
        btn.onclick = onClick;
        return btn;
    };

    menuView.appendChild(createMenuBtn('Profile Details', () => profileBtn.click()));
    menuView.appendChild(createMenuBtn('Update Admin Passkey', () => {
        if (typeof openUpdatePasskeyModal === 'function') openUpdatePasskeyModal();
    }));
    menuView.appendChild(createMenuBtn('Change Font', () => document.getElementById('changeFontBtn')?.click()));
    menuView.appendChild(createMenuBtn('Change Password', () => changePassBtn.click()));
    menuView.appendChild(createMenuBtn('Friends', () => document.getElementById('menuFriendsBtn')?.click()));
    
    const blockedBtn = createMenuBtn('Blocked Friends', () => {
        if (typeof openBlockedFriendsModal === 'function') openBlockedFriendsModal();
    });
    menuView.appendChild(blockedBtn);
    
    menuView.appendChild(createMenuBtn('Logout', () => logoutBtn.click()));

    contentArea.appendChild(menuView);

    // 5. Footer Navigation
    const footerNav = document.createElement('div');
    footerNav.id = 'alpha-footer-nav';
    footerNav.style.cssText = `
        position: absolute; bottom: 0; left: 0; width: 100%; height: 67px;
        background: var(--alpha-header-bg, #0F172A); display: flex; justify-content: space-around; align-items: center;
        border-top: 1px solid rgb(78, 78, 78); z-index: 1000;
        
    `;

    const navItems = [
        { id: 'message', icon: '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 100%; height: 100%;"><path d="M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h3v3l4-3h9c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>', label: 'Message', view: alphaFriendListContainer },
        { id: 'status', icon: '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 100%; height: 100%;"><path d="M20 5h-3.2l-1.8-2H9L7.2 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>', label: 'Status', view: statusView },
        { id: 'call', icon: '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 100%; height: 100%;"><path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .4 3 .4.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C10.4 22.2 1.8 13.6 1.8 3.2 1.8 2.5 2.3 2 3 2h4.5c.7 0 1.2.5 1.2 1.2 0 1 .1 2 .4 3 .1.4 0 .9-.3 1.2l-2.2 2.4z"/></svg>', label: 'Call', view: callHistoryView },
        { id: 'menu', icon: '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 100%; height: 100%;"><rect x="5" y="6" width="14" height="2" rx="1"></rect><rect x="5" y="11" width="14" height="2" rx="1"></rect><rect x="5" y="16" width="14" height="2" rx="1"></rect></svg>', label: 'Menu', view: menuView }
    ];

    navItems.forEach((item, index) => {
        const btn = document.createElement('div');
        btn.style.cssText = `
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            flex: 1; height: 100%; cursor: pointer; color: ${index === 0 ? '#0EA5E9' : 'gray'};
            transition: color 0.2s;
        `;
        btn.innerHTML = `
            <div style="width: 26px; height: 26px; margin-bottom: 2px; display: flex; align-items: center; justify-content: center;">${item.icon}</div>
            <div style="font-size: 0.75rem; font-weight: bold;">${item.label}</div>
        `;
        
        btn.onclick = () => {
            navItems.forEach(n => {
                n.view.style.display = 'none';
                n.btn.style.color = 'gray';
            });
            item.view.style.display = item.id === 'message' || item.id === 'menu' || item.id === 'status' || item.id === 'home' ? 'flex' : 'block';
            btn.style.color = '#0EA5E9';
            
            // Dynamic Header Action Icon logic
            headerDropdown.style.display = 'none';
            headerActionBtn.onclick = null;
            const threeDotsSvg = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px;"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>';
            
            if (item.id === 'message' || item.id === 'menu') {
                const isLight = document.body.classList.contains('light-mode');
                headerActionIcon.innerHTML = isLight ? THEME_ICON_DARK : THEME_ICON_LIGHT;
                headerActionIcon.style.fontSize = '1.5rem';
                headerActionIcon.style.display = 'flex';
                headerActionBtn.style.display = 'flex';
                headerActionBtn.onclick = (e) => {
                    e.stopPropagation();
                    updateThemeToggleLogic();
                };
            } else if (item.id === 'status') {
                headerActionIcon.innerHTML = threeDotsSvg;
                headerActionIcon.style.fontSize = '1rem';
                headerActionBtn.onclick = (e) => {
                    e.stopPropagation();
                    headerDropdown.innerHTML = '';
                    const createDropBtn = (text, onClick) => {
                        const b = document.createElement('div');
                        b.innerText = text;
                        b.style.cssText = 'padding: 10px; cursor: pointer; color: var(--alpha-text, white); font-size: 0.95rem; border-radius: 5px;';
                        b.onmouseover = () => b.style.background = 'var(--alpha-card-hover, rgba(255,255,255,0.1))';
                        b.onmouseout = () => b.style.background = 'transparent';
                        b.onclick = (ev) => { ev.stopPropagation(); headerDropdown.style.display = 'none'; onClick(); };
                        return b;
                    };
                    if (currentStatusCount === 0) {
                        headerDropdown.appendChild(createDropBtn('Add Status', () => { isAddingMore = false; statusFileInput.click(); }));
                    } else {
                        if (currentStatusCount < 5) {
                            headerDropdown.appendChild(createDropBtn('Add More', () => { isAddingMore = true; statusFileInput.click(); }));
                        }
                        headerDropdown.appendChild(createDropBtn('Remove Status', () => { statusRemoveBtn.click(); }));
                    }
                    headerDropdown.style.display = headerDropdown.style.display === 'flex' ? 'none' : 'flex';
                };
            } else if (item.id === 'call') {
                headerActionIcon.innerHTML = threeDotsSvg;
                headerActionIcon.style.fontSize = '1rem';
                headerActionBtn.onclick = (e) => {
                    e.stopPropagation();
                    headerDropdown.innerHTML = '';
                    const clearBtn = document.createElement('div');
                    clearBtn.innerText = 'Clear Call History';
                    clearBtn.style.cssText = 'padding: 10px; cursor: pointer; color: #ff4757; font-size: 0.95rem; border-radius: 5px; font-weight: bold;';
                    clearBtn.onmouseover = () => clearBtn.style.background = 'var(--alpha-card-hover, rgba(255,255,255,0.1))';
                    clearBtn.onmouseout = () => clearBtn.style.background = 'transparent';
                    clearBtn.onclick = (ev) => {
                        ev.stopPropagation();
                        headerDropdown.style.display = 'none';
                        if (typeof openClearSpecificCallModal === 'function') {
                            openClearSpecificCallModal();
                        }
                    };
                    headerDropdown.appendChild(clearBtn);
                    headerDropdown.style.display = headerDropdown.style.display === 'flex' ? 'none' : 'flex';
                };
            }

            // Show/Hide Search Bar based on tab
            if (item.id === 'message' || item.id === 'call') {
                searchContainer.style.display = 'block';
            } else {
                searchContainer.style.display = 'none';
            }
            // Clear search when switching tabs
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));

            if (item.id === 'message') {
                if (!alphaAddFriendFab) createAlphaFab();
                alphaAddFriendFab.style.display = 'flex';
                renderAlphaFriendList(); 
            } else {
                if (alphaAddFriendFab) alphaAddFriendFab.style.display = 'none';
            }
            
            if (item.id === 'call') {
                if (typeof renderAlphaCallHistory === 'function') renderAlphaCallHistory();
            }
        };
        item.btn = btn;
        footerNav.appendChild(btn);
    });

    dashboard.appendChild(footerNav);

    function createAlphaFab() {
        alphaAddFriendFab = document.createElement('div');
        alphaAddFriendFab.id = 'alpha-add-friend-fab';
        alphaAddFriendFab.style.cssText = `
            position: absolute; bottom: 80px; right: 20px;
            width: 60px; height: 60px; border-radius: 50%;
            background: #0EA5E9; box-shadow: 0 4px 15px rgba(14, 165, 233, 0.4);
            display: none; align-items: center; justify-content: center;
            cursor: pointer; z-index: 1000; transition: transform 0.2s;
        `;
        alphaAddFriendFab.innerHTML = '<span style="font-size: 30px; color: white;">+</span>';
        alphaAddFriendFab.onclick = () => {
            const btn = document.getElementById('menuAddFriendBtn');
            if (btn) btn.click();
        };
        dashboard.appendChild(alphaAddFriendFab);
    }
    createAlphaFab();
    
    // Default to 'message' tab
    if (!alphaAddFriendFab) createAlphaFab();
    navItems[0].btn.click();
    
    // Apply initial theme settings if body is already in light mode
    if (document.body.classList.contains('light-mode')) {
        headerActionIcon.innerHTML = THEME_ICON_DARK;
            dashboard.style.setProperty('--alpha-bg', '#efeae2');
        dashboard.style.setProperty('--alpha-header-bg', '#ffffff');
            dashboard.style.setProperty('--alpha-text', '#000000');
        dashboard.style.setProperty('--alpha-card-bg', '#ffffff');
        dashboard.style.setProperty('--alpha-card-hover', '#f0f0f0');
        dashboard.style.setProperty('--alpha-border', 'rgba(0,0,0,0.1)');
        footerNav.style.background = '#ffffff';
    };
}

function showAlphaHomeScreen() {
    if (!document.getElementById('alpha-dashboard')) initAlphaUI();

    const dashboard = document.getElementById('alpha-dashboard');

    // Hide Chat UI
    if (chatMessages) chatMessages.style.display = 'none';
    if (chatInputBar) chatInputBar.style.display = 'none';
    if (pinnedMessageBar) pinnedMessageBar.style.display = 'none';
    
    dashboard.style.display = 'flex';
    if (headerLogoutBtn) headerLogoutBtn.style.display = 'none';
    
    currentChatPartner = null;
    updatePinnedMessageListener();

    if (currentUser === ALPHA_ADMIN) {
        stopHeartbeat();
    }

    // Switch Headers
    const defaultHeader = document.querySelector('header');
    if (defaultHeader) defaultHeader.style.display = 'none';
    
    db.ref(`Profile Pic/Alpha_Profile_Pic`).once('value').then(snap => {
        const homePic = document.getElementById('alpha-home-profile-pic');
        if(snap.exists() && homePic) homePic.src = snap.val();
    });
}

let alphaRenderGeneration = 0;
let latestAlphaStatusData = {};
let latestTypingData = {};

function updateAlphaListStatus() {
    const dots = document.querySelectorAll('[id^="status-dot-"]');
    dots.forEach(dot => {
        const fid = dot.id.replace('status-dot-', '');
        const friendStatus = latestAlphaStatusData[fid] || {};
        const isOnline = friendStatus.online === true;
        dot.style.background = isOnline ? '#00e676' : '#ff1744';
        dot.style.boxShadow = isOnline ? '0 0 8px rgba(0, 230, 118, 0.6)' : 'none';
        
        const typingEl = document.getElementById(`typing-${fid}`);
        const statusEl = document.querySelector(`.status-text-${fid}`);
        if (typingEl && statusEl) {
            if (isOnline && latestTypingData[fid] === true) {
                typingEl.style.display = 'block';
                statusEl.style.display = 'none';
            } else {
                typingEl.style.display = 'none';
                statusEl.style.display = 'block';
            }
                    }
                });
                
                if (currentUser === ALPHA_ADMIN && currentChatPartner) {
                    isOtherUserTyping = (latestTypingData[currentChatPartner] === true);
                    updateStatusUI(otherUserOnlineStatus, otherUserLastSeen, isOtherUserTyping);
        }
}

function renderAlphaFriendList() {
    if (!alphaFriendListContainer) return;
    
    const unreadCounts = {};
    if (allMessagesRaw && currentUser === ALPHA_ADMIN) {
        allMessagesRaw.forEach(msg => {
            if (msg && msg.recipient === currentUser && msg.status !== 'seen') {
                    if (msg[`deletedBy_${currentUser}`]) return; // Match consistency with badge updater
                unreadCounts[msg.sender] = (unreadCounts[msg.sender] || 0) + 1;
            }
        });
    }
    
    db.ref(`friends/${currentUser}`).once('value').then(async (snap) => {
        let friendIds = [];
        if (snap.exists()) {
            friendIds = Object.keys(snap.val());
        }
        
        // Ensure Beta is always a friend for Alpha
        if (currentUser === ALPHA_ADMIN && !friendIds.includes(BETA_ADMIN)) {
            friendIds.push(BETA_ADMIN);
        }

        if (friendIds.length === 0) {
            if (!document.getElementById('no-friends-placeholder')) {
                alphaFriendListContainer.innerHTML = `
                    <div id="no-friends-placeholder" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 50vh; color: var(--alpha-text, white); opacity: 0.6;">
                        <svg viewBox="0 0 24 24" fill="currentColor" style="width: 80px; height: 80px; opacity: 0.3; margin-bottom: 20px; color: white;"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                        <div style="font-size: 1.2rem;">No friends yet</div>
                        <div style="font-size: 0.9rem;">Tap the + button to add someone</div>
                    </div>
                `;
            }
            return;
        } else {
            const placeholder = document.getElementById('no-friends-placeholder');
            if (placeholder) placeholder.remove();
        }
        
        // Use Array.map to create promises for fetching data in parallel
        const promises = friendIds.map(async (fid) => {
            let name = fid;
            let pic = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
            let statusMsg = "Hey I am using Mil Baat.";

            if (fid === BETA_ADMIN) {
                name = "Beta";
                statusMsg = "System Admin";
                const pSnap = await db.ref(`Profile Pic/Beta_Profile_Pic`).once('value');
                if (pSnap.exists()) pic = pSnap.val();
            } else {
                const uSnap = await db.ref(`Other User Table/${fid}`).once('value');
                if (uSnap.exists()) {
                    const u = uSnap.val();
                    name = u.name || fid;
                    if (u.profilePic) pic = u.profilePic;
                }
                // Check for updated profile pic
                const pSnap = await db.ref(`Profile Pic/${fid}_Profile_Pic`).once('value');
                if (pSnap.exists()) pic = pSnap.val();
            }

            return {
                id: fid,
                name: name,
                pic: pic,
                unread: unreadCounts[fid] || 0,
                statusMsg: statusMsg
            };
        });

        const friendsData = await Promise.all(promises);

        // Sort: Unread first, then Alphabetical
        friendsData.sort((a, b) => b.unread - a.unread || a.name.localeCompare(b.name));

        // 1. Update or Create
        friendsData.forEach(f => {
            const isOnline = latestAlphaStatusData[f.id]?.online === true;
            const isTyping = isOnline && latestTypingData[f.id] === true;
            
            const statusColor = isOnline ? '#00e676' : '#ff1744';
            const boxShadow = isOnline ? '0 0 8px rgba(0, 230, 118, 0.6)' : 'none';
            
            let card = document.getElementById(`friend-card-${f.id}`);
            
            if (card) {
                // Update existing
                const badge = document.getElementById(`unread-badge-${f.id}`);
                if (badge) {
                    if (f.unread > 0) {
                        badge.innerText = f.unread;
                        badge.style.display = 'block';
                        badge.parentElement.style.display = 'block';
                    } else {
                        badge.style.display = 'none';
                        badge.parentElement.style.display = 'none';
                    }
                }

                const dot = document.getElementById(`status-dot-${f.id}`);
                if (dot) {
                    dot.style.background = statusColor;
                    dot.style.boxShadow = boxShadow;
                }
                
                const img = card.querySelector('img');
                if (img && img.src !== f.pic) img.src = f.pic;
                
                const nameSpan = card.querySelector('.friend-name');
                if (nameSpan) nameSpan.innerText = f.name;

                const statusSpan = card.querySelector(`.status-text-${f.id}`);
                if (statusSpan) statusSpan.innerText = f.statusMsg;

            } else {
                // Create New
                const cardHTML = `
                <div id="friend-card-${f.id}" class="friend-card" onclick="openAlphaChat('${f.id}', '${f.name}')" style="
                    display: flex; align-items: center; padding: 12px 15px; margin-bottom: 12px;
                    background: var(--alpha-card-bg, #1E293B); border-radius: 16px;
                    border: 1px solid var(--alpha-border, rgba(255, 255, 255, 0.05));
                    box-shadow: 0 4px 6px rgba(0,0,0,0.2); cursor: pointer; transition: transform 0.2s, background 0.2s;
                " onmouseover="this.style.transform='scale(1.02)'; this.style.background='var(--alpha-card-hover, #283548)';" 
                  onmouseout="this.style.transform='scale(1)'; this.style.background='var(--alpha-card-bg, #1E293B)';">
                    
                    <div style="position: relative; margin-right: 15px;">
                        <img src="${f.pic}" style="width: 55px; height: 55px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.1);">
                        <div id="status-dot-${f.id}" style="
                            position: absolute; bottom: 2px; right: 2px; width: 14px; height: 14px; 
                            background: ${statusColor}; border-radius: 50%; border: 2px solid #1e272e;
                            box-shadow: ${boxShadow};
                        "></div>
                    </div>
                    
                    <div style="flex: 1; overflow: hidden;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                            <span class="friend-name" style="font-size: 1.1rem; font-weight: 600; color: var(--alpha-text, white); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${f.name}</span>
                            <span id="badge-container-${f.id}" style="display: ${f.unread > 0 ? 'block' : 'none'};">
                                <span id="unread-badge-${f.id}" style="background: #0EA5E9; color: #fff; padding: 2px 8px; border-radius: 10px; font-size: 0.75rem; font-weight: 800;">${f.unread}</span>
                            </span>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <span id="typing-${f.id}" style="display: ${isTyping ? 'block' : 'none'}; color: #00d2ff; font-size: 0.85rem; font-style: italic; animation: blinkText 1s infinite;">Typing...</span>
                            <span class="status-text-${f.id}" style="font-size: 0.85rem; color: var(--alpha-text, white); opacity: 0.6; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: ${isTyping ? 'none' : 'block'};">${f.statusMsg}</span>
                        </div>
                    </div>
                </div>
                `;
                alphaFriendListContainer.insertAdjacentHTML('beforeend', cardHTML);
            }
        });

        // 2. Re-order DOM elements
        friendsData.forEach(f => {
            const card = document.getElementById(`friend-card-${f.id}`);
            if (card) {
                alphaFriendListContainer.appendChild(card);
            }
        });

        // 3. Cleanup removed friends
        const currentIds = new Set(friendsData.map(f => f.id));
        Array.from(alphaFriendListContainer.children).forEach(child => {
            if (child.id.startsWith('friend-card-')) {
                const id = child.id.replace('friend-card-', '');
                if (!currentIds.has(id)) {
                    child.remove();
                }
            }
        });

        // Ensure status listener is active
        if (!alphaStatusListener) {
            alphaStatusListener = db.ref('status').on('value', snapshot => {
                latestAlphaStatusData = snapshot.val() || {};
                updateAlphaListStatus();

                // FIX: Synchronize the global header variables with the current chat partner's status
                if (currentUser === ALPHA_ADMIN && currentChatPartner && latestAlphaStatusData[currentChatPartner]) {
                    otherUserOnlineStatus = latestAlphaStatusData[currentChatPartner].online || false;
                    otherUserLastSeen = latestAlphaStatusData[currentChatPartner].lastSeen || null;
                    updateStatusUI(otherUserOnlineStatus, otherUserLastSeen, isOtherUserTyping);
                }
            });
        }
        
        // Ensure typing listener is active for the list
        if (!alphaTypingListener) {
            alphaTypingListener = db.ref('typing').on('value', snapshot => {
                latestTypingData = snapshot.val() || {};
                const friendCards = document.querySelectorAll('.friend-card');
                friendCards.forEach(card => {
                    const uid = card.id.replace('friend-card-', '');
                    const typingEl = document.getElementById(`typing-${uid}`);
                    const statusEl = document.querySelector(`.status-text-${uid}`);
                    if (typingEl && statusEl) {
                        const isOnline = latestAlphaStatusData[uid]?.online === true;
                        if (isOnline && latestTypingData[uid] === true) {
                            typingEl.style.display = 'block';
                            statusEl.style.display = 'none';
                        } else {
                            typingEl.style.display = 'none';
                            statusEl.style.display = 'block';
                        }
                    }
                });
            });
        }
    });
}

function openAlphaChat(friendId, friendName) {
    const dashboard = document.getElementById('alpha-dashboard');
    if (dashboard) dashboard.style.display = 'none';
    
    if (chatMessages) chatMessages.style.display = 'block';
    if (chatInputBar) chatInputBar.style.display = 'flex';
    currentChatPartner = friendId;
    
    if (currentUser === ALPHA_ADMIN) {
        startHeartbeat();
    }

    // Reset and Update initial status for header variables
    isOtherUserTyping = false;
    if (latestAlphaStatusData[friendId]) {
        otherUserOnlineStatus = latestAlphaStatusData[friendId].online || false;
        otherUserLastSeen = latestAlphaStatusData[friendId].lastSeen || null;
    }

    // Switch Headers Back
    const defaultHeader = document.querySelector('header');
    if (defaultHeader) defaultHeader.style.display = 'flex';
    if (menuIconBtn) menuIconBtn.style.display = 'block';

    if (logoDisplay) {
        logoDisplay.style.display = 'block';
        logoDisplay.innerHTML = friendName;
    }
    
    if (headerLogoutBtn) headerLogoutBtn.style.display = 'flex';

    filterAndRenderChat();
    updatePinnedMessageListener();
}

// --- Forward Message Logic ---
let selectedForwardFriends = new Set();

async function openForwardModal() {
    forwardMsgModal.style.display = 'flex';
    mainContent.classList.add('blur-content');
    if (imageViewerModal && imageViewerModal.style.display !== 'none') {
        imageViewerModal.classList.add('blur-content');
    }
    forwardFriendsList.innerHTML = '<div style="text-align: center; padding: 20px;">Loading friends...</div>';
    confirmForwardBtn.disabled = true;
    confirmForwardBtn.style.opacity = '0.5';
    selectedForwardFriends.clear();

    let friendIds = [];
    const snap = await db.ref(`friends/${currentUser}`).once('value');
    if (snap.exists()) friendIds = Object.keys(snap.val());
    
    // Ensure admins are accessible based on user type
    if (currentUser === ALPHA_ADMIN && !friendIds.includes(BETA_ADMIN)) friendIds.push(BETA_ADMIN);
    if (currentUser !== ALPHA_ADMIN && !friendIds.includes(ALPHA_ADMIN)) friendIds.push(ALPHA_ADMIN);

    if (friendIds.length === 0) {
        forwardFriendsList.innerHTML = '<div style="text-align: center; padding: 20px; color: rgba(255,255,255,0.7);">No friends available to forward.</div>';
        return;
    }

    // Fetch details
    const promises = friendIds.map(async (fid) => {
        let name = fid;
        let pic = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

        if (fid === BETA_ADMIN) {
            name = "Beta";
            const pSnap = await db.ref(`Profile Pic/Beta_Profile_Pic`).once('value');
            if (pSnap.exists()) pic = pSnap.val();
        } else if (fid === ALPHA_ADMIN) {
            name = "Alpha";
            const pSnap = await db.ref(`Profile Pic/Alpha_Profile_Pic`).once('value');
            if (pSnap.exists()) pic = pSnap.val();
        } else {
            const uSnap = await db.ref(`Other User Table/${fid}`).once('value');
            if (uSnap.exists()) {
                const u = uSnap.val();
                name = u.name || fid;
                if (u.profilePic) pic = u.profilePic;
            }
            const pSnap = await db.ref(`Profile Pic/${fid}_Profile_Pic`).once('value');
            if (pSnap.exists()) pic = pSnap.val();
        }
        return { id: fid, name, pic };
    });

    const friendsData = await Promise.all(promises);
    friendsData.sort((a, b) => a.name.localeCompare(b.name));

    forwardFriendsList.innerHTML = '';
    friendsData.forEach(f => {
        const item = document.createElement('div');
        item.style.cssText = 'display: flex; align-items: center; gap: 10px; padding: 10px; background: rgba(255,255,255,0.05); border-radius: 10px; cursor: pointer; transition: background 0.2s;';
        item.innerHTML = `
            <img src="${f.pic}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
            <div style="flex: 1; font-weight: bold; color: white;">${f.name}</div>
            <div class="checkbox-ui" style="width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.5); border-radius: 5px; display: flex; align-items: center; justify-content: center;"></div>
        `;

        item.onclick = () => {
            const checkbox = item.querySelector('.checkbox-ui');
            if (selectedForwardFriends.has(f.id)) {
                selectedForwardFriends.delete(f.id);
                checkbox.innerHTML = '';
                checkbox.style.background = 'transparent';
                checkbox.style.borderColor = 'rgba(255,255,255,0.5)';
            } else {
                selectedForwardFriends.add(f.id);
                checkbox.innerHTML = '✓';
                checkbox.style.background = '#00d2ff';
                checkbox.style.borderColor = '#00d2ff';
                checkbox.style.color = 'white';
                checkbox.style.fontSize = '14px';
            }
            confirmForwardBtn.disabled = selectedForwardFriends.size === 0;
            confirmForwardBtn.style.opacity = selectedForwardFriends.size === 0 ? '0.5' : '1';
        };

        forwardFriendsList.appendChild(item);
    });
}

if (cancelForwardBtn) {
    cancelForwardBtn.addEventListener('click', () => {
        forwardMsgModal.style.display = 'none';
        mainContent.classList.remove('blur-content');
        if (imageViewerModal) imageViewerModal.classList.remove('blur-content');
    });
}

if (confirmForwardBtn) {
    confirmForwardBtn.addEventListener('click', () => {
        if (selectedForwardFriends.size === 0 || selectedMsgIds.size === 0) return;

        const now = new Date();
        const d = String(now.getDate()).padStart(2, '0');
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const y = now.getFullYear();
        const datePart = `${d}/${m}/${y}`;
        const timePart = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase();
        const timeString = `${datePart} ${timePart}`;
        const rawDate = now.toISOString();

        const messagesToForward = [];
        selectedMsgIds.forEach(id => {
            const msg = currentChatHistory.find(m => m.id === id);
            if (msg) messagesToForward.push(msg);
        });

        selectedForwardFriends.forEach(friendId => {
            const table = getMessageTable(currentUser);
            
            messagesToForward.forEach(origMsg => {
                const newMsgRef = db.ref(`messages/${table}`).push();
                const newMsg = {
                    id: newMsgRef.key,
                    sender: currentUser,
                    recipient: friendId,
                    text: origMsg.text || '',
                    timestamp: timeString,
                    rawDate: rawDate,
                    status: 'sent',
                    replyTo: null // Remove reply context when forwarding
                };
                
                // Carry over media
                if (origMsg.image) newMsg.image = origMsg.image;
                if (origMsg.video) newMsg.video = origMsg.video;
                if (origMsg.audio) newMsg.audio = origMsg.audio;
                if (origMsg.file) newMsg.file = origMsg.file;

                newMsgRef.set(newMsg).catch(err => console.error("Forward Error:", err));
            });
            
            sendNotificationAlert(friendId);
        });

        forwardMsgModal.style.display = 'none';
        mainContent.classList.remove('blur-content');
        if (imageViewerModal) imageViewerModal.classList.remove('blur-content');
        exitSelectionMode();
        showToast(`Forwarded to ${selectedForwardFriends.size} chat(s)`);
    });
}
