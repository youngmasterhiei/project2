module.exports = function (sequelize, DataTypes) {
    var Blog = sequelize.define("Blog", {
        name: DataTypes.STRING,
        title: DataTypes.STRING,
        message: DataTypes.TEXT,

    });
    return Blog;
};