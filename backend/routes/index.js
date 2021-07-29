const authRoute = require('./auth.route')
const categoryRoute = require('./category.route')
const categoryDetailRoute = require('./category_detail.route')
const productRoute = require('./product.route')

const router = (app) => {
    app.get('/', (req, res) => {
        res.send('Clothes Shop')
    });

    app.use('/auth', authRoute)
    app.use('/category', categoryRoute)
    app.use('/category-detail', categoryDetailRoute)
    app.use('/products', productRoute)
}

module.exports = router;

