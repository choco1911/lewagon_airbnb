var http = require('http'),
    url = require('url'),
    hostname = 'localhost',
    port = 7777;

http.createServer(function(req, res) {
    console.log('NEW REQUEST');

    var data = new Array(10);

    for (var i = 0; i < data.length; i++) {
        data[i] = Math.random();
    }

    res.writeHead(200, {
        'Content-Type': 'text/javascript',
    });

    var urlData = url.parse(req.url, true),
        params = urlData.query,
        method = params.method && params.method.trim();

    if (method) {
        res.end(`${method}(${JSON.stringify(data)});`);
    } else {
        res.end('');
    }
}).listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
});
