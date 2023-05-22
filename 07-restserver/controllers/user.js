const { response } = require('express')

const usuariosGet = (req, res = response) => {
    res.json({
        "msg": "GET - Controller"
    })
}

const usuariosPUT = (req, res = response) => {
    res.json({
        "msg": "PUT - Controller"
    })
}

const usuariosPOST = (req, res = response) => {
    const user = req.body
    res.json({
        "msg": "POST - Controller",
        user
    })
}

const usuariosDELETE = (req, res = repsonse) => {
    res.json({
        "msg": "DELETE - Controller"
    })
}

module.exports = {
    usuariosGet,
    usuariosPUT,
    usuariosPOST,
    usuariosDELETE
}