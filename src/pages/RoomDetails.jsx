import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { BsCupHot } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa";
import { IoRestaurantOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { CgGym } from "react-icons/cg";
import { GrMonitor } from "react-icons/gr";
import { FaWifi } from "react-icons/fa6";
function RoomDetails() {
  const {roomId} = useParams()
  const [room, setRoom] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/v1/rooms/${roomId}/`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(true);
        setRoom(data);
        
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
      });
  }, [roomId]);


  const [formData, setFormData] = useState({
    arrivalDate: '',
    departureDate: '',
    adults: '1',
    children: '0',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      // user:user,
      room: room,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform booking logic with formData
    console.log('Booking Details:', formData);
    // You can add your booking logic here, for example, send a request to a server.
  };


  return (
    <div className="room w-[90%] mx-auto">
      {isLoading? (<p>Loading...</p>):
      isError? (<p>Error Occurred</p>):
      (
       <div className="flex flex-col md:flex-row justify-center my-5 gap-4">
         <div className="bg-white p-4 shadow-md rounded-md md:w-[70%]">
         
            <div className="flex justify-between my-5">
                <h2 className=" text-xl md:text-2xl font-semibold mb-2 text-gray-800">{room.room_title} </h2>
              
              <p className=" text-xl font-semibold  text-gray-600 mb-2">Price: ${room.rent_per_night}/night</p>
              </div>
            
              <img
                src={room.image} 
                alt="Image Alt Text"
                className="w-full h-[400px] object-cover mb-4"
              />
            

          <h2 className="text-xl font-semibold text-gray-800 my-[50px]">ROOM FACILITIES</h2>
          <hr className="text-gray-800" />
          <div className="facilities grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[45px]">
            <div className=" flex items-center gap-4">
                <i className="text-2xl"><BsCupHot /></i>
                <h3 className="text-xl font-semibold">Break Fast</h3>
            </div>
            <div className=" flex items-center gap-4">
                <i className="text-2xl"><TbAirConditioning /></i>
                <h3 className="text-xl font-semibold">Air Condition</h3>
            </div>
            <div className=" flex items-center gap-4">
                <i className="text-2xl"><FaCarSide /></i>
                <h3 className="text-xl font-semibold">Free Parking</h3>
            </div>
            <div className=" flex items-center gap-4">
                <i className="text-2xl"><IoRestaurantOutline /></i>
                <h3 className="text-xl font-semibold">Restaurant</h3>
            </div>
            <div className=" flex items-center gap-4">
                <i className="text-2xl"><GrUserExpert /></i>
                <h3 className="text-xl font-semibold">Room Service</h3>
            </div>
            <div className=" flex items-center gap-4">
                <i className="text-2xl"><CgGym /></i>
                <h3 className="text-xl font-semibold">Gym Facilities</h3>
            </div>
            <div className=" flex items-center gap-4">
                <i className="text-2xl"><GrMonitor /></i>
                <h3 className="text-xl font-semibold">TV LCD</h3>
            </div>
            <div className=" flex items-center gap-4">
                <i className="text-2xl"><FaWifi /></i>
                <h3 className="text-xl font-semibold">Free WiFi</h3>
            </div>
          </div>

          <div className="description my-[40px] text-gray-500">
          <h2 className="text-xl font-semibold text-gray-800 mt-[70px] mb-[30px]">ROOM DETAILS</h2>
            Lorem ipsum, dolor sit amet consectetur aeque itaque aliquid perspiciatis expedita officiis dolorum nobis inventore dignissimos. Sequi pariatur voluptatem in. Amet, at. Praesentium, natus? Aliquid sapiente exercitationem suscipit molestiae incidunt repudiandae ab fugiat eius, asperiores ut iure omnis soluta, consectetur explicabo minima nisi temporibus eligendi praesentium enim quis deleniti qui distinctio consequatur? Incidunt praesentium consectetur inventore, possimus nihil ex? Voluptates provident eaque libero, deleniti quo expedita ducimus iusto! Eum corporis voluptates eius deleniti ullam alias id itaque nemo ut, suscipit officiis esse animi veniam harum sed modi voluptatibus dolores saepe ad commodi voluptatem perspiciatis tenetur? Culpa, porro error dolore nemo vitae, nesciunt modi voluptates iure, natus et eaque minima debitis.
          </div>
        </div>
        
        {/* bookings part */}
        <div className="booking md:w-[30%] md:my-[100px]">
          <div className="form bg-gray-900 p-3">
          <h4 className="text-left p-3 font-bold text-2xl text-white">Book Your <br /> Room</h4>
      <form onSubmit={handleSubmit} className="font-semibold max-w-md mx-auto p-6 bg-gray-900 rounded-md shadow-md">
          <label className="block mb-4 text-gray-500">
            <span>Arrival Date:</span>
            <input
              type="date"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleChange}
              required
              className="mt-1 p-2 border-b border-gray-500 w-full bg-gray-900 focus:outline-none text-gray-500"
            />
          </label>

          <label className="block mb-4 text-gray-500">
            <span>Departure Date:</span>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              required
              className="mt-1 p-2 border-b border-gray-500 w-full bg-gray-900 focus:outline-none text-gray-500"
            />
          </label>

          <label className="block mb-4 text-gray-500">
            <span>Adults:</span>
            <select
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              className="mt-1 p-2 border-b border-gray-500 w-full bg-gray-900 focus:outline-none text-gray-500"
            >
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </label>

          <label className="block mb-4 text-gray-500">
            <span>Children:</span>
            <select
              name="children"
              value={formData.children}
              onChange={handleChange}
              className="mt-1 p-2 border-b border-gray-500 w-full bg-gray-900 focus:outline-none text-gray-500"
            >
              {[0, 1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none"
          >
            Book
          </button>
        </form>
          </div>
        </div>
       </div>
      )
      }
    </div>
  )
}

export default RoomDetails