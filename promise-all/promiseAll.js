// Sequential requests
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
