import Slide from '../components/slide.jsx';
import Room from '../pages/RoomList';
import RoomFacilities from '../components/RoomFacilities.jsx';
function Home() {
 
  return (
    <div>
      <Slide />
      <Room />
      <RoomFacilities />
    </div>
  )
}

export default Home