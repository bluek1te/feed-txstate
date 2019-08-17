module.exports = (sequelize, Sequilize) => {
    const Distribution = sequilize.define('distribution', {
        deliveryLocation: {
            type: Sequelize.STRING
        },
        deliveryTime: {
            type: Sequelize.DATE
        },
        deliveryWeights : {
            type: Sequelize.ARRAY(Sequilize.DOUBLE),
            allowNull: true,
            validate: {
                isSpecificLength(value) {
                    if(value.length != 7) {
                        throw new Error("deliveryWeights array must have exactly 6 items.")
                    }
                }
            }
        },
        projectedNumberOfClients: {
            type: Sequilize.INTEGER
        }
    });
    return Distribution;
}

