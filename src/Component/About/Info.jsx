import React from 'react'

export default function Info() {

    const personalInfo = [
        {
          id: 1,
          title: 'First Name : ',
          description: 'Pratham',
        },
        {
          id: 2,
          title: 'Last Name : ',
          description: 'Singhal',
        },
        {
          id: 3,
          title: 'Age : ',
          description: '22 Years',
        },
        {
          id: 4,
          title: 'Nationality : ',
          description: 'Indian',
        },
        {
          id: 5,
          title: 'Freelance : ',
          description: 'Available',
        },
        {
          id: 6,
          title: 'Address : ',
          description: 'Mathura',
        },
        {
          id: 7,
          title: 'Phone : ',
          description: '+91 8923110301',
        },
        {
          id: 8,
          title: 'Email : ',
          description: 'pratham.singhalmtr@gmail.com',
        },
        {
          id: 9,
          title: 'Languages : ',
          description: 'English, Hindi',
        },
        {
          id: 10,
          title: 'Highest Studies : ',
          description: 'B.tech',
        }
      ]

  return (
    <>
        {personalInfo.map((item,index)=>{
            return (
                <li className='info-item text-[hsl(0,0%,50%)] font-semibold' key={index}>
                    <span className="info-title">{item.title}</span>
                    <span className="info-description">{item.description}</span>
                </li>
            )
        })}
    </>
  )
}
