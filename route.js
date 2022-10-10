const router = require ("express").router();
const {movieSchema} = require ("../db");

router.get("getAllMovies",(req,res)=> movieSchema.find({}).then(results =>res.send(results)).catch(err => next (err)));

router.get("/getMovie/:id",(req,res,next) =>{
    const {id} = req.params;
    if (!movie[id]) return next ("no movies available");
    res.send(movie[id])

});

