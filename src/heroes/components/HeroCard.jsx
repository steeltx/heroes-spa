import { Link } from "react-router-dom";

// componente interno para mostrar characters
const CharactersByHero = ({alter_ego, characters}) => {
    // if(alter_ego === characters) return (<></>);
    // return <p>{characters}</p>;
    return (alter_ego === characters)
    ? <></>
    : <p>{characters}</p>;
}

export const HeroCard = ( { heroe } ) => {

    const heroImage = `../../../assets/${heroe.id}.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImage} className="card-img" alt={heroe.superhero}/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{heroe.superhero}</h5>
                            <p className="card-text">{heroe.alter_ego}</p>
                            <CharactersByHero alter_ego={heroe.alter_ego} characters={heroe.characters}/>
                            <p className="card-text">
                                <small className="text-muted">
                                    {heroe.first_appearance}
                                </small>
                            </p>
                            <Link 
                                className="card-link"
                                to={`/hero/${heroe.id}`}
                            >
                                Mas ...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
