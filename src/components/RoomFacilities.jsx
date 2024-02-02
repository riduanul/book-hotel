import { useState } from "react"
import bg from '../assets/images/bg.jpg';
import restaurant from '../assets/images/restaurant.avif';
import gym from '../assets/images/gym.avif';
import sports from '../assets/images/sports.jpg';
import pick from '../assets/images/pick.jpg';

function RoomFacilities() {
   const [selectedFacility, setSelectedFacility]= useState(1)

   const facilities =[
    {id:1, image:restaurant, description:{class:'WORLD CLASS', title:'RESTAURANT & BANQUETS', details: 'Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia. Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor,Cras ac justo et augue suscipit euismod vel eget lectus. Proin vehicula nunc arcu, pulvinar accumsan nulla porta vel. Vivamus malesuada vitae sem ac pellentesque.', serviceHour:'19:00-22:00', serviceCharge:15}},
    {id:2, image:gym, description:{class:'WORLD CLASS', title:'GYM', details: 'Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia. Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor,Cras ac justo et augue suscipit euismod vel eget lectus. Proin vehicula nunc arcu, pulvinar accumsan nulla porta vel. Vivamus malesuada vitae sem ac pellentesque.', serviceHour:'19:00-22:00', serviceCharge:15}},
    {id:3, image:sports, description:{class:'WORLD CLASS', title:'SPORTS CLUB', details: 'Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia. Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor,Cras ac justo et augue suscipit euismod vel eget lectus. Proin vehicula nunc arcu, pulvinar accumsan nulla porta vel. Vivamus malesuada vitae sem ac pellentesque.', serviceHour:'19:00-22:00', serviceCharge:15}},
    {id:4, image:pick, description:{class:'WORLD CLASS', title:'PICK UP', details: 'Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia. Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor,Cras ac justo et augue suscipit euismod vel eget lectus. Proin vehicula nunc arcu, pulvinar accumsan nulla porta vel. Vivamus malesuada vitae sem ac pellentesque.', serviceHour:'19:00-22:00', serviceCharge:15}},
   ]
   const handleFacility=(id)=>{
        setSelectedFacility(id)
   }
  return (
    <div className="my-[100px] min-h-screen py-5" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition:'fixed' }}>
      <h1 className="text-xl md:text-3xl font-semibold py-[50px] text-center">HOTEL FACILITIES </h1>
    <div className="relative p-[20px] mb-[100px] md:w-[80%] mx-auto bg-white" >
        <div className="flex flex-col md:flex-row items-center justify-center pt-5" >
      
            {facilities.map((facility) => (
            <button
                key={facility.id}
                className={`cursor-pointer p-4 ${
                    selectedFacility === facility.id ? 'bg-yellow-500' : 'hover:bg-yellow-400'
                }`}
                onClick={() => handleFacility(facility.id)}
            >
                {facility.description.title}
            </button>
            ))}
      
        </div>

   
    {selectedFacility && (
      <div className="flex-1 md:p-8 ">
        
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-4 space-x-5">
          
          <img
            src={facilities[selectedFacility - 1].image}
            alt='image'
            className="w-1/2 h-[300px] mr-4"
          />

          
          <div className="w-1/2">
            <h4 className="text-xl text-center md:text-left font-semibold mb-2 text-gray-400">{facilities[selectedFacility - 1].description.class}</h4>
            <h4 className="text-3xl  text-center md:text-left font-semibold mb-2">{facilities[selectedFacility - 1].description.title}</h4>
            <p className="mt-[40px]  text-center md:text-left ">{facilities[selectedFacility - 1].description.details}</p>
            <div className="flex flex-col md:flex-row justify-between items-center mt-8">
            <p className="text-blue-700 font-semibold">Service Hour: {facilities[selectedFacility - 1].description.serviceHour}</p>
            
            <p className="text-green-700 font-semibold">Service Charge: ${facilities[selectedFacility - 1].description.serviceCharge}</p>
            </div>
          </div>
        </div>

      
      </div>
    )}
    </div>

  </div>
  )
}

export default RoomFacilities