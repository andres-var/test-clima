const express = require('express')
const cors = require('cors')

class Server {
    constructor(){
        // Inicializar servidor
        this.app = express();
        this.port = process.env.PORT;
        
        // Middlewares
        this.middleware();

        // Rutas
        this.routes();
    }

    middleware(){
        // Cors
        this.app.use( cors() );

        // Parseo y lectura del body
        this.app.use( express.json() );

        // Directorio publico
        this.app.use( express.static("public") );
    }

    routes(){
        this.app.use("/api/current", require("../routes/climates") );
    }

    listen(){
        // Open port
        this.app.listen(this.port, () => console.log(`Server listening in the port: ${this.port}`))
    }
}


module.exports = Server;