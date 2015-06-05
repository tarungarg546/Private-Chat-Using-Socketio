var net=require('net');//tcp stuff is in net module
var s=net.createServer(function(socket){//tcp uses sockets
	socket.write("hello\n");
	socket.write("world");
	//server can also take data here
	socket.on('data',function(d){//on is an event handler that fires when some data is given to server
		socket.write(d);//writes data ti one who sent it
	});
	socket.on('end',function(){

	})
});
s.listen(8000);
//http.get({host:"google.com"},function(res){console.log(res.headers)});