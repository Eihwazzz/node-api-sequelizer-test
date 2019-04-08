module.exports = (sequelize, DataType) => {

    const Hotels = sequelize.define('Hotels', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        stars: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        price: {
            type: DataType.DECIMAL(8,2),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        image: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    Hotels.associate = (models) => {
        Hotels.belongsToMany(models.Amenities, {through: 'HotelAmenities'});
    }

    return Hotels;

};