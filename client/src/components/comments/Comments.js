import { useState, useEffect } from "react";
import axios from 'axios'
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const Comments = () => {
  const [comments, setComments] = useState([])

  useEffect( () => {
    axios.get('/api/comments/')
      .then( res => {
        setComments(res.data)
        console.log(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const addComment = (comment) => {
    axios.post('/api/comments', { comments })
  .then( res => {
    setComments([...Comments, res.data])
  })
  .catch(err => console.log(err))
}


  const updateComment = (id, comment) => {
    axios.post(`api/worker/$={id}`, { comment })
      .then( res => {
        const updateComments = comments.map( c => {
          if (c.id === id) { 
          return res.data
        }
        return c 
      })
      setComments(updateComments)
    })
    .catch( err => console.log(err))
  }

  const deleteComment = (id) => {
    axios.delete(`/api/commetents/${id}`)
      setComments( comments.filter( c => c.id !== id ))

    .catch(err => console.log(err))
  }

  return(
    <>
    <CommentForm addComment={addComment} />
    <CommentList
    comments={comments}
    deleteWorker={deleteComment}
    updateComment={updateComment}
       /> 
    </>
    )
  }
  
  
  export default Comments;