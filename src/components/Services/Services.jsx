import { data } from 'autoprefixer';
import React from 'react'
import { FaMoneyCheck  } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import { MdOutlineSafetyCheck } from "react-icons/md";

const skillsData = [
    {
        id: '1',
        name: 'Best Price',
        icon: (
            <FaMoneyCheck  className='text-5xl text-primary group-hover:text-white
            duration-300'/>
        ),
        link: '#',
        description: "With our commitment to offering the best prices, you can trust that you're getting unbeatable value with every rental. We strive to provide competitive rates without compromising on quality, making sure you get the most out of your budget.",
        aosDelay: '0',
    },
    {
        id: '2',
        name: 'Cleanness',
        icon: (
            <GiVacuumCleaner className='text-5xl text-primary group-hover:text-white
            duration-300'/>
        ),
        link: '#',
        description: 'We prioritize cleanliness to ensure every vehicle you rent is immaculate and ready for your journey. Our rigorous cleaning protocols guarantee a fresh and hygienic environment, providing you with peace of mind as you embark on your travels',
        aosDelay: '0;'
    },
    {
        id: '3',
        name: 'Fast and Safe',
        icon: (
            <MdOutlineSafetyCheck className='text-5xl text-primary group-hover:text-white
            duration-300'/>
        ),
        link: '#',
        description: 'Your safety is our top priority, which is why we combine speed with security in every aspect of our service. From swift booking processes to thorough vehicle inspections, we ensure that your rental experience is not only efficient but also completely safe, allowing you to focus on enjoying the journey ahead.',
        aosDelay: '0;'
    }
]

const Services = () => {
  return (
    <div className='bg-black text-white sm:min-h[600px] sm:grid
    sm:place-items-center py-14'>
        <div className='container'>
            <div className='pb-12'>
                <h1 data-aos='zoom-in' data-aos-delay='300' className='text-3xl font-semibold text-center
                font-serif sm:text-4xl'>
                    Why Us ?
                </h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3
            gap-4'>
                {
                    skillsData.map((skill) => (
                        <div key={data.id}
                        data-aos="fade-up"
                        data-aos-delay={skill.aosDelay}
                        className='card text-center
                        group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary
                        hover:text-black rounded-lg duration-300 text-white'>
                            <div className='grid place-items-center'>{skill.icon}</div>
                            <h1>{skill.name}</h1>
                            <p>{skill.description}</p>
                            <a href={skill.link}>Learn more</a>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Services