const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("SUCCESS");
  } else {
    reject("Error, try again");
  }
});

promise.then(res => console.log(res));

// Chaining in promises.
promise
  .then(res => res + "!")
  .then(res2 => {
    console.log(res2);
  });

// Throw Error.
promise
  .then(res => res + "!")
  .then(res2 => {
    throw Error;
    console.log(res2);
  })
  .catch(() => console.log("error!"));

// Order of Catch statement matters. See example below. This catch statement won't run because of the throw Error's placement, that comes after our catch statement.
promise
  .then(res => res + "!")
  .then(res2 => res2 + "?")
  .catch(() => console.log("error!"))
  .then(res3 => {
    throw Error;
    console.log(res3 + "!");
  });
