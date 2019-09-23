module.exports = (sequelize, Sequelize) => {
    const Food_Name_Food_Type = sequelize.define("food_name_food_type", {
        food_name: {
            type: Sequelize.STRING
        },
        food_type: {
            type: Sequelize.STRING
        }
    });
    return Food_Name_Food_Type;
}