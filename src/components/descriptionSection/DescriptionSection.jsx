import { Link } from "react-router-dom";
import "./descriptionSection.css";

export const DescriptionSection = ({ productData }) => {
  return (
    <>
      <h1 className="title is-size-1 has-text-black">
        {productData.product_name}
      </h1>
      <p className="is-italic has-text-primary-00">{productData.product_description}</p>
      <h3 className="has-text-black is-size-1 mt-6"><strong className="has-text-black">$ </strong>{productData.product_price}</h3>
      <Link to={'/tienda-angarita/home'} id="buy--button" className="button is-dark is-medium">Continuar comprando 🔙</Link>
    </>
  );
};
