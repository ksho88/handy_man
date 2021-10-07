import { useState, useEffect } from "react";
import axios from 'axios'
import ServiceList from './ServiceList';
import ServiceForm from './ServiceForm';

const Services = () => {
  const [services, setServices] = useState([])

  useEffect( () => {
    axios.get('/api/services')
      .then( res => {
        setServices(res.data)
        console.logn(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const addService = (service) => {
    axios.post('/api/workers', { service })
  .then( res => {
    setWorkers([...Services, res.data])
  })
  .catch(err => console.log(err))
}


  const updateService = (id, service) => {
    axios.post(`api/services/${id}`, { service })
      .then( res => {
        const updatedServices = services.map( s => {
          if (s.id === id) { 
          return res.data
        }
        return s 
      })
      setServices(updatedServices)
    })
    .catch( err => console.log(err))
  }
  const deleteService = (id) => {
    axios.delete(`/api/workers/{id}`)
    setWorkers(workers.filter( w => w.id !== id))
    .catch(err => console.log(err))
    }

  return(
    <>
    <ServiceForm addSerice={addSevice} />
    <ServiceList
    services={services}
    deleteService={addService}
    updateaService={updateService}
    deleteService={deleteService}
       /> 
    </>
    )
  }

export default Services;