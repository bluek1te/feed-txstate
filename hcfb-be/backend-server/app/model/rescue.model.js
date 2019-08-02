module.exports = (sequelize, Sequelize) => {
    const Rescue = sequelize.define('rescue', {
        store_name: {
            type: Sequelize.STRING
        },
        store_number: {
            type: Sequelize.STRING
        },
        district:{
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        meat_time_pick_up:{
            type: Sequelize.DATE
        },
        meat_temp_pick_up : {
            type: Sequelize.STRING
        },
        meat_time_drop_off: {
            type: Sequelize.DATE
        },
        meat_temp_drop_off: {
            type: Sequelize.STRING
        },
        produce_time_pick_up: {
            type: Sequelize.DATE
        },
        produce_temp_pick_up: {
            type: Sequelize.STRING
        },
        produce_time_drop_off: {
            type: Sequelize.DATE
        },
        produce_temp_drop_off: {
            type: Sequelize.STRING
        },
        time_pick_up: {
            type: Sequelize.DATE
        },
        updated_at: {
            type: Sequelize.DATE
        },
        last_updated_by: {
            type: Sequelize.STRING
        }
    });
    return Rescue;
}

