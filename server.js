var http=require('http');
var s=http.createServer(function(req,res){//http->req,res...tcp->sockets
	res.writeHead(200,{'content-type':'text/plain'});
	res.write("hello \n");
	setTimeout(function(){
		res.end("hehe\n");
	},2000);
});
s.listen(8000);