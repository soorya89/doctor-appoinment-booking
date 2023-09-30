import {useEffect,useState} from 'react'


const UserList = () => {
    const [users,setUsers] = useState([])
    
  return (
<div className='m-4 bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex'>
  <strong className='text-2xl'>User List</strong>
  <div className='mt-4 '>
    <table className=' w-full m-4'>
      <thead className='border-b bg-neutral-50 font-medium  dark:text-neutral-800'>
        <tr className='bg-gray'>
          <th className='px-4 py-2 '>No</th>
          <th className='px-4 py-2 '>Name</th>
          <th className='px-4 py-2 '>Gender</th>
          <th className='px-4 py-2 '>Email</th>
          <th className='px-4 py-2 '>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='px-4 py-2 '>1</td>
          <td className='px-4 py-2 '>John Doe</td>
          <td className='px-4 py-2 '>Male</td>
          <td className='px-4 py-2 '>john@example.com</td>
          <td className='px-4 py-2 '><button className='bg-primaryColor  rounded-sm px-2'>Block</button></td>
        </tr>
        {/* Add more rows here */}
      </tbody>
    </table>
  </div>
</div>

    
  )
}

export default UserList
