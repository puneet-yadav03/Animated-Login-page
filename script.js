const container = document.querySelector('.container');
const loginhere = document.querySelector('.login-here');
const registerhere = document.querySelector('.register-here');
const loginbtn = document.querySelector('.loginbtn');
const closebtn = document.querySelector('.closepage');
const loginForm = document.querySelector('.box.login form');
const registerForm = document.querySelector('.box.registration form');

let users = {
    'puneet@gmail.com': 'puneet@123' // Ensure this user is always valid
};

registerhere.addEventListener('click', () => {
    container.classList.add('active');
});

loginhere.addEventListener('click', () => {
    container.classList.remove('active');
});

loginbtn.addEventListener('click', () => {
    container.classList.add('active-popup');
});

closebtn.addEventListener('click', () => {
    container.classList.remove('active-popup');
});

// Login Form Handling
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const emailInput = loginForm.querySelector('input[type="email"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');
    const email = emailInput.value;
    const password = passwordInput.value;
    
    if (!users[email]) {
        alert('Invalid user');
    } else if (users[email] !== password) {
        alert('Wrong password');
    } else {
        alert('Login successfully');
    }
    
    // Clear fields after login attempt
    emailInput.value = '';
    passwordInput.value = '';
});

// Register Form Handling
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const usernameInput = registerForm.querySelector('input[type="text"]');
    const emailInput = registerForm.querySelector('input[type="email"]');
    const passwordInput = registerForm.querySelector('input[type="password"]');
    
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    
    if (users[email]) {
        alert('User already exists!');
    } else {
        users[email] = password;
        alert('Register successfully');
        container.classList.remove('active'); // Switch to login form after registration
    }
    
    // Clear fields after registration
    registerForm.querySelectorAll('input').forEach(input => input.value = '');
});
