document.getElementById('url-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const longUrl = document.getElementById('long-url').value;
    const customAlias = document.getElementById('custom-alias').value.trim();

    // Generate a short code
    let shortCode = customAlias || generateShortCode();

    // Check if the short code already exists
    if (localStorage.getItem(shortCode)) {
        alert('Alias already in use. Please choose another one.');
        return;
    }

    // Store the URL mapping in localStorage
    localStorage.setItem(shortCode, longUrl);

    // Display the shortened URL
    const shortUrl = `${window.location.origin}/${shortCode}`;
    document.getElementById('result').innerText = `Shortened URL: ${shortUrl}`;
});

function generateShortCode(length = 6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Handle URL redirection
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname.substring(1);
    if (path) {
        const longUrl = localStorage.getItem(path);
        if (longUrl) {
            window.location.href = longUrl;
        } else {
            document.getElementById('result').innerText = 'URL not found.';
        }
    }
});
