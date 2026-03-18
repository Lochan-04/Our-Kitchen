import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home'; 
import Pricing from './Pages/Pricing'; 
import FullMenu from './Pages/FullMenu';
import Blog from './Components/Blog'
import BlogPostDetails from './Pages/BlogPostDetails'



const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const navigate = useNavigate();
  const journeyRef = useRef(null);
  const footerRef = useRef(null);


const handleScrollTo = (ref, targetPath, scrollDelay = 150) => {
    if (location.pathname !== '/') {
     
      navigate('/');
     
      setTimeout(() => {
        
        const element = document.getElementById(targetPath);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 300); 
    } else {
      
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const scrollToJourney = () => handleScrollTo(journeyRef, 'journey-section');
  const scrollToFooter = () => handleScrollTo(footerRef, 'footer-section');



  return (
    <>
     
      <Navbar onAboutClick={scrollToJourney} onContactClick={scrollToFooter}/> 
      <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<Home journeyRef={journeyRef}/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostDetails />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/menu" element={<FullMenu />} />
      </Routes>
      <Footer footerRef={footerRef} onAboutClick={scrollToJourney} 
  onContactClick={scrollToFooter} />
    </>
  );
}

export default App;