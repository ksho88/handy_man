import Worker from './Worker';

const WorkerList = ({workers, deleteWorker}) => {
  return( 
    <>
    <ul>
      {
        workers.map( m =>
          <Worker {...m} deleteWorker={deleteWorker}/>
        )
      }
    </ul>
    </>
  )
}

export default WorkerList;