body {
    margin: 0;
    font-family: Arial, sans-serif;
    color: #333;
    background-color: #f4f4f4;
}

header {
    background-color: #007BFF;
    color: white;
    padding: 1rem 2rem;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
}

.nav-links .button {
    background-color: #0056b3;
    padding: 0.5rem 1rem;
    border-radius: 5px;
}

.hero {
    background-color: #0056b3;
    color: white;
    padding: 5rem 2rem;
    text-align: center;
}

.cta-button {
    background-color: #007BFF;
    color: white;
    padding: 1rem 2rem;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    margin-top: 1rem;
}

.features, .services, .about, .testimonials, .contact {
    padding: 4rem 2rem;
    background-color: white;
    text-align: center;
}

.feature-cards, .service-cards, .testimonial-cards {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    flex-wrap: wrap;
}

.card {
    background-color: #f4f4f4;
    padding: 2rem;
    border-radius: 10px;
    width: 30%;
    margin: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.about {
    background-color: #f9f9f9;
}

.contact form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
}

.contact input, .contact textarea {
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
}
