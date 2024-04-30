import Footer from '../components/Footer/Footer';
import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect, useState, Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CarList = React.lazy(() => import('../components/CarList/CarList'));

const Home = () => {
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
      <Navbar name={name} />
      <Header />
      <About />
      <Services />
      {/* Wrap CarList component in Suspense for lazy loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <CarList />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;


