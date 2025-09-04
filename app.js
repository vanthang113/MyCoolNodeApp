const http = require('http');

// Render sẽ cấp biến môi trường PORT
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Teacher, I am Nguyen Van Thang - Lớp ST22D</h1>');
});

server.listen(PORT, () => {
  console.log(`✅ Server running at port ${PORT}`);
});
