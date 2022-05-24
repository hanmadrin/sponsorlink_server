const sequelize = require('sequelize');
const db = require('../configs/database.js');
const Link = db.define('link', {
    id: {
        type: sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    url:{
        type: sequelize.STRING(500),
        allowNull: false,
    },
    hostname:{
        type: sequelize.STRING(200),
        allowNull: false,
        unique: true
    },
    status:{
        type: sequelize.STRING(20),
        allowNull: true,
    }
},{
    freezeTableName: true,
    tableName: 'links'
});
// Link.sync({force:true});
module.exports = Link;