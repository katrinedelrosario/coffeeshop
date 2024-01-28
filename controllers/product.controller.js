import CategoryModel from "../models/category.model";
import ProductModel from "../models/product.model";

class productController {
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

    details = async () => {
        const {id} = req.params //gets id from the url param
        const result = await ProductModel.findOne({
            where: {id: id}
        })
        res.json(result)
    }

    create = async () => {
        const {title, price, image_url, description, roastlevel, weight, category_id } = req.body //gets form data
        if(title && price && image_url && description && roastlevel && weight && category_id ) {
            const result = await ProductModel.create(req.body)

            res.json({
                message: 'product created',
                new_id: result.insertId()
            })
        }
    }

    update = async () => {
        const {id, title, price, image_url, description, roastlevel, weight, category_id} = req.body
        if (id && title && price && image_url && description && roastlevel && weight && category_id ) {
            const result = await ProductModel.update(req.body)

            res.json({
                message: 'product updated'
            })
        }
    }

    delete = async (req, res) => {
        const {id} = req.params
        await ProductModel.destroy({
            where: {id: id}
        })
        res.status(200).send({
            message: 'product deleted'
        })
    }
}

export default productController