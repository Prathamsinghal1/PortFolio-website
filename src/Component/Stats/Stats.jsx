import React from 'react';
import parse from 'html-react-parser';
import '../../App.css';

export default function Stats() {

    const stats = [
        {
          id: 1,
          no: '1+',
          title: 'Internship <br/> Experience',
        },
        {
            id: 2,
            no: '5+',
            title: 'Completed <br/> Projects',
        },
        {
            id: 3,
            no: '1+',
            title: 'Real Life Projects <br/> Completed',
        }
      ]

  return (
    <>
        {stats.map((item,index)=>{
            return (
                <div className="stats-box border border-[var(--border-color)] pt-[20px] px-[30px] pb-[25px] rounded-[5px] font-serif" key={index}>
                    <h3 className="stats-no text-[var(--primary-color)] font-bold text-4xl leading-[1.2]">{item.no}</h3>
                    <p className='stats-title text-sm leading-[1.6] pl-[45px] relative text-[var(--text-color)] font-semibold before:content-[""] before:absolute before:left-0 before:top-[25%] before:w-[30px] before:h-[1px] before:bg-[var(--text-color)]'>{parse(item.title)}</p>
                </div>
            )
        })}
    </>
  )
}
