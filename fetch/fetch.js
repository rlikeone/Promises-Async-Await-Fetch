// const resolve = res => {
//   if (!res.ok) {
//     throw new Error(`Status Code Error ${res.status}`);
//   }

//   return res.json();
// };

// const printNames = data => {
//   console.log(data.results);
//   for (let { name, residents } of data.results) {
//     console.log(`Planet: ${name}`);
//     console.log(
//       `Residents: ${
//         residents.length === 0
//           ? "None"
//           : residents.map(resident => {
//               fetch(resident)
//                 .then(resolve)
//                 .then(data => console.log(data.name));
//             })
//       }`
//     );
//   }
// };

// fetch("https://swapi.co/api/planets/")
//   .then(resolve)
//   .then(printNames)
//   .catch(err => {
//     console.log("SOMETHING WENT WRONG WITH FETCH MATE");
//     console.log(err);
//   });

let api = "https://swapi.co/api/planets/";

function resolveData(res) {
  return res.json();
}

function showData(data) {
  console.log("First 10 planets:");
  for (let { name } of data.results) {
    console.log(name);
  }
  return Promise.resolve(data);

  // This does the same as the above Promise.resolve(data);
  // const p = new Promise((resolve, reject) => {
  //   resolve(data);
  // });
  // return p;
}

function fetchNextURL(data) {
  const nextURL = data.next;
  return fetch(nextURL);
}

fetch(api)
  .then(resolveData)
  .then(showData)
  .then(fetchNextURL)
  .then(resolveData)
  .then(showData)
  .then(fetchNextURL)
  .then(resolveData)
  .then(showData)
  .catch(err => {
    console.log("ERROR ==> ", err);
  });
