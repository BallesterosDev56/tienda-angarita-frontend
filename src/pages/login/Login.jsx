import { useNavigate } from "react-router-dom";
import "./login.css";
import { useForm } from "react-hook-form";
import { fetchLogin } from "../../logic/fetchLogin";
import { useAuth } from '../../logic/authContext'; // Importamos el useAuth

export const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useAuth(); // Usamos el contexto de autenticación

    const manageClick = () => {
        navigate('/tienda-angarita/register');
    }

    const onSubmit = async (data) => {
        try {
            let userData = {
                userName: data.username,
                userPassword: data.password
            }
    
            let response = await fetchLogin(userData)
    
            //guardamos en el local storage los datos del usuario:
            localStorage.setItem('userData', JSON.stringify(response.user));
            verifyUser(response.message)
            
        } catch (error) {
            console.log(error);
            
        }  
    }

    const verifyUser = (message) => {
        if (message === 'USER NOT FOUND') {
            alert('The user does not exist')
        } else if (message === 'WRONG PASSWORD') {
            alert('The password is incorrect')
        } else if (message === 'SUCCESSFUL LOGIN') {
            login(); // Establecemos el estado de autenticación
            navigate('/tienda-angarita/home');
        }
        console.log(message);
        
    }

    return (
        <section id="section">
            <form onSubmit={handleSubmit(onSubmit)} className="form--container">
                <div className="login--title">
                    <div className="line"></div>
                    <h1>LOGIN</h1>
                </div>

                <div className="login--username">
                    <input {...register("username")} type="text" placeholder="Username" minLength={5} maxLength={20} required />
                    {errors.username && <p id="login--error--username" className="has-text-danger-dark is-size-5">{errors.username.message}</p>}
                </div>

                <div className="login--password">
                    <input {...register("password", {
                        pattern: {
                            value: /^(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-]).*$/,
                            message: 'The password requires at least one special character'
                        }
                    })} type="password" placeholder="Password" minLength={5} maxLength={20} required />
                    {errors.password && <p id="login--error--password" className="has-text-danger is-size-5">{errors.password.message}</p>}
                </div>

                <div className="login--button">
                    <button id="btn--login" className="button is-info" type="submit">Log in</button>
                    
                    <div className="container--register--link">
                        <a onClick={manageClick} id="register--link" className="has-text-dark">Register</a>
                    </div>
                </div>
            </form>
        </section>
    );
};