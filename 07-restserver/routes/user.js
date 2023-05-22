const { Router } = require('express')
const { usuariosGet, usuariosPUT, usuariosPOST, usuariosDELETE } = require('./../controllers/user.js')

const router = Router()

router.get('/', usuariosGet)

router.put('/', usuariosPUT)

router.post('/', usuariosPOST)

router.delete('/', usuariosDELETE)

module.exports = router