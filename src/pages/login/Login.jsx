import { useNavigate } from "react-router-dom";
import "./login.css";
import { useForm } from "react-hook-form";
import { fetchLogin } from "../../logic/fetchLogin";

export const Login = () => {
    //instancias:
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors} } = useForm();

    //functions:
    const manageClick = () => {
        navigate('/tienda-angarita/register');
    }
    const onSubmit = async (data)=>{
        let userData = {
            userName: data.username,
            userPassword: data.password
        }
        console.log(userData);
        
        await fetchLogin(userData)
    }


    return (
        <section id="section">
            <form onSubmit={handleSubmit(onSubmit)} className="form--container">
                <div className="login--title">
                    <div className="line"></div>
                    <h1>LOGIN</h1>
                </div>

                <div className="login--username">
                    <input {...register("username", {
                        required: 'Username is required',
                        minLength: {
                            value: 4,
                            message: 'The minimum length must be at least 5 characters!'
                        },
                        maxLength: {
                            value: 20,
                            message: 'The maximum length is 20 characters!'
                        }
                    })} type="text" placeholder="Username" />
                    <p className="has-text-danger-dark"></p>
                </div>

                <div className="login--password">
                    <input {...register("password", {
                        required: 'Password is required',
                        minLength: {
                            vale: 8,
                            message: 'The minimum length must be at least 5 characters!'
                        },
                        maxLength: {
                            value: 20,
                            message: 'The maximum length is 20 characters!'
                        },
                        pattern: {
                            value: /^(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-]).*$/,
                            message: 'The password requires at least one special character'
                        }
                    })} type="password" placeholder="Password" />
                    <p className="has-text-danger-dark"></p>
                </div>

                <div className="login--button">
                    <button id="btn--login" className="button is-info" type="submit">Log in</button>
                    
                    <div className="container--register--link">
                        <a onClick={manageClick} id="register--link" className="has-text-dark ">Register</a>
                    </div>
                </div>
            </form>
        </section>
    );
};
