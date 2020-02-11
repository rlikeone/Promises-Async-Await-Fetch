const fetchNextPlanets = (url = "https://swapi.co/api/planets/") => {
  return axios.get(url);
};

const printPlanets = ({ data }) => {
  for ({ name } of data.results) {
    console.log(name);
  }

  return Promise.resolve(data.next);
  // return fetchNextPlanets();
};

// Deconstruct data and name
// fetchNextPlanets().then(({ data }) => {
//   for ({ name } of data.results) console.log(name);
// });

// Fetch next planets with .then
// fetchNextPlanets()
//   .then(({ data }) => {
//     console.log(data);
//     for (let { name } of data.results) {
//       console.log(name);
//     }
//     return fetchNextPlanets(data.next);
//   })
//   .then(({ data }) => {
//     console.log(data);
//     for (let { name } of data.results) {
//       console.log(name);
//     }
//   })
//   .catch(err => {
//     console.log("ERROR detected ==> ", err);
//   });

// Fetch next planets without .then but with printPlanets();
fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch(err => {
    console.log("Error ==> ", err);
  });
