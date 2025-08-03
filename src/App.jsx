// App.jsx
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/herosection/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Events from './components/events/Events';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
      <Header/>
      <div className="min-h-screen">
        <Hero/>
        <About/>
        <Services/>
        <Projects/>
        <Pricing/>
        <Testimonials/>
        <Events/> 
        <Contact/>
      </div>
      <Footer/>
    </>
  );
};

export default App;