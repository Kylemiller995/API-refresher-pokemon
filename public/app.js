var app = function(){
  var infoStart = document.getElementById('pokemon-info')
  initialise()
}


var initialise = function(){
  var searchButton = document.getElementById('search-button')
  searchButton.addEventListener("click", makeRequest)
}

var makeRequest = function() {
  console.log("makeRequesthit")
  var searchBox = document.getElementById('search-box')
  var url = 'https://pokeapi.co/api/v2/pokemon/' + searchBox.value
  var request = new XMLHttpRequest();
  request.open('GET', url)
  request.addEventListener('load', function(){
    var pokemonData = JSON.parse(request.responseText)
    console.log(pokemonData)
    renderPokemon(pokemonData)
  })
  request.send()
}


var renderPokemon = function(pokemon){
  var pokemonInfo = document.getElementById('pokemon-info')
  var img =  document.createElement('img')
  console.log(pokemon.sprites.front_default)
  img.src = pokemon.sprites.front_default
  pokemonInfo.appendChild(img)




}

window.addEventListener('load', app)
