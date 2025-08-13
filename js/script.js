document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const output = document.getElementById("output");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const gender = form.gender.value;
    const message = document.getElementById("message").value;

    output.innerHTML = `
      <p><span class="font-bold">Current time :</span> ${new Date().toLocaleString()}</p>
      <p class="mt-4">
        <span class="font-bold">Name :</span> ${name}<br />
        <span class="font-bold">Email :</span> ${email}<br />
        <span class="font-bold">Date of Birth :</span> ${dob}<br />
        <span class="font-bold">Gender :</span> ${gender}<br />
        <span class="font-bold">Message :</span> ${message}
      </p>
    `;
  });
});

// script.js

// Toggle mobile menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('flex');
});

// Close mobile menu when menu item is clicked
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            navMenu.classList.add('hidden');
            navMenu.classList.remove('flex');
        }
    });
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update URL hash without jumping
            history.pushState(null, null, targetId);
        }
    });
});

// Active nav link based on visible section
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('#nav-menu a');

const options = {
    threshold: 0.5, // Trigger when 50% of section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = '#' + entry.target.getAttribute('id');
            
            navItems.forEach(item => {
                if (item.getAttribute('href') === id) {
                    item.classList.add('text-red-700');
                    item.classList.remove('text-gray-300');
                } else {
                    item.classList.remove('text-red-700');
                    item.classList.add('text-gray-300');
                }
            });
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Set initial active state based on URL hash
window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            setTimeout(() => {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
    
    // Highlight the corresponding nav item
    navItems.forEach(item => {
        if (item.getAttribute('href') === hash) {
            item.classList.add('text-red-700');
            item.classList.remove('text-gray-300');
        }
    });
});