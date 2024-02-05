import { useEffect, useState } from 'react';
import {  Link, useParams } from 'react-router-dom';

function RoomType() {
 const {roomType} = useParams()
  
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/v1/rooms/by_type/${roomType}/`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(true);
        setRooms(data);
        
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
      });
  }, [roomType]);

  return (
    <div className="rooms w-[80%] mx-auto my-5">
      <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-center my-5'>{roomType} Rooms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error Occurred</p>
        ) : (
          rooms?.map((room) => {
            return (
              <div key={room.id} className="bg-white p-4 shadow-md rounded-md">
                <img
                  src={room.image} 
                  alt="Image Alt Text"
                  className="w-full h-32 object-cover mb-4 rounded-md"
                />
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold mb-2">{room.room_title}</h2>
                  <Link to={{pathname:`/room/${room.id}`}}>
                    <button
                      className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded-md"
                    >
                      Details
                    </button>
                  </Link>
                </div>
                <p className="text-gray-600 mb-2">Price: ${room.rent_per_night}/night</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default RoomType;
