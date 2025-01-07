import Footer from "../components/Footer"
import HeroSection from "../components/Hero"
import FeatureSection from "../components/Features"
import NavBar from "../components/Nav"
import FollowUsSection from "../components/Followus"
import Services from "../components/Services"

function Landing() {
  return (
   <>
   <NavBar/>
   <HeroSection/>
    <FeatureSection/>
    <Services/>
    <FollowUsSection/>
   <Footer/>
   </>
  )
}

export default Landing