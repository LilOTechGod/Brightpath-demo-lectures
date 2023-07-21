const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {addSong, getSong, updateSong, deleteSong} = require('./controllers.js')

app.get('/api/song', getSong);
app.post('/api/song', addSong);
app.put('/api/song/:id', updateSong);
app.delete('/api/song/:id', deleteSong);

app.listen(4444, () => console.log('server is listening on port 4444'));