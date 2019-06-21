let {io} = require('../server')
io.on('connection', (client) => {
    console.log('usuario conectado');
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a está aplicación'
    });
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    //Escuchar mensaje
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);
        client.broadcast.emit('enviarMensaje',data)
        // if (mensaje.usuario) {
        //     callback({
        //         ok: true,
        //         respuesta: 'Todo salio bien',
        //         mensaje
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mal'
        //     });
        // }

    })


});