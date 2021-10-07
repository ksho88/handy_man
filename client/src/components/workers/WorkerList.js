import Worker from './Worker';

const WorkerList = ({ workers, deleteWorker, updateWorker }) => {
  return (
    <>
      <ul>
        {
          workers.map((M) => 
            
            (<Worker 
              {...M} 
              deleteWorker={deleteWorker} 
              updateWorker={updateWorker}
            />)
          )
        }
      </ul>
    </>
  )
}

export default WorkerList;