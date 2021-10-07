import Service from './Service';

const ServiceList = ({ services, deleteService, updateService }) => {
  return (
    <>
      <ul>
        {
          services.map( s =>
            <Comment
            {...c}
            deleteService={deleteService}
            updateService={deleteService}
            />
          )  
        }
      </ul>
    </>
  )
}

export default ServiceList; 