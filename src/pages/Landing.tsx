import Footer from "../components/Footer"
import HeroSection from "../components/Hero"
import FeatureSection from "../components/Features"
import NavBar from "../components/Nav"
import FollowUsSection from "../components/Followus"
import Services from "../components/Services"
import About from "../components/About"

function Landing() {
  return (
   <>
   <NavBar/>
   <HeroSection/>
    <FeatureSection/>
    <Services/>
    <FollowUsSection/>
    <About/>
   <Footer/>
   </>
  )
}

export default Landing