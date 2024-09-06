import React, { useState } from 'react'
import { CiLink } from 'react-icons/ci'
import { FiCode, FiFileText } from 'react-icons/fi'
import ProjectItem from './ProjectItem';
import '../../App.css';

export default function Projects() {

    const portfolio = [
        {
            id:1,
            img:"/Images/Project2.png",
            title:'Book Store Mern',
            details:[
                {
                    icon: <FiFileText/>,
                    title: 'Project : ',
                    desc: 'Website',
                },
                {
                    icon: <FiCode/>,
                    title: 'Languages : ',
                    desc: 'React JS',
                },
                {
                    icon: <CiLink/>,
                    title: 'Link : ',
                    desc: 'https://github.com/Prathamsinghal1/BookStore-Mern',
                }
            ]
        },
        {
            id:2,
            img:"/Images/project1.png",
            title:'Operate Character',
            details:[
                {
                    icon: <FiFileText/>,
                    title: 'Project : ',
                    desc: 'Website',
                },
                {
                    icon: <FiCode/>,
                    title: 'Languages : ',
                    desc: 'React JS',
                },
                {
                    icon: <CiLink />,
                    title: 'Link : ',
                    desc: 'https://github.com/Prathamsinghal1/Operator_react',
                }
            ]
        },
        {
            id:3,
            img:"/Images/Project3.png",
            title:'Portfolio Website',
            details:[
                {
                    icon: <FiFileText/>,
                    title: 'Project : ',
                    desc: 'Website',
                },
                {
                    icon: <FiCode/>,
                    title: 'Languages : ',
                    desc: 'React JS',
                },
                {
                    icon: <CiLink/>,
                    title: 'Link : ',
                    desc: 'Updated Soon',
                }
            ]
        },
        {
            id:4,
            img:"/Images/Project4.png",
            title:'News Api',
            details:[
                {
                    icon: <FiFileText/>,
                    title: 'Project : ',
                    desc: 'Website',
                },
                {
                    icon: <FiCode/>,
                    title: 'Languages : ',
                    desc: 'React JS',
                },
                {
                    icon: <CiLink/>,
                    title: 'Link : ',
                    desc: 'https://github.com/Prathamsinghal1/NewsNewer_react',
                }
            ]
        },
        {
            id:5,
            img:"/Images/Project5.png",
            title:'Calculator',
            details:[
                {
                    icon: <FiFileText/>,
                    title: 'Project : ',
                    desc: 'Website',
                },
                {
                    icon: <FiCode/>,
                    title: 'Languages : ',
                    desc: 'React JS',
                },
                {
                    icon: <CiLink/>,
                    title: 'Link : ',
                    desc: 'https://github.com/Prathamsinghal1/Calc_react',
                }
            ]
        },
        {
            id:6,
            img:"/Images/Project6.png",
            title:'Todo List',
            details:[
                {
                    icon: <FiFileText/>,
                    title: 'Project : ',
                    desc: 'Website',
                },
                {
                    icon: <FiCode/>,
                    title: 'Languages : ',
                    desc: 'React JS',
                },
                {
                    icon: <CiLink/>,
                    title: 'Link : ',
                    desc: 'https://github.com/Prathamsinghal1/TodoList_react',
                }
            ]
        },
    ]

  return (
    <div className='bg-[var(--body-color)]'>
        <section className="portfolio section p-[40px] max-w-[1080px] m-auto flex flex-col items-center justify-center">
        <h2 className="section-title text-5xl font-extrabold text-center mb-[40px] text-[var(--title-color)]">
            My <span className='text-[var(--primary-color)]'>Projects</span>
        </h2>
        
        <div className="portfolio-container grid md:grid-cols-2 gap-[30px] md:px-12 px-4 max-sm:px-2">
            {portfolio.map((item, index) => (
                <ProjectItem key={index} item={item} />
            ))}
        </div>
    </section>
    </div>

  )
}
