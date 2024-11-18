document.getElementById('validationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    // Username validation
    const username = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(username.value)) {
        usernameError.textContent = 'Username should contain only alphabets';
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    // Password validation
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    // CNIC validation
    const cnic = document.getElementById('cnic');
    const cnicError = document.getElementById('cnicError');
    const cnicPattern = /^\d{5}-\d{7}-\d{1}$/;
    if (!cnicPattern.test(cnic.value)) {
        cnicError.textContent = 'CNIC should be in the format: 12345-1234567-1';
        isValid = false;
    } else {
        cnicError.textContent = '';
    }

    // Date of Birth validation
    const dob = document.getElementById('dob');
    const dobError = document.getElementById('dobError');
    const currentDate = new Date();
    const selectedDate = new Date(dob.value);
    if (dob.value === '') {
        dobError.textContent = 'Date of Birth is required';
        isValid = false;
    } else if (selectedDate > currentDate) {
        dobError.textContent = 'Future dates are not allowed';
        isValid = false;
    } else {
        dobError.textContent = 'Unknown Error';
    }

    if (isValid) {
        alert('Form has been submitted successfully!');
    }
}