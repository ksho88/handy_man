import { useState, useEffect } from "react";
import axios from 'axios'
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const Comments = ({ serviceId }) => {
  const [comments, setComments] = useState([])

  useEffect( () => {
    axios.get(`/api/services/${serviceId}/comments`)
      .then( res => {
        setServices(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const addComment = (comment) => {
    axios.post(`/api/comments/${serviceId}/comments`, {comment })
    .then(res => {
      serServices([...services, res.data])
    })
    .catch( err => console.log(err))
  }


  const updateComment = (id, service) => {
    axios.post(`api/worker/${workerId}/service/${id}`, { comment })
      .then( res => {
        let updateComment = comments.map( c => {
          if (c.id === id) { 
          return res.data
        }
        return c 
      })
      setServices(updatedComments)
    })
    .catch( err => console.log(err))
  }
  const deleteService = (id) => {
    axios.delete(`/api/workers/${workerId}/services/${id}`)
    then( res => {
      setComments( comments.filter( c => c.id !== id ))
    })
    .catch(err => console.log(err))
  }
  return (
    <>
    
    </>
  )
}

export default Comments;