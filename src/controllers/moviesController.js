const db = require ('../../database/models/index')
const path = require('path'); 


moviesController = {
    list: function(req,res) {
        db.movies.findAll()
            .then((movies) => {
                res.render(path.join(__dirname,'../views/moviesList.ejs'), {movies:movies}); 
            })
    }
}

module.exports = moviesController;

