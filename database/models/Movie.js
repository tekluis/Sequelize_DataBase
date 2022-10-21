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
        title : {
            type : dataTypes.STRING 
        },
        rating : {
            type : dataTypes.DECIMAL
        },
        awards : {
            type : dataTypes.INTEGER
        },
        release_date : {
            type: dataTypes.DATE
        },
        length : {
            type : dataTypes.INTEGER
        },
        genre_id : {
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