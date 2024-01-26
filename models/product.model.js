import sequelize from '../config/sequelize.config.js'
import { DataTypes, Model }from 'sequelize'
import category from './category.model.js'
import Category from './category.model.js'

class Product extends Model {}

Product.init({
    id: {
        type:
        DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type:
        DataTypes.TEXT,
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

Product.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category'
})

export default Product