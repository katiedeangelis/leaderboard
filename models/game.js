'use strict';
module.exports = (sequelize, DataTypes) => {
    var Game = sequelize.define('Game', {
        gameID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        gameName: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Game.associate = function (models) {
        models.Game.hasMany(models.Score, {
            foreignKey: "gamePlayed",
            onDelete: "cascade"
        });
    };

    return Game;
};