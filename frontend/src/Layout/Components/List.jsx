import React from 'react'

const List = () => {
  return (
     <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
     <table className="min-w-full divide-y divide-gray-200">
       <thead className="bg-gray-50">
         <tr>
           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Name
           </th>
           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Mobile Number
           </th>
           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Email ID
           </th>
           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Address
           </th>
           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Timing
           </th>
         </tr>
       </thead>
       <tbody className="bg-white divide-y divide-gray-200">
         {/* Replace the following with your dynamic data */}
         <tr>
           <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
           <td className="px-6 py-4 whitespace-nowrap">123-456-7890</td>
           <td className="px-6 py-4 whitespace-nowrap">
             john.doe@example.com
           </td>
           <td className="px-6 py-4 whitespace-nowrap">
             123 Main St, Anytown, USA
           </td>
           <td className="px-6 py-4 whitespace-nowrap">9 AM - 5 PM</td>
         </tr>
         {/* Repeat rows as needed */}
       </tbody>
     </table>
   </div>
  )
}

export default List