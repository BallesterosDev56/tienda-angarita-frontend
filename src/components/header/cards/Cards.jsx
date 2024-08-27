import { Card } from "../card/card";
import "./cards.css";
import { fetchProducts } from '../../../logic/fetchProducts'
import { useEffect, useState } from 'react'


export const Cards = () => {

  const [productsData, setProductsData] = useState([]);

  useEffect(()=>{
      fetchProducts().then((result) => {
          setProductsData(result);
          
      }).catch((err) => {
          console.log(err);
          
      });
  }, []);
  
  if(productsData.length > 1) {
    console.log('PRODUCTS FETCHED SUCCESFULLY');
  } else{
    console.error('AN ERROR OCURRED WHILE FETCHING THE PRODUCTS');
    
  }

  return (
    <section className="section--cards--container">
      {productsData.map((elementProps, index)=>{
          return(
            <div key={index} className="card--container">
              <Card props={elementProps} />
            </div>
          ) 
        })}

    </section>
  );
};
