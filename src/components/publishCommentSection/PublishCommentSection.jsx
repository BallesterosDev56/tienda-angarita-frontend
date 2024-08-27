import { useForm } from "react-hook-form";
import { messageSent, messageNotSent } from "../../logic/sweetAlert";

export const PublishCommentSection = ({productData, setStatusFetch}) => {
  let codifiedName = productData.product_name.replaceAll(" ", "%20");

  //recuperamos los datos del usuario
  const user_data = JSON.parse(sessionStorage.getItem('userData'));
  
  const {register, handleSubmit, reset} = useForm();

  const onSubmit = async(userData)=> {
    try {
      let response = await fetch(`http://localhost:3000/tienda-angarita/home/${codifiedName}`,
        {
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            text:userData.message,
            userID: user_data.id,
            productID: productData.id,
          }),
        }
  
      );
      let data = await response.json();
      if (data.message === `SUCCESS COMMENT IN THE PRODUCT ${productData.product_name}`) {
        Swal.fire(messageSent);
        setTimeout(() => {
          reset();
          setStatusFetch((prev)=>!prev);
        }, 3000);

      } else {
        Swal.fire(messageNotSent);
        reset();

      }
      
    } catch (error) {
        console.error(error);
      
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="textarea--container">
          <textarea {...register('message')}
            placeholder="Escribe tu comentario aquí..."
            className="textarea--form has-background-light"
            rows="4"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="button is-dark">
            Agregar comentario
          </button>
        </div>
      </form>
    </>
  );
};
