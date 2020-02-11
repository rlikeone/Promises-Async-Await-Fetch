// Sequential requests => SEE AWAIT.js file
// const planets = async () => {
// Without the await keyword it is just a promise. With the await keyword it has the resolved value of the promise stored in the variable e.g. planets1
// const planets1 = axios.get("https://swapi.co/api/planets");
// const planets2 = axios.get("https://swapi.co/api/planets/?page=2");
// const planets3 = axios.get("https://swapi.co/api/planets/?page=3");

// console.log(planets1);

// const resolvedValue1 = await planets1;
// const resolvedValue2 = await planets2;
// const resolvedValue3 = await planets3;

// console.log(val.data);
// };

// const planets = async (url = "https://swapi.co/api/planets") => {
//   const val = await axios.get(url);
//   // console.log(val.data.next);
//   console.log("SET OF PLANETS");
//   for ({ name } of val.data.results) {
//     console.log(name);
//   }
//   return axios.get(url);
// };

// const getNextPlanets = async ({ data }) => {
//   const val = await axios.get(data.next);
//   console.log(data.next);
//   for (let { name } of val.data.results) {
//     console.log(name);
//   }
//   return Promise.resolve(data.next);
// };

planets()
  // .then(getNextPlanets)
  .catch(err => {
    console.log("ERROR ==> ", err);
  });
