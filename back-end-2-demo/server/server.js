const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());


const {getMovies, addMovies, deleteMovie, updateMovie} = require('./controllers/controllers.js');

app.get('/api/movies', getMovies);
app.post('/api/movies', addMovies);
app.delete('/api/movies/:id', deleteMovie);
app.put('/api/movies/:id', updateMovie);

app.listen(4004, () => console.log('server is up and running on port: 4004'))