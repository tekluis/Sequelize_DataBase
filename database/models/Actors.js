module.exports = (sequelize, dataTypes) => {
    
    let alias = 'actors';

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        created_at : {
            type: dataTypes.DATE
        },
        updated_at : {
            type: dataTypes.DATE
        },
        first_name : {
            type : dataTypes.STRING 
        },
        last_name : {
            type : dataTypes.STRING 
        },
        rating : {
            type : dataTypes.DECIMAL
        },
        favorite_movie_id : {
            type : dataTypes.INTEGER
        }
    };

    let config = {
        timestamps : false,
        tableName : 'actors',
        createdAt : 'created_at',
        updatedAt : 'updated_at'
    };

    const Actors = sequelize.define(alias, cols, config);

    return Actors;
}