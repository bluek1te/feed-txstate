module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        user_name : {
            allowNull: false,
            type: Sequelize.STRING
        }
    })
}