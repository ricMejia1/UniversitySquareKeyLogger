async function sendMessage() {
    const message = document.getElementById('userInput').value;
    const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
    }).then(res => res.json());

    document.getElementById('messages').innerHTML += `<div>User: ${message}</div>`;
    document.getElementById('messages').innerHTML += `<div>Bot: ${response.response}</div>`;
    document.getElementById('userInput').value = '';
}
