import './header.css'
import userImage from '../../assets/images/user.png'

export const Header = ()=> {
    const user_data = JSON.parse(sessionStorage.getItem('userData'));
    
    return(
        <header>
            <h1 className='is-size-2 has-text-weight-bold'>Angarita's Store</h1>
            <div className="header--image--container">
                <img className='user--image' src={userImage} />
                {user_data && <p className='is-size-5'>{user_data.user_name}</p>}
            </div>
        </header>
    )
}