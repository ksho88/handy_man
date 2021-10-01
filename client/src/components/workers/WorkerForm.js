import { useState, useEffect } from 'react';

const WorkerForm = ({ addWorker, id, title, complete, updateWorker, setEdit }) => {
  const [worker, setWorker] = useState({ title: "", complete: false })

  useEffect( () => {
    if (id) {
      setWorker({ title, complete })
      // setWorker({ title: title, complete: complete })
    }
  }, [])

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
          name="title"
          value={worker.title}
          onChange={(e) => setWorker({...worker, title: e.target.value })}

          required
          placeholder="Title"
        />
        <input
          type="checkbox"
          name="complete"
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
