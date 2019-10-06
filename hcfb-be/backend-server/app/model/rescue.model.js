module.exports = (sequelize, Sequelize) => {
  const Rescue = sequelize.define("rescue", {
    store_name: {
      type: Sequelize.STRING,
    },
    store_number: {
      type: Sequelize.STRING,
    },
    district: {
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
      type: Sequelize.STRING,
    },
    time_pick_up: {
      type: Sequelize.DATE,
    },
    time_drop_off: {
      type: Sequelize.DATE,
    },
    last_updated_by: {
      type: Sequelize.INTEGER,
    },
  });
  return Rescue;
};
