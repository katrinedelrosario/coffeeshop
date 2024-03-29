import sequelize from '../config/sequelize.config.js'
import { DataTypes, Model }from 'sequelize'

class ProductModel extends Model {}

ProductModel.init({
    id: {
        type:
        DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type:
        DataTypes.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey:false
    },
    price: {
        type:DataTypes.DOUBLE,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false

    },
    image_url: {
        type:DataTypes.TEXT,
        autoIncrement:false,
        allowNull: false,
        primaryKey: false
    },
    description: {
        type:DataTypes.TEXT,
        autoIncrement:false,
        allowNull: false,
        primaryKey: false
    },
    roastlevel: {
        type:DataTypes.BIGINT,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },
    weight: {
        type:DataTypes.DOUBLE,
        autoIncrement: false,
        allowNull: false,
        primaryKey:false
    },
    category_id: {
        type:DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'category',
            key: 'id',
        }
    }
}, {
    sequelize,
    modelName: 'product',
    underscored: true,
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
    timestamps: true
})



export default ProductModel