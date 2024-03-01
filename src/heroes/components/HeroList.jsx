import { getHeroesByPublisher } from "../helpers"

export const HeroList = ( {publisher} ) => {

    const heroes = getHeroesByPublisher( publisher );

    return (
        <ul>
            {
                heroes.map((heroe) => (
                    <li key={heroe.id}>
                        <p>{heroe.superhero}</p>
                    </li>
                ))
            }
        </ul>
    )
}
