import express from 'express'

const  app = express();

app.get('/',(req,res)=>{
    res.send('Server is ready.');
});

//get a list of five joke

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id: 1,
            title: "Math Joke",
            content: "Why was the equal sign so humble? It knew it wasn't less than or greater than anyone else."
        },
        {
            id: 2,
            title: "Programming Joke",
            content: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
            id: 3,
            title: "Dad Joke",
            content: "What did one hat say to the other? Stay here, I'm going on ahead!"
        },
        {
            id: 4,
            title: "Science Joke",
            content: "Why did the biologist go on a diet? To keep up with cellular division!"
        },
        {
            id: 5,
            title: "Pun Joke",
            content: "I told my wife she should embrace her mistakes. She gave me a hug."
        }
    ];
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`)
});