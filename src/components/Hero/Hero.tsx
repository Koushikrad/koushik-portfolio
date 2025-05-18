import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const textsToType = ["Frontend Developer", "UI/UX Enthusiast", "Flutter Developer"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentText = textsToType[textIndex];
      if (isDeleting) {
        setTypedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setTypedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % textsToType.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 150;
    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, textsToType]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-bg pt-20 relative">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <p className="text-sky-400 font-medium mb-2" data-aos="fade-up">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up" data-aos-delay="100">
            <span className="gradient-text">Koushik Radhakrishnan</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 min-h-[3rem] md:min-h-[4rem]" data-aos="fade-up" data-aos-delay="200">
            <span id="typingText">{typedText}</span><span className="cursor animate-blink">|</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto md:mx-0" data-aos="fade-up" data-aos-delay="300">
            With 10 years of experience crafting beautiful, responsive, and
            user-friendly web applications that deliver exceptional user
            experiences.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="400">
            <a href="#contact" className="btn-primary px-8 py-3 rounded-full font-medium">Hire Me</a>
            <a href="#experience"
              className="px-8 py-3 rounded-full font-medium border border-sky-400 text-sky-400 hover:bg-sky-400/10 transition-colors">View
              Work</a>
          </div>
          <div className="mt-10 flex space-x-6 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="500">
            <a href="https://www.linkedin.com/in/koushikradhakrishnan/" target="_blank" rel="noopener noreferrer"
              className="social-icon text-slate-400 hover:text-white">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://x.com/koushikrad" target="_blank" rel="noopener noreferrer" className="social-icon text-slate-400 hover:text-white">
              <i className="fab fa-brands fa-x-twitter text-2xl"></i>
            </a>
            <a href="https://medium.com/@koushikrad" target="_blank" rel="noopener noreferrer" className="social-icon text-slate-400 hover:text-white">
              <i className="fab fa-medium-m text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Optional: If you want to add back the image/blob section later */}
        {/* <div className="md:w-1/2 flex justify-center" data-aos="fade-left" data-aos-delay="600"> ... </div> */}
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator" data-aos="fade-up" data-aos-delay="700">
        <svg className="w-6 h-6 text-sky-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};
export default Hero;