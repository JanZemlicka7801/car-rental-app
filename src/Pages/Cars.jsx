import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import "aos/dist/aos.css";
import Heading from '../components/Cars/Heading';
import List from '../components/Cars/List'

const Cars = () => {
  const [name, setName] = useState('')
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:8081')
      .then(res => {
        if (res.data.valid) {
          setName(res.data.username);
        } else {
          navigate('/login')
        }
      })
      .catch(err => {
        setError("Error fetching user data. Please try again later."); 
        console.error("Error fetching user data:", err);
      })
  }, [])

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar name={name}/>
      <Heading />
      <List />
      <Footer />
    </div>
  )
}

export default Cars