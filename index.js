// Signup Functionality
// Event listener for the signup button
document.getElementById('signup-btn').addEventListener('click', () => {
    // Retrieve input values from the signup form
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Check if all fields are filled
    if (name && email && password) {
        // Save user details in localStorage as a JSON object
        localStorage.setItem('user', JSON.stringify({ name, email, password }));
        // Notify the user of successful signup and redirect them
        alert('Sign Up Successful! Redirecting to Login page...');

        // Hide the signup section and display the login section
        document.getElementById('signup').classList.add('hidden');
        document.getElementById('login').classList.remove('hidden');
    } else {
        // Alert the user to fill in all fields if any are missing
        alert('Please fill in all fields.');
    }
});

// Login Functionality
// Event listener for the login button
document.getElementById('login-btn').addEventListener('click', () => {
    // Retrieve input values from the login form
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Get user details from localStorage and parse the JSON object
    const user = JSON.parse(localStorage.getItem('user'));

    // Validate the entered email and password against stored user data
    if (user && user.email === email && user.password === password) {
        // Welcome the user if credentials are correct
        alert(`Welcome back, ${user.name}!`);
    } else {
        // Notify the user of invalid credentials
        alert('Invalid email or password. Please try again.');
    }
});
