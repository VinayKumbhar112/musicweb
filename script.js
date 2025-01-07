// Sign Up Functionality
document.getElementById('signup-form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('signup-username').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;

  // Validation: Ensure all fields are filled
  if (!username || !email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // Fetch users from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const existingUser = users.find(user => user.email === email);

  // Check if the user already exists
  if (existingUser) {
    alert('User with this email already exists.');
    return;
  }

  // Save new user
  users.push({ username, email, password });
  localStorage.setItem('users', JSON.stringify(users));

  alert('Sign up successful! You can now sign in.');
  window.location.href = 'signin.html';
});

// Sign In Functionality
document.getElementById('signin-form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('signin-email').value.trim();
  const password = document.getElementById('signin-password').value;

  // Validation: Ensure all fields are filled
  if (!email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // Fetch users from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email && user.password === password);

  // Validate user credentials
  if (!user) {
    alert('Invalid email or password.');
    return;
  }

  // Welcome the user
  alert(`Welcome, ${user.username}!`);

  // Redirect to the dashboard or homepage
  window.location.href = 'index.html';
});
