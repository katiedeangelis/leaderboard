'use strict';
module.exports = (sequelize, DataTypes) => {
    var Game = sequelize.define('Game', {
        gameName: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    //   Saved.associate = function (models) {
    //     models.Saved.belongsTo(models.Person, {
    //       foreignKey: 'caseNumber',
    //       allowNull: false
    //     });
    //   };
    return Game;
};