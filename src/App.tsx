import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import SkillSet from './components/SkillSet';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import BlogCarousel from './components/BlogCarousel';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <SkillSet />
      <Contact />
      <Education />
      <BlogCarousel />
     
      <Footer />

      
    </>
  );
}

export default App
