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
  while(pokemonInfo.firstChild){
    pokemonInfo.removeChild(pokemonInfo.firstChild)
  }
  pokemonInfo.appendChild(createImg(pokemon))
  pokemonInfo.appendChild(createName(pokemon))
  pokemonInfo.appendChild(createWeight(pokemon))
  pokemonInfo.appendChild(createHeight(pokemon))
  pokemonInfo.appendChild(createType(pokemon))
}

var createImg = function(pokemon){
  var img =  document.createElement('img')
  img.src = pokemon.sprites.front_default
  return img
}

var createName = function(pokemon){
  var name = document.createElement('li')
  name.innerText = "Name: " + pokemon.name
  return name

}

var createWeight = function(pokemon){
  var weight = document.createElement('li')
  weight.innerText = "Weight: " + pokemon.weight
  return weight

}

var createHeight = function(pokemon){
  var height = document.createElement('li')
  height.innerText = "Height: " + pokemon.height
  return height

}

var createType = function(pokemon){
  var type = document.createElement('li')
  type.innerText = "Type: " + pokemon.types[0].type.name
  return type

}




window.addEventListener('load', app)
