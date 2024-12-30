const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../configue/db"); // Correctly import sequelize

const User = sequelize.define("User", {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobilenumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [10, 10],
            isNumeric: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdDate: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        field: 'createdAt',
    },
    createdBy: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    updatedDate: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updatedAt',
    },
});

// Sync the database
sequelize.sync()
    .then(() => {
        console.log('User table synced successfully!');
    })
    .catch((error) => {
        console.error('Unable to sync table: ', error);
    });

module.exports = User;
