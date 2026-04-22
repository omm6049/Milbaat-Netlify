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
const pinnedSender = document.getElementById('pinnedSender');
const pinnedText = document.getElementById('pinnedText');
const unpinBtn = document.getElementById('unpinBtn');
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
const zoomSlider = document.getElementById('zoomSlider');
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

// Create Header Logout Button (for Alpha Chat)
const headerLogoutBtn = document.createElement('div');
headerLogoutBtn.id = 'headerLogoutBtn';
headerLogoutBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px; display: block; margin: auto;"><path d="M20 11H8.8l4.9-4.9L12.3 4.7 5 12l7.3 7.3 1.4-1.4-4.9-4.9H20z"/></svg>';
headerLogoutBtn.style.cssText = 'width: 35px; height: 35px; cursor: pointer; display: none; align-items: center; justify-content: center; margin-right: 5px;';
headerLogoutBtn.onclick = () => {
    if (typeof showAlphaHomeScreen === 'function') showAlphaHomeScreen();
};

// --- Dynamic Header Setup ---
(function setupHeader() {
    let header = document.querySelector('header');
    if (!header) {
        header = document.createElement('header');
        document.body.prepend(header);
    }

    // Style: Full width, fixed top, neutral dark glass background (works for Light/Dark themes)
    header.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 65px;
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
        menuIconBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 32px; height: 28px; display: block; margin: auto; transition: transform 0.3s ease;"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg>';
        
    }

    [videoCallBtn, audioCallBtn, menuIconBtn].forEach(btn => {
        if (btn) {
            btn.style.margin = '0';
            btn.style.border = 'none';
            btn.style.background = 'transparent';
            btn.style.width = '35px';
            btn.style.height = '30px';
            btn.style.padding = '0';
            const img = btn.querySelector('img');
            if (img) img.style.cssText = 'width: 100%; height: 100%; object-fit: contain; pointer-events: none;';
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
            position: fixed; bottom: 0; left: 0; width: 100%; height: 60px; 
            display: none; align-items: center; justify-content: space-between; padding: 5px 8px;
            background: rgba(25, 30, 35, 0.9); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
            border-top: 3px solid rgba(255, 255, 255, 0.08); z-index: 1000; box-sizing: border-box;
            box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2); color: white; gap: 5px;
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
                emojiBtn.onmouseover = () => emojiBtn.style.transform = 'scale(1.1)';
                emojiBtn.onmouseout = () => emojiBtn.style.transform = 'scale(1)';
                
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
                attachBtn.innerHTML = '<svg viewBox="0 0 24 24" style="width: 22px; height: 22px;"><path d="M7 2.8h7l4.2 4.2V20a1.6 1.6 0 0 1-1.6 1.6H7.8A1.6 1.6 0 0 1 6.2 20V4.4A1.6 1.6 0 0 1 7.8 2.8z" fill="transparent" stroke="currentColor" stroke-width="1.5"/><path d="M14 2.8V8h4.2" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="9" y1="15" x2="15" y2="15" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="9" y1="18" x2="13.5" y2="18" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>';
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
            
            // Style Mic & Send Buttons (Outside)
            const actionBtnStyle = `width: 45px; height: 45px; border-radius: 50%; background: transparent; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; padding: 0;`;
            
            if (micBtn) {
                micBtn.style.cssText = actionBtnStyle + ' color: white;';
                micBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 30px;"><path d="M12 15a3.5 3.5 0 0 0 3.5-3.5V7.5A3.5 3.5 0 0 0 12 4a3.5 3.5 0 0 0-3.5 3.5v4A3.5 3.5 0 0 0 12 15z"/><path d="M18 11.5a6 6 0 0 1-12 0h-2a8 8 0 0 0 7 7.9V22h2v-2.6a8 8 0 0 0 7-7.9z"/></svg>';
                chatInputBar.appendChild(micBtn);
            }
            if (sendMsgBtn) {
                sendMsgBtn.style.cssText = actionBtnStyle + ' display: none; background: #168946 !important; color: white !important; '; // Hidden initially
                sendMsgBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="width: 20px; height: 20px; margin-left: 2px;"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>';
                chatInputBar.appendChild(sendMsgBtn);
            }
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
                position: fixed;         /* Fix position to screen */
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

// --- Initialize Message Bubble Style ---
(function initMsgStyle() {
    const msgStyle = document.createElement('style');
    msgStyle.id = 'dynamic-msg-style';
    // Default Dark Theme (Gray)
    msgStyle.innerHTML = `.message-bubble { max-width: 75%; word-wrap: break-word; padding: 10px; border-radius: 10px; margin-bottom: 5px; } .msg-sent { align-self: flex-end; margin-left: auto; text-align: left; background-color: rgba(45, 52, 54, 0.9) !important; color: white !important; border-bottom-right-radius: 0; } .msg-received { align-self: flex-start; margin-right: auto; text-align: left; background-color: rgba(45, 52, 54, 0.9) !important; color: white !important; border-bottom-left-radius: 0; } #chatMessages .message-bubble.msg-selected, #chatMessages .msg-sent.msg-selected, #chatMessages .msg-received.msg-selected { background: #ff9f43 !important; transition: background 0.2s; }`;
    const isLight = document.body.classList.contains('light-mode');
    const bubbleBgSent = isLight ? 'rgba(210, 235, 255, 0.95)' : 'rgba(45, 52, 54, 0.9)';
    const bubbleBgRcv = isLight ? 'rgba(240, 240, 245, 0.95)' : 'rgba(45, 52, 54, 0.9)';
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
            position: fixed !important;
            top: 65px !important;
            left: 0 !important;
            width: 100% !important;
            z-index: 995 !important;
            box-sizing: border-box !important;
            background: rgba(30, 30, 40, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        body.light-mode #pinnedMessageBar {
            background: rgba(245, 245, 245, 0.95);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(style);

    // --- Call UI Theme Styles ---
    const callStyle = document.createElement('style');
    callStyle.id = 'call-ui-styles';
    callStyle.innerHTML = `
        #call-overlay .call-header, #call-overlay .call-footer {
            position: absolute; left: 0; width: 100%; display: flex; align-items: center;
            padding: 15px; box-sizing: border-box; z-index: 10;
            background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
            color: white;
        }
        #call-overlay .call-header { 
            top: 0; 
            display: flex; 
            justify-content: space-between;
            align-items: center;
            padding: 15px 15px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1); 
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
        }
        
        /* --- Call Header Manual Styling --- */
        
        /* 1. Name Text Size */
        #callHeaderName { 
            font-size: 20px; /* <-- Change Name Size Here */
        }

        /* 2. PiP Icon Size */
        #callPipBtn { 
            width: 40px; height: 40px;
            /* Manual Margins */
            margin-top: -10px;
            margin-bottom: 0px;
            margin-left: 0px;
            margin-right: 0px;
            
            /* Remove Border/Background */
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
        }
        #callPipBtn svg { pointer-events: none; }

        /* 3. Status Text (Ringing...) Size */
        #callStatusText { 
            font-size: 2px; /* <-- Change Status Size Here */
            font-weight: 50; margin-bottom: 2px; letter-spacing: 0.5px; 
        }

        /* 4. Timer Text Size */
        #callTimer { 
            font-size: 13px; /* <-- Change Timer Size Here */
            font-weight: bold; 
        }

        #callHeaderCenter { 
            position: absolute;
            top: 60px; /* Position below header */
            left: 0; width: 100%;
            text-align: center; 
            display: flex; flex-direction: column; align-items: center; 
            z-index: 20; pointer-events: none;
        }
        
        .blink-anim { animation: blinkText 1.5s infinite; }
        @keyframes blinkText { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }

        /* --- Call Footer Styling Section --- */
        #call-overlay .call-footer { 
            bottom: 0; 
            border-top: 1px solid rgba(255, 255, 255, 0.1); 
            width: 100%; 
            box-sizing: border-box;
            
            /* --- Manual Layout Settings --- */
            justify-content: center; /* Options: space-between, center, space-around */
            gap: 15px;               /* Space between icons */
            padding: 15px 20px;      /* Footer padding */
        }

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
            background-color: #4eb5dbff !important; /* Red background */
            width: 50px !important;  /* Match others */
            height: 50px !important; /* Match others */
            padding: 2px !important; /* Icon padding */
            box-shadow: 0 4px 15px rgba(118, 187, 197, 0.4);
        }

        #callRemoteVideo { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; }
        #callLocalVideo {
            position: absolute; top: 80px; right: 15px;
            width: clamp(100px, 25vw, 140px); height: clamp(150px, 40vw, 210px);
            border: 2px solid rgba(255, 255, 255, 0.7); border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3); object-fit: cover; z-index: 11;
            cursor: move; background-color: #000;
            transition: top 0.3s ease, left 0.3s ease, right 0.3s ease, bottom 0.3s ease;
        }
        /* Light Theme */
        body.light-mode #call-overlay .call-header, body.light-mode #call-overlay .call-footer {
            background: rgba(245, 245, 245, 0.8); color: #333; border-color: rgba(0, 0, 0, 0.1);
        }
        body.light-mode #call-overlay .call-footer button { background: transparent; color: #333; }
        body.light-mode #callLocalVideo { border-color: rgba(0, 0, 0, 0.4); }

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
            if (child.querySelector('input') || child.querySelector('button')) return;
            
            const text = child.innerText.toLowerCase().trim();
            if (text.includes('admin') || text.includes('login')) child.style.display = 'none';
        });

        // 3. Insert Ministry Text (Above Logo)
        const brandingDiv = document.createElement('div');
        brandingDiv.style.cssText = "text-align: center; margin-bottom: 15px; font-family: 'Cinzel', serif;";
        brandingDiv.innerHTML = `
            <h2 style="margin: 0; font-size: 1.2rem; color: #f1c40f; font-weight: 700; letter-spacing: 1px; text-shadow: 0 2px 5px rgba(0,0,0,0.8);">MINISTRY OF DEFENCE</h2>
            <h4 style="margin: 5px 0 0 0; font-size: 0.7rem; color: rgba(255,255,255,0.8); letter-spacing: 2px; text-transform: uppercase;">Government of India</h4>
        `;

        const logo = loginContainer.querySelector('img');
        if (logo) loginContainer.insertBefore(brandingDiv, logo);
        else loginContainer.prepend(brandingDiv);

        // 4. Mobile Margin Adjustment
        const style = document.createElement('style');
        style.innerHTML = `@media (max-width: 768px) { #entry-overlay > div { margin-top: -60px !important; } }`;
        document.head.appendChild(style);
    }
    // 5. Footer (Security Text) - Outside Container
    const footer = document.createElement('div');
    footer.id = 'login-branding-footer';
    footer.style.cssText = `
        position: absolute; bottom: 0; left: 0; width: 100%;
        padding: 20px; text-align: center; color: rgba(255,255,255,0.6);
        z-index: 10; font-size: 0.7rem; pointer-events: none; user-select: none;
        background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
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
    toggleBtn.innerHTML = '👁️'; 
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
        toggleBtn.innerHTML = type === 'password' ? '👁️' : '🙈';
        pwdInput.focus();
    });
    
    // Adjust input padding and width
    pwdInput.style.paddingRight = '45px';
    pwdInput.style.width = '100%';
    pwdInput.style.boxSizing = 'border-box';
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
let mediaRecorder = null;
let audioChunks = [];
let recordingInterval = null;
let isSendingAudio = false;
let audioContext = null;
let analyser = null;
let visualizerDataArray = null;
let visualizerAnimationId = null;
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

// --- Set Custom Background ---
body.style.background = "none";

// Create blurred background overlay
let bgOverlay = document.getElementById('blur-bg-overlay');
if (!bgOverlay) {
    bgOverlay = document.createElement('div');
    bgOverlay.id = 'blur-bg-overlay';
    bgOverlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;
            filter: blur(0px); transform: scale(1.1); background-color: #161B16;
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

    // Style: Light background for black icons visibility, equal spacing
    header.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 65px;
        display: none; align-items: center; justify-content: space-around; padding: 0 15px;
        background: rgba(18, 131, 162, 1); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1); z-index: 1001; box-sizing: border-box;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); color: black;
    `;
    
    // Clear to ensure correct order if re-initialized
    header.innerHTML = '';

    // Icons Sequence: Back, Pin, Edit, Unsend, Delete
    const icons = ['Back Icon.png', 'Pin Icon.png', 'Edit Icon.png', 'Unsend Icon.png', 'Delete Icon.png'];
    const ids = ['selBackBtn', 'selPinBtn', 'selEditBtn', 'selUnsendBtn', 'selDeleteBtn'];

    // 1. Back Button
    const backBtn = document.createElement('img');
    backBtn.src = icons[0];
    backBtn.id = ids[0];
    backBtn.style.cssText = 'height: 24px; width: 24px; object-fit: contain; cursor: pointer;';
    header.appendChild(backBtn);

    // 2. Counter (New)
    const counter = document.createElement('span');
    counter.id = 'selCounter';
    counter.innerText = '0';
    counter.style.cssText = 'font-size: 20px; font-weight: bold; color: black;';
    header.appendChild(counter);

    // Add Copy button just after the counter
    const copyBtn = document.createElement('img');
    copyBtn.src = 'Copy Icon.png';
    copyBtn.id = 'selCopyBtn';
    copyBtn.style.cssText = 'height: 24px; width: 24px; object-fit: contain; cursor: pointer;';
    header.appendChild(copyBtn);

    // Add Forward button
    const forwardBtn = document.createElement('img');
    forwardBtn.src = 'Forward Icon.png';
    forwardBtn.id = 'selForwardBtn';
    forwardBtn.style.cssText = 'height: 24px; width: 24px; object-fit: contain; cursor: pointer;';
    header.appendChild(forwardBtn);

    // 3. Action Buttons
    for (let i = 1; i < icons.length; i++) {
        const btn = document.createElement('img');
        btn.src = icons[i];
        btn.id = ids[i];
        btn.style.cssText = 'height: 24px; width: 24px; object-fit: contain; cursor: pointer;';
        header.appendChild(btn);
    }

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

    // 3. Right: PiP Button (Re-append existing button)
    if (callPipBtn) {
        // Update Icon to SVG
        callPipBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                <rect x="12" y="13" width="7" height="6" rx="1" ry="1" fill="rgba(255,255,255,0.2)"></rect>
            </svg>
        `;
        header.appendChild(callPipBtn);
    }

    // Ensure Center Elements (Status/Timer) are outside header
    let centerEl = document.getElementById('callHeaderCenter');
    if (!centerEl) {
        centerEl = document.createElement('div');
        centerEl.id = 'callHeaderCenter';
        overlay.appendChild(centerEl);
    }
    const status = document.getElementById('callStatusText');
    const timer = document.getElementById('callTimer');
    if (status) centerEl.appendChild(status);
    if (timer) centerEl.appendChild(timer);

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

    // 1. Create Header for Top Controls (Flash, Label, Close)
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

    // Append in order: Flash (Left), Label (Center - Absolute), Close (Right)
    if (flashCameraBtn) header.appendChild(flashCameraBtn);
    header.appendChild(camLabel);
    if (closeCameraBtn) header.appendChild(closeCameraBtn);

    // 2. Create Footer for Bottom Controls (Flip, Capture, Gallery)
    let footer = overlay.querySelector('.camera-footer');
    if (!footer) {
        footer = document.createElement('div');
        footer.className = 'camera-footer';
        overlay.appendChild(footer);

        // Create Filter Button (Right) - Replaces Gallery
        const filterBtn = document.createElement('button');
        filterBtn.id = 'cameraFilterBtn';
        filterBtn.innerHTML = '🎨';
        filterBtn.onclick = () => {
            const video = document.getElementById('cameraVideo');
            let fIdx = parseInt(video.dataset.filterIndex || '0');
            fIdx = (fIdx + 1) % 4;
            video.dataset.filterIndex = fIdx;
            const filters = ['none', 'grayscale(100%)', 'sepia(100%)', 'invert(100%)'];
            video.style.filter = filters[fIdx];
        };
        
        // Move Buttons to Footer in order: Left (Flip), Center (Capture), Right (Filter)
        if (flipCameraBtn) footer.appendChild(flipCameraBtn);
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
            position: absolute; top: 0; left: 0; width: 100%; padding: 15px 20px;
            display: flex; align-items: center; z-index: 10; box-sizing: border-box;
            background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(5px);
        }

        body.light-mode .camera-header {
            background: rgba(255, 255, 255, 0.4);
        }

        #cameraFacingLabel {
            position: absolute; left: 50%; transform: translateX(-50%);
            font-size: 1.2rem; font-weight: 600; color: white;
            text-shadow: 0 2px 4px rgba(0,0,0,0.5); pointer-events: none;
        }
        body.light-mode #cameraFacingLabel {
            color: #333; text-shadow: none;
        }

        #closeCameraBtn { margin-left: auto; }

        .camera-footer {
            position: absolute; bottom: 0; left: 0; width: 100%; height: 90px;
            display: flex; align-items: center; justify-content: space-between;
            padding: 0 30px;
            background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(10px);
            z-index: 10; padding-bottom: 10px; box-sizing: border-box;
        }
        
        /* Light Theme Footer */
        body.light-mode .camera-footer {
            background: rgba(255, 255, 255, 0.6);
        }

        /* General Button Styles */
        .camera-footer button, .camera-header button {
            width: 50px; height: 50px;
            border-radius: 50%;
            border: 2px solid #4eb5dbff !important; /* Requested Border Color */
            background: rgba(0, 0, 0, 0.3);
            color: white;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer; outline: none; padding: 0;
            transition: transform 0.2s;
        }
        
        .camera-footer button:active, .camera-header button:active { transform: scale(0.95); }
        
        /* Light Mode Icons */
        body.light-mode .camera-footer button, body.light-mode .camera-header button {
            color: #333;
            background: rgba(255, 255, 255, 0.3);
        }

        /* Capture Button (Center) */
        #captureCameraBtn {
            width: 70px; height: 70px;
            border: 4px solid #4eb5dbff !important;
            background: transparent !important;
        }
        #captureCameraBtn::after {
            content: ''; display: block;
            width: 55px; height: 55px;
            background: white; border-radius: 50%;
        }
        #captureCameraBtn img { display: none; } /* Hide icon if any */
        #captureCameraBtn { font-size: 0; }

        /* Filter Button (Right) */
        #cameraFilterBtn {
            background-color: rgba(0,0,0,0.5) !important;
            font-size: 20px;
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
            <button id="pip-speaker-btn" class="pip-control-btn" style="width: 35px; height: 35px; padding: 5px;"><img src="Speaker Icon.png" style="width: 100%; height: 100%; object-fit: contain;"></button>
            <button id="pip-end-btn" class="pip-control-btn pip-end-call" style="width: 40px; height: 40px; padding: 8px; background: #ff4757; border-radius: 50%;"><img src="Call End Icon.png" style="width: 100%; height: 100%; object-fit: contain;"></button>
            <button id="pip-mute-btn" class="pip-control-btn" style="width: 35px; height: 35px; padding: 5px;"><img src="Mic Icon.png" style="width: 100%; height: 100%; object-fit: contain;"></button>
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
(function createPreviewCloseBtn() {
    const overlay = document.getElementById('image-preview-overlay');
    if (overlay && !document.getElementById('closePreviewBtn')) {
        const closeBtn = document.createElement('button');
        closeBtn.id = 'closePreviewBtn';
        closeBtn.innerHTML = '✖';
        closeBtn.style.cssText = 'position: absolute; top: 20px; right: 20px; background: rgba(0, 0, 0, 0.5); color: white; border: none; border-radius: 50%; width: 40px; height: 40px; font-size: 20px; cursor: pointer; z-index: 1001; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px);';
        
        overlay.appendChild(closeBtn);
        
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

    // 1. Create/Find Footer
    let footer = overlay.querySelector('.preview-footer');
    if (!footer) {
        footer = document.createElement('div');
        footer.className = 'preview-footer';
        overlay.appendChild(footer);
    }

    // Create Save Button (Download)
    let saveBtn = document.getElementById('saveImageBtn');
    if (!saveBtn) {
        saveBtn = document.createElement('button');
        saveBtn.id = 'saveImageBtn';
        
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
    // Ensure Icon is correct
    saveBtn.innerHTML = '<img src="Download Icon.png">';

    // Enforce Order: Retake, Crop, Filter, Save, Send
    if (retakeBtn) footer.appendChild(retakeBtn);
    if (cropBtn) footer.appendChild(cropBtn);
    if (filterBtn) footer.appendChild(filterBtn);
    if (saveBtn) footer.appendChild(saveBtn);
    if (sendImageBtn) footer.appendChild(sendImageBtn);

    // 2. Update Icons
    if (retakeBtn) retakeBtn.innerHTML = '<img src="Retake Icon.png">';
    if (cropBtn) cropBtn.innerHTML = '<img src="Crop Icon.png">';
    if (filterBtn) filterBtn.innerHTML = '<img src="Filter Icon.png">';
    if (sendImageBtn) sendImageBtn.innerHTML = '<img src="Send Icon.png">';
    
    // 3. Inject Styles
    const style = document.createElement('style');
    style.innerHTML = `
        .preview-footer {
            position: absolute; bottom: 0; left: 0; width: 100%;
            display: flex; align-items: center; justify-content: space-evenly;
            padding: 50px 0;
            background: transparent;
            z-index: 1002;
            min-height: 40px;
        }
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
        .preview-footer button img { width: 100%; height: 100%; object-fit: contain; pointer-events: none; }
        .preview-footer button:active { transform: scale(0.95); }
        #filterBtn { font-size: 0; }
        #cropBtn.apply-mode { font-size: 14px !important; font-weight: bold; background: #0ba622ff !important; }
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
             const move = Math.min(diff, 80);
             element.style.transform = `translateX(${move}px)`;
        }
    }, {passive: true});

    element.addEventListener('touchend', () => {
        const diff = currentX - startX;
        element.style.transition = 'transform 0.3s ease';
        element.style.transform = 'translateX(0)';
        
        if (diff > 60) {
            startReply(msg);
            if (navigator.vibrate) navigator.vibrate(30);
        }
    });
}

function startReply(msg) {
    replyToMsg = msg;
    replyPreview.style.display = 'flex';
    replySender.innerText = msg.sender === currentUser ? 'You' : msg.sender;
    
    let displayText = msg.text;
    if (!displayText) {
        if (msg.image) displayText = '📷 Image';
        else if (msg.video) displayText = '🎥 Video';
        else if (msg.audio) displayText = '🎤 Audio';
        else if (msg.file) displayText = '📄 File';
    }
    replyText.innerText = displayText;
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

function updateBlockOverlay() {
    if (!chatInputBar) return;
    let overlay = document.getElementById('block-input-overlay');

    if (currentChatPartner && blockedUsersSet.has(currentChatPartner)) {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'block-input-overlay';
            overlay.style.cssText = `
                position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(20, 20, 30, 0.95); backdrop-filter: blur(5px);
                display: flex; align-items: center; justify-content: center;
                color: #ff4757; font-weight: bold; z-index: 2000; font-size: 0.95rem;
                cursor: not-allowed;
            `;
            overlay.innerText = "You blocked this user. Unblock to send messages.";
            chatInputBar.appendChild(overlay);
        }
        overlay.style.display = 'flex';
        if (msgInput) msgInput.disabled = true;
    } else {
        if (overlay) overlay.style.display = 'none';
        if (msgInput) msgInput.disabled = false;
    }
}

function filterAndRenderChat() {
    if (!allMessagesRaw) return;

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
        if (msg.recipient === currentUser && blockedUsersSet.has(msg.sender)) return false;
        const p1 = msg.sender === currentUser && msg.recipient === currentChatPartner;
        const p2 = msg.sender === currentChatPartner && msg.recipient === currentUser;
        return p1 || p2;
    });

    history.sort((a, b) => (a.rawDate || "") < (b.rawDate || "") ? -1 : 1);
    currentChatHistory = history;
    renderChat(history);
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
                    isVideo: cType === 'Video'
                });
            }
            // Handle Answer (Call Accepted)
            else if (data.type === 'answer' && data.sender !== currentUser) {
                if (data.recipient && data.recipient !== currentUser) return;
                handleIncomingSignal({
                    type: 'answer',
                    sender: data.sender,
                    data: data.sdp,
                    isVideo: cType === 'Video'
                });
            }
        });
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

    // 4. Status & Typing Listeners
    let otherUserHeartbeat = 0;
    let otherUserLastSeen = null;
    let isOtherUserTyping = false;
    let otherUserOnlineStatus = true;

    db.ref('status').on('value', snapshot => {
        const data = snapshot.val() || {};

        if (currentChatPartner && data[currentChatPartner]) {
            const partnerData = data[currentChatPartner];
            otherUserHeartbeat = partnerData.heartbeat || 0;
            otherUserLastSeen = partnerData.lastSeen;
            otherUserOnlineStatus = partnerData.online;
        } else {
            otherUserHeartbeat = 0;
            otherUserLastSeen = null;
            otherUserOnlineStatus = false;
        }
    });

    if (statusCheckInterval) clearInterval(statusCheckInterval);
    statusCheckInterval = setInterval(() => {
        const estimatedServerTime = Date.now() + serverTimeOffset;
        const isOnline = (estimatedServerTime - otherUserHeartbeat) < 10000 && otherUserOnlineStatus !== false;
        
        let displayLastSeen = otherUserLastSeen;
        if (!isOnline && displayLastSeen === "Active") {
            displayLastSeen = otherUserHeartbeat;
        }
        updateStatusUI(isOnline, displayLastSeen, isOtherUserTyping);

        // --- Caller Outgoing Call Status Logic ---
        if (!isCallConnected && amICaller && callOverlay.style.display === 'flex') {
            const currentStatus = callStatusText.innerText;
            if (isOnline) {
                if (currentStatus !== "Ringing") {
                    callStatusText.innerText = "Ringing";
                    // Restart the ringing timeout because target just came online (45 seconds)
                    if (ringingTimeout) clearTimeout(ringingTimeout);
                    ringingTimeout = setTimeout(() => { endCall(); }, 45000);
                    
                    // Resend the offer to ensure the target's app detects the call
                    if (peerConnection && peerConnection.localDescription) {
                        sendSignal('offer', peerConnection.localDescription);
                    }
                }
            } else {
                if (currentStatus !== "Connecting...") {
                    callStatusText.innerText = "Connecting...";
                    // Give them up to 60 seconds to come online
                    if (ringingTimeout) clearTimeout(ringingTimeout);
                    ringingTimeout = setTimeout(() => { endCall(); }, 60000);
                }
            }
        }

        // --- Call Reconnection Logic ---
        if (isCallConnected) {
            const reconnectOverlay = document.getElementById('callReconnectingOverlay');
            if (!isOnline && !isCallReconnecting) {
                isCallReconnecting = true;
                if (reconnectOverlay) reconnectOverlay.style.display = 'flex';
                
                callReconnectingTimeout = setTimeout(() => {
                    if (isCallReconnecting) {
                        showToast("Connection lost. Call ended.");
                        endCall(true);
                    }
                }, 5000); // 5 seconds tolerance
            } else if (isOnline && isCallReconnecting) {
                isCallReconnecting = false;
                if (reconnectOverlay) reconnectOverlay.style.display = 'none';
                if (callReconnectingTimeout) {
                    clearTimeout(callReconnectingTimeout);
                    callReconnectingTimeout = null;
                }
            }
        }
    }, 1000);

    // 5. Typing Listener
    db.ref('typing').on('value', snapshot => {
        const data = snapshot.val() || {};
        if (currentChatPartner && data[currentChatPartner] === true) {
            isOtherUserTyping = true;
        } else {
            isOtherUserTyping = false;
        }
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

function renderChat(history) {
    let historyChanged = false;
    let lastDateDivider = '';

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
            replyDiv.innerHTML = `
                <span class="replied-sender">${msg.replyTo.sender === currentUser ? 'You' : msg.replyTo.sender}</span>
                <span class="replied-text">${msg.replyTo.text}</span>
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
            const audio = document.createElement('audio');
            audio.src = msg.audio;
            audio.controls = true;
            audio.className = 'msg-audio';
            msgDiv.appendChild(audio);
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
    chatMessages.scrollTop = chatMessages.scrollHeight;
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
    };

    // Check Hardcoded Users
    if (users[username] && users[username] === password) {
        let displayName = username;
        let isAlpha = (username === ALPHA_ADMIN);
        let isBeta = (username === BETA_ADMIN);
        
        if (isAlpha) {
            displayName = 'Alpha';
        } else if (isBeta) {
            displayName = 'Beta';
        }
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
    
    statusRef.update({
        online: true,
        lastSeen: "Active",
        heartbeat: firebase.database.ServerValue.TIMESTAMP
    });

    statusRef.onDisconnect().update({
        online: false,
        lastSeen: firebase.database.ServerValue.TIMESTAMP
    });

    if (heartbeatInterval) clearInterval(heartbeatInterval);
    heartbeatInterval = setInterval(() => {
        statusRef.update({
            heartbeat: firebase.database.ServerValue.TIMESTAMP
        });
    }, 2000);

    if (targetUser === BETA_ADMIN) {
        db.ref(`Notification Alert/${ALPHA_ADMIN}`).set(true).catch(e => console.error(e));
        setTimeout(() => {
            db.ref(`Notification Alert/${ALPHA_ADMIN}`).set(false).catch(e => console.error(e));
        }, 5000);
    }
}

function updateStatusUI(isOnline, lastSeen, isTyping) {
    if (!lastSeenDisplay) return;
    
    // Hide the old signal indicator (dot in header)
    if (userStatusIndicator) userStatusIndicator.style.display = 'none';

    lastSeenDisplay.style.marginLeft = '0';
    lastSeenDisplay.style.fontSize = '0.75rem';
    lastSeenDisplay.style.display = 'block';
    lastSeenDisplay.style.marginTop = '2px';

    if (isTyping) {
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
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    
    themeToggleBtn.innerText = isLight ? '◐ Dark Mode' : '◑ Light Mode';

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

    const bubbleBgSent = isLight ? 'rgba(210, 235, 255, 0.95)' : 'rgba(45, 52, 54, 0.9)';
    const bubbleBgRcv = isLight ? 'rgba(240, 240, 245, 0.95)' : 'rgba(45, 52, 54, 0.9)';
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
            bgOverlay.style.backgroundColor = '#ffffff';
        } else {
            bgImage.style.display = 'none';
            bgOverlay.style.backgroundColor = '#161B16';
        }
    }
});

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
                updates[`messages/${table}/${msg.id}`] = null;
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

            function drawBackgroundAndHeader() {
                // Background
                doc.setFillColor(252, 252, 252);
                doc.rect(0, 0, pageWidth, pageHeight, 'F');

                // Border
                doc.setDrawColor(44, 62, 80);
                doc.setLineWidth(2);
                doc.rect(20, 20, pageWidth - 40, pageHeight - 40);

                // Watermark
                doc.setTextColor(230, 230, 230);
                doc.setFontSize(45);
                doc.setFont("helvetica", "bold");
                doc.text(`Alpha - ${partnerName} Chatting`, pageWidth / 2, pageHeight / 2, { angle: 45, align: "center" });

                // Header Images
                if (alphaPicBase64) {
                    try { doc.addImage(alphaPicBase64, 30, 30, 40, 40); } catch(e){}
                }
                if (partnerPicBase64) {
                    try { doc.addImage(partnerPicBase64, pageWidth - 70, 30, 40, 40); } catch(e){}
                }

                // Header Text
                doc.setTextColor(44, 62, 80);
                doc.setFontSize(16);
                doc.text(`Alpha - ${partnerName} Chat History`, pageWidth / 2, 55, { align: "center" });
                
                // Divider line
                doc.setDrawColor(200, 200, 200);
                doc.setLineWidth(1);
                doc.line(30, 85, pageWidth - 30, 85);
            }

            let y = 110;
            drawBackgroundAndHeader();

            let lastDate = "";

            for (let i = 0; i < currentChatHistory.length; i++) {
                const msg = currentChatHistory[i];
                
                let msgDateObj = msg.rawDate ? new Date(msg.rawDate) : new Date();
                const dateString = getFormattedDate(msgDateObj);
                
                if (dateString !== lastDate) {
                    if (y > pageHeight - 60) { doc.addPage(); drawBackgroundAndHeader(); y = 110; }
                    doc.setFont("helvetica", "bold");
                    doc.setFontSize(10);
                    doc.setTextColor(120, 120, 120);
                    doc.text(`--- ${dateString} ---`, pageWidth / 2, y, { align: "center" });
                    y += 20;
                    lastDate = dateString;
                }

                if (y > pageHeight - 60) { doc.addPage(); drawBackgroundAndHeader(); y = 110; }

                const isAlpha = msg.sender === currentUser;
                const senderName = isAlpha ? "Alpha" : partnerName;
                
                doc.setFont("helvetica", "bold");
                doc.setFontSize(10);
                if (isAlpha) doc.setTextColor(41, 128, 185); // Blue for Alpha
                else doc.setTextColor(39, 174, 96); // Green for Partner
                
                let timeStr = msg.timestamp || "";
                if (timeStr.includes(' ')) timeStr = timeStr.split(' ').slice(1).join(' ');

                doc.text(`${senderName} [${timeStr}]:`, 40, y);
                y += 14;

                doc.setFont("helvetica", "normal");
                doc.setTextColor(60, 60, 60);
                
                let textContent = msg.text || "";
                if (msg.image) textContent += " [Image Attached]";
                if (msg.video) textContent += " [Video Attached]";
                if (msg.audio) textContent += " [Audio Attached]";
                if (msg.file) textContent += ` [File: ${msg.file.name}]`;
                
                const lines = doc.splitTextToSize(textContent, pageWidth - 80);
                
                for (let j = 0; j < lines.length; j++) {
                    if (y > pageHeight - 50) {
                        doc.addPage();
                        drawBackgroundAndHeader();
                        y = 110;
                    }
                    doc.text(lines[j], 40, y);
                    y += 14;
                }
                y += 8; // Spacer between messages
            }

            doc.save(`ChatHistory_Alpha_${partnerName}.pdf`);
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

unpinBtn.addEventListener('click', () => {
    if (currentUser && currentChatPartner) {
        const chatId = getChatId(currentUser, currentChatPartner);
        db.ref(`pinned_messages/${chatId}`).remove();
    }
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
        
        pinnedSender.innerText = pinnedMsg.sender === currentUser ? 'You' : pinnedMsg.sender;
        
        let displayText = pinnedMsg.text;
        if (!displayText) {
            if (pinnedMsg.image) displayText = '📷 Image';
            else if (pinnedMsg.video) displayText = '🎥 Video';
            else if (pinnedMsg.audio) displayText = '🎤 Audio Message';
            else if (pinnedMsg.file) displayText = '📄 File';
            else displayText = 'Message';
        }
        pinnedText.innerText = displayText;

        // Scroll to message on click
        pinnedMessageBar.onclick = (e) => {
            if (e.target.closest('#unpinBtn')) return;
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
        };
        pinnedMessageBar.style.cursor = 'pointer';
    } else {
        pinnedMessageBar.style.display = 'none';
        pinnedMessageBar.onclick = null;
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
            db.ref(`messages/${table}/${id}`).remove();
            
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
    if (oldPassInput.value === users[currentUser]) {
        if (newPassInput.value.trim() !== "") {
            users[currentUser] = newPassInput.value;
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
        // Clear typing status after 2 seconds of inactivity
        setTimeout(() => typingRef.set(false), 2000);
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
    chatFileInput.click();
    // Ensure we accept all files
    chatFileInput.removeAttribute('accept');
});

// --- Live Camera Logic ---
cameraBtn.addEventListener('click', () => {
    cameraLiveOverlay.style.display = 'flex';
    startCameraStream();
});

async function startCameraStream() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
    }
    
    // Mirror effect for front camera
    if (currentFacingMode === 'user') {
        cameraVideo.style.transform = 'scaleX(-1)';
    } else {
        cameraVideo.style.transform = 'none';
    }

    const label = document.getElementById('cameraFacingLabel');
    if (label) label.innerText = currentFacingMode === 'user' ? 'Front Cam' : 'Back Cam';

    try {
        try {
            cameraStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: currentFacingMode }
            });
        } catch (e) {
            console.warn("Specific facingMode failed, trying generic video...", e);
            cameraStream = await navigator.mediaDevices.getUserMedia({
                video: true
            });
        }

        cameraVideo.srcObject = cameraStream;
        cameraVideo.setAttribute('playsinline', 'true'); // Required for iOS
        cameraVideo.setAttribute('autoplay', 'true');
        await cameraVideo.play();

        // Show flash only for back camera
        const track = cameraStream.getVideoTracks()[0];
        const caps = track.getCapabilities ? track.getCapabilities() : {};
        
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
    const canvas = document.createElement('canvas');
    canvas.width = cameraVideo.videoWidth;
    canvas.height = cameraVideo.videoHeight;
    const ctx = canvas.getContext('2d');
    
    // Mirror capture if front camera
    if (currentFacingMode === 'user') {
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
    }
    
    // Apply Filter from Live View
    const fIdx = parseInt(cameraVideo.dataset.filterIndex || '0');
    const filters = ['none', 'grayscale(100%)', 'sepia(100%)', 'invert(100%)'];
    if (fIdx > 0) ctx.filter = filters[fIdx];

    ctx.drawImage(cameraVideo, 0, 0, canvas.width, canvas.height);
    
    // Get image
    currentImageBase64 = canvas.toDataURL('image/jpeg');
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
    callMuteBtn.innerHTML = '<img src="Mic Icon.png">';
    callVideoMuteBtn.innerHTML = '<img src="Camera Icon.png">';
    isSpeakerOn = false;
    callAudioOutputBtn.innerHTML = '<img src="Speaker Icon.png">';
    callFlipBtn.innerHTML = '<img src="Camera Flip Icon.png">';
    callEndBtn.innerHTML = '<img src="Call End Icon.png">';
    
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

    callStatusText.innerText = isIncoming ? "Connecting..." : "Ringing";
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
        
        // Force enable tracks
        callStream.getAudioTracks().forEach(t => t.enabled = true);
        
        // Initialize Audio Output (Default to Earpiece)
        updateAudioOutput();
        
        if (video) {
            callStream.getVideoTracks().forEach(t => t.enabled = true);
            callLocalVideo.srcObject = callStream;
            callLocalVideo.style.transform = 'scaleX(-1)'; // Mirror local
        }

        // 3. Initiate Connection if Caller
        if (!isIncoming) {
            createPeerConnection(true);
            
            // Initial timeout for connecting (60s). It will be adjusted when Ringing starts.
            if (ringingTimeout) clearTimeout(ringingTimeout);
            ringingTimeout = setTimeout(() => {
                endCall(); 
            }, 60000);
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

    if (type === 'offer') {
        const ref = db.ref(incomingPath);
        ref.set({
            type: 'offer',
            sender: currentUser,
            recipient: targetUser,
            sdp: JSON.parse(JSON.stringify(data)),
            timestamp: firebase.database.ServerValue.TIMESTAMP
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
            timestamp: firebase.database.ServerValue.TIMESTAMP
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
    } else if (type === 'end') {
        // Remove all signal nodes for this call type
        db.ref(`signals/${myRole}_incoming_${callType}`).remove();
        db.ref(`signals/${targetRole}_incoming_${callType}`).remove();
        db.ref(`signals/${myRole}_candidates`).remove();
        db.ref(`signals/${targetRole}_candidates`).remove();

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
            peerConnection.setRemoteDescription(desc)
                .then(() => {
                    if (ringingTimeout) clearTimeout(ringingTimeout);
                    isCallConnected = true;
                    console.log("Remote Description Set (Answer)");
                    callStatusText.innerText = "Connected";
                    startCallTimer();
                    processCandidateQueue();
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
            callMuteBtn.innerHTML = isCallMuted ? '<img src="Audio Mute Icon.png">' : '<img src="Mic Icon.png">';
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
            callVideoMuteBtn.innerHTML = isVideoMuted ? '<img src="Video Mute Icon.png">' : '<img src="Camera Icon.png">';
        }
    }
});

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

    // The element showing the local user's front-facing camera should be mirrored.
    // Reset transforms first.
    callLocalVideo.style.transform = 'none';
    callRemoteVideo.style.transform = 'none';

    // Re-apply mirroring to whichever element is now showing the local user's front-facing camera
    if (callFacingMode === 'user') {
        if (callLocalVideo.srcObject === callStream) {
            callLocalVideo.style.transform = 'scaleX(-1)';
        } else if (callRemoteVideo.srcObject === callStream) {
            callRemoteVideo.style.transform = 'scaleX(-1)';
        }
    }

    // Ensure playback continues
    callLocalVideo.play().catch(e => console.error("Local video play failed after swap:", e));
    callRemoteVideo.play().catch(e => console.error("Remote video play failed after swap:", e));
}

function syncPipControls() {
    const pipMuteBtn = document.getElementById('pip-mute-btn');
    const pipSpeakerBtn = document.getElementById('pip-speaker-btn');

    if (pipMuteBtn) {
        pipMuteBtn.innerHTML = isCallMuted ? '<img src="Audio Mute Icon.png" style="width: 100%; height: 100%; object-fit: contain;">' : '<img src="Mic Icon.png" style="width: 100%; height: 100%; object-fit: contain;">';
    }
    if (pipSpeakerBtn) {
        pipSpeakerBtn.innerHTML = isSpeakerOn ? '<img src="Ear Piece Icon.png" style="width: 100%; height: 100%; object-fit: contain;">' : '<img src="Speaker Icon.png" style="width: 100%; height: 100%; object-fit: contain;">';
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

            // Update mirroring on the correct element
            callLocalVideo.style.transform = 'none';
            callRemoteVideo.style.transform = 'none';
            if (callFacingMode === 'user') {
                if (callLocalVideo.srcObject === callStream) callLocalVideo.style.transform = 'scaleX(-1)';
                else if (callRemoteVideo.srcObject === callStream) callRemoteVideo.style.transform = 'scaleX(-1)';
            }
            
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
        callAudioOutputBtn.innerHTML = isSpeakerOn ? '<img src="Ear Piece Icon.png">' : '<img src="Speaker Icon.png">';
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
    const headerHeight = 70;
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

function startRecording(stream) {
    audioChunks = [];
    mediaRecorder = new MediaRecorder(stream);
    
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
    let seconds = 0;
    recordingTimer.innerText = "00:00";
    recordingInterval = setInterval(() => {
        seconds++;
        const m = String(Math.floor(seconds / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        recordingTimer.innerText = `${m}:${s}`;
    }, 1000);
}

function stopRecording(sending) {
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
    analyser.getByteFrequencyData(visualizerDataArray);
    const canvasCtx = audioVisualizer.getContext('2d');
    const width = audioVisualizer.width;
    const height = audioVisualizer.height;
    
    canvasCtx.clearRect(0, 0, width, height);
    
    const barWidth = (width / visualizerDataArray.length) * 0.6;
    const gap = (width / visualizerDataArray.length) * 0.4;
    let x = 0;
    
    for(let i = 0; i < visualizerDataArray.length; i++) {
        const barHeight = (visualizerDataArray[i] / 255) * height;
        
        canvasCtx.fillStyle = '#ff4757';
        
        // Draw centered vertically
        const y = (height - barHeight) / 2;
        
        canvasCtx.fillRect(x, y, barWidth, barHeight);
        
        x += barWidth + gap;
    }
}

cancelAudioBtn.addEventListener('click', () => stopRecording(false));
sendAudioBtn.addEventListener('click', () => stopRecording(true));

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
    cropBtn.innerHTML = '<img src="Crop Icon.png">';
    cropBtn.classList.remove('apply-mode');
    cropBtn.style.background = "";
    filterBtn.style.display = ''; // Show filter button
    sendImageBtn.style.display = 'flex';
    retakeBtn.style.display = '';
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

// --- Dynamic Image Viewer Header Setup ---
(function setupImageViewerHeader() {
    const modal = document.getElementById('image-viewer-modal');
    if (!modal) return;

    // Create Header Container
    let header = modal.querySelector('.viewer-header');
    if (!header) {
        header = document.createElement('div');
        header.className = 'viewer-header';
        header.style.cssText = `
            position: absolute; top: 0; left: 0; width: 100%; height: 60px;
            display: flex; align-items: center; justify-content: center; padding: 0 15px;
            background: rgba(7, 94, 137, 1); z-index: 1002;
            box-sizing: border-box; gap: 40px;
        `;
        modal.prepend(header);
    }
    
    // Clear to ensure correct order
    header.innerHTML = '';

    const createIconBtn = (src, onClick) => {
        const btn = document.createElement('button');
        btn.style.cssText = `
            background: transparent; border: none; cursor: pointer;
            width: 30px; height: 30px; padding: 0; display: flex;
            align-items: center; justify-content: center;
        `;
        const img = document.createElement('img');
        img.src = src;
        img.style.cssText = 'width: 100%; height: 100%; object-fit: contain; pointer-events: none;';
        btn.appendChild(img);
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            onClick();
        });
        return btn;
    };

    // 1. Download Icon
    header.appendChild(createIconBtn('Download Icon.png', () => {
        downloadViewerMedia('download');
    }));

    // 2. Share Icon
    header.appendChild(createIconBtn('Share Icon.png', () => {
        shareViewerMedia();
    }));

    // 3. Save Gallery Icon
    header.appendChild(createIconBtn('Save Gallery Icon.png', () => {
        downloadViewerMedia('gallery');
    }));

    // 4. Close Icon
    header.appendChild(createIconBtn('Close Icon.png', () => {
        const modal = document.getElementById('image-viewer-modal');
        if (modal) modal.style.display = 'none';
        const v = document.getElementById('viewerVideoElement');
        if(v) {
            v.pause();
            v.src = '';
        }
        // Reset Zoom
        if (typeof viewerScale !== 'undefined') {
            viewerScale = 1;
            viewerTranslateX = 0;
            viewerTranslateY = 0;
            if (typeof updateViewerTransform === 'function') updateViewerTransform();
        }
    }));

    // Hide original close button if exists
    const oldClose = document.getElementById('closeViewerBtn');
    if (oldClose) oldClose.style.display = 'none';
})();

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

// --- Image Viewer Logic (Zoom & Pan) ---

// Open Viewer
chatMessages.addEventListener('click', (e) => {
    if (e.target.classList.contains('msg-image')) {
        imageViewerModal.style.display = 'block';
        viewerImage.style.display = 'block';
        viewerImage.src = e.target.src;
        // Reset State
        viewerScale = 1;
        viewerTranslateX = 0;
        viewerTranslateY = 0;
        zoomSlider.value = 1;
        updateViewerTransform();
        
        // Hide video if present
        const v = document.getElementById('viewerVideoElement');
        if(v) v.style.display = 'none';
    }
});

function openVideoViewer(src) {
    imageViewerModal.style.display = 'block';
    viewerImage.style.display = 'none';
    
    let viewerVideo = document.getElementById('viewerVideoElement');
    if (!viewerVideo) {
        viewerVideo = document.createElement('video');
        viewerVideo.id = 'viewerVideoElement';
        viewerVideo.controls = true;
        viewerVideo.style.cssText = 'max-width: 100%; max-height: 80vh; display: block; margin: auto;';
        viewerImage.parentNode.insertBefore(viewerVideo, viewerImage);
    }
    viewerVideo.src = src;
    viewerVideo.style.display = 'block';
    viewerVideo.play();
}

// Close Viewer
closeViewerBtn.addEventListener('click', () => {
    imageViewerModal.style.display = 'none';
    const v = document.getElementById('viewerVideoElement');
    if(v) {
        v.pause();
        v.src = '';
    }
});

// Update Transform
function updateViewerTransform() {
    if (viewerScale <= 1) {
        viewerScale = 1;
        viewerTranslateX = 0;
        viewerTranslateY = 0;
    }
    viewerImage.style.transform = `translate(${viewerTranslateX}px, ${viewerTranslateY}px) scale(${viewerScale})`;
    zoomSlider.value = viewerScale;
}

// Slider Zoom
zoomSlider.addEventListener('input', (e) => {
    viewerScale = parseFloat(e.target.value);
    updateViewerTransform();
});

// Touch Gestures (Pinch to Zoom & Pan)
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
    }
});

viewerImage.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2) {
        e.preventDefault();
        const currentDistance = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY
        );
        const diff = currentDistance / initialPinchDistance;
        viewerScale = Math.min(Math.max(1, initialScale * diff), 5);
        updateViewerTransform();
    } else if (e.touches.length === 1 && viewerPanning && viewerScale > 1) {
        e.preventDefault(); // Prevent scroll
        viewerTranslateX = e.touches[0].pageX - viewerStartX;
        viewerTranslateY = e.touches[0].pageY - viewerStartY;
        updateViewerTransform();
    }
});

viewerImage.addEventListener('touchend', () => {
    viewerPanning = false;
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
    menuOptions.style.display = 'none';
    menuIconBtn.classList.remove('rotate');
    logoutModal.style.display = 'flex';
    mainContent.classList.add('blur-content');
});

// Cancel Logout
cancelLogout.addEventListener('click', () => {
    logoutModal.style.display = 'none';
    mainContent.classList.remove('blur-content');
});

// Confirm Logout
confirmLogout.addEventListener('click', () => {
    // Hide Modal & Remove Blur
    logoutModal.style.display = 'none';
    mainContent.classList.remove('blur-content');
    
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
    
    localStorage.removeItem('milbaat_user');
    
    // Update status one last time before clearing
    if (currentUser && db) {
        const userRole = currentUser === ALPHA_ADMIN ? 'Alpha' : 'Beta';
        
        // Explicitly set offline status on logout
        db.ref(`status/${currentUser}`).update({
            online: false,
            lastSeen: firebase.database.ServerValue.TIMESTAMP
        });

        if (currentUser === ALPHA_ADMIN) {
            db.ref(`status/Raushan_Home`).update({
                online: false,
                lastSeen: firebase.database.ServerValue.TIMESTAMP
            });
        }

        db.ref(`status/${currentUser}`).onDisconnect().cancel();

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
    
    if (statusCheckInterval) clearInterval(statusCheckInterval);
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
window.addEventListener('popstate', () => {
    if (currentUser) {
        // Re-push state to keep user on the page
        history.pushState({ loggedIn: true }, "", window.location.href);
        
        // Show logout confirmation
        menuOptions.style.display = 'none';
        menuIconBtn.classList.remove('rotate');
        logoutModal.style.display = 'flex';
        mainContent.classList.add('blur-content');
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
    linksContainer.style.cssText = 'display: flex; justify-content: space-between; margin-top: 10px; margin-bottom: 15px; width: 100%; box-sizing: border-box; padding: 0 5px;';

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

    linksContainer.appendChild(forgotLink);
    linksContainer.appendChild(createLink);

    if (wrapper.parentNode) wrapper.parentNode.insertBefore(linksContainer, wrapper.nextSibling);

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
                <span id="toggleNewPass" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); cursor: pointer; color: rgba(255,255,255,0.7);">👁️</span>
            </div>
            <div style="position: relative; width: 100%;">
                <input type="password" id="confirmPass" placeholder="Confirm Password" style="width: 100%; box-sizing: border-box; padding: 10px; padding-right: 40px; border-radius: 5px; border: 1px solid #555; background: rgba(0,0,0,0.2); color: white;">
                <span id="toggleConfirmPass" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); cursor: pointer; color: rgba(255,255,255,0.7);">👁️</span>
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
                <span id="toggleResetNewPass" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); cursor: pointer; color: rgba(255,255,255,0.7);">👁️</span>
            </div>
            <div style="position: relative; width: 100%;">
                <input type="password" id="resetConfirmPass" placeholder="Confirm New Password" style="width: 100%; box-sizing: border-box; padding: 10px; padding-right: 40px; border-radius: 5px; border: 1px solid #555; background: rgba(0,0,0,0.2); color: white;">
                <span id="toggleResetConfirmPass" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); cursor: pointer; color: rgba(255,255,255,0.7);">👁️</span>
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
                toggle.innerHTML = type === 'password' ? '👁️' : '🙈';
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
        const isValid = uUser.value.trim() && uName.value.trim() && uPass.value && uConf.value && uKey.value === 'Raushan_Mil_Baat_143' && (uPass.value === uConf.value);
        
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
        const isValid = rUser.value.trim() && rCode.value.trim() && rKey.value === 'Raushan_Mil_Baat_143' && rPass.value && (rPass.value === rConf.value);
        
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

function createStatusSlider(container, imageUrls, isEditable) {
    container.innerHTML = ''; // Clear previous content

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
    if (imageUrls.length > 1) {
        const dotsContainer = document.createElement('div');
        dotsContainer.style.cssText = `
            position: absolute;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px;
            z-index: 10;
        `;

        for (let i = 0; i < imageUrls.length; i++) {
            const dot = document.createElement('span');
            dot.style.cssText = `
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: rgba(0, 0, 0, 0.5);
                transition: background-color 0.3s;
            `;
            dotsContainer.appendChild(dot);
        }
        container.appendChild(dotsContainer);

        const updateDots = () => {
            const scrollLeft = sliderWrapper.scrollLeft;
            const slideWidth = sliderWrapper.offsetWidth;
            const currentIndex = Math.round(scrollLeft / slideWidth);
            
            dotsContainer.childNodes.forEach((dot, index) => {
                dot.style.backgroundColor = (index === currentIndex) ? 'white' : 'rgba(0, 0, 0, 0.5)';
            });
        };

        sliderWrapper.addEventListener('scroll', updateDots);
        updateDots(); // Initial call
    }
}

function openBetaStatusModal() {
    let modal = document.getElementById('beta-status-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'beta-status-modal';
        modal.className = 'modal-overlay';
        modal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10001; align-items: center; justify-content: center; backdrop-filter: blur(10px); flex-direction: column;';
        
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '✖';
        closeBtn.style.cssText = 'position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,0.2); border: none; color: white; font-size: 1.5rem; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;';
        closeBtn.onclick = () => {
            modal.style.display = 'none';
            if(mainContent) mainContent.classList.remove('blur-content');
        };
        
        const sliderContainer = document.createElement('div');
        sliderContainer.id = 'beta-status-slider-container';
        sliderContainer.style.cssText = 'position: relative; width: 90%; height: 80%;';
        
        const noStatusTxt = document.createElement('div');
        noStatusTxt.id = 'beta-status-no-txt';
        noStatusTxt.innerText = 'No status uploaded yet.';
        noStatusTxt.style.cssText = 'color: white; font-size: 1.2rem; display: none;';
        
        modal.appendChild(closeBtn);
        modal.appendChild(sliderContainer);
        modal.appendChild(noStatusTxt);
        document.body.appendChild(modal);
    }

    modal.style.display = 'flex';
    if(mainContent) mainContent.classList.add('blur-content');

    const sliderContainer = document.getElementById('beta-status-slider-container');
    const noTxt = document.getElementById('beta-status-no-txt');

    db.ref('beta_status_feed').once('value').then(snap => {
        const data = snap.val();
        const imageUrls = (data && data.images) ? data.images : (data && data.image ? [data.image] : []);

        if (imageUrls.length > 0) {
            sliderContainer.style.display = 'block';
            noTxt.style.display = 'none';
            createStatusSlider(sliderContainer, imageUrls, true);
        } else {
            sliderContainer.style.display = 'none';
            noTxt.style.display = 'block';
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

    const themeToggle = document.createElement('div');
    themeToggle.innerHTML = '◑'; 
    themeToggle.style.cssText = 'font-size: 1.5rem; cursor: pointer; display: flex; align-items: center; justify-content: center;';
    themeToggle.onclick = () => {
        themeToggleBtn.click();
        const isLight = document.body.classList.contains('light-mode');
        themeToggle.innerHTML = isLight ? '◐' : '◑';
        dashboard.style.setProperty('--alpha-bg', isLight ? '#ffffff' : '#0F172A');
        dashboard.style.setProperty('--alpha-header-bg', isLight ? '#ffffff' : '#0F172A');
        dashboard.style.setProperty('--alpha-text', isLight ? '#080707' : '#e6e9ee');
        dashboard.style.setProperty('--alpha-card-bg', isLight ? '#ffffff' : '#1E293B');
        dashboard.style.setProperty('--alpha-card-hover', isLight ? '#f0f0f0' : '#283548');
        dashboard.style.setProperty('--alpha-border', isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.05)');
        const footerNav = document.getElementById('alpha-footer-nav');
        if (footerNav) footerNav.style.background = isLight ? '#ffffff' : '#0F172A';
    };
    alphaHomeHeader.appendChild(themeToggle);

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
        if (alphaFriendListContainer) {
            Array.from(alphaFriendListContainer.children).forEach(child => {
                const nameEl = child.querySelector('.friend-name');
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
    statusEmptyText.innerText = "No status uploaded yet.";
    statusEmptyText.style.cssText = `flex: 1; display: flex; align-items: center; justify-content: center; color: gray; font-size: 1.1rem;`;

    const statusDisplayContainer = document.createElement('div');
    statusDisplayContainer.style.cssText = `width: 100%; flex: 1; display: none; flex-direction: column; align-items: center; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); overflow-y: auto; padding: 15px; box-sizing: border-box;`;

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
    const fabIcon = document.createElement('img');
    fabIcon.src = 'Add Friend Icon.png';
    fabIcon.style.cssText = 'width: 30px; height: 30px; object-fit: contain; pointer-events: none; filter: brightness(0) invert(1);';
    statusFab.appendChild(fabIcon);

    const statusFileInput = document.createElement('input');
    statusFileInput.type = 'file';
    statusFileInput.accept = 'image/*';
    statusFileInput.multiple = true;
    statusFileInput.style.display = 'none';

    let isAddingMore = false;
    let pendingStatusImages = [];
    
    statusFab.onclick = () => { isAddingMore = false; statusFileInput.click(); };
    statusAddMoreBtn.onclick = () => { isAddingMore = true; statusFileInput.click(); };

    db.ref('beta_status_feed').on('value', snap => {
        const activeStatusData = snap.val();
        const imageUrls = (activeStatusData && activeStatusData.images) ? activeStatusData.images : [];
        if (imageUrls.length > 0) {
            createStatusSlider(statusDisplayContainer, imageUrls, true);
            statusDisplayContainer.style.display = 'flex';
            statusEmptyText.style.display = 'none';
            statusFab.style.display = 'none';
            statusSendBtn.style.display = 'none';
            statusRemoveBtn.style.display = 'block';
            if (imageUrls.length < 5) {
                statusAddMoreBtn.style.display = 'block';
            } else {
                statusAddMoreBtn.style.display = 'none';
            }
        } else {
            statusDisplayContainer.innerHTML = '';
            statusDisplayContainer.style.display = 'none';
            statusEmptyText.style.display = 'flex';
            statusFab.style.display = 'flex';
            statusSendBtn.style.display = 'none';
            statusRemoveBtn.style.display = 'none';
            statusAddMoreBtn.style.display = 'none';
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
                            statusAddMoreBtn.innerText = "Adding...";
                            db.ref('beta_status_feed').update({
                                images: combinedImages,
                                timestamp: firebase.database.ServerValue.TIMESTAMP
                            }).then(() => {
                                showToast("Status added");
                                statusFileInput.value = '';
                                statusAddMoreBtn.innerText = "+ Add More";
                            }).catch(err => {
                                alert("Upload failed: " + err.message);
                                statusAddMoreBtn.innerText = "+ Add More";
                            });
                        } else {
                            createStatusSlider(statusDisplayContainer, finalImages, true);
                            
                            statusDisplayContainer.style.display = 'flex';
                            statusEmptyText.style.display = 'none';
                            statusSendBtn.style.display = 'block';
                            statusRemoveBtn.style.display = 'none';
                            statusFab.style.display = 'none';
                            statusAddMoreBtn.style.display = 'none';

                            pendingStatusImages = finalImages;
                        }
                    };
                }).catch(err => {
                    alert("Error processing images: " + err.message);
                });
            }
        });
    };

    statusSendBtn.onclick = () => {
        if (pendingStatusImages && pendingStatusImages.length > 0) {
            statusSendBtn.innerText = "Setting...";
            db.ref('beta_status_feed').set({
                images: pendingStatusImages,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            }).then(() => {
                showToast("Status updated for Beta user");
                statusFileInput.value = '';
                statusSendBtn.innerText = "Set Status";
                statusSendBtn.style.display = 'none';
                pendingStatusImages = [];
            }).catch(err => {
                alert("Failed to set status: " + err.message);
                statusSendBtn.innerText = "Set Status";
            });
        }
    };

    statusView.appendChild(statusEmptyText);
    statusView.appendChild(statusDisplayContainer);
    statusView.appendChild(statusAddMoreBtn);
    statusView.appendChild(statusSendBtn);
    statusView.appendChild(statusRemoveBtn);
    statusView.appendChild(statusFab);
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

    menuView.appendChild(createMenuBtn('Update Profile Pic', () => profileBtn.click()));
    menuView.appendChild(createMenuBtn('Change Font', () => document.getElementById('changeFontBtn')?.click()));
    menuView.appendChild(createMenuBtn('Change Password', () => changePassBtn.click()));
    menuView.appendChild(createMenuBtn('Friends', () => document.getElementById('menuFriendsBtn')?.click()));
    
    const blockedBtn = createMenuBtn('Blocked Friends', () => {
        let msg = "Blocked Users:\n";
        if(blockedUsersSet.size === 0) msg += "None";
        else blockedUsersSet.forEach(u => msg += u + "\n");
        alert(msg);
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
    navItems.forEach(n => { n.view.style.display = 'none'; n.btn.style.color = 'gray'; });
    navItems[0].view.style.display = 'flex';
    navItems[0].btn.style.color = '#0EA5E9';
    if (!alphaAddFriendFab) createAlphaFab();
    alphaAddFriendFab.style.display = 'flex';
    renderAlphaFriendList();
    
    // Apply initial theme settings if body is already in light mode
    if (document.body.classList.contains('light-mode')) {
        themeToggle.innerHTML = '◐';
            dashboard.style.setProperty('--alpha-bg', '#ffffff');
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
    
    // Show Dashboard UI
    dashboard.style.display = 'flex';
    
    if (headerLogoutBtn) headerLogoutBtn.style.display = 'none';
    
    currentChatPartner = null;
    updatePinnedMessageListener();

    // Stop Heartbeat (Alpha goes offline on Home Screen)
    if (heartbeatInterval) clearInterval(heartbeatInterval);
    if (currentUser) {
        db.ref(`status/${currentUser}`).update({
            online: false,
            lastSeen: firebase.database.ServerValue.TIMESTAMP
        });

        if (currentUser === ALPHA_ADMIN) {
            startHeartbeat('Raushan_Home');
            db.ref(`Notification Alert/${ALPHA_ADMIN}`).set(false).catch(e => console.error(e));
        }
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

function updateAlphaListStatus() {
    const now = Date.now() + (serverTimeOffset || 0);
    const dots = document.querySelectorAll('[id^="status-dot-"]');
    dots.forEach(dot => {
        const fid = dot.id.replace('status-dot-', '');
        const friendStatus = latestAlphaStatusData[fid] || {};
        const heartbeat = friendStatus.heartbeat || 0;
        const isOnline = (now - heartbeat < 10000) && (friendStatus.online !== false);
        dot.style.background = isOnline ? '#00e676' : '#ff1744';
        dot.style.boxShadow = isOnline ? '0 0 8px rgba(0, 230, 118, 0.6)' : 'none';
    });
}

function renderAlphaFriendList() {
    if (!alphaFriendListContainer) return;
    
    const unreadCounts = {};
    if (allMessagesRaw && currentUser === ALPHA_ADMIN) {
        allMessagesRaw.forEach(msg => {
            if (msg && msg.recipient === currentUser && msg.status !== 'seen') {
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
                        <img src="Add Friend Icon.png" style="width: 80px; opacity: 0.3; margin-bottom: 20px; filter: invert(1);">
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
            const isOnline = (latestAlphaStatusData[f.id]?.online !== false) && 
                             ((Date.now() + (serverTimeOffset || 0) - (latestAlphaStatusData[f.id]?.heartbeat || 0)) < 10000);
            
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
                            <span id="typing-${f.id}" style="display: none; color: #00d2ff; font-size: 0.85rem; font-style: italic; animation: blinkText 1s infinite;">Typing...</span>
                            <span class="status-text-${f.id}" style="font-size: 0.85rem; color: var(--alpha-text, white); opacity: 0.6; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${f.statusMsg}</span>
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
            });
        }
        
        // Ensure typing listener is active for the list
        if (!alphaTypingListener) {
            alphaTypingListener = db.ref('typing').on('value', snapshot => {
                const typingData = snapshot.val() || {};
                Object.keys(typingData).forEach(uid => {
                    const typingEl = document.getElementById(`typing-${uid}`);
                    const statusEl = document.querySelector(`.status-text-${uid}`);
                    if (typingEl && statusEl) {
                        if (typingData[uid]) {
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
    if (alphaStatusListener) {
        db.ref('status').off('value', alphaStatusListener);
        alphaStatusListener = null;
    }

    const dashboard = document.getElementById('alpha-dashboard');
    if (dashboard) dashboard.style.display = 'none';
    
    if (chatMessages) chatMessages.style.display = 'block';
    if (chatInputBar) chatInputBar.style.display = 'flex';
    currentChatPartner = friendId;
    
    // Switch Headers Back
    const defaultHeader = document.querySelector('header');
    if (defaultHeader) defaultHeader.style.display = 'flex';
    if (menuIconBtn) menuIconBtn.style.display = 'block';

    if (logoDisplay) {
        logoDisplay.style.display = 'block';
        logoDisplay.innerHTML = friendName;
    }
    
    if (headerLogoutBtn) headerLogoutBtn.style.display = 'flex';

    if (currentUser === ALPHA_ADMIN) {
        db.ref(`status/Raushan_Home`).update({
            online: false,
            lastSeen: firebase.database.ServerValue.TIMESTAMP
        });
        db.ref(`Notification Alert/${ALPHA_ADMIN}`).set(false).catch(e => console.error(e));
    }

    filterAndRenderChat();
    updatePinnedMessageListener();
    startHeartbeat();
}

// --- Forward Message Logic ---
let selectedForwardFriends = new Set();

async function openForwardModal() {
    forwardMsgModal.style.display = 'flex';
    mainContent.classList.add('blur-content');
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
        exitSelectionMode();
        showToast(`Forwarded to ${selectedForwardFriends.size} chat(s)`);
    });
}
