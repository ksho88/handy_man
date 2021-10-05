import { useState, useEffect } from 'react';
import  axios from 'axios';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comment = ({ id, title, body, author }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <li>
        {title}
        <br />
        {
          editing ?
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
          :
          <button onClick={() => setEdit(true)}>Edit</button>
        }
        <button onClick={() => deleteComment(id)}>Delete</button>
      </li>
    </>
  )
}

export default Comment;
