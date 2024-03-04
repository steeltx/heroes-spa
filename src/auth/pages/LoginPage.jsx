import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

export const LoginPage = () => {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogin = () => {
        // llamar al context para hacer login indicando el nombre
        login('User');
        // simular login e ir a la pagina de inicio
        navigate('/',{
            replace: true
        });
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={onLogin}
            >
                Login
            </button>
        </div>
    )
}
