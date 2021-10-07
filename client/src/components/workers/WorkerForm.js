import { useState, useEffect } from 'react';

const WorkerForm = ({ id,addWorker, first_name, last_name, email, phone, specialty, updateWorker, setEdit }) => {
  const [worker, setWorker] = useState({ first_name: "",last_name: "", email: "", phone: "", specialty: "" })

  useEffect( () => {
    if (id) {
      setWorker({ first_name,last_name, email, phone, specialty })
      // setWorker({ title: title, complete: complete })
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateWorker(id, worker)
      setEdit(false)
    } else {
      addWorker(worker)
    }
    setWorker({ first_name: "",last_name:"", phone:"", email:"", specialty:"" })
  }

   return (
    <>
    <br/>
    <br/>
    <br/>
      <form onSubmit={handleSubmit}>
        <input
          name="first_name"
          value={worker.first_name}
          onChange={(e) => setWorker({...worker, first_name: e.target.value })}
          required
          placeholder="first_name"
        />
        <input
        name="last_name"
        value={worker.last_name}
        onChange={(e) => setWorker({...worker, last_name: e.target.value})}
        required
        placeholder="last_name"
        />
        <input
        name="email"
        value={worker.email}
        onChange={(e) => setWorker({...worker, email: e.target.value})}
        required
                placeholder="email"
        />
        <input
          name="specialty"
          value={worker.specialty}
          onChange={(e) => setWorker({...worker, specialty: e.target.value})}
          required
          placeholder="email"
        />
        <button type="submit">Submit</button>
        <button tyep="Edit">Edit</button>
        <button type="Delete">Delete</button>
      </form>
      
    </>
  )
}


export default WorkerForm;
