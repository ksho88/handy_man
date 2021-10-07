import { useState } from 'react';
import CommentForm from './CommentForm';


const Comment = ({ id, title, body, author, updateComment, deleteComment}) => {
  const [edit, setEdit] = useState(false)

  return (
    <>
      <li>
        {title}
        <br />
        

          <>
            <CommentForm
             id={id}
             title={title}
             body={body}
             author={author} 
             updateComment={updateComment}
             setEdit={setEdit}
            />
          </>
          
          <button onClick={() => setEdit(true)}>Edit</button>
    
        <button onClick={() => deleteComment(id)}>Delete</button>
      </li>
    </>
  )
}

export default Comment;
