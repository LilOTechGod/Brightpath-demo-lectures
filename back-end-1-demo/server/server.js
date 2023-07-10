// bring in express then set a variable to it's value
const express = require('express');
const app = express();
const cors = require('cors')

// middleware that use the .use function and every request that comes in goes through this middleware.
app.use(express.json());
app.use(cors());

//backend data that acts like a database
const inventory = ('chair', 'shampoo', 'conditioner', 'bread', 'milk', 'desk', 'computer', 'ps5', 'xbox1', '9mm')

//endpoints
app.get('/api/inventory', (req, res) => {
    //what do i want to send back
    res.status(200).send(inventory);
    // query res
    if(req.query.item) {
        console.log(req.query);
        const filteredItems = inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item))
        res.status(200).send(filteredItems);
    }else {
        res.status(200).send(inventory)
    }
})

app.get('/api/inventory/:id', (req, res) => {
    res.status(200).send(inventory[+req.params.id]);
})

// app.get(`/api/inventory?item=${queryInput.value}`)

// listen for request that are coming in
app.listen(5050, () => console.log('server is up and running on Port 5050'))