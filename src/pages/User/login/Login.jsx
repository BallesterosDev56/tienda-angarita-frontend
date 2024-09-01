import "./login.css";
import { userNotFoundAlert, incorrectPassword } from "../../../logic/sweetAlert";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fetchLogin } from "../../../logic/fetchLogin";
import { useAuth } from '../../../logic/authContext'; // Importamos el useAuth
import { useAdmin } from "../../../logic/adminContext";

export const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login, isAuthenticated } = useAuth(); // Usamos el contexto de autenticación
    const { isAdmin, isNotAdmin} = useAdmin();

    const manageClick = () => {
        navigate('/tienda-angarita/register');
    }

    const onSubmit = async (data) => {
        try {
            let userData = {
                userName: data.username,
                userPassword: data.password,

            }
            let response = await fetchLogin(userData)
            verifyUser(response.message, response.user)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const verifyUser = (message, user_data) => {

        if (message === 'USER NOT FOUND') {
            Swal.fire(userNotFoundAlert);
        } else if (message === 'WRONG PASSWORD') {
            Swal.fire(incorrectPassword);
        } else if (message === 'SUCCESSFUL LOGIN') {            
            login(); // Establecemos el estado de autenticación
            
            if(isAuthenticated) {
                sessionStorage.setItem('userData', JSON.stringify(user_data));
                navigate('/tienda-angarita/home');

            }
        } else if (message === 'SUCCESSFUL ADMIN LOGIN') {
            login(); // Establecemos el estado de autenticación
            if(isAuthenticated) {
                sessionStorage.setItem('userData', JSON.stringify(user_data));
                if(user_data.user_type === 'Admin') {
                    isAdmin();
                    navigate('/tienda-angarita/home');
                } else {
                    isNotAdmin();
                }
            }
        }
        
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
                </div>

                <div className="login--password">
                    <input {...register("password", {
                        pattern: {
                            value: /^(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-]).*$/,
                            message: 'Password requires one special character'
                        }
                    })} type="password" placeholder="Password" minLength={5} maxLength={20} required />
                    {errors.password && <p className="is-size-6 has-text-black mt-2">{errors.password.message}</p>}
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