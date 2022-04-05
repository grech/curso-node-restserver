const { response, request } = require('express')

const ususariosGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        ok: true,
        msg: 'get API- controlador',
        query

    });
}

const usuariosPost = (req, res = response) => {

    // const body = req.body;
    const {nombre, edad} = req.body;

    res.json({
        ok: true,
        msg: 'post API - controlador',
        nombre,
        edad
    })
};

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        ok: true,
        msg: 'put API - controlador',
        id
    })
}


const usuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'patch API - controlador'
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - controlador'
    })
}



module.exports = {
    ususariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}