//***********************||
//      Promise.all      ||
//***********************||
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("SUCCESS");
  } else {
    reject("Error, try again");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Hey");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Martian");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "Is it me you're looking for");
});

Promise.all([promise, promise2, promise3, promise4]).then(values => {
  console.log(values);
});

//***********************||
//     array of urls     ||
//***********************||
let apiArray = [
  "https://pokeapi.co/api/v2/pokemon/1",
  "https://pokeapi.co/api/v2/pokemon/2",
  "https://pokeapi.co/api/v2/pokemon/3",
  "https://pokeapi.co/api/v2/pokemon/4",
  "https://pokeapi.co/api/v2/pokemon/5",
  "https://pokeapi.co/api/v2/pokemon/6",
  "https://pokeapi.co/api/v2/pokemon/7",
  "https://pokeapi.co/api/v2/pokemon/8"
];

let x;

Promise.all(
  apiArray.map(url => {
    return fetch(url).then(res => res.json());
  })
)
  .then(data => (x = data))
  .catch(() => console.log("error!"));

//***********************||
// Sequential requests   ||
//***********************||
async function planets() {
  // Without the await keyword it is just a promise. With the await keyword it has the resolved value of the promise stored in the variable e.g. planets1
  const planets1 = axios.get("https://swapi.co/api/planets");
  const planets2 = axios.get("https://swapi.co/api/planets/?page=2");
  const planets3 = axios.get("https://swapi.co/api/planets/?page=3");
  const results = await Promise.all([planets1, planets2, planets3]);
  console.log(results);
  console.log(mapRes(results));
}

function mapRes(arr) {
  return arr.forEach(({ data }) => {
    for ({ name } of data.results) {
      console.log(name);
    }
  });
}

planets();
