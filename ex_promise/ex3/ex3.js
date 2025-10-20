console.log("Program started");
const p = new Promise((resolve, reject) => {
    console.log("Promise in progress ...");
    setTimeout(() =>{
        
        resolve();
    },3000);
});
console.log(p);
p.then(() =>{
    console.log("Step 1 completed");
})
p.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve();
        },3000);
    })
    .then(()=>console.log("step 2 Completed"));
})
.then((p)=>{
    console.log(p);
})
.catch(() => {
    console.error("error");
})