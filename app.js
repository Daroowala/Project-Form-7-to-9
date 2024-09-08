document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the user input
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve existing users from localStorage or create empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user
    users.push({ firstName, lastName, email, password });

    // Store updated user list
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to users list page
    window.location.href = 'users.html';
});

// Redirect to login page
document.getElementById('login-btn').addEventListener('click', function() {
    window.location.href = 'login.html';
});




// Retrieve users from localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Function to display users
function displayUsers(filteredUsers) {
    const tableBody = document.getElementById('users-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';  // Clear table

    filteredUsers.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${user.firstName}</td><td>${user.lastName}</td><td>${user.email}</td>`;
        tableBody.appendChild(row);
    });
}

// Display all users initially
displayUsers(users);

// Search users by name
document.getElementById('search-input').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredUsers = users.filter(user => 
        user.firstName.toLowerCase().includes(searchTerm) || 
        user.lastName.toLowerCase().includes(searchTerm)
    );
    displayUsers(filteredUsers);
});

// Go back to the sign-up page
document.getElementById('go-back').addEventListener('click', function() {
    window.location.href = 'signup.html';
});




// Details form submission
document.getElementById('details-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user details
    const userDetails = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        gender: document.getElementById('gender').value,
        cnic: document.getElementById('cnic').value,
        age: document.getElementById('age').value,
        dob: document.getElementById('dob').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        marks: document.getElementById('marks').value,
        course: document.getElementById('course').value
    };

    // Retrieve users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user details
    users.push(userDetails);

    // Store updated users in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to users list
    window.location.href = 'details.html';
});




// Retrieve users from localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Function to display users' details
function displayDetails(filteredUsers) {
    const tableBody = document.getElementById('details-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';  // Clear table

    filteredUsers.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.firstName}</td><td>${user.lastName}</td>
            <td>${user.gender}</td><td>${user.cnic}</td>
            <td>${user.age}</td><td>${user.dob}</td>
            <td>${user.phone}</td><td>${user.email}</td>
            <td>${user.address}</td><td>${user.marks}</td><td>${user.course}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Display all users' details initially
displayDetails(users);

// Search by name
document.getElementById('search-input').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredUsers = users.filter(user => 
        user.firstName.toLowerCase().includes(searchTerm) || 
        user.lastName.toLowerCase().includes(searchTerm)
    );
    displayDetails(filteredUsers);
});

// Go back to login page
document.getElementById('go-back').addEventListener('click', function() {
    window.location.href = 'login.html';
});