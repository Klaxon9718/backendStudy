import express from 'express';

import { repo } from './repository.js';


const router = express.Router();

router.get('/getData', repo.getData);

router.all('/*', (req, res) => {
	res.send("controller NO!")
});

export default router;