import express from 'express';
const notFoundRouter = express.Router();

//없는 요청을 보낼 경우
notFoundRouter.all("/*", (req, res) => {
    res.status(400).send('THIS IS WRONG API');
});


export default notFoundRouter;