import React from 'react';
import Info from './Info';
import { FaDownload, FaGraduationCap, FaSchool } from 'react-icons/fa6';
import CV from "../../assets/resum.pdf";
import Stats from '../Stats/Stats';
import Skills from './Skills';
import '../../App.css';

export default function About() {

  const resume = [
    {
      id: 1,
      category: "education",
      icon: <FaGraduationCap/>,
      year: '2024',
      title: 'Engineering Degree ',
      span: 'Abes Engineering College',
      description: 'Completed with GPA: 7.6',
    },
    {
      id: 2,
      category: "education",
      icon: <FaSchool />,
      year: '2019',
      title: 'Intermediate ',
      span: 'Madan Mohan Kalawati Sarraf Saraswati Vidhya Mandir',
      description: 'Completed with Percentage: 86.3',
    },
    {
      id: 3,
      category: "education",
      icon: <FaSchool />,
      year: '2017',
      title: 'High School ',
      span: 'Heera Singh Public School',
      description: 'Completed with Percentage: 89.3',
    },
  ]

  return (
    <div className='bg-[var(--body-color)] w-full'>
    <main className="section container max-w-[1100px] m-auto p-[40px]">
      <section className="about">
        <h2 className="section-title text-5xl font-extrabold text-center mb-[70px] text-[var(--title-color)]">About <span className='text-[var(--primary-color)]'>Me</span></h2>
        <div className="about-container grid md:grid-cols-2 grid gap-[30px]">
            <div className="about-info">
              <h3 className="section-subtitle font-bold mb-[20px] text-[var(--title-color)] text-2xl">Personal Info</h3>
              <ul className="info_list grid grid-cols-2 max-sm:grid-cols-1 gap-[20px] mb-[32px] text-sm">
                <Info />
              </ul>
              
              <a href={CV} download="" className={`button cursor-pointer inline-flex text-[var(--title-color)] border border-[var(--primary-color)] items-center py-[15px] pr-[70px] pl-[35px] rounded-[35px] font-medium text-sm font-[500] font-sans relative before:content-[''] before:absolute before:inset-0 before:bg-[var(--primary-color)] before:z-[-1] hover:before:translate-x-0 before:translate-x-full before:duration-700 overflow-hidden transition-all  z-[1] hover:text-white`}>Download CV <span className='button-icon bg-[var(--primary-color)] absolute right-0 h-full text-white w-[50px] rounded-[50%] text-2xl flex items-center justify-center leading-[60px]'><FaDownload/></span></a>

            </div>

            <div className="stats grid grid-cols-2 max-sm:grid-cols-1 grid gap-[30px]">
              <Stats />
            </div>

        </div>
      </section>

      <div className='separator border-t-2 border-[var(--border-color)] max-w-[40%] mx-auto mt-[60px] mb-[56px]'></div>

      <section className="skills">
        <h3 className="section-subtitle subtitle-center text-3xl font-bold text-center mb-[50px] text-[var(--title-color)]">My Skills</h3>

        <div className="skills-container grid grid-cols-4 max-sm:grid-cols-2 gap-[48px] ">
          <Skills />
        </div>
        
      </section>

      <div className='separator border-t-2 border-[var(--border-color)] max-w-[40%] mx-auto mt-[60px] mb-[56px]'></div>

      <section className="resume">
        <h3 className="section-subtitle subtitle-center text-3xl font-bold text-center mb-[50px] text-[var(--title-color)]">Education</h3>

        <div className="resume-container flex items-start">
          <div className="resume-data grid grid-cols-2 max-sm:grid-cols-1  gap-[30px]">
            {resume.map((item,index) => {
              return (
                <div key={index} className='resume-item relative pl-[60px] my-[25px] before:content-[""] before:absolute before:left-[20px] before:border-l-2 before:border-[var(--border-color)] before:inset-y-0 before:w-[1px]'>
                  <div className="resume-icon absolute left-0 top-0 bg-[var(--primary-color)] text-white w-[40px] h-[40px] rounded-[50%] leading-[40px] flex items-center justify-center">{item.icon}</div>
                  <span className="resume-date bg-[var(--container-color)] py-[2px] px-[10px] rounded-[20px] text-sm font-semibold text-[var(--title-color)]">{item.year}</span>
                  <h3 className="resume-subtitle text-xl font-medium my-[13px] text-[var(--title-color)] mx-[10px]">{item.title}<span className='text-[var(--text-color)] font-serif text-sm font-semibold relative pl-[26px] before:content-[""] before:absolute before:left-[7px] before:top-[7px] before:w-[10px] before:h-[2px] before:bg-[var(--text-color)] '>{item.span}</span></h3>
                  <p className="resume-description text-sm leading-[1.6] ml-2 text-[var(--text-color)]">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </main>
    </div>
  )
}
