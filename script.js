document.addEventListener('DOMContentLoaded', function () {
    var daySelect = document.getElementById('day');
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        daySelect.appendChild(option);
    }

    var monthSelect = document.getElementById('month');
    var monthNames = ['Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (var i = 0; i < monthNames.length; i++) {
        var option = document.createElement('option');
        option.value = (i === 0) ? '' : ('0' + i).slice(-2);
        option.text = monthNames[i];
        monthSelect.appendChild(option);
    }

    var yearSelect = document.getElementById('year');
    var currentYear = new Date().getFullYear();
    for (var i = currentYear; i >= currentYear - 100; i--) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        yearSelect.appendChild(option);
    }

    document.getElementById('registerForm').addEventListener('submit', function (event) {
        validateForm(event);
    });
});

function validateForm(event) {
    var isValid = true;

    var email = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    if (!email.value.trim()) {
        emailError.textContent = 'Please enter your email address.';
        email.classList.add('error');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        email.classList.add('error');
        isValid = false;
    } else {
        emailError.textContent = '';
        email.classList.remove('error');
    }

    var day = document.getElementById('day');
    var month = document.getElementById('month');
    var year = document.getElementById('year');
    var dayError = document.getElementById('dayError');
    var monthError = document.getElementById('monthError');
    var yearError = document.getElementById('yearError');
    if (day.value === '' || month.value === '' || year.value === '') {
        dayError.textContent = 'Please select a valid date.';
        monthError.textContent = '';
        yearError.textContent = '';
        day.classList.add('error');
        month.classList.add('error');
        year.classList.add('error');
        isValid = false;
    } else {
        dayError.textContent = '';
        day.classList.remove('error');
        month.classList.remove('error');
        year.classList.remove('error');
    }

    var password = document.getElementById('password');
    var passwordError = document.getElementById('passwordError');
    if (!password.value.trim()) {
        passwordError.textContent = 'Please enter your password.';
        password.classList.add('error');
        isValid = false;
    } else if (password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters.';
        password.classList.add('error');
        isValid = false;
    } else {
        passwordError.textContent = '';
        password.classList.remove('error');
    }

    var userType = document.querySelector('input[name="userType"]:checked');
    var userTypeError = document.getElementById('userTypeError');
    if (!userType) {
        userTypeError.textContent = 'Please select your user type.';
        isValid = false;
    } else {
        userTypeError.textContent = '';
        userTypeError.classList.remove('error');
    }

    if (!isValid) {
        event.preventDefault();
    }
}

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}