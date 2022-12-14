module.exports = (sequelize, dataTypes) => {
    
    let alias = 'genres';

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
        tableName : 'genres',
        createdAt : 'created_at',
        updatedAt : 'updated_at'
    };

    const Genre = sequelize.define(alias, cols, config);

    return Genre;
}