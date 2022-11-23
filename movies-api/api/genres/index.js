import express from 'express';
import Genre from './genresModel';


const router = express.Router(); 

//GET genres list endpoint
router.get('/', async (req, res) => {
    const genres = await Genre.find();
    res.status(200).json(genres);
});

export default router;