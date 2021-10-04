import { useState, } from "react";
import React from "react";
import WorkerForm from './WorkerForm';
// import comments from

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