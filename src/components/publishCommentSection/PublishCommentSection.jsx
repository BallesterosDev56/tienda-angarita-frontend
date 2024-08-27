import { useForm } from "react-hook-form";

export const PublishCommentSection = ({productData}) => {
  let codifiedName = productData.product_name.replaceAll(" ", "%20");

  //recuperamos los datos del usuario
  const user_data = JSON.parse(localStorage.getItem('userData'));  
  
  const {register, handleSubmit, reset} = useForm();

  const onSubmit = async(userData)=> {
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
    console.log(data);

    reset();
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
