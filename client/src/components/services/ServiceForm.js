import {useState, useEffect } from 'react';

const ServiceFrom = ({ addService, id, job_title, complete, desc, updateService, setEdit}) => {
  const [service, setService] = useState({ job_title: "", desc: "", category: "" })

  useEffect( () => {
    if(id) {
      setService({job_title,desc,complete})
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateService(id,service)
      setEdit(false)
    }else{
      addService(service)
    }
    setService({job_title: "", desc: "", complete: false })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
        name = "service"
        value={service.job_title}
        onChange={(e) => setService({...service, job_title: e.target.value })}

        required 
        placeholder="Service title"
        />
        <input
        name="category"
        value={service.category}
        onChange={(e) => setService ({...service, category: e.target.value })}
        />
        <input
          type="text"
          name="description" 
          value ={service.desc}

          />
          <button type="Submit">Submit</button>

      </form>
    </>
  )
}

export default ServiceFrom;