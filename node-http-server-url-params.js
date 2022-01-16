var http = require('http');
var url = require('url');

http.createServer(function(req,res){

var urlParams=url.parse(req.url, true).query;

res.writeHead(200,{'Content-Type':'text/html'});

res.write('Month = '+urlParams.Month);
res.write('Year  = '+urlParams.Year);
res.end();

}).listen(8080);
