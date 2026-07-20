// Forma & Spazio — minimal interactions

const header = document.querySelector('.site-header');

function handleScroll() {
  if (window.scrollY > 24) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

// Add subtle entrance animation for specimen glyphs as they enter the viewport
const specimens = document.querySelectorAll('.specimen');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
});

specimens.forEach((specimen) => observer.observe(specimen));
