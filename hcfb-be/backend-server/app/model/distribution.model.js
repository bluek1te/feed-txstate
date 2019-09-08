module.exports = (sequelize, Sequelize) => {
  const Distribution = sequelize.define("distribution", {
    deliveryLocation: {
      type: Sequelize.STRING,
    },
    deliveryDepartureTime: {
      type: Sequelize.DATE,
    },
    deliveryWeights: {
      type: Sequelize.ARRAY(Sequelize.DOUBLE),
      allowNull: true,
      validate: {
        isSpecificLength(value) {
          if (value.length != 7 || value.length <= 0) {
            throw new Error("deliveryWeights array must have exactly 7 items.");
          }
        },
      },
    },
    projectedNumberOfClients: {
      type: Sequelize.INTEGER,
    },
  });
  return Distribution;
};
