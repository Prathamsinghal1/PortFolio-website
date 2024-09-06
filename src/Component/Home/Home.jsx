import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import '../../App.css';

export default function Home() {

  {/* first - var(--primary-color)
  title - var(--title-color)  
  text - var(--text-color) 
  body - var(--body-color) 
  container - var(--container-color) 
  border - var(--border-color)  
  
  */}

  return (
    <section className='home section grid md:grid-cols-[4.32fr_7.68fr] gap-[30px] p-[30px] items-center h-[100vh] relative bg-[var(--body-color)]'>
      <img 
        src="/Images/myNew.png" 
        className='home-img h-full object-cover rounded-[30px] shadow-lg z-[1]' 
        alt="image" 
      />

      <div className="home-content z-[2]">
        <div className="home-data max-w-[600px] m-auto pt-[20px]">
          <h1 className="home-title relative text-4xl font-bold text-[var(--title-color)] pl-[70px] before:content-[''] before:absolute before:left-0 before:top-[22%] before:w-[37px] before:h-[5px] before:bg-[var(--primary-color)] before:rounded-[10px]">
            <p className='my-2 text-[var(--primary-color)]'>I'm Pratham Singhal.</p> 
            Web Developer
          </h1>

          <p className="mr-[15%] my-[16px] leading-[1.9] font-semibold text-[var(--text-color)]">
            I excel in both front-end and back-end development, ensuring robust, scalable, and visually engaging web solutions. I'm passionate about turning innovative ideas into reality through clean, efficient code and cutting-edge web technologies.
          </p>

          <Link 
            to="/about" 
            className={`button cursor-pointer inline-flex text-[var(--title-color)] border border-[var(--primary-color)] items-center py-[15px] pr-[70px] pl-[35px] rounded-[35px] font-medium text-sm font-[500] font-sans relative before:content-[' '] before:absolute before:inset-0 before:bg-[var(--primary-color)] before:-z-10 hover:text-white before:translate-x-full hover:before:translate-x-0 overflow-hidden before:transition-all before:duration-500 z-[1]`}
          >
            More About Me 
            <span className='button-icon bg-[var(--primary-color)] absolute right-0 h-full text-white w-[50px] rounded-[50%] text-2xl flex items-center justify-center leading-[60px]'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color-block md:fixed absolute md:h-[200%] h-[130%] w-full bg-[var(--primary-color)] top-[-50%] left-[-70%] md:left-[-83%] rotate-[-15deg] z-[0]"></div>
    </section>

  )
}
