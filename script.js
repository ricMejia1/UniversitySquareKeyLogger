const responses = {
    "hello": "Hi there!",
    "how are you": "I'm good, thanks for asking!",
    "bye": "Goodbye!",
    // Add more predefined responses here
};

function sendMessage() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    const messagesDiv = document.getElementById('messages');

    if (userInput) {
        // Display user message
        messagesDiv.innerHTML += `<div>User: ${userInput}</div>`;

        // Generate response
        const response = responses[userInput] || "Sorry, I don't understand that.";
        
        // Display bot response
        messagesDiv.innerHTML += `<div>Bot: ${response}</div>`;
        
        // Clear input field
        document.getElementById('userInput').value = '';

        // Scroll to the bottom
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}
