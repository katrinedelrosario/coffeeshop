import sequelize from '../config/sequelize.config.js'
import { DataTypes, Model }from 'sequelize'
import ProductModel from './product.model.js'

class CategoryModel extends Model {}

CategoryModel.init({
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



export default CategoryModel