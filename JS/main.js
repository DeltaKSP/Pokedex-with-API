function convertPokemonToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>` )
}

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.number}</span>
        <span class="Name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
            ${convertPokemonToLi(pokemon.types.join(''))}
            </ol>
            <img src="/CSS/001.png" alt="${pokemon.name}">
        </div>
</li>
    `
}

const pokemonList = document.getElementById('pokemonList')
pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})


