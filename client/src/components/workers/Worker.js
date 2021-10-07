import { useState } from "react";
import WorkerForm from './WorkerForm';
// import Services from'../services/Service';
// import Comments from '../comments/Comments'

const Worker = ({ id, first_name, last_name, phone, email, specialty, deleteWorker, updateWorker }) => {
  const [edit, setEdit] = useState(false)

  return ( 
    <>
    <a href={`/workers/${id}/services`}>Services</a>
    <li>
      {first_name}
      <br/>
      {last_name}
      <br/>
      {specialty}
      <br/>
      {email}
      <br/>
      {phone}
      <br/>
        <>
        <WorkerForm
        id={id}
        first_name={first_name}
        last_name={last_name}
        phone={phone}
        email={email}
        specialty={specialty}
        updateWorker={updateWorker}
        setEdit={setEdit}
        />
    </>
    :
       <button onClick={() => setEdit(true)}Edit>Edit</button>

    
      <button onClick={() => deleteWorker(true)}>Delete</button>
    </li>
    {/* <Comments workerId={id} /> */}
    </>
  )
}


export default Worker;