// string
let firstName = "Alex";
let lastName = "Chautemps";

// firstName = "Romain";
// console.log(firstName);

let fullName = "Bonjour : " + firstName + " " + lastName;
let fullName2 = `Bonjour : ${firstName} ${lastName}`;
console.log(fullName2);

let age = 32;
console.log(age);

let experience = 11;

let startWorkingAge = age * fullName;
console.log(startWorkingAge);

// ATTENTION DANGER NOMBRE FLOTTANTS
const a = 0.1;
const b = 0.2;
console.log(a * b);

console.log((a * 10 * b) / 10);

const isTrue = false;

console.log(a === 0.2);
console.log(a == 0.2);
console.log(a >= 0.3);
console.log(isTrue);

if (isTrue) {
  // Code si isTrue === true
} else {
  // code si isTrue === false
}

let future;
console.log(future);

future = 10;
console.log(future);

let future2 = null;
console.log(future2);
future2 = 10;
console.log(future2);

const simpsons = ["Marge", "Homer", ["Bart", "lisa", "Maggie"]];

console.log(simpsons[0]);
console.log(simpsons[2]);
console.log(simpsons[2][2]);

const utilisateur = {
  lastName,
  firstName,
  age: 32,
  isConnected: false,
};

const utilisateur2 = {
  lastName: "TOTO",
  firstName: "FOO",
  age: 32,
  isConnected: false,
};

console.log(utilisateur);

console.log(utilisateur.firstName);
console.log(utilisateur["firstName"]);

const status = {
  available: "green",
  warning: "orange",
  error: "red",
};

const currentStatus = "available";

console.log(status[currentStatus]);

const films = [
  {
    title: "Harry Potter & la coupe de feu",
    note: 5,
  },
  {
    title: "Star Wars - Episode 1",
    note: 4,
  },
  {
    title: "Star Wars - Episode 2",
    note: 4,
  },
  {
    title: "Les tuches",
    note: 1,
  },
];

console.log(films);

const sortedFilms = films.sort((a, b) => a.note - b.note);
console.log(sortedFilms);
const filteredFilms = films.filter((film) => film.note === 5);
console.log(filteredFilms);

function login(user) {
  user.isConnected = true;
  console.log("LOGIN");
  return user;
}

console.log(login(utilisateur));
