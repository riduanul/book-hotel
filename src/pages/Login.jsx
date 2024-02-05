import { Link, useNavigate } from "react-router-dom";
import login from '../assets/images/login.avif'
import { useState } from "react";

const LoginPage = () => {

  const [formData, setFormData] = useState({
    username :'',
    password :'',
  })

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value,
    })
  }
  const navigate = useNavigate(); 

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const response = await fetch(`http://127.0.0.1:8000/api/v1/users/login/`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify(formData)
      })

      if(response.ok){
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('user_id', data.user_id);
        console.log('Login successful')
        navigate('/');
      }
      else{
        console.log('Login failed')
        console.error('error:', response.status, response.statusText)
      }
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className="flex justify-center align-center">
     
      <div className="hidden lg:block lg:w-1/2  " >
        <img src={login} alt="" />
      </div>

    
      <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-semibold mb-6">Login</h2>

          <form method="POST" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600 mb-1">Username</label>
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

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
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

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-gray-600">
            Not registered? <Link to="/register" className="text-blue-500">Register here</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
