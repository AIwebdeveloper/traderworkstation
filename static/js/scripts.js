document.addEventListener('DOMContentLoaded', () => {
    // Selecting elements
    const chatButton = document.getElementById('tws-chat-btn');
    const chatArea = document.getElementById('chat-area');
    const closeChatButton = document.getElementById('close-chat-btn');

    // Open or close the chat area
    chatButton.addEventListener('click', () => {
        chatArea.classList.toggle('hidden');
    });

    closeChatButton.addEventListener('click', () => {
        chatArea.classList.add('hidden');
    });

    // Test message sending (for UI demonstration)
    const chatInput = document.getElementById('chat-input');
    const sendChatButton = document.getElementById('send-chat-btn');
    const chatMessages = document.querySelector('.chat-messages');

    sendChatButton.addEventListener('click', () => {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            // User message
            const userMessageElement = document.createElement('div');
            userMessageElement.classList.add('message');
            userMessageElement.textContent = userMessage;
            chatMessages.appendChild(userMessageElement);

            // Clear input
            chatInput.value = '';

            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Mock bot response
            const botMessageElement = document.createElement('div');
            botMessageElement.classList.add('message', 'bot-message');
            botMessageElement.textContent = 'Thanks for your message!';
            chatMessages.appendChild(botMessageElement);
        }
    });
});
