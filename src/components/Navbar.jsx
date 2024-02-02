import { useState } from "react"



function Navbar() {
const [isMobileOpen, setIsMobileOpen] = useState(false);

const toggleMobileMenu = ()=>{
  setIsMobileOpen(!isMobileOpen);
}

  return (
  <nav className="bg-gray-800 ">
    <div className="container flex justify-between items-center">
      <div className="text-white font-bold p-4">Book Hotel</div>
      {/* desktop view */}
      <div className=" hidden md:flex items-center space-x-4 text-white p-4">
          <a href="/" className="">Home</a>
          <a href="/" className="">Rooms</a>
          <a href="/" className="">Profile</a>
          <a href="/login" className="">Login</a>
          <a href="/register" className="">Register</a>
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