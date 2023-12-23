import React from 'react'
import pic from "../../assets/nurse1.jpeg"
import { CiMenuKebab } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const Card:React.FC = () => {
  return (
   <div className='flex justify-center pt-9'>
         <div className= 'w-[460px] h-[550px] border rounded-[12px]'>
           
           <div className='h-[120px]  bg-[#05052e] rounded-t-[12px] flex justify-end relative'>
            <div className='text-[30px] mt-[10px] text-[gray]'>
              <CiMenuKebab />
            </div>
           </div>

           <div
           className=' mt-[110px] flex items-center justify-center flex-col'
           >
           <div className='flex items-center justify-center absolute top-[120px] '>
              <img 
               className='rounded-full h-[170px] w-[170px] justify-center relative'
              src={pic} />
              <div
              className="bg-[#00C42D] w-[18px] h-[18px] rounded-full absolute top-[10px] ml-[100px] border-[1px]" />
              </div>

              <div className='flex justify-center text-center p-7 '>
              <div className=''>
                <h5 className='text-3xl font-bold leading-tight'>Laura Macfoy</h5>
                <p className='text-[#801D48] font-extrabold'>Support Worker</p>
              </div>
              </div>

              <ul className="flex justify-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="Yellow"
          className="mr-1 h-5 w-5 text-warning ">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="yellow"
          className="mr-1 h-5 w-5 text-warning">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="yellow"
          className="mr-1 h-5 w-5 text-warning">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd" />
        </svg>
      </div>
      <div>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="yellow"
          className="mr-1 h-5 w-5 text-warning">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="gray"
          viewBox="0 0 24 24"
          stroke="gray"
          className="mr-1 h-5 w-5 text-warning">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      </div>
              </ul>

            <div className='flex justify-between pt-3 w-[85%]'>
                    <div className='flex items-center justify-center flex-col'>
                        <div className='w-10 h-10 mr-20 rounded-full bg-[#cfb9c2] flex justify-center items-center text-[#801D48]'>
                        <IoLocation />
                        </div>
                        <div className='flex items-center'>
                            <p className='text-[12px]'>Gloucester,Conventry</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center flex-col'>

                        <div className='w-10 h-10 rounded-full bg-[#cfb9c2] flex justify-center items-center text-[#801D48]'>
                        <MdEmail />
                        </div>
                        <div className='flex items-center'>
                            <p className='text-[12px]'>lauramacfoy@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center flex-col'>

                        <div className='w-10 h-10 rounded-full bg-[#cfb9c2] flex justify-center items-center text-[#801D48]'>
                        <FaPhoneAlt />
                        </div>
                        <div className='flex items-center'>
                            <p className='text-[12px]'>07452635266</p>
                        </div>
                    </div>
            </div>
            <div className='flex justify-center pt-7'>
                <button className='bg-[#00C42D] rounded-[10px] h-9 w-32 text-[white]'>online</button>
            </div>
           </div>

         </div>
        
   </div>
  )
}

export default Card


// </div>
// <div>
//     <div>
//         <div></div>
//         <div></div>
//         <div></div>
//     </div>
//     <div>
//         <p></p>
//         <p></p>
//         <p></p>
//     </div>

//     <div>
//         <button>online</button>
//     </div>
// </div>
// </div>