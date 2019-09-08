module.exports = (sequelize, Sequelize) => {
    const Carts = sequelize.define( 'carts',  {
        cartsArray: {
            type: Sequelize.ARRAY(Sequelize.DOUBLE),
            allowNull: false,
            validate: {
                isSpecificLength(value) {
                    if(value.length !== 7 || value.length <= 0) {
                        throw new Error("carts array must have exactly 7 items.")
                    }
                }
            }
        }
    })
}