const express = require('express');
const PORT = 3000;
const app = express();
const userController = require('./controllers/userController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/visit', userController.postLocation, (req, res) => {
    const { visitId } = res.locals;
    if(!visitId) res.status(400).send('Could not retrieve correct data');
    res.status(200).json({ "visitId": visitId });
});

app.get('/visit', userController.getLocation, (req, res) => {
    const { user } = res.locals;
    if(!user) res.status(400).send('Could not retrieve correct data');
    res.status(200).json([{ "userId": user.userid, "name": user.name, "visitId": user.id }]);
});


module.exports = app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));