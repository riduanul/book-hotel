import contact from '../assets/images/contact-removebg-preview.png'
import { FaLocationArrow, FaPhone, FaMailBulk, FaGoogle, FaFacebook, FaYoutube, FaLinkedin} from 'react-icons/fa';
function AboutUs() {
  return (
   <div className="bg-gradient-to-r from-sky-500 to-sky-600">
    <div className="container mb-[50px] w-[80%] mx-auto leading-loose">
        <h1 className='text-center text-xl; md:text-4xl p-5 font-semibold text-gray-800'>Contact Us</h1>
    <div className="flex flex-col md:flex-row justify-center items-center gap-5">
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-4 bg-gradient-to-r from-sky-500 to-sky-600 ">
      <h2 className="text-2xl font-semibold mb-4 text-gray-600">Send Us Mail</h2>

      <form className='text-white'>
        <div className="mb-4 flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="firstName" className="block text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="lastName" className="block text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <div className="mb-4 flex space-x-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-600">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-sky-800 text-white p-2 rounded-md hover:bg-sky-600"
        >
          Send
        </button>
      </form>
    </div>

            <div className="w-1/2 p-5   ">
                {/* <h4 className='text-xl font-semibold mb-5'>CONTACT INFO</h4>
                <div className='flex justify-left items-center gap-2 mb-5'>
                    <FaLocationArrow/>
                    <div className="te">
                    <p className='text-left text-xl text-gray-600 leading-loose'>St Amsterdam Finland</p>
                    <p className=' text-xl text-gray-600'> United state of AKY 16 8PN</p>
                    </div>
                </div>
                <div className='flex justify-left items-center gap-2 leading-loose mb-5'>
                    <FaPhone/>
                    <p className='text-xl text-gray-600 leading-loose'>23456789</p>
                </div>
                <div className='flex justify-left items-center gap-2 mb-5'>
                    <FaMailBulk/>
                    <p className='text-xl text-gray-600 leading-loose   '>info@hotel.com</p>
                </div>
                <div className="icons flex justify-left items-center gap-5 cursor-pointer py-3">
                    <p className='text-2xl'><FaFacebook/></p>
                    <p className='text-2xl'><FaYoutube/></p>
                    <p className='text-2xl'><FaLinkedin/></p>
                    <p className='text-2xl'><FaGoogle/></p>
                </div> */}
                <img src={contact} alt="" />
            </div>
        </div>
    </div>  
    </div>

    
  )
}

export default AboutUs