import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";



function Navbar() {
  const { isAuthenticated, user,  token, logout } = useAuth();
  console.log(isAuthenticated, token)
const [isMobileOpen, setIsMobileOpen] = useState(false);

const toggleMobileMenu = ()=>{
  setIsMobileOpen(!isMobileOpen);
}
const navigate = useNavigate()
const handleLogout= async()=>{
  try{
    const response = await fetch(`https://book-hotel.onrender.com/api/v1/users/logout/`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `{${localStorage.getItem('token')}, ${user}}`
      }
    })
    if(response.ok){
      logout()
      console.log('logout successful');
      navigate('/login');
    }else{
      console.log('clicked')
      console.error('error:', response.status, response.statusText)
    }
  }catch(err){
      console.log(err)
    }
}

  return (
  <nav className="container mx-auto fixed top-0 left-0 z-50">
    <div className="flex justify-between align-center ">
      <div className=" font-bold p-4">Book Hotel</div>
      <div className=" hidden md:flex items-center space-x-4  p-4">
          <a href="/" className="">Home</a>
          {isAuthenticated ? (
          <>
            <a href="/" className="">Rooms</a>
            <a href="/" className="">Profile</a>
            <button onClick={handleLogout} className="">Logout</button>
          </>
        ) : (
          <>
            <a href="/login" className="">Login</a>
            <a href="/register" className="">Register</a>
          </>
        )}
          
         
      </div>
      {/* mobile view */}
      <div className="md:hidden">
        <button onClick={() => toggleMobileMenu()} className="text-white focus:outline-none focus:text-gray-300">
        <svg 
              className="h-6 w-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>

        </button>
       {isMobileOpen && (
         <div className=" absolute top-8 right-0 bg-gray-800 p-4 ">
         <a href="/" className="block text-white mb-2">Home</a>
         <a href="/" className="block text-white mb-2">Rooms</a>
         <a href="/" className="block text-white mb-2">Profile</a>
     </div>
       )}
      </div>

    </div>
    
  </nav>
  )
}

export default Navbar