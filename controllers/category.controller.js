import CategoryModel from "../models/category.model.js";
import ProductModel from "../models/product.model.js";

CategoryModel.hasMany(ProductModel, {
    foreignKey: 'category_id',
    as: 'products'
})
class categoryController {
    constructor() {
        console.log('method executed when category controller is called');
    }
    list = async (req, res) => {
        const result = await CategoryModel.findAll()
        res.json(result)
        console.log('list-method (category controller)');
    }
    details = async () => {
        const {id} = req.params //gets id from the url param
        const result = await CategoryModel.findOne({
            where: {id: id}
        })
        res.json(result)
    }

    create = async () => {
        const {title} =req.body
        if (title) {
            const result = await CategoryModel.create(req.body)
            res.json({
                message: 'category created',
                new_id: result.id()
            })
        }
    }

    update = async () => {
        const {id, title} =req.body
        if (id && title) {
            const result = await CategoryModel.update(req.body)
            res.json({
                message: 'category updated',
            })
        }
    }
    delete = async (req, res) => {
        const {id} = req.params
        await CategoryModel.destroy({
            where: {id: id}
        })
        res.status(200).send({
            message: 'category deleted'
        })
    }

}

export default categoryController