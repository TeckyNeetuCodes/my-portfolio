// =========================
// Resume Dropdown
// =========================

const resumeDropdown = document.querySelector(".resume-dropdown");
const resumeButton = document.querySelector(".secondary-btn");
const resumeMenu = document.querySelector(".resume-menu");

if (resumeDropdown && resumeButton && resumeMenu) {
    resumeButton.addEventListener("click", function (event) {
        event.stopPropagation();
        resumeDropdown.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!resumeDropdown.contains(event.target)) {
            resumeDropdown.classList.remove("active");
        }
    });
}


// =========================
// Back to Top
// =========================

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
    backToTop.addEventListener("click", function (event) {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}