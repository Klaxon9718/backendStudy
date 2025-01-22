import express from 'express';

import dataRouter from '../DataPage/controller.js'


const router = express.Router();

router.use("/data", dataRouter);


//없는 요청을 보낼 경우
// router.use("/*", (req, res) => {
// 	res.send("NO!");
// })
// router.use("/show", );


export default router;