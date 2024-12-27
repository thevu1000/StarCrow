const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');  // Đảm bảo db.json có trong thư mục gốc của dự án
const middlewares = jsonServer.defaults();

// Sử dụng các middleware mặc định của json-server
server.use(middlewares);
server.use(router);

// Vì Vercel yêu cầu xử lý dưới dạng serverless function,
// bạn cần phải export một hàm xử lý yêu cầu.
module.exports = (req, res) => {
  server.handle(req, res);  // Xử lý yêu cầu qua json-server
};
