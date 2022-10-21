module.exports = (sequelize, dataTypes) => {
    
    let alias = 'movies';

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
        name : {
            type : dataTypes.STRING 
        },
        ranking : {
            type : dataTypes.INTEGER
        },
        active : {
            type : dataTypes.INTEGER
        }
    };

    let config = {
        timestamps : false,
        tableName : 'movies',
        createdAt : 'created_at',
        updatedAt : 'updated_at'
    };

    const Movie = sequelize.define(alias, cols, config);

    return Movie;
}