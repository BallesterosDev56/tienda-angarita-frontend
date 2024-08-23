import { useNavigate } from "react-router-dom";
import "./register.css";
import { useForm } from "react-hook-form";
import { fetchRegister } from "../../logic/fetchRegister";

export const Register = () => {
    
    //instancias:
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors} } = useForm();

    //functions:
    const manageClick = () => {
        navigate('/tienda-angarita/login');
    }

    const onSubmit = async (data)=>{
        let userData = {
            userName: data.username,
            userPassword: data.password
        }

        let response = await fetchRegister(userData)
        manageResponse(response.message);
    }

    const manageResponse = (message)=> {
        if(message === 'SUCCESSFULLY CREATED USER') {
            alert('The user has been created succesfully');
            navigate('/tienda-angarita/login');
        } else if(message === 'INTERNAL SERVER ERROR') {
            alert('The username is already taken');
        }
    }


    return (
        <section id="section">
            <form onSubmit={handleSubmit(onSubmit)} className="form--container">
                <div className="register--title">
                    <div className="line"></div>
                    <h1>REGISTER</h1>
                </div>

                <div className="register--username">
                    <input {...register("username", {
                        required: 'Username is required',
                        minLength: {
                            value: 5,
                            message: 'The minimum length must be at least 5 characters!'
                        },
                        maxLength: {
                            value: 20,
                            message: 'The maximum length is 20 characters!'
                        }
                    })} type="text" placeholder="Username" />
                    {errors.username && <p id="register--error--username" className="has-text-danger-dark">{errors.username.message}</p>}
                </div>

                <div className="register--password">
                    <input {...register("password", {
                        required: 'Password is required',
                        minLength: {
                            value: 5,
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
                    {errors.password && <p id="register--error--password" className="has-text-danger-dark">{errors.password.message}</p>}
                </div>

                <div className="register--button">
                    <button id="btn--register" className="button is-info" type="submit">Register</button>
                    
                    <div className="container--register--link">
                        <a onClick={manageClick} id="register--link" className="has-text-dark ">Log in</a>
                    </div>
                </div>
            </form>
        </section>
    );
};
