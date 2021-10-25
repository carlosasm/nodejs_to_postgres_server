const { getAll, createNewUser } = require('../models/user')
const User = require('../models/user')

module.exports = {
    async getAll(req, res, next){
        try{
            const data = await User.getAll()
            console.log(`Users: ${data}`)

            return res.status(200).json( data )

        }catch( error ){
            console.log(`Error: ${error}`)
            return res.status(501).json({
                    success: false,
                    message: 'Error getting users'
            })
        }
    },

    async createNewUser(req, res, next){
        try{

            const user = req.body
            const data = await User.createNewUser(user)

            console.log(`User: ${data}`)

            return res.status(201).json({
                    success: true,
                    message: 'User created succesfully',
                    data: data.userid
            })

        }catch( error ){
            console.log(`Error: ${error}`)
            return res.status(501).json({
                    success: false,
                    message: 'Error creating new user',
                    error: error
            })
        }
    }
}