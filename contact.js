function sendMail() {
    //this function is used to send an email to the site owner 
    let params = {
        cname: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        message: document.getElementById('contactMessage').value
    };

    if (!params.cname || !params.email || !params.message) {
        alert("All fields are required.");
        return;
    }

    const submitButton = document.getElementById('form-submit');
    submitButton.innerHTML = "Submitting...";

    emailjs.send("service1", "george13", params).then(function(response) {
        alert("Email sent!");
        submitButton.innerHTML = "Submitted!";
        console.log("SUCCESS!", response.status, response.text);
    }, function(error) {
        console.error("FAILED...", error);
        alert("Failed to send email. Please try again.");
    });
}

document.addEventListener("DOMContentLoaded", function () {
    'use strict';

    const form = document.querySelector('.needs-validation');
    const inputs = form.querySelectorAll('.form-control');

    inputs.forEach(input => {
        const validFeedback = input.parentElement.querySelector('.valid-feedback');
        const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');

        // Hide validation messages initially
        if (validFeedback) validFeedback.style.display = 'none';
        if (invalidFeedback) invalidFeedback.style.display = 'none';

        input.addEventListener('input', () => {
            if (input.checkValidity()) {
                input.classList.add('is-valid');
                input.classList.remove('is-invalid');
                if (validFeedback) validFeedback.style.display = 'block';
                if (invalidFeedback) invalidFeedback.style.display = 'none';
            } else {
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                if (validFeedback) validFeedback.style.display = 'none';
                if (invalidFeedback) invalidFeedback.style.display = 'block';
            }
        });

        input.addEventListener('blur', () => {
            if (input.value.trim()) {
                if (input.checkValidity()) {
                    input.classList.add('is-valid');
                    input.classList.remove('is-invalid');
                    if (validFeedback) validFeedback.style.display = 'block';
                    if (invalidFeedback) invalidFeedback.style.display = 'none';
                } else {
                    input.classList.add('is-invalid');
                    input.classList.remove('is-valid');
                    if (validFeedback) validFeedback.style.display = 'none';
                    if (invalidFeedback) invalidFeedback.style.display = 'block';
                }
            } else {
                input.classList.remove('is-valid', 'is-invalid');
                if (validFeedback) validFeedback.style.display = 'none';
                if (invalidFeedback) invalidFeedback.style.display = 'none';
            }
        });
    });

    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
});
