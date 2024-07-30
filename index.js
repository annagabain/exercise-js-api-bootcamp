function requestAllPokemons() {
  fetch("https://santosnr6.github.io/Data/pokemons.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((pokeDataOneByne) => {
        // console.log(pokeDataOneByne.name);
        document.body.innerHTML += `${pokeDataOneByne.name} <br>`;
      });
    });
}
requestAllPokemons();
