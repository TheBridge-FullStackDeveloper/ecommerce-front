import "./AuthPage.scss"
import { useForm } from "react-hook-form";

function AuthPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="authPage-container">
      <form className="authPage-container_form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Ecommerce</h1>
        <label htmlFor="">Email</label>
        <input label = "email" {...register("email")} />

        <label htmlFor="">Password</label>
        <input label = "Password" {...register("Password")} />
        <input className="button" type="submit" />
      </form>
    </div>
  )
}
export default AuthPage;