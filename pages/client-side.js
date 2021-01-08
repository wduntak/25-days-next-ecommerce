import { useState, useEffect } from 'react';

const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

const ClientSide = () => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        const fetchPokemon = async () => {
            const res = await fetch(url, {
                headers: {
                    'Cache-Control': 'no-cache',
                }
            });
            const pokemon = await res.json();

            const promises = pokemon.results.map((result) => {
                return fetch(result.url).then((data) => data.json())
            });
                
            const responses = await Promise.all(promises);
            
            const pokeData = responses.map(r => {
                return {
                    name: r.name,
                    image: r.sprites.front_default
                }
            })
            setPokemon(pokeData);
        }

        fetchPokemon();

    }, [])
    return (
        <>
            {pokemon.map((poke) => {
                return (
                    <div key={poke.name}>
                        <img src={poke.image} />
                        <p>{poke.name}</p>
                        <hr/>
                    </div>
                )
            })}
        </>
    )
}

export default ClientSide;