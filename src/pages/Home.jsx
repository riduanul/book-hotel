import Slide from '../components/slide.jsx';
import Room from '../pages/RoomList';
import RoomFacilities from '../components/RoomFacilities.jsx';
import ContactUs from '../components/ContactUs.jsx';
import AboutUs from '../components/AboutUs.jsx';
import Reviews from '../components/Reviews.jsx';
function Home() {
 
  return (
    <div>
      <Slide />
      <Room />
      <RoomFacilities />
      <AboutUs/>
      <Reviews/>
      <ContactUs />
    </div>
  )
}

export default Home