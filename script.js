body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

.flashcard-container {
    text-align: center;
}

.flashcard {
    width: 300px;
    height: 200px;
    perspective: 1000px;
    margin-bottom: 20px;
}

.flashcard div {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    transition: transform 0.6s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

.front {
    background-color: white;
}

.back {
    background-color: white;
    transform: rotateY(180deg);
}

.flashcard-container .flashcard {
    position: relative;
    transform-style: preserve-3d;
}

.flashcard-container .flashcard.flip .front {
    transform: rotateY(180deg);
}

.flashcard-container .flashcard.flip .back {
    transform: rotateY(0);
}

button {
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
