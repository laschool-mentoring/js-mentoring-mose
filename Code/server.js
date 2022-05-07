const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
  res.write('<h1>Hello kblaschool</h1>');
})
  .listen(8080, () => {
    console.log("8008 포트에서 서비스 대기 중")
  })