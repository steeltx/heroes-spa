import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DCPage, MarvelPage, Hero, Search } from "../pages";

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DCPage />} />

                    <Route path="search" element={<Search />} />
                    <Route path="hero" element={<Hero />} />

                    <Route path="/" element={ <Navigate to="/marvel"/>} />
                </Routes>
            </div>
        </>
    )
}
