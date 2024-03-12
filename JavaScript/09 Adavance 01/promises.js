const firstPromise = new Promise (function(resolve, reject) {
    // do async tasks
    // do DB tasks

    setTimeout(function(){
        console.log ("Async task is completed");
        resolve(); 
    } ,1000)
} );

firstPromise.then (function(){
    console.log ("Promise is consumed.");
})


//2nd way

new Promise (function(resolve, reject) {
    setTimeout (function (){
        console.log ("\nSecond Promise is here.");
    }, 1000);
    resolve ({name: "Danyal", email: "mdrana@domain.com"});
}).then (function(user){
    console.log (user);
})

// then then catch finally, if first 'then' is returning something, then the second 'then' is used

const promiseFour = new Promise (function(resolve, reject){
    setTimeout (function(){
        let error = true;
        if (!error) {
            resolve ({username: "Danyal", pass: "123"})
        } else {
            reject ("ERROR: Somthing went wrong");
        }
    },1000)
})

promiseFour
.then((user)=> {
    console.log (user);
    return user.username;
})
.then ((username)=>{
    console.log (username);
})
.catch ((error)=>{
    console.log (error);
})
.finally (()=>{
    console.log ("The promise is either resolved or rejected.")
})