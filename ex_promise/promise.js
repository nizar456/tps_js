console.log("Program started");
p = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "done");
});

console.log(p);
console.log("Program in progress");

p.then((result) => {
  console.log("Promise resolved ");
});