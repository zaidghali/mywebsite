const PROTECTED_INFO = {
    phone: '+(33)758626853',
    email: 'ghalizaid1@gmail.com'
};

const PASSWORD = 'z@id';

function showProtectedInfo(type) {
    const password = prompt('Please enter the password to view this information:');
    
    if (password === PASSWORD) {
        document.getElementById(type).textContent = PROTECTED_INFO[type];
        // Hide the reveal button after successful reveal
        const button = document.querySelector(`#${type}`).nextElementSibling;
        button.style.display = 'none';
    } else {
        alert('Incorrect password. Access denied.');
    }
} 