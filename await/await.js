// Sequential requests
const planets = async () => {
  // Without the await keyword it is just a promise. With the await keyword it has the resolved value of the promise stored in the variable e.g. planets1
  const planets1 = axios.get("https://swapi.co/api/planets");
  const planets2 = axios.get("https://swapi.co/api/planets/?page=2");
  const planets3 = axios.get("https://swapi.co/api/planets/?page=3");

  console.log("FIRST: a promise (no await)");
  console.log(planets1);

  const planets1Resolved = await planets1;
  const planets2Resolved = await planets2;
  const planets3Resolved = await planets3;

  console.log(
    "SECOND: data object (with await => resolved value of the promise)"
  );
  console.log(planets1Resolved);

  console.log("THIRD: the actual data");
  console.log(showPlanets(planets1Resolved));
  console.log(showPlanets(planets2Resolved));
  console.log(showPlanets(planets3Resolved));

  // return { myplanets1, myplanets2, myplanets3 };
};

function showPlanets({ data }) {
  for (let { name } of data.results) {
    console.log(name);
  }
}

planets();
