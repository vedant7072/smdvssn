// =============================================================
// Shree Malook Das Vishva Seva Sansthan Nyas
// Main JavaScript File
// Handles bilingual toggle, navbar behavior & simple utilities
// =============================================================

// --------------- Language Toggle ---------------
const toggleBtn = document.getElementById('langToggle');
let currentLang = 'hi';

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const elements = document.querySelectorAll('[data-hi]');
    elements.forEach(el => {
      if (currentLang === 'hi') {
        el.textContent = el.getAttribute('data-en');
      } else {
        el.textContent = el.getAttribute('data-hi');
      }
    });
    toggleBtn.textContent = currentLang === 'hi' ? 'हिंदी' : 'English';
    currentLang = currentLang === 'hi' ? 'en' : 'hi';
  });
}

// --------------- Smooth Scroll for Navigation ---------------
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// --------------- Mobile Menu Toggle (Optional) ---------------
const menuBtn = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });
}

// --------------- Scroll Shadow Effect on Header ---------------
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    header.classList.add('shadow-lg');
  } else {
    header.classList.remove('shadow-lg');
  }
});


// Load header dynamically
fetch("partials/header.html")
.then(response => response.text())
.then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    // Re-initialize language toggle after header loads
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
    let currentLang = 'hi';
    toggleBtn.addEventListener('click', () => {
        const elements = document.querySelectorAll('[data-hi]');
        elements.forEach(el => {
        if (currentLang === 'hi') {
            el.textContent = el.getAttribute('data-en');
        } else {
            el.textContent = el.getAttribute('data-hi');
        }
        });
        toggleBtn.textContent = currentLang === 'hi' ? 'हिंदी' : 'English';
        currentLang = currentLang === 'hi' ? 'en' : 'hi';
    });
    }
})
.catch(error => console.error("Header include failed:", error));

