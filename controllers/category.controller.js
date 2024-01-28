import CategoryModel from "../models/category.model.js";
import ProductModel from "../models/product.model.js";

//relations
CategoryModel.hasMany(ProductModel, {
    foreignKey: 'category_id',
})
ProductModel.belongsTo(CategoryModel, {
    foreignKey: 'category_id'
})


class CategoryController {
    constructor() {
        console.log('method executed when category controller is called');
    }

    list = async (req, res) => {
        try {
            const result = await CategoryModel.findAll()
            res.json(result)
            console.log('list-method (category controller)');
        }catch(err) {
            res.status(500).json({
                message: 'error fetchin categories'
            })
            console.error('error fetching categories', err);
        }
    }

    details = async (req, res) => {
        try {
            const {id} = req.params //gets id from the url param
            const result = await CategoryModel.findOne({
                where: {id: id}
            })
            if (result) {
                res.json(result)
            } else {
                res.status(404).json({
                    message: `category id: ${id} not found`
                })
            }
        }catch(err) {
            res.status(500).json({
                message: `error fetching category details of id: ${id}`
            })
            console.error(`error fetching category details of id: ${id}`, err);
        }
    }

    create = async (req, res) => {
        const {title} =req.body
        if (title) {
           try {
             const model = await CategoryModel.create({title})
             res.status(201).json({
                 new_id: model.id(),
                 message: `category id: ${model.id} created`
             })
           } catch (err) {
            res.status(500).json({
                message: 'error creating category'
            })
            console.error( 'error creating category',err);
           }
        }else {
            res.status(400).json({
                message: 'title required'
            })
        }
    }

    update = async (req, res) => {
        const {title} = req.body
        const {id} = req.params
        if (title && id) {
            try {
                const [updated] = await CategoryModel.update({title}, {
                    where: {id}
                })
                if (updated) {
                    res.json({
                        message: `category with id: ${id} updated`})
                } else {
                    res.status(404).json({
                        message: `category woth id: ${id} not found`
                    })
                }
            }catch (err) {
                console.error(`error updating category with id: ${id}`, err);
                res.status(500).json({
                    message: `error updating category with id: ${id}`
                })
            }
        }else {
            res.status(400).json({
                message: 'title + id required'
            })
        }
    }
    delete = async (req, res) => {
        try {
            const {id} = req.params
            const deleted = await CategoryModel.destroy({
                where: {id:id}
            })
            if (deleted) {
                res.json({
                    message: `category with id: ${id} deleted`
                })
            } else {
                res.status(404).json({
                    message: `category with id:${id} not found`
                })
            }
        } catch (err) {
            res.status(500).json({
                message:`error deleting category id: ${id}`
            })
            console.error(`error deleting category id: ${id}`, err);
        }
    }

}

export {CategoryController}