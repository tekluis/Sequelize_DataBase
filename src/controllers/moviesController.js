const db = require ('../../database/models/index')
const path = require('path'); 
const { Op } = require("sequelize");


moviesController = {
    list: function(req,res) {
        db.movies.findAll()
            .then((movies) => {
                res.render(path.join(__dirname,'../views/moviesList.ejs'), {movies:movies}); 
            })
    },

    detail: function(req,res) {
        db.movies.findByPk(req.params.id)
            .then((movie) => {
                res.render(path.join(__dirname,'../views/moviesDetail.ejs'), {movie:movie}); 
            })
    },

    new: function(req,res) {
        db.movies.findAll({
            order:[['release_date','DESC'],['title','ASC']],
            offset:0,
            limit:25
        })
            .then((movies) => {
                res.render(path.join(__dirname,'../views/newestMovies.ejs'), {movies:movies}); 
            })
    },

    recomended: function(req,res) {
        db.movies.findAll({
            order:[['rating','DESC'],['title','ASC']],
            offset:0,
            limit:25,
            where: {awards:{[Op.gte]:1}}
        })
            .then((movies) => {
                res.render(path.join(__dirname,'../views/recommendedMovies.ejs'), {movies:movies}); 
            })
    },
}

module.exports = moviesController;

