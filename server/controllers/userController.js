const pool = require('../database/model');

const userController = {};

userController.postLocation = async (req, res, next) => {
    console.log('hello')
    const { userId, name } = req.body;
    const values = [userId, name];
    const dbStr = 'INSERT INTO user (id, location) VALUES($1,$2) RETURNING visitId'
    try {
        const result = await pool.query(dbStr, values);
        console.log(result);
        res.send('hello')
    }
    catch (err) {
        console.error(err)
    }
}

module.exports = userController;