import Footer from "../components/Footer"
import HeroSection from "../components/Hero"
import FollowUsSection from "../components/Followus"
import About from "../components/About"
import { useEffect, useState } from "react"
import CorporateEvents from "../components/CorporateEvents"
import CorporateActivationsATLBTL from "../components/CorporateActivations"

function Landing() {
  const [isVisible, setIsVisible] = useState(false);
  
    // Handle scroll to top button visibility
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

  return (
   <>
   {/* <NavBar/> */}
   <HeroSection/>
   <About/>
   <CorporateEvents/>
   <CorporateActivationsATLBTL/>
    <FollowUsSection/>
    
   <Footer/>
     {/* Scroll Top Button - Conditionally Visible */}
     <div className="fixed bottom-10 right-2 flex flex-col items-center space-y-4 z-50">

  {isVisible && (
    <button
      onClick={scrollToTop}
      className="bg-black text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center"
      title="Scroll Top"
    >
      ↑
    </button>
  )}
  </div>
   </>
  )
}

export default Landing