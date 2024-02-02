import Slide from '../components/slide.jsx';
import Room from '../pages/RoomList';
import RoomFacilities from '../components/RoomFacilities.jsx';
import AboutUs from '../components/AboutUs.jsx';
function Home() {
 
  return (
    <div>
      <Slide />
      <Room />
      <RoomFacilities />
      <AboutUs />
    </div>
  )
}

export default Home