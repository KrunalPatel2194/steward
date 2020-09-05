
const {Sequelize,sequelize} = require('../connect');
const Category = require('../models/category');

const MenuItem = sequelize.define('menuitem', {
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Description: {
        type: Sequelize.STRING
    },
    Image: { 
        type : Sequelize.STRING
    },
    Price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    // categoryId:{
    //     type:Sequelize.NUMBER,
    //     allowNull:false
    // },
    isActive:{
        type:Sequelize.BOOLEAN,
        defaultValue: Sequelize.BOOLEAN
    },
    isDeleted:{
        type:Sequelize.BOOLEAN,
        defaultValue: Sequelize.BOOLEAN
    }
    }, {
    
    // options
    
    });
    MenuItem.sync({ force: true }) //User.sync({ force: true })

exports.MenuItem = MenuItem;