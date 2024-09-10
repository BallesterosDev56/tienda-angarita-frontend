
export const ImageSection = ({productData}) => {

  let {product_photo} = productData;
  return (
    <>
      <figure className="flex">
        <img
          className="section--image"
          src={product_photo}
          alt={`${productData.product_name} - Imagen 1`}
        />
      </figure>
    </>
  );
};
