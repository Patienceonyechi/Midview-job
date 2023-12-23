import React, { useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import SheetData from '../../Data.json'
import { MdMoreHoriz } from "react-icons/md";


interface Data {
  Shift: string;
  'Employee Name': string;
  Status: string;
  Date: string;
  'Work location': string;
  'Phone No': string;
}



const Timesheet: React.FC = () => {
  const [data, setData] = useState(SheetData);

 

  return (
    <div className='pt-14 sm:mx-auto sm:flex-wrap sm:w-[100%] sm:ml-2'>
    <div className='ml-[150px]'>
      <div>
        <h1>Timesheet</h1>
        <p className='text-[12px]'>Manage all employee work time</p>
      </div>
    </div>
    <div className='ml-[160px] pt-5'>
      <div className='flex justify-between'>
        <div className='mt-5'>
          <h2>Employee Shifts</h2>
        </div>
        <div className='text-[20px] mt-[10px] text-[gray] outline rounded-[50px] mr-8 mb-5'>
          <CiMenuKebab />
        </div>
      </div>
      <div className='pt-3 flex gap-3 mr-6 '>
        <div className='overflow-hidden border-2 bg-[#F5F4FA] border-solid h-9 w-[1180px] flex'>
          <input
            type='text'
            className='bg-[#F5F4FA] outline-none w-[150px] ml-[5px]'
            placeholder='Search by ID...'
          />
          <div className='overflow-hidden border-2 bg-[#0f0fcf] h-9 w-[300px] flex ml-[770px]'>
            <input
              type='text'
              className='bg-[#0f0fcf] outline-none w-[50px] ml-[5px]'
              placeholder='Search'
            />
          </div>
        </div>
      </div>
    </div>

    

<div className="relative ml-[160px] w-[87%] pt-5 overflow-x-auto shadow-md ">
    <table className="w-full text-sm text-left rtl:text-right text-black border">
        <thead className="text-xs text-black bg-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                Shift
                </th>
                <th scope="col" className="px-6 py-3">
                    Employee Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Work Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Num
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
           
                {
                  data?.map((props)=>(
                    <tr className="bg-white border">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                  {props?.Shift}
                </th>
                <td className="px-6 py-4">
                    {props?.['Employee Name']}
                </td>
                  <td className="px-6 py-4 flex gap-2">
                    <div className=' h-2.5 w-2.5  rounded-full bg-[yellow] mt-2'></div>
                      {props?.Status}
                  </td>
               
                <td className="px-6 py-4">
                  {props?.Date}
                </td>
                <td className="px-6 py-4">
                    {props?.['Work location']}
                </td>
                <td className="px-6 py-4">
                    {props?.['Phone No']}
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium   hover:underline"><MdMoreHoriz /></a>
                </td>
            </tr>
              
                  ))
                }
         
        </tbody>
    </table>
</div>
    </div>
  );
};

export default Timesheet;

//this is for an empty array.(no json file for this code.)

// import React, { useState } from 'react';
// import { CiMenuKebab } from 'react-icons/ci';
// import { MdMoreHoriz } from "react-icons/md";


// interface Data {
//   Shift: string;
//   'Employee Name': string;
//   Status: string;
//   Date: string;
//   'Work location': string;
//   'Phone No': string;
// }



// const Timesheet:React.FC = () => {
//   const [data, setData] = useState([]);
//   return (
//     <div className='pt-14 sm:mx-auto sm:flex-wrap sm:w-[100%] sm:ml-2'>
//     <div className=''>
//       <div>
//         <h1>Timesheet</h1>
//         <p className='text-[12px]'>Manage all employee work time</p>
//       </div>
//     </div>
//     <div className='pt-5'>
//       <div className='flex justify-between'>
//         <div className='mt-5'>
//           <h2>Employee Shifts</h2>
//         </div>
//         <div className='text-[20px] mt-[10px] text-[gray] outline rounded-[50px] mr-8 mb-5'>
//           <CiMenuKebab />
//         </div>
//       </div>
//       <div className='pt-3 flex gap-3 mr-6 '>
//         <div className='overflow-hidden border-2 bg-[#F5F4FA] border-solid h-9 w-[87%] flex'>
//           <input
//             type='text'
//             className='bg-[#F5F4FA] outline-none w-[150px] ml-[5px]'
//             placeholder='Search by ID...'
//           />
//           <div className='overflow-hidden border-2 bg-[#0f0fcf] h-9 w-[300px] flex ml-[770px]'>
//             <input
//               type='text'
//               className='bg-[#0f0fcf] outline-none w-[50px] ml-[5px]'
//               placeholder='Search'
//             />
//           </div>
//         </div>
//       </div>
//     </div>

    

// <div className="relative w-[85.4%] pt-5 overflow-x-auto  ">
//     <table className="w-full text-sm text-left rtl:text-right text-black border">
//         <thead className="text-xs text-black bg-white">
//             <tr>
//                 <th scope="col" className="px-6 py-3">
//                 Shift
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Employee Name
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Status
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Date
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Work Location
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Phone Num
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     <span className="sr-only">Edit</span>
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
           
//                 {
//                   data?.map((props:any)=>(
//                     <tr className="bg-white border">
//                 <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
//                   {props?.Shift}
//                 </th>
//                 <td className="px-6 py-4">
//                     {props?.['Employee Name']}
//                 </td>
//                   <td className="px-6 py-4 flex gap-2">
//                     <div className=' h-2.5 w-2.5  rounded-full bg-[yellow] mt-2'></div>
//                       {props?.Status}
//                   </td>
               
//                 <td className="px-6 py-4">
//                   {props?.Date}
//                 </td>
//                 <td className="px-6 py-4">
//                     {props?.['Work location']}
//                 </td>
//                 <td className="px-6 py-4">
//                     {props?.['Phone No']}
//                 </td>
//                 <td className="px-6 py-4 text-right">
//                     <a href="#" className="font-medium   hover:underline"><MdMoreHoriz /></a>
//                 </td>
//             </tr>
              
//                   ))
//                 }
         
//         </tbody>
//     </table>
// </div>
//     </div>
//   );
// };

// export default Timesheet
