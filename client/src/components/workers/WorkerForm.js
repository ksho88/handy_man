import { useState, useEffect } from 'react';

const WorkerForm = ({ addWorker, id, complete,  updateWorker, setEdit }) => {
  const [worker, setWorker] = useState({ title: "", complete: false })

  useEffect( () => {
    if (id) {
      setWorker({ id, complete })
      // setWorker({ title: title, complete: complete })
    }
  },[id, complete])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateWorker(id, worker)
      setEdit(false)
    } else {
      addWorker(worker)
    }
    setWorker({ title: "", complete: false })
  }

   return (
    <>
      <form onSubmit={handleSubmit}>
        <input
         type="text"
          name="title"
          value={worker.title}
          onChange={(e) => setWorker({...worker, title: e.target.value })}

          required
          placeholder="Title"
        />
        <input
          type="text"
          name="worker"
          value={worker.complete}
          onChange={(e) => setWorker({...worker, complete: e.target.value})}
          checked={worker.complete}
        />
        <button type="submit">Submit</button>
      </form>
      
    </>
  )
}


export default WorkerForm;
