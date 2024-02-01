import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RoomList from './pages/RoomList';
import RoomDetails from './pages/RoomDetails';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rooms" element={<RoomList />} />
          <Route path="/room/:roomId" element={<RoomDetails />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
