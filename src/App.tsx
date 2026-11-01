import {Routes, Route} from 'react-router-dom';
import  {LanguageProvider} from './context/LanguageContext';
import Header from './components/layout/Header';
import MainBanner from './components/sections/MainBanner';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './App.css';
import ProjectDetails from './components/sections/ProjectDetails';


function Home() {
  return (
    <>
    <MainBanner />
    <About />
    <Services />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <div>
        <Header />
        {/* Dinamyc routes Changes depending on the route */}
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/projects/:translationKey' element={<ProjectDetails />} />
          <Route path='*' element={<Home />} />
        </Routes>


      </div>
    </LanguageProvider>
  );
}

export default App;
