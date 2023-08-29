const myPromise = new Promise((resolve, reject) =>{
  let x = 7;

  if (x >= 7) {
    resolve("You can watch movies");
  } else {
    reject("You can not watch movies, study more!");
  }
});
myPromise.then((message) => {
    console.log(message);
}).catch((message) => { 
    console.log(message);
});

