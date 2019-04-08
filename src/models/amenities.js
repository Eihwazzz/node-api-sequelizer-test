module.exports = (sequelize, DataType) => {

    const Amenities = sequelize.define('Amenities', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    Amenities.associate = (models) => {
        Amenities.belongsToMany(models.Hotels, {through: 'HotelAmenities'});
    }

    return Amenities;

};