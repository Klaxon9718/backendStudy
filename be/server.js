import dotenv from 'dotenv';	//DOTENV 설정 사용을 위한 import
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';


import notFoundRouter from './routes/notFoundPage.js'
import pageRouter from './routes/routes.js';

dotenv.config();
const app = express();

///////////////////////////////////////////////////////////////////////
// CORS 설정
// const allowedOrigins = ['http://localhost:3000']; // 허용할 출처 목록

// app.use(cors({
//         origin: allowedOrigins,
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type', 'Authorization'],
//     })
// );
///////////////////////////////////////////////////////////////////////



// app.use(
// 	'/api',
// 	createProxyMiddleware({
// 		target: 'http://localhost:3100',
// 		changeOrigin: true,
// 	}),
// 	pageRouter
// );


// const apiProxy = createProxyMiddleware('/api', { 
// 	target: 'http://localhost:3100',
// 	changeOrigin : true,
// 	// router: { 
// 	// 	'integration.localhost:3000' : 'http://127.0.0.1:8001' ,   // 호스트만 
// 	// 	'staging.localhost:3000'      : 'http://127.0.0.1:8002' ,   // 호스트만 
// 	// 	'localhost:3000/api'          : 'http://127.0.0.1:8003' ,   // 호스트 + 경로 
// 	// 	'/rest'                       : 'http://127.0.0.1:8004'    // 경로만 
// 	// } 
// });

app.use("/api", pageRouter);
app.use("*", (req, res) => {
    res.status(404).send('THIS IS WRONG API');
});


app.listen(process.env.EXPRESS_PORT, () => {
		//${process.env.EXPRESS_PORT}
		console.log(`Example app listening on port`)
	});


				//https://velog.io/@dongchyeon/Node.js-%EB%9D%BC%EC%9A%B0%ED%84%B0-%EB%B6%84%EB%A6%AC%ED%95%98%EA%B8%B0