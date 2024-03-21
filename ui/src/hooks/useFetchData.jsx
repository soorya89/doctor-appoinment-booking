import { useEffect, useState } from 'react'
import {token} from '../config'

const useFetchData = (url) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=>{

            setLoading(true)
          try{
            const res= await fetch(url,{
                headers:{ authorization: `Bearer ${token}` },
            })

            const  result =await res.json()
            if(!res.ok){
                throw new Error(result.message + '🤢')
            }
            setData(result.data)
            setLoading(false)
          }catch(err){
            setError(err.message)
            setLoading(false)
            
          }
        }
        fetchData()
    },[url, token])
  return {
    data,loading,error
  }
}

export default useFetchData
