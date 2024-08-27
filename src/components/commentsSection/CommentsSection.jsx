import "./commentsSection.css";

export const CommentsSection = ({ commentsData }) => {
  
  return (
    <>
      <h2 className="title has-text-black">Comentarios</h2>
      <div className="box has-background-white">
        {!(commentsData == null)? (
          <ul>
            {commentsData.map((comment, index) => (
              <li key={index} className="notification is-light has-text-black">
                {comment.comment_text}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay comentarios aún.</p>
        )}
      </div>
    </>
  );
};
