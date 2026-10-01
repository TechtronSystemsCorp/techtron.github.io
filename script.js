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

            // Inayos na part: Tinanggal ang sobrang '})' bago mag '.then()'
            emailjs.send("service_sph8bk4", "template_42ey1g2", {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                company: document.getElementById("company").value,
                designation: document.getElementById("designation").value,
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

/* =========================================================
   HERO MOTION SLIDER
========================================================= */
let currentSlide = 0;
let slideTimer;
const totalSlides = 6; /* Binago naging 6 para sa slide 1 hanggang 6 */

window.changeSlide = function(index) {
    currentSlide = index;
    const track = document.getElementById("sliderTrack");
    const dots = document.querySelectorAll(".dot");

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    if(dots[currentSlide]) {
        dots[currentSlide].classList.add("active");
    }

    resetTimer();
};

function autoSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    window.changeSlide(currentSlide);
}

function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(autoSlide, 10000); // 10 segundo bawat slide
}

document.addEventListener("DOMContentLoaded", function() {
    resetTimer();
});
