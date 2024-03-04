import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// cuando se recarga, buscar si existe el usuario y lo carga
const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return{
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (name = '') => {

        const user = {id: 1, name}

        const action = { type: types.login, payload: user }
        // al realizar login, almacenar los datos en local storage
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }

    const logout = () => {
        // eliminar los datos del localStorage
        localStorage.removeItem('user');
        const action = { type: types.logout }
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            // metodos
            login: login,
            logout: logout
        }}>
            { children }
        </AuthContext.Provider>
    )
}
