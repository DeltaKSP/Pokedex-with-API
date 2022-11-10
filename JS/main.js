const offset = 0
const limit = 0
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

function convertPokemonsForLi(pokemon) {
    return `
    <li class="pokemon">
    <span class="number">#001</span>
    <span class="Name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            <li class="type">Grama</li>
            <li class="type">Veneno</li>
        </ol>
        <img src="/CSS/001.png" alt="${pokemon.name}">
    </div>
</li>
    `
}

const pokemonList = document.getElementById("pokemonList")

pokeApi.getPokemons().then((pokemons = []) => {
    
    
    
    const newList = pokemons.map((pokemon) =>{
        return pokemon.name

    })
    console.log(newList)
})


