import { useState,  useEffect  } from "react";
import axios from 'axios';

const Workers = () => { 
const [workers, setWorkers] = useState([])
useEffect( () => {
  axios.get('/api/workers')
.then()
setWorkers(res.data)
})
.catch(err => console.log(err))


const addWorkers = (worker) => {
  axios.post('/api/workers',{worker})
  .then( res => {
    setWorkers([...workers, resdata])
  })
  .catch(err => console.log(err))
}

const updatedWorkers = (id, worker) => {
  axios.put('/api/workers/${id)', {worker})
  .then(res => {
    const updatedWorkers = workers.map( m => {
      if (m.id == id) {
        return res.data
      }
      return m
    })
    setWorkers(updatedWorkers)
  })
    .catch(err => console.log(err))
  }
}

  export default Workers;