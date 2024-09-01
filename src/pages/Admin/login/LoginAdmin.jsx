import { useForm } from "react-hook-form"

export const LoginAdmin = ()=> {
    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = async (data)=> {
        //feth and response from the backend
    }

    return(
        <section id="section">
            <form className="form--container" onSubmit={handleSubmit(onSubmit)}>
                <div className="login--title">
                    <div className="line"></div>
                    <h1>LOGIN ADMIN</h1>
                </div>

                <div className="login--username">
                    <input {...register('username')} type="text" placeholder="Username" minLength={5} maxLength={20} required />
                </div>

                <div className="login--password">
                    <input {...register('password', {
                        pattern: {
                            value: /^(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-]).*$/ ,
                            message: 'Password requires one special character.'
                        }
                    })} type="password" placeholder="Password" minLength={5} maxLength={20} required />
                    {errors.password && <p className="is-size-6 has-text-black mt-2">{errors.password.message}</p>}
                </div>

                <div className="login--button">
                    <button id="btn--login" className="button is-info" type="submit">Log in</button>
                </div>
            </form>
        </section>
    )
}