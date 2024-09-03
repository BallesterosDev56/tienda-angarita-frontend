import './card.css'
import { Link } from 'react-router-dom'


export const Card = ({props})=> {
    
    const {product_name,
        product_description,
        product_price,
        product_photo
    } = props;
    

    return (
        <>
            <div className="card">
                <img src={product_photo} alt={product_name}/>
                <h2>{product_name}</h2>
                <p>{product_description}</p>
                <div className="price">${product_price}</div>
                <Link to={`/tienda-angarita/home/${product_name}`} id='card--button' className='button is-primary'>Más información</Link>
            </div>
        </>
    )
}