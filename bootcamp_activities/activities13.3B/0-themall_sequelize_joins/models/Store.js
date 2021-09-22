const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Store extends Model { };

Store.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            len: [5, 20]
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 5
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'open',
        validate: {
            isIn: [['open', 'closed']],   // check the value is one of these
        }
    }
},
    {
        sequelize,
        timestamps: false,
        modelName: 'store'
    }
);

module.exports = Store;