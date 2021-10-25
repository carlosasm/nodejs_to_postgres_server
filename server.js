const express = require('express')
const app = express()
const http = require('http')

const server = http.createServer( app )
const logger = require('morgan')
const cors = require('cors')

/**
 * Definition of routes
 */
const users = require('./routes/user_route')


const port = process.env.PORT || 3000

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.disable('x-powered-by')

app.set('port', port)

// Calling routes
users( app )

// My IP address
server.listen(
    3000, '192.168.178.20' || 'localhost', function () {
        console.log('Server running on PORT: ' + port )
    }
)

// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500 ).send(err.stack)
})

module.exports = {
    app: app,
    server: server
}