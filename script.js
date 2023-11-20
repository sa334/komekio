var colorChangeLink = document.getElementById('signin-link');
var colorChangeLink2 = document.getElementById('signup-link');

function showSignInForm() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('sign-in-section').style.display = 'block';

    // Change the color of the link
    colorChangeLink.style.color = '#009688'; // Change to your desired color
    colorChangeLink2.style.color='#ffffff'
}

function navigateToSection(sectionId) {
    document.getElementById('sign-in-section').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('content').style.display = 'block';

    var element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Section not found:', sectionId);
    }

    colorChangeLink.style.color = '#ffffff'; // Change to your desired color
    colorChangeLink2.style.color='#ffffff'
}

function showSignUpForm() {
    document.getElementById('sign-in-section').style.display = 'none';
    document.getElementById('content').style.display = 'none';
    var signupContainer = document.getElementById('signupContainer');
    signupContainer.style.display = 'block';

    colorChangeLink.style.color = '#ffffff'; // Change to your desired color
    colorChangeLink2.style.color='#009688'
}

function validateSignUpForm() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        var errorMessage = document.getElementById('errorMessage');
        errorMessage.innerHTML = 'Passwords do not match.';
        return false;
    }

    // Add more validation if needed.

    return true;
}

function calculateAge() {
    var dob = document.getElementById('dob').value;
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    // Set the calculated age in the read-only text box
    document.getElementById('age').value = age;
}

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}