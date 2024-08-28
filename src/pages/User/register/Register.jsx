import "./register.css";
import { userCreated, userAlreadyTaken } from "../../../logic/sweetAlert";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fetchRegister } from "../../../logic/fetchRegister";

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
            Swal.fire(userCreated);
            navigate('/tienda-angarita/login');
        } else if(message === 'INTERNAL SERVER ERROR') {
            Swal.fire(userAlreadyTaken);
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
                    <input title="user" {...register("username")} type="text" placeholder="Username" minLength={5} maxLength={20} required/>
                </div>

                <div className="register--password">
                    <input {...register("password", {
                        pattern: {
                            value: /^(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-]).*$/,
                            message: 'Password requires one special character'
                        }
                    })} type="password" placeholder="Password" minLength={5} maxLength={20} required />
                    {errors.password && <p className="is-size-6 has-text-black mt-2">{errors.password.message}</p>}
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
