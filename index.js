// Excercise 1

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
// requestAllPokemons();

//---------------------------------------------------------------------------------
// Excercise 2

async function fetchAllDogs() {
  try {
    let allDogsResponse = await fetch(
      "https://majazocom.github.io/Data/dogs.json"
    );
    let dogData = await allDogsResponse.json();
    // console.log(dogData);

    dogData.forEach((dog) => console.log(dog.name));
    dogData.forEach((dog) => (document.body.innerHTML += dog.name + "<br>"));
  } catch (error) {
    console.log(error);
  }
}
fetchAllDogs();
