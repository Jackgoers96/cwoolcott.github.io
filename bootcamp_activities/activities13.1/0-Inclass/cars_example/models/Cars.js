const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cars extends Model { };

Cars.init(
    {
        make: {
            type: DataTypes.STRING
        },
        model: {
            type: DataTypes.STRING
        },
        yearMade: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'carsonlot'
    }
);

module.exports = Cars;


