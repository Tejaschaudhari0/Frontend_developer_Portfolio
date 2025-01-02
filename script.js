

const buttons = document.querySelectorAll('.resume-btn');
const dropdown = document.querySelector('.resume-dropdown');
const sections = document.querySelectorAll('.resume-detail');



// Function to activate a section
function activateSection(sectionName) {
    // Remove 'active' from all buttons and sections
    buttons.forEach((btn) => btn.classList.remove('active'));
    sections.forEach((section) => section.classList.remove('active'));

    // Activate the correct section
    const targetSection = document.querySelector(`.resume-detail.${sectionName}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Set the default active section
activateSection('Aboutme');

// Handle button clicks

buttons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {

        const resumedetails = document.querySelectorAll('.resume-detail')

        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumedetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumedetails[idx].classList.add('active');
    });
});

// Handle dropdown changes
dropdown.addEventListener('change', (e) => {
    const sectionName = e.target.value;
    activateSection(sectionName);
});



// Select DOM elements
const nav = document.querySelector(".navbar");
const navL = document.querySelector(".nav-links");
const MenuT = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a"); // Select all links in the navbar

// Toggle navbar menu on click
MenuT.addEventListener("click", () => {
    navL.classList.toggle("active");
});

// Function to handle the active state of links
const setActiveLink = (event) => {
    // Remove 'active' class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    event.target.classList.add("active");

    // Close the navbar menu (only for mobile view)
    if (navL.classList.contains("active")) {
        navL.classList.remove("active");
    }
};

// Add click event listeners to all navigation links
navLinks.forEach((link) => {
    link.addEventListener("click", setActiveLink);
});



// project section button 

const arrowRight = document.querySelector('.project-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.project-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.img-info .img-slide'); // Fixed the selector

    const projectInfos = document.querySelectorAll('.project-info');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`; // Ensure smooth transitions

    projectInfos.forEach(detail =>{
        detail.classList.remove('active');
    });
    projectInfos[index].classList.add('active');
};

// Right Arrow Click
arrowRight.addEventListener('click', () => {

    if (index < 3) {
        index++;
        arrowLeft.classList.remove('disabled') /*for left right button disabled*/
    } else {
        index = 4;
        arrowRight.classList.add('disabled')
    }
    activePortfolio();
});

// Left Arrow Click
arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled')

    } else {
        index = 0;
        arrowLeft.classList.add('disabled')

    }
    activePortfolio();
});
