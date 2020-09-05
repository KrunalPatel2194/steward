
const {Sequelize,sequelize} = require('../connect');
const MenuItem = require('./menuItem');
const Category = sequelize.define('category', {
    typeName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isDeleted:{
        type:Sequelize.BOOLEAN,
        defaultValue: Sequelize.BOOLEAN
    }
    }, {
    
    // options
    
    });
    
    
    Category.associate = () => {
        Category.belongsToMany(MenuItem); //, {foreignKey: 'id', as: 'Employee'}
      };
    Category.sync({ force: true }) //User.sync({ force: true })

exports.Category = Category;