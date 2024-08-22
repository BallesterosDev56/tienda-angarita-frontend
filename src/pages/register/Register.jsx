import { useNavigate } from "react-router-dom";
import "./register.css";
import { useForm } from "react-hook-form";

export const Register = () => {
    
    //instancias:
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors} } = useForm();

    //functions:
    const manageClick = () => {
        navigate('/tienda-angarita/login');
    }
    const onSubmit = async (data)=>{
        console.log(data);
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
                            vale: 5,
                            message: 'The minimum length must be at least 5 characters!'
                        },
                        maxLength: {
                            value: 20,
                            message: 'The maximum length is 20 characters!'
                        }
                    })} type="text" placeholder="Username" />
                    <p className="has-text-danger-dark"></p>
                </div>

                <div className="register--password">
                    <input {...register("password")} type="text" placeholder="Password" />
                    <p className="has-text-danger-dark"></p>
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
