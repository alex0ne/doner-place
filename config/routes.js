const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    app.get('/', controllers.home.index);
    //app.get('/order-status', restrictedPages.hasRole('Admin'), controllers.home.order-status);
    app.get('/register', controllers.user.registerGet);
    app.post('/register', controllers.user.registerPost);
    app.post('/logout', controllers.user.logout);
    app.get('/login', controllers.user.loginGet);
    app.post('/login', controllers.user.loginPost);

    //Place an order
    app.get('/order', controllers.order.getMakeOrderView)

    //Create product
    app.get('/create-product', restrictedPages.hasRole('Admin'), controllers.product.getCreateProductView)
    app.post('/create-product', controllers.product.createProduct)


    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};