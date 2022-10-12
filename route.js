
const router = require ("express").router();
const {movieSchema} = require ("../db");
const movie = require("./Mongoose");

router.get("getAllMovies",(req,res)=> movieSchema.find({}).then(results =>res.send(results)).catch(err => next (err)));

router.get("/getMovie/:id",(req,res,next) =>{
    const {id} = req.params;
    if (!movie[id]) return next ("no movies available");
    res.send(movie[id])

});

router.post(`/newMovie`,async(req,res,next) => {
    if (!req.body.name) return next ({status:400, message: "missing movie name"})
    try {
        const result = await movieSchema.create (req.body);
        res.status(201).send(result);
    } catch (err) {
        return next (err)
    }
    
});

router.patch(`/replace/:id`, async (req,res,next) => {
    try {
        await movieSchema.findByNameAndYear(req.params.id,req.query)
        const newMovie = await movieSchema.findByName(req.params.id);
        res.send (newMovie);
    } catch (err){
        return (err);
    }
    });

router.delete(`/delete/:id`,(req,res,next) => {
    const {id} = req.params;
    console.log("movie name",id);
    movieSchema.findByNameAndYear(id).then(result => res.send(result)).catch(err => next (err));
});

module.exports = router;

