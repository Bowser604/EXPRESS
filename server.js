const express = require('express');
      app = express();
      bodyParser = require('body-parser'),
      uuid = require('uuid');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

let topMovies = [
    {
        "Tittle":"The Fountain",
        "Description":"A scientist",
        "Genre": {
            "Name":"Drama",
            "Description":"Drama film",
        },
        "Director": {
            "Name":"Darren Aronofsky",
        }
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
        }
    }
];



// READ
app.get('/movies', (req, res) => {
    res.status(200).json(movies);
})

// READ
app.get('/movies/:title', (req, res) => {
    const { title } = req.params;
    const movie = movie.find( movie => movie.Title === title );

    if (movie) {
        res.status(200).send(movie);
    } else {
        res.status(400).send('Movie not found');
    }
    
});

// READ
app.get('/movies/genre/:genreName', (req, res) => {
    const { genreName } = req.params;
    const genre = movie.find( movie => movie.Genre.Name === GenreName ).Genre;

    if (genre) {
        res.status(200).send(genre);
    } else {
        res.status(400).send('Genre not found');
    }
    
});



// app.get('/', (request, response) => {
//     response.send('hello world')
// })

app.listen(8081, () => console.log("listening on 8081"))
 