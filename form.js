document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const firstname = document.getElementById('firstName').value;
    const lastname = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const cnic = document.getElementById('cnic').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('Email').value;
    const dateOfBirth = document.getElementById('date').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('Phone').value;
    const course = document.getElementById('Course').value;

    if (firstname && lastname && gender && cnic && age && email && dateOfBirth && address && phone && course) {
        document.getElementById('message').innerHTML = `<p>Thank you, ${name}! Your Registration for the ${course} course has been received.</p>`;
        document.getElementById('studentForm').reset();
    } else {
        document.getElementById('message').innerHTML = `<p class="error">Please fill out all fields.</p>`;
    }
});