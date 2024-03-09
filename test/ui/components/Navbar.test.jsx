import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/ui";
import { AuthContext } from "../../../src/auth/context/AuthContext";

const mockedUseNavigate = jest.fn();

// realizar un mock solo del navigate
jest.mock('react-router-dom', () => ({
    // tomar todo lo que viene en la libreria
    ...jest.requireActual('react-router-dom'),
    // sobreescribir solo esta parte
    useNavigate: () => mockedUseNavigate
}));

describe('pruebas en Navbar', () => {

    const contextValue = {
        logged: true,
        user: {
            id: 1,
            name: 'Juan'
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getByText('Juan')).toBeTruthy();
    });

    test('debe de llamar el logout y navigate cuando se hace click en el boton', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
    });

});