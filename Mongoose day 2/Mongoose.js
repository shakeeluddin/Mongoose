const mongoose = require ("mongoose");

mongoose.connect('mongodb://localhost:27017/example',{useNewUrlParser:true},(err)=>{
    if (err) return console.log(err);
    return console.log("connection successfull");
});

const movieSchema = new Schema ({
    Movietype:{
        type: String,
        required:true, 

    },
    releasedate:{
        type: Date,
    }
})

const movie = mongoose.model("movie",movieSchema);
module.exports = movie;