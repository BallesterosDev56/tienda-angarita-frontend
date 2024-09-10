import "./commentsSection.css";
import sadImage from '../../assets/images/sad-white.png'
import happyImage from '../../assets/images/happy.png'

export const CommentsSection = ({ commentsData }) => {

  return (
    <>
      <h2 className="title has-text-black">Comentarios</h2>
      <div className="box has-background-white">
        {!(commentsData == null)? (
          <ul>
            {commentsData.map((comment, index) => (
              <li id="li--comment" key={index} className="notification is-light has-text-black">
                {comment.comment_text}
                {comment.comment_type ? 
                  <img className="image--comment" src={happyImage} alt="Happy" /> : 
                  <img className="image--comment" src={sadImage} alt="Sad" />
                }
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
