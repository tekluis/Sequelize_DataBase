const db = require ('../../database/models/index')
const path = require('path'); 
const { Op } = require("sequelize");


actorsController = {
    list: function(req,res) {
        db.actors.findAll(
            {
                order:[['last_name','ASC']],
                offset:0,
                limit:100
            }
        )
            .then((actors) => {
                res.render(path.join(__dirname,'../views/actorsList.ejs'), {actors:actors}); 
            })
    },

    detail: function(req,res) {
        db.actors.findByPk(req.params.id)
            .then((actor) => {
                res.render(path.join(__dirname,'../views/actorsDetail.ejs'), {actor:actor}); 
            })
    },

    recomended: function(req,res) {
        db.actors.findAll({
            order:[['rating','DESC'],['last_name','ASC']],
            offset:0,
            limit:100,
            where: {rating:{[Op.gte]:2}}
        })
            .then((actors) => {
                res.render(path.join(__dirname,'../views/recommendedActors.ejs'), {actors:actors}); 
            })
    },
}

module.exports = actorsController;

