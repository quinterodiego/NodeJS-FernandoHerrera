const express = require('express')

class Server {
    constructor() {
        this.app = express()
        this.PORT = process.env.PORT
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.json({
                "msg": "GET"
            })
        })

        this.app.put('/api', (req, res) => {
            res.json({
                "msg": "PUT"
            })
        })

        this.app.post('/api', (req, res) => {
            res.json({
                "msg": "POST"
            })
        })

        this.app.delete('/api', (req, res) => {
            res.json({
                "msg": "DELETE"
            })
        })
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Servidor corriendo en el puerto ${this.PORT}`)
        })
    }
}

module.exports = Server