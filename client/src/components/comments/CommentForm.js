import {useEffect, useState} from 'react';

const CommentForm = ({ addComment, id, title, body, author, updateComment, setEdit}) => {
  const [comment, setComment] = useState({ title: "", body: "", author: "" })

  useEffect( () => {
    if(id) {
      setComment({title, body, author})
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateComment(id,comment)
      setEdit(false)
    }else{
      addComment(comment)
    }
    setComment({title: "", body: "", author: "" })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
        name = "comment"
        value={comment.title}
        onChange={(e) => setService({...comment, title: e.target.value })}

        required 
        placeholder="type comment here"
        />
        <input
        name="category"
        value={service.category}
        onChange={(e) => setComment ({...author, author: e.target.value })}
        />
        <input
          name="author" 
          value ={comment.author}

          />

      </form>
    </>
  )
}

export default CommentForm;

