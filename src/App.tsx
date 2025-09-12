import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FrequentAnswerQuestions from './components/FrequentAnswerQuestions';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FrequentAnswerQuestions/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;