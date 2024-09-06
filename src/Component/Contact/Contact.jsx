import React from 'react';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaEnvelopeOpen, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FiSend } from 'react-icons/fi';
import '../../App.css';

export default function Contact() {
  return (
    <>
    <div className='bg-[var(--body-color)] w-full'>
      <section className="contact section py-[40px] px-[50px] max-w-[1000px] m-auto ">
        <h2 className="section-title text-5xl font-extrabold text-center mb-[40px] text-[var(--title-color)]">
            Get In <span className='text-[var(--primary-color)]'>Touch</span>
        </h2>
        <div className="contact-container container grid md:grid-cols-[4fr_8fr] gap-4 ">
          <div className="contact-data pr-12">
            <h3 className="contact-title text-2xl font-semibold mb-[1rem] text-[var(--title-color)]">
              Don't be Shy !
            </h3>
            <p className="contact-description text-sm leading-[1.6] mb-[20px] text-[var(--text-color)] font-medium">
            Feel free to reach out to me anytime. I'm always open to discussing new projects, sharing creative ideas, or exploring opportunities to collaborate and bring your vision to life.
            </p>
            <div className="contact-info mb-[20px]">
              <div className="info-item flex items-center mb-[20px] gap-[16px]">
                <FaEnvelopeOpen className='info-icon text-[var(--primary-color)] text-3xl' />
                <div className='flex flex-col'>
                  <span className='info-title text-sm text-[var(--text-color)] font-medium'>
                    Mail Me
                  </span>
                  <h4 className="info-desc font-mono font-semibold max-sm:text-sm text-[var(--title-color)] flex max-sm:flex-col">
                    pratham.singhal<span className=''>mtr@gmail.com</span>
                  </h4>
                </div>
              </div>

              <div className="info-item flex items-center mb-[20px] gap-[16px]">
                <FaPhoneSquareAlt className='info-icon text-[var(--primary-color)] text-3xl' />
                <div className='flex flex-col'>
                  <span className='info-title text-sm text-[var(--text-color)] font-medium'>
                    Call Me
                  </span>
                  <h4 className="info-desc font-mono font-semibold text-[var(--title-color)]">
                    +91-8923110301
                  </h4>
                </div>
              </div>

              <div className="contact-socials flex gap-[16px]">
                <a href="https://www.linkedin.com/in/pratham-singhal-042164226/"  target="_blank" className="contact-social-link bg-[var(--container-color)] text-[var(--title-color)] w-[40px] h-[40px] flex items-center justify-center rounded-[50%] leading-[44px] hover:bg-[var(--primary-color)] hover:text-white transition-all ease-linear duration-300">
                  <FaLinkedin/>
                </a>
                <a href="https://github.com/Prathamsinghal1/" target="_blank" className="contact-social-link bg-[var(--container-color)] text-[var(--title-color)] w-[40px] h-[40px] flex items-center justify-center rounded-[50%] leading-[44px] hover:bg-[var(--primary-color)] hover:text-white transition-all ease-linear duration-300">
                  <FaGithub/>
                </a>
              </div>
            </div>

          </div>

          <div className='separator border-t-2 border-[var(--border-color)] w-[40%]  mx-auto mt-[25px] mb-[56px] md:hidden'> </div>
          
          <form id="contact-form" name="contact-form" action="https://formspree.io/f/xrgwwanb" method="POST">
            <div className="form-input-group md:flex md:justify-center">
              <div className="form-input-div mb-[30px] md:w-[50%] flex justify-center">
                <input type="text" id="name" name="name" placeholder='Your Name' className="form-control border border-[var(--container-color)] bg-[var(--container-color)] text-[var(--title-color)] py-[12px] px-[24px] rounded-[30px] text-sm transition-all duration-300 ease-linear focus:border-[var(--primary-color)] focus:outline-none w-[80%]" required/>
              </div>
              <div className="form-input-div mb-[30px] md:w-[50%] flex justify-center">
                <input type="email" id="email" name="email" placeholder='Your Email' className="form-control border border-[var(--container-color)] bg-[var(--container-color)] text-[var(--title-color)] py-[12px] px-[24px] rounded-[30px] text-sm transition-all duration-300 ease-linear focus:border-[var(--primary-color)] focus:outline-none w-[80%]" required/>
              </div>
            </div>
            <div className="form-input-div mb-[30px] flex items-center justify-center">
                <input type="text" id="subject" name="subject" placeholder='Your Subject' className="form-control border border-[var(--container-color)] bg-[var(--container-color)] text-[var(--title-color)] py-[12px] px-[24px] rounded-[30px] text-sm transition-all duration-300 ease-linear focus:border-[var(--primary-color)] focus:outline-none md:w-[90%] w-[80%]" required/>
            </div>

            <div className="form-input-div mb-[30px] flex items-center justify-center">
              <textarea id="message" name="message" placeholder='Your Message' className='form-control border border-[var(--container-color)] bg-[var(--container-color)] text-[var(--title-color)] w-[95%] py-[12px] px-[24px] rounded-[30px] text-sm transition-all duration-300 ease-linear focus:border-[var(--primary-color)] resize-none h-[160px] focus:outline-none md:w-[90%] w-[80%]' rows={5} required></textarea>
            </div>

            <div className='flex flex-col items-center justify-center'>


            <button className={`button md:w-[90%] w-[80%] cursor-pointer inline-flex text-[var(--title-color)] border border-[var(--primary-color)] items-center py-[15px] pr-[70px] pl-[35px] rounded-[35px] font-medium text-sm font-[500] font-sans relative before:content-[''] before:absolute before:inset-0 before:bg-[var(--primary-color)] before:z-[-1] hover:before:translate-x-0 before:translate-x-full before:duration-700 overflow-hidden transition-all  z-[1] hover:text-white`}>
              Send Message
              <span className="contact-button-icon button-icon bg-[var(--primary-color)] absolute right-0 h-full text-white w-[50px] rounded-[50%] text-2xl flex items-center justify-center leading-[64px] ">
                <FiSend/>
              </span>
            </button>
            </div>
          </form>
        </div>
      </section>
    </div>
    </>
  )
}
