import {useEffect,useState} from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'

const UserList = () => {
const columns = [
  { name: 'No',
   selector:( row,index )=> index+1, 
   sortable:true
  },
  { name: 'Name',
   selector: row => row.name, 
   sortable:true
  },
  { name: 'Email', 
  selector: row => row.email ,
  sortable:true
},
  { name: 'Gender', 
  selector: row => row.gender ,
  sortable:true
   }
 
]

const customStyles = {
  headerRow: {
    style: {
      backgroundColor: '#333', // Header background color
      color: '#fff', // Header text color
      fontWeight: 'bold',
      borderTop: 'none', // Remove the default top border
    },
  },
  headCells: {
    style: {
      fontSize: '14px',
    },
  },
  cells: {
    style: {
      fontSize: '15px',
    },
  },
  pagination: {
    style: {
      borderTop: 'none', // Remove the default top border
    },
  },
};



const [users, setUsers] = useState([])
const [filter,setFilter] = useState([])
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/admin/user-list');
      setUsers(response.data.data);
      setFilter(response.data.data)
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, []);
const handleFilter=(e) =>{
  const newData= filter.filter(row => row.name.toLowerCase().includes(e.target.value.toLowerCase()))
  setUsers(newData)
}
    
  return (
<div className='p-4'>
  <strong className='text-2xl'>User List</strong>
  <div className='py-8 bg-gray-200 m-5'>
    <div className='flex justify-end mb-2 mr-2'>
    
      <input type='text' placeholder='Search...'onChange={handleFilter} className='px-2 py-1' />
    </div>
    <DataTable columns={columns} data={users} customStyles={customStyles} pagination />
  </div>
</div>


    
  )
}

export default UserList
