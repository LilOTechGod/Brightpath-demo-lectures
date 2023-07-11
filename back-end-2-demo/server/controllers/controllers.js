const movieDb = require('../db.json');
let currentId = 11;

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movieDb);
    },
    addMovies: (req, res) => {
        const{title, rating, imageURL} = req.body

        movieDb.push({
            id: currentId,
            title: title,
            rating: rating,
            imageURL: imageURL
        })
        currentId++

        res.status(200).send(movieDb);
    },
    deleteMovie: (req, res) => {
        // to grab an id from your front end
        const id = +req.params.id

        let movieIndex 
        for(let i=0; i<movieDb.length; i++) {
            if(movieDb[i].id === id) {
                movieDb.splice(i, 1)
                res.status(200).send(movieDb);
                return
            }
        }
        res.status(400).send('movie not found');
    },
    updateMovie: (req, res )=> {
        const id = +req.params.id;
        const type = req.body.type;

        let movieIndex
        for(let i=0; i<movieDb.length; i++) {
            if(movieDb[i].id === id) {
                movieIndex = i
            }
        }
        if(movieIndex === undefined) {
            res.status(400).send('movie not found')
        }else if(type === 'plus') {
            movieDb[movieIndex].rating ++
            res.status(200).send(movieDb);
        }else if(type === 'minus') {
            movieDb[movieIndex].rating--
            res.status(200).send(movieDb);
        }else {
            res.status(400).send('invalid type constraint')
        }
    }
};