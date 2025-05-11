// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn") as HTMLElement;
const mobileMenu = document.getElementById("mobileMenu") as HTMLElement;

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Typing Animation
const typingText = document.getElementById("typingText") as HTMLElement;
const texts = [
  "Frontend Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Tech Blogger",
  "Tech Leader"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function type() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = 50;
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 100;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingDelay = 1000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typingDelay = 500;
  }

  setTimeout(type, typingDelay);
}

// Start typing animation
setTimeout(type, 1000);

// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;

  const progressBar = document.getElementById("progressBar");
  if (progressBar) {
    progressBar.style.width = scrollPercentage + "%";
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = anchor.getAttribute("href");
    const targetElement = targetId ? document.querySelector(targetId) : null;

    if (targetElement) {
      window.scrollTo({
        top: (targetElement as HTMLElement).offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});

// Add animation to elements when they come into view
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".skill-pill, .project-card, .blog-card, .contact-card"
  );

  elements.forEach((element) => {
    element = element as HTMLElement;
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      (element as HTMLElement).style.opacity = "1";
      (element as HTMLElement).style.transform = "translateY(0)";
    }
  });
};

// Set initial styles for animation
document
  .querySelectorAll(
    ".skill-pill, .project-card, .blog-card, .contact-card"
  )
  .forEach((element) => {
    (element as HTMLElement).style.opacity = "0";
    (element as HTMLElement).style.transform = "translateY(20px)";
    (element as HTMLElement).style.transition = "all 0.6s ease";
  });

// Run animation on scroll
window.addEventListener("scroll", animateOnScroll);

// Run once on load
window.addEventListener("load", animateOnScroll);

(function () {
  function c() {
    var b = a.contentDocument || (a.contentWindow ? a.contentWindow.document : null);
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'93a4b4a720bafd0a',t:'MTc0NjMyNzE4NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = "1px";
    a.width = "1px";
    a.style.position = "absolute";
    a.style.top = "0";
    a.style.left = "0";
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    
    document.addEventListener("DOMContentLoaded", c);
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e.call(this, b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
  }
})();