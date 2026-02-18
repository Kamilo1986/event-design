import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from'../components/Services'    
import ServiceCards from '../components/ServiceCards'
import ContactForm from '../components/ContactForm'
import WhatsappButton from '../components/WhatsappButton'
import Footer from '../components/Footer'
import About from "../components/About";
import VideoSection from "../components/VideoSection";
import QRBanner from "../components/QRBanner";


const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <ServiceCards />
        <VideoSection />
        <About />
        <ContactForm />
      </main>

      <WhatsappButton />
      <QRBanner />
      <Footer />
    </>
  )
}

export default Home;
