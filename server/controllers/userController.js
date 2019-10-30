const pool = require('../database/model');

const userController = {};

userController.postLocation = async (req, res, next) => {
    const { userid, name } = req.body;
    const dbStr = `INSERT INTO users_table (userid, name) VALUES ($1, $2) RETURNING id`;
    const values = [userid, name];
    try {
        const result = await pool.query(dbStr, values);
        res.locals.visitId = result.rows[0].id;
        return next();
    }
    catch (err) {
        console.error(err);
    }
}

userController.getLocation = async (req, res, next) => {
    // console.log(req.query.id);
    const { id } = req.query;
    const dbStr = `SELECT * FROM users_table WHERE id = $1`;
    const values = [id];
    try {
        const result = await pool.query(dbStr, values);
        res.locals.user = result.rows[0];
        return next();
    }
    catch (err) {
        console.error(err);
    }
}

module.exports = userController;