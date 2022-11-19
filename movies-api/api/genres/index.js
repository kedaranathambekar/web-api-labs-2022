import express from 'express';
import { genres } from './genresData';

const router = express.Router(); 

//GET genres list endpoint
router.get('/', (req, res) => {
    res.json(genres);
});

export default router;