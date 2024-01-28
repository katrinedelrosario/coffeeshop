import CategoryModel from "../models/category.model.js";
import ProductModel from "../models/product.model.js";

ProductModel.belongsTo(CategoryModel, {
    foreignKey: 'category_id',
    as: 'category'
})

class ProductController {
    constructor() {
        console.log('method executed when product controller is called');
    }
    list = async (req, res) => {
        const result = await ProductModel.findAll({
            include: CategoryModel
        })
        res.json(result)
        console.log('list-method (product controller)');
    }

    details = async (req, res) => {
        try {
            const {id} = req.params //gets id from the url param
            const result = await ProductModel.findOne({
                include: CategoryModel,
                where: {id: id}
            })
            if (result) {
                res.json(result)
            }else {
                res.status(404).json({
                    message: `product with id: ${id} not found`
                })
            }
        } catch(err) {
            res.status(500).json({
                message: `error fetching product details for id: ${id}`
            })
            console.error(`error fetching product details for id: ${id}` ,err);
        }
    }

    create = async (req, res) => {
        const {title, price, image_url, description, roastlevel, weight, category_id } = req.body //gets form data
        if(title && price && image_url && description && roastlevel && weight && category_id ) {
            try {
                const result = await ProductModel.create({title, price, image_url, description, roastlevel, weight, category_id})
                res.status(201).json({
                    message: `product created with new id: ${result.id}`
                })
            }catch(err) {
                res.status(500).json({
                    message: 'error creating product'
                })
                console.error('error creating product', err);
            }
        }else {
            res.status(400).json({
                message: 'all product details required'
            })
        }
    }

    update = async (req,res) => {
        const {id, title, price, image_url, description, roastlevel, weight, category_id} = req.body
        if (id && title && price && image_url && description && roastlevel && weight && category_id ) {
            try {
                const [updated] = await ProductModel.update({id, title, price, image_url, description, roastlevel, weight, category_id}, {
                    where: {id}
                })
                if (updated) {
                    res.json({
                        message: `product with id: ${id} created`
                    })
                } else {
                    res.status(404).json({
                        message: `product with id: ${id} not found`
                    })
                }
            } catch(err) {
                res.status(500).json({
                    message: `error updating product with id: ${id} `
                })
                console.error(`error updating product with id: ${id} `, err);
            }
        } else {
            res.status(400).json({
                message: 'all product data and id is required'
            })
        }
    }

    delete = async (req, res) => {
        const {id} = req.params
        try {
            const deleted = await ProductModel.destroy({
                where: {id: id}
            })
            if (deleted) {
                res.json({
                    message: `product with if ${id} deleted`
                })
            }else {
                res.status(404).json({
                    message: `product with id: ${id} not found`
                })
            }
        } catch (err) {
            res.status(505).json({
                message: `error deleting product with id: ${id}`
            })
            console.error(`error deleting product with id: ${id}`, err);
        }
    }
}

export {ProductController}