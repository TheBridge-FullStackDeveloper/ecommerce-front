import "./authpage.scss"
import { useForm } from "react-hook-form";

function AuthPage() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


  return (
    <div className="authpage-container">
        <form className="authpage-container_form" onSubmit={handleSubmit(onSubmit)}>
            <h1>E-Commerce</h1>
            <label htmlFor="">Email</label>
            <input label="Email"  {...register("email")} />

            <label htmlFor="">Password</label>
            <input label="Password"  {...register("password")} />

            <input type="submit" className="form_button" />
        </form>
    </div>
  )
}

export default AuthPage