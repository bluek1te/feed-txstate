module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define("location", {
    location_name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    address: {
      allowNull: false,
      type: Sequelize.STRING,
    }
  });
  return Location;
};
