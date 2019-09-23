module.exports = (sequelize, Sequelize) => {
  const Rescue = sequelize.define("rescue", {
    store_name: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    store_number: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    district: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    location: {
      type: Sequelize.STRING,
    },
    date: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    food_name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    time_pick_up: {
      allowNull: true,
      type: Sequelize.DATE,
    },
    time_drop_off: {
      allowNull: true,
      type: Sequelize.DATE,
    },
    last_updated_by: {
      allowNull: true,
      type: Sequelize.INTEGER,
    },
  });
  return Rescue;
};
