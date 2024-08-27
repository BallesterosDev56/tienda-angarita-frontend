import './header.css'
import icon from '../../assets/images/logo.png'
import userImage from '../../assets/images/user.png'

export const Header = ()=> {
    const user_data = JSON.parse(sessionStorage.getItem('userData'));
    
    return(
        <header>
            <h1 className='is-size-2 has-text-weight-bold'>Tienda Angarita</h1>
            <div className="header--image--container">
                <p className='is-size-5'>{user_data.user_name}</p>
                <img className='user--image' src={userImage} />
            </div>
        </header>
    )
}