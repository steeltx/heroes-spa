import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe('pruebas en AppRouter', () => {

    test('debe de mostrar el login si no esta autenticado', () => {

        const contextValue = {
            logged: false
        }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        // esperar que en el render existan 2 elementos con la parabra login
        expect(screen.getAllByText('Login').length).toBe(2);
    });

    test('debe de mostrar el componente Marvel si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                id: 1,
                name: 'Juan'
            }
        }
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        // esperar que en el render existan mas de 1 marvel
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
    });

});