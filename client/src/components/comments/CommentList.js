import Comment from './Comment'

const CommentList = ({ comments, deleteComment, updateComment }) => {
  return (
    <>
      <ul>
        {
          services.map( c =>
            <Comment
            {...c}
            deleteComment={deleteComment}
            updateComment={deleteComment}
            />
          ) 
        }
      </ul>
    </>
  )
}

export default CommentList; 