const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon => {
    return fetch(pokemon.url)
        .then((response) => response.json())
})

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    return fetch(url) 
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailResquest) => Promise.all(detailResquest))
    .then((pokemonDetails) => {
        debugger
        console.log(pokemonDetails)
    })

}