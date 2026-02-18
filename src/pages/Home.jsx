import { Helmet } from "react-helmet";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ClientLogos from '../components/ClientLogos'
import Services from '../components/Services'
import ServiceCards from '../components/ServiceCards'
import ContactForm from '../components/ContactForm'
import WhatsappButton from '../components/WhatsappButton'
import Footer from '../components/Footer'
import About from "../components/About"
import VideoSection from "../components/VideoSection"
import QRBanner from "../components/QRBanner"


const Home = () => {
return (
    <>
    <Helmet>
        <title>Event Design | Producción de eventos corporativos en Colombia</title>
        <meta name="description" content="Creamos experiencias corporativas, eventos empresariales y activaciones de marca en Colombia." />
        <link rel="canonical" href="https://eventdesign.com.co/" />
    </Helmet>

    <Navbar />

    <main>
        <Hero />
        <ClientLogos />
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
