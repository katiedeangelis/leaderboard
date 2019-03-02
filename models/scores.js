'use strict';
module.exports = (sequelize, DataTypes) => {
    var Score = sequelize.define('Score', {
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        scorerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gamePlayed: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        }
    });
    return Score;
};