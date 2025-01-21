import useAuthErrorToast from "../../hooks/useAuthErrorToast"
import { useAuth } from "../../store/hooks/authHooks"
import FormInput from "../FormInput/FormInput"

const LoginForm = () => {

    const { login } = useAuth();

    useAuthErrorToast();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const submitData = {
            username: event.target["username"]?.value,
            password: event.target["password"]?.value,
        };

        const remember = event.target["remember"]?.checked;

        login(submitData.username, submitData.password, remember);
    }

    return <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form__container">
            <img src="/img/person-circle.svg" alt="Profile icon" className="login-form__icon"/>
            <h1 className="login-form__title">Sign In</h1>
            <FormInput type="text" name="username" label="Username" autoComplete="username"/>
            <FormInput type="password" name="password" label="Password" autoComplete="current-password"/>
            <FormInput type="checkbox" name="remember" label="Remember me"/>
            <input type="submit" value="Sign In" className="login-form__submit"/>
        </div>
    </form>
}

export default LoginForm