module.exports = (sequelize, Sequelize) => {
    const Location_user_day = sequelize.define("location_user_day", {
      location_name: {},
      user: {
        type: Sequilize.INTEGER,
        references: "user",
      },
      day: { 
        allowNull: false,
        type: Sequelize.DATE
      },
    });
    return Location_user_day;
  };