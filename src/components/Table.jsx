import React from 'react'
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'

import Cookies from "js-cookie";
import { useDeleteContactMutation, useGetContactsQuery } from '../features/api/contactApi';

const Table = () => {
    const token = Cookies.get("token");
    const {data}= useGetContactsQuery(token);
    const [deleteContact] =useDeleteContactMutation();
    // console.log(deleteContact);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-400">
      <thead className="text-xs uppercase bg-gray-900 text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Phone
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Address
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.contacts?.data.map((contact) => (
           <tr key={contact.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
           <th
             scope="row"
             className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
           >
             {contact.name}
           </th>
           <td className="px-6 py-4">{contact?.phone}</td>
           <td className="px-6 py-4">{contact?.email}</td>
           <td className="px-6 py-4">{contact?.address? contact.address:'-'}</td>
           <td className="px-6 py-4 text-right">
             <div className="flex justify-end items-center">
              <AiFillDelete onClick={() => deleteContact({id: contact?.id,token})} className='text-lg text-red-300 mr-4 cursor-pointer hover:text-red-400' />
              <AiFillEdit className='text-lg text-blue-300 cursor-pointer  hover:text-blue-400 ' />           
             </div>
           </td>
         </tr>
        ) )}
       
      </tbody>
    </table>
  </div>
  
  )
}

export default Table