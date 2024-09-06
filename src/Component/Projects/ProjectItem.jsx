import React, { useState } from "react";
import '../../App.css';

export default function ProjectItem({ item }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="portfolio-item relative rounded-[10px] overflow-hidden cursor-pointer 
        hover:transform hover:scale-105 transition-all duration-500 ease-linear my-4 mr-2">
        <img
          src={item.img}
          alt=""
          className="portfolio-img rounded-[10px] object-cover align-middle"
        />

        <div
          className="portfolio-hover bg-[var(--primary-color)] absolute inset-0 grid opacity-0 transition-all duration-500 ease-linear hover:opacity-70 z-[100]"
          onClick={() => setModal(true)}
        >
          <h3 className="portfolio-title text-white text-3xl font-medium transform translate-y-5 transition-transform duration-500 ease-linear hover:translate-y-0 w-full h-full flex items-center justify-center">
            {item.title}
          </h3>
        </div>
      </div>

      {modal && (
        <div
          className="portfolio-modal fixed inset-0 h-screen bg-[hsla(0,0%,0%,0.7)] z-[1000] grid place-items-center p-[15px]  z-[999999]"
        >
          <div className="portfolio-modal-content bg-[var(--container-color)] max-w-[650px] h-[90vh] md:p-[32px] p-[15px] rounded-[10px] relative  h-[400px] flex flex-col gap-8 overflow-y-scroll overflow-x-scroll w-[95%]">
            <img
              src="/Images/Close.png"
              alt="Close"
              className="modal-close w-[50px] h-[50px] absolute top-0 right-0 cursor-pointer invert-[0.8]"
              onClick={() => setModal(false)}
            />

            <h3 className="modal-title text-[var(--primary-color)] text-3xl mb-[24px] font-semibold text-center">{item.title}</h3>

            <ul className="modal-list grid md:grid-cols-2 flex flex-col md:gap-[24px] gap-8">
              {item.details.map((innerItem, i) => (
                <li key={i} className="modal-item flex gap-4 text-[var(--text-color)]">
                  <span className="item-icon text-xl">{innerItem.icon}</span>
                  <div className="md:flex lg:flex items-center font-medium">
                    <span className="item-title block font-semibold mr-2 md:whitespace-nowrap ">
                      {innerItem.title}
                    </span>
                    {(innerItem.title === "Link : " && innerItem.desc !== "Updated Soon") && <a href={innerItem.desc} target="_blank"  className={`item-details block text-sm text-blue-500 md:whitespace-nowrap`}>
                      <span className="max-sm:flex max-sm:flex-col mr-2">
                        <span>{innerItem.desc.slice(0,18)}</span>
                        <span>{innerItem.desc.slice(18)}</span>
                      </span>
                    </a>}
                    {innerItem.title !== "Link : " && <span className={`item-details block text-sm text-[var(--text-color)] `}>
                      {innerItem.desc}
                    </span>}
                    {innerItem.desc === "Updated Soon" && <span className={`item-details block text-sm text-[var(--text-color)] `}>
                      {innerItem.desc}
                    </span>}
                  </div>
                </li>
              ))}
            </ul>

            <img
              src={item.img}
              alt=""
              className="modal-img w-full object-cover mt-4 rounded-[10px] "
            />
          </div>
        </div>
      )}
    </>
  );
}
