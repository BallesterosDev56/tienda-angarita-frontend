import { Link } from "react-router-dom";
import "./menuCards.css";
import marketplace from '../../../src/assets/images/marketplace.png'
import stock from '../../../src/assets/images/stock.png'

export const MenuCards = () => {
  return (
    <section className="section--menu">

    <div className="card--menu">
        <img src={marketplace} alt="Imagen de ejemplo" className="menu-img"/>
        <div className="menu-content">
            <h2><strong className="menu-title is-size-4">Your Products</strong></h2>
            <Link className="button is-info mt-4" to={'/samuelodanieloadminstore/home_admin/products'}>Ver más</Link>
        </div>
    </div>

    <div className="card--menu">
        <img src={stock } alt="Imagen de ejemplo" className="menu-img"/>
        <div className="menu-content">
            <h2><strong className="menu-title is-size-4">Add a new Product</strong></h2>
            <Link className="button is-info mt-4" to={'/samuelodanieloadminstore/home_admin/new_product'}>Ver más</Link>
        </div>
    </div>

    </section>
  );
};
