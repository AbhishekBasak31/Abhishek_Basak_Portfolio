import {React,useRef} from 'react';

function Header() {

  const targetSectionRef = useRef(null);
  const handleScroll = () => {
    targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
<nav id='NavigationBar' className="bg-gray-700 border-gray-200 dark:bg-gray-800 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href='' className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-4xl font-dancing text-lightYellow whitespace-nowrap ">Abhishek</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <div className="flex  md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
    
      <a href='/AbhishekBasak.pdf'  download={'AbhishekBasak.pdf'} target='blank' className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-gray-700 transition duration-300 ease-out border-2 border-lightYellow rounded-lg shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-gray-700 duration-300 -translate-x-full bg-lightYellow xl: group-hover:translate-x-0 ease">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
              </svg>

            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-lightYellow transition-all duration-300 transform xl: group-hover:translate-x-full ease">Download CV</span>
            <span className="relative invisible">
              Download CV
            </span>
      </a>
      </div>
      
  </div>
 
  </div>
</nav>
);
}

export default Header;
