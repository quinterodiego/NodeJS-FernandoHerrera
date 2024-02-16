const express = require('express')
const cors = require('cors')
const router = require('../routes/user.js')
const dbConnection = require('../db/config.js')

class Server {
    constructor() {
        this.app = express()
        this.PORT = process.env.PORT
        this.usuariosPath = '/api/usuarios'
        this.middlewares()
        this.routes()
        this.dbConectar()
    }

    async dbConectar() {
        await dbConnection()
    }

    middlewares() {
        this.app.use(express.static('public'))
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.usuariosPath, router)
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Servidor corriendo en el puerto ${this.PORT}`)
        })
    }
}

module.exports = Server