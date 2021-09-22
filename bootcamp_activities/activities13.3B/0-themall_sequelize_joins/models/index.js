const Employee = require('./Employee')
const Store = require('./Store');

//hasMany belongsTo
Store.hasMany(Employee, {
    foreignKey: 'store_id',
    onDelete: 'CASCADE'
});

Employee.belongsTo(Store, {
    foreignKey: 'store_id',
})

module.exports = { Store, Employee };