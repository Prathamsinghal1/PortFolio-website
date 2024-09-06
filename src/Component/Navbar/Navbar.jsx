import React, { useState } from 'react'
import { FaEnvelopeOpen, FaFolderOpen, FaHome, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../../App.css';

export default function Navbar() {
  const links = [
    {
      id:1,
      name:"Home",
      icon:<FaHome className="nav-icon"/>,
      path:"/",
    },
    {
      id:2,
      name:"About",
      icon:<FaUser className="nav-icon"/>,
      path:"/about",
    },
    {
      id:3,
      name:"Projects",
      icon:<FaFolderOpen className="nav-icon"/>,
      path:"/projects",
    },
    {
      id:4,
      name:"Contact",
      icon:<FaEnvelopeOpen className="nav-icon"/>,
      path:"/contact",
    },
  ]
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav lg:fixed lg:right-[30px] lg:flex lg:items-center lg:h-full z-[99]">
  <div 
    className={`fixed inset-0 w-full px-[30px] py-[60px] bg-[var(--container-color)] lg:[all:unset] transition-all duration-500  
    ${open ? "left-0" : "left-[-100%]"} z-[9999]`} 
    style={{ transition: "all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1)" }}
  >
    <ul className="nav-list ">
      {links.map((item, index) => {
        return (
          <li className="nav-item lg:m-[20px]" key={index}>
            <Link
              to={item.path}
              className="nav-link cursor-pointer group flex gap-[24px] items-center p-[14px] text-[var(--title-color)] focus:text-[var(--primary-color)] lg:p-0 lg:bg-[var(--container-color)] lg:w-[50px] lg:h-[50px] lg:rounded-[50%] lg:relative lg:hover:bg-[var(--primary-color)] lg:focus:bg-[var(--primary-color)] lg:hover:text-white lg:focus:text-white lg:hover:rounded-l-lg transition-all"
              onClick={() => setOpen(!open)}
            >
              <div className="nav-icons lg:text-[20px] lg:m-auto z-[9999]">
                {item.icon}
              </div>
              <h3 className="nav-name font-[24px] font-medium lg:absolute lg:top-0 lg:right-0 lg:bg-[var(--primary-color)] lg:h-full lg:px-[25px] lg:rounded-[30px] lg:flex lg:items-center lg:text-sm lg:text-white lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 mr-[20px]">
                {item.name}
              </h3>
            </Link>
          </li>
        );
      })}
    </ul>
  </div>

  {/* Mobile Menu Icon */}
  <div 
    className="fixed top-[30px] right-[30px] w-[40px] h-[40px] bg-[var(--container-color)] rounded py-[12px] px-[10px] lg:hidden z-[9999]" 
    onClick={() => setOpen(!open)}
  >
    <span className={`block w-[20px] h-[2px] rounded-[2px] bg-[var(--title-color)] mb-[5px] transition-transform ${open ? "rotate-[45deg] translate-x-[1px] translate-y-[7px]" : ""}`}></span>
    <span className={`block w-[20px] h-[2px] rounded-[2px] bg-[var(--title-color)] mb-[5px] transition-opacity ${open ? "hidden" : ""}`}></span>
    <span className={`block w-[20px] h-[2px] rounded-[2px] bg-[var(--title-color)] mb-[5px] transition-transform ${open ? "rotate-[-45deg]" : ""}`}></span>
  </div>
</nav>

  )
}
