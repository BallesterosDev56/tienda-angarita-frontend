import './header.css'
import icon from '../../assets/images/logo.png'

export const Header = ()=> {
    return(
        <header>
            <h1>Tienda Angarita</h1>
            <div className="header--image--container">
                <img src={icon} />
            </div>
        </header>
    )
}