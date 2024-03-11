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