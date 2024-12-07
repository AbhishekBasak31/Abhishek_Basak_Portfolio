import { React, useEffect } from 'react'
import logo from '../../assets/bg-2.png'
function Heroes() {
    useEffect(() => {
        const words = ["I am MERN Stack Developer"];
        let i = 0;
        let j = 0;
        let currentWord = "";
        let isDeleting = false;

        function type() {
            const element = document.getElementById("typewriter");
            if (!element) return;

            currentWord = words[i];
            if (isDeleting) {
                element.textContent = currentWord.substring(0, j - 1);
                j--;
                if (j === 0) {
                    isDeleting = false;
                    i++;
                    if (i === words.length) {
                        i = 0;
                    }
                }
            } else {
                element.textContent = currentWord.substring(0, j + 1);
                j++;
                if (j === currentWord.length) {
                    isDeleting = true;
                }
            }
            setTimeout(type, 100);
        }

        type();
    }, []);


    return (

        // Heroes section start
        <div className='bg-gray-700 flex justify-center items-center mx-auto'>


            <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto bg-transparent overflow-x-hidden md:flex-row sm:px-6 p-8">
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                    <div className="text-left">
                        <h2
                            className="text-3xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl">
                            Hi my name is


                        </h2>
                        <h1 className="font-bold text-lightYellow text-7xl">
                            Abhishek Basak
                        </h1>
                        <div className='p-3 max-w-full h-16 my-auto mx-auto'>

                        <p id='typewriter' className="max-w-md mx-auto mt-3 text-xl font-bold text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        </p>
                        </div>
                        <div className="mt-5 sm:flex md:mt-8 ">
                            <div className="rounded-md ">
                            {/* Button to open the personal description modal */}
                            

                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-gray-700 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-lightYellow group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black">About Me</span>
                    </button>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                    <div className="relative w-full p-3 rounded  md:p-8">
                        <div className="rounded-full   w-full">
                            <img src={logo} />
                        </div>
                    </div>
                </div>
            </div>
       
           
           {/* Personal description modal start */}

            <dialog id="my_modal_1" className="modal scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300">
                <div className="modal-box max-w-[80%]">
                    <div className=' flex justify-center items-center gap-5 flex-wrap md:flex-nowrap'>
                    <div className="rounded-full m-auto  w-[100%] flex flex-col justify-center items-center gap-3">
                    <img  src={logo} />

                    <div>
                        <h1 className='text-xl font-extrabold text-white'> Services </h1>
                        <ul>
                            <li className='text-base text-lightYellow'>Full Stack Devolopment</li>
                            <li className='text-base text-lightYellow'>UI/UX </li>
                        </ul>
                    </div>
                    </div>

                        <div>
                        <h3 className="font-bold text-lg  text-lightYellow">Hey there</h3>
                        <p className="py-4">I'm <span className='text-lg text-lightYellow font-semibold' >Abhishek Basak</span> , a passionate and skilled <span className='text-lg text-lightYellow font-semibold'> MERN Stack Developer</span> with a proven ability to design and develop dynamic, 
                            responsive, and user-centric web applications. 
                            As a final-year B.Tech student in  <span className='text-lg text-lightYellow font-semibold'>Computer Science and Engineering </span>, I specialize in full-stack development, 
                            combining seamless frontend interfaces with robust and scalable backend architectures.
                             My expertise in <span className='text-lg text-lightYellow font-semibold'>UI/UX design </span> allows me to create intuitive and visually compelling user experiences that enhance functionality and engagement.</p>

                        <p className="py-4">

                        I pride myself on being a lifelong learner, consistently seeking to explore emerging technologies and industry trends.
                         My approach is rooted in adaptability, innovation, and an insatiable curiosity to push boundaries. 
                         Whether it’s building complex systems or optimizing existing ones, 
                        I thrive on solving challenging problems and delivering impactful, scalable solutions tailored to user needs.
                        </p>
                        <p children="py-4">
                        Currently, I am learning <span className='text-lg text-lightYellow font-semibold'> DSA & SQL</span> . Beyond my technical pursuits, I am deeply passionate about traveling to new destinations and trekking in the mountains, which inspires my creativity and resilience.
                         Exploring diverse landscapes and cultures allows me to bring a unique perspective to my work, blending technical precision with a human touch.
                        </p>
                        </div>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="bg-lightYellow text-black px-3 py-2 rounded-lg font-semibold ">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            {/* personal description modal end */}

        </div>
// heroes section end here
    )
}

export default Heroes;