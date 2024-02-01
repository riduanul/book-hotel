import deluxe from '../assets/images/delux.avif';
import single from '../assets/images/single.jpg';
import double from '../assets/images/doble.jpg';
import kids from '../assets/images/kids.jpg';
function RoomList() {
  return (
    <div className='w-[90%] mx-auto mt-[100px]'>
      <h1 className="text-xl md:text-3xl  text-center font-semibold">WELCOME TO HOTEL</h1>
      <p className="text-gray-500 text-center w-[60%] mx-auto mb-[50px]">Lorem, ipsum dolor sit amet s rerum. Cum, provident laborum eligendi reiciendis ratione voluptates? Temporibus, dicta.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
 
        <div className="bg-white p-4 shadow-md rounded-md">
          <img
            src={deluxe}
            alt="Image Alt Text"
            className="w-full h-32 object-cover mb-4 rounded-md"
          />
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold mb-2">Deluxe</h2>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-0  rounded-md">Book</button>
          </div>
          <p className="text-gray-600 mb-2">Price: $1000/night</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <img
            src={double}
            alt="Image Alt Text"
            className="w-full h-32 object-cover mb-4 rounded-md"
          />
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold mb-2">Double Room</h2>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-0  rounded-md">Book</button>
          </div>
          <p className="text-gray-600 mb-2">Price: $800/night</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <img
            src={single}
            alt="Image Alt Text"
            className="w-full h-32 object-cover mb-4 rounded-md"
          />
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold mb-2">Single Room</h2>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-0  rounded-md">Book</button>
          </div>
          <p className="text-gray-600 mb-2">Price: $600/night</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <img
            src={kids}
            alt="Image Alt Text"
            className="w-full h-32 object-cover mb-4 rounded-md"
          />
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold mb-2">Kids Room</h2>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-0  rounded-md">Book</button>
          </div>
          <p className="text-gray-600 mb-2">Price: $500/night</p>
        </div>
      </div>
    </div>
  )
}

export default RoomList