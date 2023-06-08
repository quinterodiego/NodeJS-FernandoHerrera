const { response } = require('express')
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')
const Usuario = require('../models/usuario')

const usuariosGET = (req, res = response) => {
    res.json({
        "msg": "GET - Controller"
    })
}

const usuariosPUT = (req, res = response) => {
    res.json({
        "msg": "PUT - Controller"
    })
}

const usuariosPOST = async (req, res = response) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }

    const { nombre, correo, password, rol } = req.body
    const usuario = new Usuario({nombre, correo, password, rol})

    const existeEmail = await Usuario.findOne({correo})
    if(existeEmail) {
        return res.status(400).json({
            msg: "El correo ya está registrado"
        })
    }

    const salt = bcryptjs.genSaltSync()
    usuario.password = bcryptjs.hashSync(password, salt)

    await usuario.save()
    res.json({
        "msg": "POST - Controller",
        usuario
    })
}

const usuariosDELETE = (req, res = repsonse) => {
    res.json({
        "msg": "DELETE - Controller"
    })
}

module.exports = {
    usuariosGET,
    usuariosPUT,
    usuariosPOST,
    usuariosDELETE
}