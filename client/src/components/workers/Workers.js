import { useState, useEffect } from "react";
import axios from 'axios'
import WorkerList from './WorkerList';
import WorkerForm from './WorkerForm';

const Workers = () => {
  const[workers, setWorkers] = useState([])

  useEffect( () => {
    axios.get('/api/workers')
    .then( res => {
      setWorkers(res.data)
     console.log(res.data)
    })
    .catch( err => console.log(err))
  }, [])

  const addWorker = (worker) => {
    axios.post('/api/workers', { worker })
  .then( res => {
    setWorkers([...Workers, res.data])
  })
  .catch(err => console.log(err))
}

const updateWorker = (id, worker) => {
  axios.put(`/api/workers/${id}`, { worker })
  .then( res => {
    const updatedWorkers = workers.map( m => {
      if (m.id === id) {
        return res.data
      }
      return m
    })
    setWorkers(updatedWorkers)
  })
  .catch( err => console.log(err))
}

const deleteWorker = (id) => {
axios.delete(`/api/workers/{id}`)
setWorkers(workers.filter( m => m.id !== id))
.catch(err => console.log(err))
}

return(
  <>
  <WorkerForm addWorker={addWorker} />
  <WorkerList
  workers={workers}
  deleteWorker={deleteWorker}
  updateWorker={updateWorker}
     /> 
  </>
  )
}


export default Workers;