const express = require('express');
      app = express();
      bodyParser = require('body-parser'),
      uuid = require('uuid');

app.use(bodyParser.json());

let users = [
    {
        id: 1,
        name: "Kim",
        favoriteMovies: []
    },
    {
        id: 2,
        name: "Joe",
        favoriteMovie: ["The Fountain"]
    },
]

let movies = [
    {
        "Tittle":"The Fountain",
        "Description":"A scientist",
        "Genre": {
            "Name":"Drama",
            "Description":"Drama film",
        },
        "Director": {
            "Name":"Darren Aronofsky",
        },
    },
    {
        "Title":"The Princess Bride",
        "Description":"Young boy's grandfather reads story",
        "Genre": {
            "Name":"Action",
            "Description":"Action film",
        },
        "Director": {
            "Name":"Rob Reiner",
        },
    },
];

// READ
app.get('/movies', (req, res) => {
    res.status(200).json(movies);
})

// READ
app.get('/movies/title', (req, res) => {
    const title = req.params.title;
    const movie = movies.find( movie => movie.title === title );

    if (movie) {
        res.status(200).send(movie);
    } else {
        res.status(400).send('Movie not found');
    }
    
});


// app.get('/', (request, response) => {
//     response.send('hello world')
// })

app.listen(8081, () => console.log("listening on 8081"))
 