import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Skills() {
    const skills = [
        {
            id: 1,
            title: 'Html',
            percentage: '70',
        },
        {
            id: 2,
            title: 'Css',
            percentage: '60',
        },
        {
            id: 3,
            title: 'Javascript',
            percentage: '79',
        },
        {
            id: 4,
            title: 'React',
            percentage: '65',
        },
        {
            id: 5,
            title: 'DSA',
            percentage: '70',
        },
        {
            id: 6,
            title: 'Problem-Solving',
            percentage: '85',
        },
        {
            id: 7,
            title: 'Node Js',
            percentage: '30',
        },
        {
            id: 8,
            title: 'Express',
            percentage: '30',
        }
    ]
  return (
    <>
      {skills.map((item,index)=>{
        return (
            <div className='progress-box flex flex-col justify-center items-center' key={index}>
                <div className="progress-circle w-[120px] h-[120px]  ">
                    <CircularProgressbar strokeWidth={7.5} value={item.percentage} text={`${item.percentage}%`} styles={buildStyles({
                            pathColor: 'var(--primary-color)', // Customize with Tailwind color, e.g., indigo-600
                            textColor: 'var(--title-color)', // Customize with Tailwind color, e.g., indigo-600
                            trailColor: 'var(--container-color)', // Customize with Tailwind color, e.g., gray-200
                        })} />
                </div>
                <h3 className="skills-title font-normal mt-[24px] text-[var(--title-color)]">{item.title}</h3>
            </div>
        )
      })}
    </>
  )
}
