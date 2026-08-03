import express from "express"
const app = express()
app.get('/',(req,res) =>{
    res.send("Hello world")
});

const port = process.env.PORT || 3000;

// now lets make a joke route where we have multiple jokes 

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id:1,
            title: "First Joke",
            description: "This is the first joke"
        },
        {
            id:2,
            title: "Second Joke",
            description: "This is the second joke"
        },
        {
            id:1,
            title: "Third Joke",
            description: "This is the third joke"
        },
        {
            id:1,
            title: "Fourth Joke",
            description: "This is the fourth joke"
        }
    ]
    // and then we send the response to the page 
    res.send(jokes);
})


// for standerzizaton purpose we serve the jokes on api/jokes

app.listen(port,()=>{
    console.log(`The app is running on port ${port}`);
    
})