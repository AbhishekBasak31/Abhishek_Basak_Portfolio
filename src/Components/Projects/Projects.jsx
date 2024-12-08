import React from 'react'
import shopsphere from '../../assets/shopsphere.png'
import  movieticketbook from '../../assets/movieticket.png'
import booknotes from '../../assets/booknotes.png'
import familytraveltracker from '../../assets/familytraveltracker.png'
function Projects() {
  
    return (
        <section className=" max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">
            <h2
        className="text-4xl  bg-gray-700 relative z-10 font-extrabold px-4 py-2 w-max mx-auto text-center text-white  sm:border-b-2 border-lightYellow sm:text-5xl sm:leading-none md:text-6xl"
      >
        Latest Projects
      </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
                <div className="h-[1px] left-1/4 right-1/2 bg-lightYellow absolute top-1/2 hidden sm:block"></div>
                <div
                    className="w-4 h-4 rounded-full border-[3px] border-lightYellow absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
                ></div>
                <a
                    href="https://shop-sphere-frontend-wine.vercel.app/"
                    className="flex w-full relative justify-center sm:justify-start"
                    target='blank'
                >
                    <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
                        <img
                            className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                            src={shopsphere}
                            alt="shopsphere"
                        />
                        <span
                            className="flex group-hover:-top-14 ease-jump text-white duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                        >
                            shopsphere
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-external-link"
                            >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 1 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </span>
                    </div>
                </a>
                <div className="w-full">
                    <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
                        ShopSphere
                    </h3>
                    <span className="text-[#459bd5] text-base md:text-lg">
                        (Shoping platform)
                    </span>
                    <p className="text-justify text-sm md:text-base mt-2">
                        ShopSphere is a full-stack e-commerce platform designed to provide a seamless online shopping experience. Built with a modern tech stack, ShopSphere includes a responsive front-end interface, robust back-end services, and secure database management.
                    </p>
                    <ul className="flex flex-wrap gap-2 mt-2">
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #react.js
                        </li>
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #express.js
                        </li>
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #node.js
                        </li>
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #material UI
                        </li>
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #mongoDB
                        </li>
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #mongoose
                        </li>
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #css
                        </li>
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #javascript
                        </li>
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #figma
                        </li>
                    </ul>
                </div>
            </div>

{/* Second Project */}


<div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
  <div className="order-2 sm:order-1 w-full">
    <h3 className="text-[#f4c4dc] font-bold text-2xl md:text-4xl">Movie Ticket Booking</h3>
    {/* <span className="text-[#f4c4dc] text-base md:text-lg">(EdTech Startup)</span> */}
    <p className="text-justify text-sm md:text-base mt-2">
    It's an online movie ticket booking platfrom where user's 
    can book their favourite up comming movies tickets .
    </p>

    <ul className="flex flex-wrap gap-2 mt-2">
      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
        #react.js
      </li>
      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
        #express.js
      </li>
      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
        #node.js
      </li>
      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
      #material UI
      </li>
      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
        #mongoDB
      </li>
      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
        #mongoose
      </li>
      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
        #css
      </li>
      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
        #html
      </li>
      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
        #javascript
      </li>
      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
        #canva
      </li>
    </ul>
  </div>
  <div className="h-[1px] left-1/2 right-1/4 bg-lightYellow absolute top-1/2 hidden sm:block"></div>
  <div className="w-4 h-4 rounded-full border-[3px] border-lightYellow absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
  <a
    href="https://github.com/AbhishekBasak31/Movie-ticket-booking-system"
    target='blank'
    className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
  >
    <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
      <img
        className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_#f4c4dc]"
        src={movieticketbook}
        alt="movieticketbooking"
      />
      <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#f4c4dc] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
        Movie Ticket Booking
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-external-link"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </span>
    </div>
  </a>
</div>

{/* Third project */}
<div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
                <div className="h-[1px] left-1/4 right-1/2 bg-lightYellow absolute top-1/2 hidden sm:block"></div>
                <div
                    className="w-4 h-4 rounded-full border-[3px] border-lightYellow absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
                ></div>
                <a
                    href="https://github.com/AbhishekBasak31/Book-notes"
                    className="flex w-full relative justify-center sm:justify-start"
                    target='blank'
                >
                    <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
                        <img
                            className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_#2270f7]"
                            src={booknotes}
                            alt="shopsphere"
                        />
                        <span
                            className="flex group-hover:-top-14 ease-jump text-white duration-200 bg-[#2270f7] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                        >
                            BookNotes
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-external-link"
                            >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 1 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </span>
                    </div>
                </a>
                <div className="w-full">
                    <h3 className="text-[#2270f7] font-bold text-2xl md:text-4xl">
                        Book Notes
                    </h3>
                    <span className="text-[#2270f7] text-base md:text-lg">
                        (Interative platform)
                    </span>
                    <p className="text-justify text-sm md:text-base mt-2">
                    Its an interactive platfrom where user can upload a short summery about their best ever readed books ,and also they can give feedback through rating system. 
                    Which may encourage to other user on the platform to read the perticular books .
                    </p>
                    <ul className="flex flex-wrap gap-2 mt-2">
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #ejs
                        </li>
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #express.js
                        </li>
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #node.js
                        </li>
                      
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #postgreSQL
                        </li>
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #pgAdmin 4
                        </li>
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #css
                        </li>
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #html
                        </li>
                        <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                            #javascript
                        </li>
                        
                    </ul>
                </div>
            </div>
            {/* Forth Project */}

            <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
  <div className="order-2 sm:order-1 w-full">
    <h3 className="text-[#81801a] font-bold text-2xl md:text-4xl">Family Travel Tracker</h3>
    {/* <span className="text-[#f4c4dc] text-base md:text-lg">(EdTech Startup)</span> */}
    <p className="text-justify text-sm md:text-base mt-2">
    It is a fun platform in which user and their family members can add their travelled countries names.
    </p>

    <ul className="flex flex-wrap gap-2 mt-2">
      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
        #ejs
      </li>
      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
        #express.js
      </li>
      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
        #node.js
      </li>
     
     
      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
        #css
      </li>
      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
        #javascript
      </li>
      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
        #html
      </li>
     
    </ul>
  </div>
  <div className="h-[1px] left-1/2 right-1/4 bg-lightYellow absolute top-1/2 hidden sm:block"></div>
  <div className="w-4 h-4 rounded-full border-[3px] border-lightYellow absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
  <a
    href="https://github.com/AbhishekBasak31/Family-Travel-Tracker"
    target='blank'
    className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
  >
    <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
      <img
        className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_#81801a]"
        src={familytraveltracker}
        alt="movieticketbooking"
      />
      <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#81801a] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
        Family travel tracker
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-external-link"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </span>
    </div>
  </a>
</div>
<div className="w-[2px] hidden sm:block bg-lightYellow absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
        </section>

    )
}

export default Projects