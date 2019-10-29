const express = require('express');
const PORT = 3000;
const app = express();
const userController = require('./controllers/userController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('still doesnt work')
});


app.listen(() => console.log(`Listening on port: ${PORT}`));