const UserController = require('../controllers/user_controller')


module.exports = ( app ) => {
    app.get('/api/v1/users/getAll', UserController.getAll)


    app.post('/api/v1/users/create', UserController.createNewUser)


}