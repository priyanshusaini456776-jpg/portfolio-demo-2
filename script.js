// Typing effect in Hero section
const typingText = ["HTML", "CSS", "JavaScript"];
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const typingElement = document.querySelector('.typing');

function type() {
  if (!typingElement) return;
  if (index >= typingText.length) index = 0;
  const fullText = typingText[index];

  if (isDeleting) {
    currentText = fullText.substring(0, charIndex--);
  } else {
    currentText = fullText.substring(0, charIndex++);
  }

  typingElement.textContent = currentText;

  if (!isDeleting && charIndex === fullText.length) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index++;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();

// Scroll animations for elements (fade-in / slide-up)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('slide-up');
      entry.target.classList.add('fade-up');
    }
  });
}, {threshold:0.1});

// Observe all animated elements
document.querySelectorAll('.slide-up, .fade-up').forEach(el => observer.observe(el));
