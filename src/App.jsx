// App.jsx
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/herosection/Hero';
import MissionVision from './components/mission-vision/MissionVision';
import Projects from './components/projects/Projects';
import Services from './components/Services/Services';
import Events from './components/events/Events';
import Contact from './components/contact/Contact';
import About from './components/about/About';



const App = () => {
  return (
    <>
      <Header/>
    <div className="min-h-screen ">
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Events/> 
       <Contact/>
      
    </div>
       <Footer/>
    </>
  );
};

export default App;