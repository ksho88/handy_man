import { useState, useEffect } from "react";
import axios from 'axios';

const Workers = () => {
  const [Workers, setWorkers] = useState([]) 

useEffect = () => {
  const [workers, sertWorkers] = useState([])
  useEffect( () => {
    axios.get(`/api/workers`)
    .then(res => {
      setWorkers(res.date)
    })
    .catch( err => console.log(err))
  },[])

const addWorker = (worker) => {
  axios.post(`api/workers`, { worker})
  .then(res => {
    setWorkers([...Workers, res.data])
  })
  .catch( err => console.log(err))
}
const updateWorker = (id, worker) => {
  axios.put(`/api/todo/${id}`, { worker })
  .then( res => {
    const updateWorkers = workers.map( t => {
      if (t.id == id){
        return res.updateWorker
      }
      return t
    })
    setWorkers(updatedWorkers)
  })
  .CATCH( err => console.log(err))
}

return (
   <>

   </>
  )
 }
}
export default Workers;