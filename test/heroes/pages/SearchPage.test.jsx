import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPage } from "../../../src/heroes";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('pruebas en SearchPage', () => {

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar a batman y el input con el valor del queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );
        
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');
        
        const img = screen.getByRole('img');
        expect(img.src).toContain('batman');

        const alertDanger = screen.getByLabelText('alert-danger');
        expect(alertDanger.style.display).toBe('none');
    });

    test('debe de mostrar un error si no se encuentra el heroe', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=123']}>
                <SearchPage />
            </MemoryRouter>
        );
        
        const alertDanger = screen.getByLabelText('alert-danger');
        expect(alertDanger.style.display).toBe('');

    });

    test('debe de llamar el navigate a la pantalla nueva ', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=123']}>
                <SearchPage />
            </MemoryRouter>
        );
        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {name: 'searchText', value: 'superman'}});

        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman');
    });

});