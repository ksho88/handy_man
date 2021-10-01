import { useState, useEffect } from "react";
import WorkerList from './WorkerList';
import WorkerForm from './WorkerForm';

const Worker = ({id, title, complete, deleteWorker, updateWorker }) => {
  const [editing, setEdit] = useState(false)

  return ( 
    <>
    <li>
      {title}
      <br/>
      complete: { complete ? "Yes" : "No"  }
      {
        editing ? 
        <>
        <WorkerForm
        id={id}
        title={title}
        complete={complete}
        updateWorker={updateWorker}
        setEdit={setEdit}
        />
    </>
    :
       <button onClick={() => setEdit(true)}Edit>Edit</button>

      }
      <button onClick={() => deleteWorker(id)}>Delete</button>
    </li>
    {/* <Comments workerId={id} /> */}
    </>
  )
}


export default Worker;