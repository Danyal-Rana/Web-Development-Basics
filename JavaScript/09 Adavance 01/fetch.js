fetch ("https://api.github.com/users/Danyal-Rana")
.then ((response)=> {
    return response.json();
})
.then ((data)=>{
    console.log (data);
})
.catch ((error)=> {
    console.log (error);
})
.finally (()=> {
    console.log ("Api is either fetched or not.");
})