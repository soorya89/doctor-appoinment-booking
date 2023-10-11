import {useEffect,useState} from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'

const DoctorList = () => {
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
const [doctors, setDoctors] = useState([])
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/admin/doctor-list');
      setDoctors(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, []);
    
  return (
<div>
  <strong className='text-2xl'>Doctors List</strong>
  <div style={{padding:"50px 10%" , backgroundColor:"#ECECEC"}}>
    <DataTable columns={columns} data={doctors} />
    </div>
</div>

    
  )
}

export default DoctorList
