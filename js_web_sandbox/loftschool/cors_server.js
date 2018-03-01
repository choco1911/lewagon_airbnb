var http = require('http'),
    hostname = 'localhost',
    port = 7777;

http.createServer(function(req, res) {
    console.log('NEW REQUEST');

    var data = '';

    res.writeHead(200, {
        'Content-Type': 'text/javascript',
        // This header plays main role in CORS !!!111oneoneone
        'Access-Control-Allow-Origin': '*'
    });

    req.setEncoding('utf8');

    req.on('data', function(buf){
        data = data.concat(buf);
    });

    req.on('error', function(){
        res.end('{}');
    });

    req.on('end', function() {
        data = JSON.parse(data);
        res.end(JSON.stringify(data));
    });
}).listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
});
