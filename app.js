var http = require('http'); //traerse http, es una libreria

//crea un servidor y lo regresa
var server = http.createServer(
	//siempre que hay un request de http, siempre va ha haber un response.
	function (reguest,response) {
		response.writeHead(200, {
			//Esto es de http, mime type
			'Content-Type': 'text/plain'
		});
		response.end('Hola Mundo');
	}
);

server.listen(8080, function(){
	console.log('Servidor escuchando en puesto 8080');
}); 