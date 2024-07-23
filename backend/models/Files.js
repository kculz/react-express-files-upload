module.exports =  (sequelize, DataTypes) => {

    const Files = sequelize.define("Files", {
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Files;
}