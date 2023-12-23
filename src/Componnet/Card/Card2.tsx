import React from 'react'
import pic from "../../assets/nurse2.jpeg"
import { TiCameraOutline } from "react-icons/ti";

const Card2:React.FC = () => {
  return (
    <div>
        <div className='pt-[80px] ml-9'>
           <div className='h-[150px] w-[98%] bg-[#05052e] relative'>
           </div>
            <div className='h-[170px] w-[98%] border '>
               <div className='flex justify-between'>
                <div className='flex relative bottom-[30px]'>
                    <img 
                    className='rounded-full h-[170px] w-[170px] justify-center ml-[20px] object-cover'
                    src={pic} />
                    <div className='rounded-full bg-[#801D48] w-[40px] h-[40px] top-[90px] ml-[160px] absolute'>
                      <div className='flex justify-center mt-2 text-[20px] text-[white]'>
                      <TiCameraOutline />
                      </div>
                    </div>
               
                <div className=' pt-10 ml-9'>
                    <h5 className='text-3xl font-bold leading-tight'>Laura Macfoy</h5>
                    <p className='text-[#801D48] font-extrabold'>Support Worker</p>
                    <div className='flex gap-2 pt-2'>
                        <div className='rounded-full bg-[#00C42D] w-[13px] h-[13px]'></div>
                        <p className='text-[#00C42D] text-[12px]'>Active</p>
                    </div>
                </div>
                </div>
                    <div className=' h-[120px] w-[300px] mr-7 mt-6 pt-2 bg-[#faf7f7]'>
                        <div className='flex justify-between ml-4 mr-4 '>
                            <p>Availability</p>
                            <p>Update</p>
                        </div>
                        
                            <div className='flex justify-center items-center gap-4 pt-4'>
                                <p className='text-[red] text-[14px]'>Sun</p>
                                <p className='text-[red] text-[14px]'>Mon</p>
                                <p className='text-[red] text-[14px] border w-7'>Tue</p>
                                <p className='text-[red] text-[14px]'>Wed</p>
                                <p className='text-[red] text-[14px]'>Thu</p>
                                <p className='text-[red] text-[14px]'>Fri</p>
                                <p className='text-[red] text-[14px]'>Sat</p>
                            </div>
                        
                        <div className='flex justify-between ml-3 mr-3 pt-3'>
                            <p className='text-[12px]'>Status:Available</p>
                            <p className='text-[red] text-[12px]'>See more</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Card2



