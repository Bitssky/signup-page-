document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        document.getElementById('message').textContent = `Thank you for signing up, ${name}!`;
    } else {
        document.getElementById('message').textContent = 'Please fill out all fields.';
    }
});
