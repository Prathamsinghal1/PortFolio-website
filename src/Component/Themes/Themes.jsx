import React, { useState, useEffect } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { FaCog } from 'react-icons/fa'
import '../../App.css';

export default function Themes() {

    const previousSaveColor = () => {
        let color = 'hsl(19,96%,52%)';
        if(localStorage.getItem('color')){
            color = localStorage.getItem('color');
        }
        return color;
    }
    const previousSaveTheme = () => {
        let colorTheme = 'light-theme';
        if(localStorage.getItem('colorTheme')){
            colorTheme = localStorage.getItem('colorTheme');
        }
        return colorTheme;
    }

    const themes = [
        {
            id: 1,
            img: "./Images/purple.png",
            color: 'hsl(252,35%,51%)'
        },
        {
            id: 2,
            img: "./Images/red.png",
            color: 'hsl(4,93%,54%)'
        },
        {
            id: 3,
            img: "./Images/blueviolet.png",
            color: 'hsl(271,76%,53%)'
        },
        {
            id: 4,
            img: "./Images/blue.png",
            color: 'hsl(225,73%,57%)'
        },
        {
            id: 5,
            img: "./Images/goldenrod.png",
            color: 'hsl(43,74%,49%)'
        },
        {
            id: 6,
            img: "./Images/magenta.png",
            color: 'hsl(339,81%,66%)'
        },
        {
            id: 7,
            img: "./Images/yellowgreen.png",
            color: 'hsl(80,61%,50%)'
        },
        {
            id: 8,
            img: "./Images/orange.png",
            color: 'hsl(19,96%,52%)'
        },
        {
            id: 9,
            img: "./Images/green.png",
            color: '#78b424'
        },
        {
            id: 10,
            img: "./Images/yellow.png",
            color: '#ffb404'
        },
    ]

    const [colorTheme, setColorTheme] = useState(previousSaveTheme());
    const [open, setOpen] = useState(false);
    const [color,setColor] = useState(previousSaveColor());
    useEffect(()=>{
        document.documentElement.style.setProperty('--primary-color',color);
        localStorage.setItem('color',color);
    },[color])
    useEffect(()=>{
        document.documentElement.className = colorTheme;
        localStorage.setItem('colorTheme',colorTheme);
    },[colorTheme])

    const handleColorTheme = () => {
        if(colorTheme==='light-theme'){
            setColorTheme('dark-theme');
        }
        else{
            setColorTheme('light-theme');
        }
    }

  return (
    <>
    <div className={`style-switcher fixed left-0 top-[10%] z-[10] w-[220px] p-[15px] shadow-lg border bg-white rounded-tr-[5px] rounded-br-[5px] rounded-tl-none rounded-bl-none transition-all duration-300 ease-linear ${open?"translate-x-[0]":"translate-x-[-100%]"}`}>
        <div 
            className={`style-switcher-toggler absolute bg-white h-[50px] w-[50px] max-sm:h-[40px] max-sm:w-[40px] text-2xl cursor-pointer grid items-center justify-center text-[hsl(0,0%,40%)] rounded-tr-[5px] rounded-br-[5px] rounded-tl-none rounded-bl-none shadow-lg border top-[10%] transition-all duration-300 ease-linear ${open?"left-[-100%]":"left-[100%]"}`} 
            onClick={()=>setOpen(!open)}
        >
            <FaCog/>
        </div>
        <div 
            className={`theme-toggler absolute bg-white h-[50px] w-[50px] max-sm:h-[40px] max-sm:w-[40px] text-2xl cursor-pointer grid items-center justify-center text-[hsl(0,0%,40%)] rounded-tr-[5px] rounded-br-[5px] rounded-tl-none rounded-bl-none shadow-lg border bottom-[10%] transition-all duration-300 ease-linear ${open?"left-[-100%]":"left-[100%]"}`} 
            onClick={handleColorTheme}
        >
            {colorTheme==='light-theme'?<BsMoon/>:<BsSun/>}
        </div>
        <h3 className="style-switcher-title text-[hsl(0,0%,40%)] text-sm font-bold border-b pb-[5px] mb-[15px] border-[hsl(0,0%,87%)]">
            Style Switcher
        </h3>
        <div className="style-switcher-items grid grid-cols-5 gap-y-[4px] gap-x-[8px]">
            {themes.map((item,index)=>{
                return (
                    <div key={index} className={`flex items-center justify-center`}>
                        <img src={item.img} className='w-[30px] cursor-pointer ' alt="" onClick={()=>setColor(item.color)}/>
                    </div>
                )
            })}
        </div>
        <div className="style-switcher-close text-[hsl(0,0%,40%)] cursor-pointer text-3xl absolute top-[2%] right-[15px] font-bold" onClick={()=>setOpen(!open)}>&times;</div>
    </div>
    </>
  )
}
