const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({ target: 'http://localhost:8081' });

const server = http.createServer((req, res) => {
  proxy.web(req, res, (err) => {
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end('Bad Gateway: ' + err.message);
  });
});

server.listen(8080, () => {
  console.log('Proxy server running on http://localhost:8080, forwarding to http://localhost:8081');
});
