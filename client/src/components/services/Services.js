import { useState, useEffect } from "react";
import axios from 'axios'
import ServiceList from './ServiceList';
import ServiceForm from './ServiceForm';

const Services = ({ workerId }) => {
  const [services, setServices] = useState([])

  useEffect( () => {
    axios.get(`/api/workers/${workerId}/services`)
      .then( res => {
        setServices(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const addService = (service) => {
    axios.post(`/api/workers/${workerId}/services`, {service })
    .then(res => {
      serServices([...services, res.data])
    })
    .catch( err => console.log(err))
  }


  const updateService = (id, service) => {
    axios.post(`api/worker/${workerId}/service/${id}`, { service })
      .then( res => {
        let updatedServices = services.map( c => {
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
    axios.delete(`/api/workers/${workerId}/services/${id}`)
    then( res => {
      setServices( services.filter( s => s.id !== id ))
    })
    .catch(err => console.log(err))
  }
  return (
    <>
    
    </>
  )
}

export default Services;