import React, { useState } from 'react';
import emailjs from 'emailjs-com';


function Contact() {
    
    const [formData, setFormData] = useState({
        from_name: '',
        email_id: '',
        message: '',
        subject:''
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [responseMessage, setResponseMessage] = useState(false);
      const [errorMessage,setErrorMessage] = useState(false);
      const[isAlerttrue,setAlertTrue]=useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        const trimmedFormData = {
            from_name: formData.from_name.trim(),
            email_id: formData.email_id.trim(),
            message: formData.message.trim(),
            subject: formData.subject.trim(),
        };
    
        const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
        if (
            trimmedFormData.email_id &&
            isValidEmail(trimmedFormData.email_id) &&
            trimmedFormData.from_name &&
            trimmedFormData.message &&
            trimmedFormData.subject
        ) {
          console.log(trimmedFormData.email_id,trimmedFormData.from_name,trimmedFormData.message,trimmedFormData.subject);
            emailjs
                .send(
                    import.meta.env.VITE_YOUR_SERVICE_ID,
                    import.meta.env.VITE_YOUR_TEMPLATE_ID,
                    trimmedFormData,
                    import.meta.env.VITE_YOUR_PUBLIC_KEY
                )
                .then(
                    () => {
                      setResponseMessage(true)
                      setTimeout(()=>{
                        setResponseMessage(false);
                      },1000)
                        
                        setFormData({ from_name: '', email_id: '', message: '', subject: '' });
                    },
                    (error) => {
                        console.error('Error sending email:', error);
                        setErrorMessage(true);
                        setTimeout(()=>{
                          setErrorMessage(false);
                        },1000)
                    }
                )
                .finally(() => setIsSubmitting(false));
        } else {
          console.log(trimmedFormData.email_id,trimmedFormData.from_name,trimmedFormData.message,trimmedFormData.subject); 
          setAlertTrue(true);
          setTimeout(() => setAlertTrue(false), 1000);
          setIsSubmitting(false);
        }
    };
  return (
    <div className=" bg-gray-700 pt-52 pb-32">
    <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-gray-700  rounded-md font-[sans-serif]">
        <div>
            <h1 className="text-white text-4xl font-extrabold">Let's Connect</h1>
            <p className="text-sm text-[#797d82]  mt-4">Whether you have a project idea, a collaboration opportunity, or just want to say hello, feel free to reach out. I’m always open to discussing exciting ideas and bringing innovative solutions to life.</p>

            <div className="mt-12">
                <h2 className="text-white text-base font-bold">Contact</h2>
                <ul className="mt-4">
                    <li className="flex items-center space-x-3">
                    <a href="mailto:suvobasak2000@gmail.com" className=" text-sm " target='blank'>
                        <div className="bg-white hover:bg-lightYellow h-10 w-10 transition-colors duration-500 ease-in-out rounded-full flex items-center justify-center shrink-0">
                      
                            
                        <svg className="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                            
                        </div>
                        </a>
                        <a href="tel:+916291523569" className=" text-sm " target='blank'>
                        <div className="bg-white hover:bg-lightYellow h-10 w-10 transition-colors duration-500 ease-in-out rounded-full flex items-center justify-center shrink-0">
                      
                            
                            
                        <svg className="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            
                        </div>
                        </a>

                        <a href="https://wa.me/+916291523569" className=" text-sm " target='blank'>
                        <div className="bg-white hover:bg-lightYellow h-10 w-10 transition-colors duration-500 ease-in-out rounded-full flex items-center justify-center shrink-0">
                      
                            
                            
                        <svg className='font-extrabold mx-auto' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                                 <g fill="#111111" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0"  textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M25,2c-12.69047,0 -23,10.30953 -23,23c0,4.0791 1.11869,7.88588 2.98438,11.20898l-2.94727,10.52148c-0.09582,0.34262 -0.00241,0.71035 0.24531,0.96571c0.24772,0.25536 0.61244,0.35989 0.95781,0.27452l10.9707,-2.71875c3.22369,1.72098 6.88165,2.74805 10.78906,2.74805c12.69047,0 23,-10.30953 23,-23c0,-12.69047 -10.30953,-23 -23,-23zM25,4c11.60953,0 21,9.39047 21,21c0,11.60953 -9.39047,21 -21,21c-3.72198,0 -7.20788,-0.97037 -10.23828,-2.66602c-0.22164,-0.12385 -0.48208,-0.15876 -0.72852,-0.09766l-9.60742,2.38086l2.57617,-9.19141c0.07449,-0.26248 0.03851,-0.54399 -0.09961,-0.7793c-1.84166,-3.12289 -2.90234,-6.75638 -2.90234,-10.64648c0,-11.60953 9.39047,-21 21,-21zM16.64258,13c-0.64104,0 -1.55653,0.23849 -2.30859,1.04883c-0.45172,0.48672 -2.33398,2.32068 -2.33398,5.54492c0,3.36152 2.33139,6.2621 2.61328,6.63477h0.00195v0.00195c-0.02674,-0.03514 0.3578,0.52172 0.87109,1.18945c0.5133,0.66773 1.23108,1.54472 2.13281,2.49414c1.80347,1.89885 4.33914,4.09336 7.48633,5.43555c1.44932,0.61717 2.59271,0.98981 3.45898,1.26172c1.60539,0.5041 3.06762,0.42747 4.16602,0.26563c0.82216,-0.12108 1.72641,-0.51584 2.62109,-1.08203c0.89469,-0.56619 1.77153,-1.2702 2.1582,-2.33984c0.27701,-0.76683 0.41783,-1.47548 0.46875,-2.05859c0.02546,-0.29156 0.02869,-0.54888 0.00977,-0.78711c-0.01897,-0.23823 0.0013,-0.42071 -0.2207,-0.78516c-0.46557,-0.76441 -0.99283,-0.78437 -1.54297,-1.05664c-0.30567,-0.15128 -1.17595,-0.57625 -2.04883,-0.99219c-0.8719,-0.41547 -1.62686,-0.78344 -2.0918,-0.94922c-0.29375,-0.10568 -0.65243,-0.25782 -1.16992,-0.19922c-0.51749,0.0586 -1.0286,0.43198 -1.32617,0.87305c-0.28205,0.41807 -1.4175,1.75835 -1.76367,2.15234c-0.0046,-0.0028 0.02544,0.01104 -0.11133,-0.05664c-0.42813,-0.21189 -0.95173,-0.39205 -1.72656,-0.80078c-0.77483,-0.40873 -1.74407,-1.01229 -2.80469,-1.94727v-0.00195c-1.57861,-1.38975 -2.68437,-3.1346 -3.0332,-3.7207c0.0235,-0.02796 -0.00279,0.0059 0.04687,-0.04297l0.00195,-0.00195c0.35652,-0.35115 0.67247,-0.77056 0.93945,-1.07812c0.37854,-0.43609 0.54559,-0.82052 0.72656,-1.17969c0.36067,-0.71583 0.15985,-1.50352 -0.04883,-1.91797v-0.00195c0.01441,0.02867 -0.11288,-0.25219 -0.25,-0.57617c-0.13751,-0.32491 -0.31279,-0.74613 -0.5,-1.19531c-0.37442,-0.89836 -0.79243,-1.90595 -1.04102,-2.49609v-0.00195c-0.29285,-0.69513 -0.68904,-1.1959 -1.20703,-1.4375c-0.51799,-0.2416 -0.97563,-0.17291 -0.99414,-0.17383h-0.00195c-0.36964,-0.01705 -0.77527,-0.02148 -1.17773,-0.02148zM16.64258,15c0.38554,0 0.76564,0.0047 1.08398,0.01953c0.32749,0.01632 0.30712,0.01766 0.24414,-0.01172c-0.06399,-0.02984 0.02283,-0.03953 0.20898,0.40234c0.24341,0.57785 0.66348,1.58909 1.03906,2.49023c0.18779,0.45057 0.36354,0.87343 0.50391,1.20508c0.14036,0.33165 0.21642,0.51683 0.30469,0.69336v0.00195l0.00195,0.00195c0.08654,0.17075 0.07889,0.06143 0.04883,0.12109c-0.21103,0.41883 -0.23966,0.52166 -0.45312,0.76758c-0.32502,0.37443 -0.65655,0.792 -0.83203,0.96484c-0.15353,0.15082 -0.43055,0.38578 -0.60352,0.8457c-0.17323,0.46063 -0.09238,1.09262 0.18555,1.56445c0.37003,0.62819 1.58941,2.6129 3.48438,4.28125c1.19338,1.05202 2.30519,1.74828 3.19336,2.2168c0.88817,0.46852 1.61157,0.74215 1.77344,0.82227c0.38438,0.19023 0.80448,0.33795 1.29297,0.2793c0.48849,-0.05865 0.90964,-0.35504 1.17773,-0.6582l0.00195,-0.00195c0.3568,-0.40451 1.41702,-1.61513 1.92578,-2.36133c0.02156,0.0076 0.0145,0.0017 0.18359,0.0625v0.00195h0.00195c0.0772,0.02749 1.04413,0.46028 1.90625,0.87109c0.86212,0.41081 1.73716,0.8378 2.02148,0.97852c0.41033,0.20308 0.60422,0.33529 0.6543,0.33594c0.00338,0.08798 0.0068,0.18333 -0.00586,0.32813c-0.03507,0.40164 -0.14243,0.95757 -0.35742,1.55273c-0.10532,0.29136 -0.65389,0.89227 -1.3457,1.33008c-0.69181,0.43781 -1.53386,0.74705 -1.8457,0.79297c-0.9376,0.13815 -2.05083,0.18859 -3.27344,-0.19531c-0.84773,-0.26609 -1.90476,-0.61053 -3.27344,-1.19336c-2.77581,-1.18381 -5.13503,-3.19825 -6.82031,-4.97266c-0.84264,-0.8872 -1.51775,-1.71309 -1.99805,-2.33789c-0.4794,-0.62364 -0.68874,-0.94816 -0.86328,-1.17773l-0.00195,-0.00195c-0.30983,-0.40973 -2.20703,-3.04868 -2.20703,-5.42578c0,-2.51576 1.1685,-3.50231 1.80078,-4.18359c0.33194,-0.35766 0.69484,-0.41016 0.8418,-0.41016z"></path></g></g>
                        </svg>
                        </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="mt-12">
                <h2 className="text-white text-base font-bold">Socials</h2>

                <ul className="flex mt-4 space-x-4">
                    <li className="bg-white hover:bg-lightYellow h-10 w-10 transition-colors duration-500 ease-in-out rounded-full flex items-center justify-center shrink-0">
                        <a href="https://www.facebook.com/abhi.yop/" target='blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                            <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"></path>
                        </svg>
                        </a>
                    </li>
                    <li className="bg-white hover:bg-lightYellow h-10 w-10 transition-colors duration-500 ease-in-out rounded-full flex items-center justify-center shrink-0">
                        <a href="https://www.linkedin.com/in/contactabhishekbasak/" target='blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                            <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                        </svg>
                        </a>
                    </li>
                    <li className="bg-white hover:bg-lightYellow h-10 w-10 transition-colors duration-500 ease-in-out rounded-full flex items-center justify-center shrink-0">
                        <a href="https://www.instagram.com/____abhishek.ikw___/" target='blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                            <path d="M 15 4 C 8.9365932 4 4 8.9365932 4 15 L 4 33 C 4 39.063407 8.9365932 44 15 44 L 33 44 C 39.063407 44 44 39.063407 44 33 L 44 15 C 44 8.9365932 39.063407 4 33 4 L 15 4 z M 15 6 L 33 6 C 37.982593 6 42 10.017407 42 15 L 42 33 C 42 37.982593 37.982593 42 33 42 L 15 42 C 10.017407 42 6 37.982593 6 33 L 6 15 C 6 10.017407 10.017407 6 15 6 z M 35 11 C 33.895 11 33 11.895 33 13 C 33 14.105 33.895 15 35 15 C 36.105 15 37 14.105 37 13 C 37 11.895 36.105 11 35 11 z M 24 14 C 18.488666 14 14 18.488666 14 24 C 14 29.511334 18.488666 34 24 34 C 29.511334 34 34 29.511334 34 24 C 34 18.488666 29.511334 14 24 14 z M 24 16 C 28.430666 16 32 19.569334 32 24 C 32 28.430666 28.430666 32 24 32 C 19.569334 32 16 28.430666 16 24 C 16 19.569334 19.569334 16 24 16 z"></path>
                        </svg>
                        </a>
                    </li>
                    <li className="bg-white hover:bg-lightYellow h-10 w-10 transition-colors duration-500 ease-in-out rounded-full flex items-center justify-center shrink-0">
                        <a href="https://www.instagram.com/____abhishek.ikw___/" target='blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                        </a>
                    </li>

                   
                    
                </ul>
            </div>
        </div>
        <div className=' flex flex-col justify-center  items-center gap-2'>

      <div className='max-w-full h-24 my-auto mx-auto p-2 pointer-events-none'> 
{isAlerttrue&&<div className="p-4 mb-4 mx-autos text-sm text-centers text-yellow-800 rounded-lg bg-yellow-500 dark:bg-gray-800 dark:text-yellow-400" role="alert">
  <span className="font-medium  text-center"></span> Fill the Credential first.
</div>}

{responseMessage&&
<div className="p-4 mb-4 mx-autos text-sm text-centers text-green-800 rounded-lg bg-green-400 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span className="font-medium  text-center"></span> Message send successfully
</div>
}

{
errorMessage &&<div className="p-4 mb-4 mx-autos text-sm text-centers text-red-800 rounded-lg bg-red-400 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium  text-center"></span> Failed to send 
</div>
}
</div>
        <form className="ml-auo space-y-4  " onSubmit={sendEmail}>
            <input type='text' placeholder='user name'name='from_name'
                className="focus:outline-none w-full text-white bg-gray-700 rounded-md py-2.5 px-4  text-sm outline-none border-lightYellow "
                value={formData.from_name}
                onChange={handleChange}
                />
            <input type='email' placeholder='email' name='email_id'
                className="focus:outline-none w-full text-white bg-gray-700 rounded-md py-2.5 px-4  text-sm outline-none border-lightYellow " 
                value={formData.email_id}
                onChange={handleChange}
                />
                <input type='text' placeholder='subject' name='subject'
                className="focus:outline-none w-full text-white bg-gray-700 rounded-md py-2.5 px-4  text-sm outline-none border-lightYellow " 
                value={formData.subject}
                onChange={handleChange}
                />
           
            <textarea placeholder='message' rows="6" name='message'
                className="focus:outline-none w-full text-white bg-gray-700 rounded-md px-4 border text-sm pt-2.5 outline-none border-lightYellow "
                
                value={formData.message}
                onChange={handleChange}
                ></textarea>
            
                 <button type='submit' disabled={isSubmitting} className={`relative inline-flex items-center justify-start  px-4 py-3 w-full overflow-hidden font-semibold text-gray-700 transition-all duration-150 ease-in-out rounded  bg-gray-50 group ${ isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <span className="absolute top-0 left-0 w-full  h-1 transition-all duration-150 ease-in-out bg-lightYellow group-hover:h-full"></span>
                        
                        
                        <span className="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-black">Send</span>
                    </button>
        </form>

        </div>
    </div>

</div>

)
}


export default Contact

