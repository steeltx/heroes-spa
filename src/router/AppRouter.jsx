import { Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login/*" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } 
                />
                <Route path="/*" element={
                    // se evalua si esta iniciado sesion, en caso de que si, muestra las rutas hijas
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } 
                />
            </Routes>
        </>
    )
}
