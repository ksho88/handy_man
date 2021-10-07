import { useState } from 'react';
import ServiceFrom from './ServiceForm';
import Comments from '../comments/Comments';

const Service = ({ id, job_title, desc, category, deleteService, updateService }) => {
  const [edit, setEdit] = useState(false)

  return (
    <>
      <li>
        {job_title}
        <br />
        
          <>
            <ServiceFrom
             id={id}
             job_title={job_title}
             category={category}
              desc={desc}
              updateService={updateService}
              setEdit={setEdit}
            />
          </>
          <button onClick={() => setEdit(true)}>Edit</button>
        
        <button onClick={() => deleteService(true)}>Delete</button>
      </li>
      <Comments serviceId={id} />
    </>
  )
}

export default Service;