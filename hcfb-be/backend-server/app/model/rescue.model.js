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
    meat_temp_pick_up: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    meat_temp_drop_off: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    produce_temp_pick_up: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    produce_temp_drop_off: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    time_pick_up: {
      allowNull: true,
      type: Sequelize.DATE,
    },
    last_updated_by: {
      allowNull: true,
      type: Sequelize.STRING,
    },
  });
  return Rescue;
};
