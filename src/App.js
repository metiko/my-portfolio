import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contacts';
import Footer from './components/footer';

// Updated Home Section
function App() {
  return (
    <div className="App">
      <Header />
      <Hero /> {/* Updated Home Section */}
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;