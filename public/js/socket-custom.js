
        var socket = io();
        socket.on('connect',function(){
            console.log('Conectado al servidor');
        });

// escuchar información
        socket.on('disconnect',function(){
            console.log('Perdimos conexión con el servidor');
        })

// enviar información
        socket.emit('enviarMensaje',{
            usuario: 'Jorge',
            mensaje: 'Hola Mundo'
        },function(resp){
            console.log('Respuesta server', resp);
        });
//escuchar
        socket.on('enviarMensaje',function(dato){
            console.log('Servidor', dato);
        })
        
