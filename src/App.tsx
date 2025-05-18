import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar.tsx';
import Hero from './components/Hero/Hero.tsx';
// import About from './components/About/About.tsx';
// import Skills from './components/Skills/Skills.tsx';
// import Blogs from './components/Blogs/Blogs.tsx';
// import Experience from './components/Experience/Experience.tsx';
// import Contact from './components/Contact/Contact.tsx';
// import Footer from './components/Footer/Footer.tsx';
// import ProgressBar from './components/ProgressBar/ProgressBar.tsx';

// AOS (Animate On Scroll)
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <>
      {/* <ProgressBar /> */}
      <Navbar />
      <main>
        <Hero />
        {/* <About />
        <Skills />
        <Blogs />
        <Experience />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;