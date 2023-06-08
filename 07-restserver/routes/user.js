const { Router } = require('express')
const { check } = require('express-validator')
const { usuariosGET, usuariosPUT, usuariosPOST, usuariosDELETE } = require('./../controllers/user.js')

const router = Router()

router.get('/', usuariosGET)

router.put('/', usuariosPUT)

router.post('/', [
    check('correo', 'El correo no es válido').isEmail()
], usuariosPOST)

router.delete('/', usuariosDELETE)

module.exports = router