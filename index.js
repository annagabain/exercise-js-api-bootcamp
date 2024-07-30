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
// fetchAllDogs();

//---------------------------------------------------------------------------------
// Excercise 3

async function fetchAllBooks() {
  try {
    let allBooksResponse = await fetch(
      "https://majazocom.github.io/Data/books.json"
    );
    // console.log(allBooksResponse.json());
    let allBooksData = await allBooksResponse.json();
    console.log("allBooksData", allBooksData);

    let shortBooks = allBooksData.filter((book) => book.pages <= 500);
    console.log("Short Books", shortBooks);

    // shortBook.forEach((shortBook) => console.log("short Book", shortBook));
    shortBooks.forEach(
      (book) =>
        (document.body.innerHTML += `${book.title} <br> ------------<br>`)
    );
  } catch (error) {
    console.log(error);
    document.body.innerHTML += `${error}`;
  }
}
// fetchAllBooks();

//---------------------------------------------------------------------------------
// Excercise 4

async function fetchAllVisitors() {
  try {
    let response = await fetch(
      "https://majazocom.github.io/Data/attendees.json"
    );
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    let data = await response.json();
    console.log("all visitor data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
fetchAllVisitors();

async function filterAllergicAttendees() {
  let visitors = await fetchAllVisitors();
//   console.log("All Visitors", visitors);

  let allergicAttendees = visitors.filter((visitor) => visitor.attending == true && visitor.allergies.length != 0);
  console.log("Attendees with allergies", allergicAttendees);
  document.body.innerHTML += `<br> ----------------- <br> ATTENDEES  <br> With Allergies <br> ----------------- <br>`;

  allergicAttendees.forEach((attendee) => {
    document.body.innerHTML += ` ${attendee.name} - special diet or allergic to  <br> ${attendee.allergies} <br>................<br> `;
  });
}
filterAllergicAttendees();
