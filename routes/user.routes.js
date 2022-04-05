const { Router } = require('express');
const { ususariosGet, 
    usuariosPost, 
    usuariosPatch, 
    usuariosDelete, 
    usuariosPut } = require('../controllers/user.controllers');

const router = Router();

router.get('/', ususariosGet)

router.put('/:id', usuariosPut)

router.post('/', usuariosPost)

router.patch('/', usuariosPatch )

router.delete('/', usuariosDelete)



module.exports = router;

