// const { createProxyMiddleware  } = require('http-proxy-middleware');

// module.exports = function(app){
//   app.use('/api',
// 		createProxyMiddleware({
// 			target: 'http://localhost:5000/api',
// 			changeOrigin: true
// 		})
// 	)
// };


// //http-proxy-middleware는 **프론트엔드 개발 서버(예: localhost:3000)**로
// //들어오는 요청만 가로채서 처리하기 때문에 별다른 설정을 하지 않을 경우,
// //3000에 해당하는 요청만 처리한다.


// // proxy and keep the same base path "/api"
// // http://127.0.0.1:3000/api/foo/bar -> http:target/foo/bar


// vite 마이그레이션 이 후 추가로 사용하지는 않음