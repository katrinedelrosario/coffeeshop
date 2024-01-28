import sequelize from '../config/sequelize.config.js'
import { DataTypes, Model }from 'sequelize'
import Product from './product.model.js'

class Category extends Model {}

Category.init({
    id: {
        type:DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type:DataTypes.TEXT,
        autoIncrement: false,
        allowNull: false,
        primaryKey:false
    }
}, {
    sequelize,
    modelName: 'product',
    underscored: true,
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
    timestamps: false
})

Category.hasMany(Product, {
    foreignKey: 'category_id',
    as: 'products'
})

export default CategoryModel