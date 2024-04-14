import { useState } from 'react';
import register from '../assets/images/register.webp'
import { Link, Navigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://book-hotel.onrender.com/api/v1/users/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Registration successful');
        setFormData({
          username: "",
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          confirm_password: "",
        });
        Navigate('/login')
        console.log(response)
      } else {
        console.error('Registration failed');
        console.error('Registration failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
    console.log(formData)
  };
  
  return (
    <div className="flex h-screen  my-[120px]">
      <div className="hidden lg:block lg:w-1/2">
        <img
          src={register}
          alt="Registration"
          className="object-cover w-[80%]"
        />
      </div>

      <div className="w-full lg:w-1/2 p-8 flex items-center justify-center py-5">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-semibold mb-6">Register</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex justify-between">
            <div className="mb-4">
              <label htmlFor="first_name" className="block text-gray-600 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="last_name" className="block text-gray-600 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            </div>
          

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-gray-600">
            Already registered? <Link to="/login" className="text-blue-500">Login here</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
