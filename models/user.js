const db = require('../config/config')

const User = {}

User.getAll = () => {
    const sql = `SELECT * FROM users;`

    return db.manyOrNone( sql )
} 

User.createNewUser = ( user ) => {
    const sql = `CALL sp_create_user($1, $2, $3, $4, $5, $6, $7, $8);`
    return db.proc( sql, [
        user.email,
        user.firstName,
        user.lastName,
        user.phone,
        user.image,
        user.password,
        new Date(),
        new Date()
    ])
}

module.exports = User