import { usePopup } from '../context/PopupContext';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Service from '../components/Service';
import QuickService from '../components/Quickservice';
import Steps from '../components/Steps';
import Testimonials from '../components/Testimonials';
import Description from '../components/Description';
import Footer from '../components/Footer';
import { CollabsSection } from '../components/CollabSection';
import Customized from '../components/Customized';
import Professional from '../components/Professional';
import Popup from '../components/Popup';
import PimpedImage from '@/components/Pimpedimage';


export default function IndexPage() {
  const { isPopupVisible, openPopup } = usePopup();

  return (
    <div className="bg-gray-50">
      {/* Navbar for Home Page */}
      <Navbar />

      {/* Sections */}
      <section id="home">
        <Home />
      </section>
      <section id="contactus">
        <Customized />
      </section>

      {/* Remaining Content */}
      <Professional />
      <section id="services">
        <Service openPopup={openPopup} />
      </section>
      <section id="quickservices">
        <QuickService />
      </section>

    
      <section id="whyus">
        <Description />
      </section>
     
      <Testimonials />
      <CollabsSection />
      
      <Footer />

      {/* Popup - Conditional Rendering */}
      {isPopupVisible && <Popup />}
    </div>
  );
}
