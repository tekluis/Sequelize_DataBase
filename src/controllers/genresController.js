const db = require ('../../database/models/index')
const path = require('path'); 
const { Op } = require("sequelize");

genresController = {
    list: function(req,res) {
        db.genres.findAll()
            .then((genres) => {
                res.render(path.join(__dirname,'../views/genresList.ejs'), {genres:genres}); 
            })
    },

    detail: function(req,res) {
        db.genres.findByPk(req.params.id)
            .then((genre) => {
                res.render(path.join(__dirname,'../views/genresDetail.ejs'), {genre:genre}); 
            })
    },
}

module.exports = genresController;