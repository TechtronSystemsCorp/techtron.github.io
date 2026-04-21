document.addEventListener("DOMContentLoaded", function () {

    // INIT EMAILJS
    emailjs.init("010GnrAQri6mIy7wL");

    // OPEN MODAL
    window.openContactForm = function () {
        document.getElementById("contactModal").style.display = "block";
    };

    // CLOSE MODAL
    window.closeContactForm = function () {
        document.getElementById("contactModal").style.display = "none";
    };

    // FORM SUBMIT
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const msg = document.getElementById("formMsg");
            const consent = document.getElementById("consent").checked;

            if (!consent) {
                msg.style.color = "red";
                msg.innerText = "You must agree first.";
                return;
            }

            emailjs.send("service_sph8bk4", "template_42ey1g2", {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            })
            .then(() => {
                msg.style.color = "green";
                msg.innerText = "Email sent successfully!";
                form.reset();
            })
            .catch((error) => {
                msg.style.color = "red";
                msg.innerText = "Failed to send email.";
                console.error(error);
            });
        });
    }

});