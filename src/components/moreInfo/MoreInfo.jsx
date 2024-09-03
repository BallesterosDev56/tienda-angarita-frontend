import "./moreInfo.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ImageSection } from "../imageSection/imageSection";
import { DescriptionSection } from "../descriptionSection/DescriptionSection";
import { CommentsSection } from "../commentsSection/CommentsSection";
import { PublishCommentSection } from "../publishCommentSection/PublishCommentSection"
import { Header } from "../header/header";

export const MoreInfo = () => {
  const [statusFetch, setStatusFetch] = useState(true);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  let codifiedName = params.name_product.replaceAll(" ", "%20");

  useEffect(() => {

    async function fetchProduct(codifiedName) {
      let response = await fetch(
        `http://localhost:3000/tienda-angarita/home/${codifiedName}`

      );
      let data = await response.json();
      return data;

    }

    fetchProduct(codifiedName)
      .then((res) => {
        setProductData(res);
        setLoading(false);

      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false);

      });

  }, [statusFetch]);

  if (loading) {
    return <p>Loading...</p>;
    
  }
  

  return (
    <>
      {productData && productData.product ? (
        <>
          <Header></Header>
          <section className="section--more--info">
            
          <div className="image--section">
              <ImageSection productData={productData.product}></ImageSection>           
          </div>

          <div className="description--section">
              <DescriptionSection productData={productData.product}></DescriptionSection>            
          </div>
          
          <div className="comments--section">
              <CommentsSection commentsData={productData.comments}></CommentsSection>         
          </div>

          <div className="publish--comments--section">
                <PublishCommentSection productData={productData.product} setStatusFetch={setStatusFetch}></PublishCommentSection>                
          </div>

          </section>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </>
  );
};
