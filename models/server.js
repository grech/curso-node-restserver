const express = require('express')
const cors = require('cors')



class Server {

    constructor() {
        this.app = express();
        this.ususariosPath = '/api/ususarios'
        this.port = process.env.PORT;

        // MidddelWares
        this.middlewears();


        //rutas de la aplicacion

        this.routes();
    }

    middlewears(){
        // cors
        this.app.use( cors())

        //Lectura y parseo del body
        this.app.use(express.json());


        //Directorio Publico
        this.app.use(express.static('public'));
    }


    routes() {
       
        this.app.use(this.ususariosPath, require('../routes/user.routes'))
        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port)
        });
    }

}


module.exports= Server;