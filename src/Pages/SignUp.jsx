import React, { useState} from 'react';
import { FaUserAlt } from 'react-icons/fa';
import axios from 'axios';
import { MdOutlinePassword, MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/signup', values)
    .then(res =>
      {
        console.log(res);
        navigate('/login')
      })
    .catch(err => console.log(err));
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='signup-bg flex max-w-sm bg-white p-10 flex-col sm:min-h-[600px] sm:grid sm:place-items-center rounded-md gap-9 mt-30'>
        <form onSubmit={handleSubmit}>
        <div className="header">
          <div className='text-gray-700 text-center text-4xl font-bold'>Sign Up</div>
          <div className="font-bold text-center mt-3">for</div>
          <div className='text-black text-center text-xl mt-2 mb-2 font-bold'>Bumblebee</div>
          <div className="bg-gray-500 h-2 rounded-xl mt-2"></div>
        </div>
        <div className="inputs">
          <div className="flex items-center py-2 px-2 mx-auto w-480 h-18 bg-gray rounded-xl">
            <label htmlFor='name'>Username</label>
            <FaUserAlt className='email mr-2'/>
            <input required name='name' onChange={handleInput} className='text-primary text-center bg-transparent border-none' type="text" placeholder='Enter username'/>
          </div>
          <div className="mt-3 flex items-center py-2 px-2 mx-auto w-480 h-18 bg-lightgray rounded-xl">
          <label htmlFor='email'>Email</label>
            <MdEmail className='email mr-2'/>
            <input required name='email' onChange={handleInput} className='text-primary text-center bg-transparent border-none' type="email" placeholder='Enter email'/>
          </div>
          <div htmlFor='password' className="mt-3 flex items-center py-2 px-2 mx-auto w-480 h-18 bg-lightgray rounded-xl">
            <label htmlFor='password'>Password</label>
            <MdOutlinePassword className='email mr-2'/>
            <input required name='password' onChange={handleInput} className='text-primary text-center bg-transparent border-none' type="password" placeholder='Enter password'/>
          </div>
        </div>
        <div className="forgot-password cursor-pointer text-center mt-3"><span href="">Forgot password ?</span></div>
        <div className="items-center submit-container mb-7">
        <button type='submit' className="items-center text-center mb-3 cursor-pointer rounded-xl border-2 border-primary hover:text-white hover:bg-primary duration-500 py-2 text-primary tracking-wider">Sign Up</button>
          <Link to="/login" className=" text-center ml-14 sm:ml-0 submit rounded-xl mb-3 border-2 border-primary hover:text-white hover:bg-primary duration-500 cursor-pointer py-2 px-8 text-primary tracking-wider mt-3">Log In</Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;


