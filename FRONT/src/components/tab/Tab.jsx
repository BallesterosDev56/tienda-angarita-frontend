import { useState } from 'react';
import menuImg from '../../assets/images/menu.png'
import { Link } from 'react-router-dom';

export const Tab = () => {
    let show = "dropdown is-active"
    let ocult = "dropdown"

    const [classState, setClassState] = useState(false);

  return (
    <div className='dropdown--container'>
        <div className={classState? show:ocult}>
            <div className="dropdown-trigger">
                <button onClick={()=>setClassState((prev)=>!prev)} className="button has-background-light has-text-black" aria-haspopup="true" aria-controls="dropdown-menu">
                <img className='menu--img mr-3' src={menuImg} alt="menu" />
                <span className="is-size-4">Menu</span>
                <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content has-background-light has-text-black">
                    <Link to={'/samuelodanieloadminstore/home_admin/products'} className="dropdown-item has-background-light has-text-black">Your Products</Link>
                    <hr className="dropdown-divider has-background-grey" />
                    <Link to={'/samuelodanieloadminstore/home_admin/new_product'} className="dropdown-item has-background-light has-text-black">Add a new Product</Link>
                    <hr className="dropdown-divider has-background-grey" />
                    <Link to={'/samuelodanieloadminstore/home_admin'} className="dropdown-item has-background-light has-text-black">HOME <span className='ml-1'>🏠</span></Link>
                </div>
            </div>
        </div>
    </div>
  );
};
