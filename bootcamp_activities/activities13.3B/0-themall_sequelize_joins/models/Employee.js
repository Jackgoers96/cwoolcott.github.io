const { Model, DataTypes } = require('sequelize');
const Store = require('./Store');
const sequelize = require('../db');

class Employee extends Model { };

Employee.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 40]
        }
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [2, 50]
        }
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 40]
        }
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    store_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Store,
            key: 'id'
        }
    }
},
    {
        sequelize,
        timestamps: false,
        modelName: 'employee'
    }
);

module.exports = Employee;