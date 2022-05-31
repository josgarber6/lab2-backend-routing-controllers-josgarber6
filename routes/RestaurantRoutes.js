'use strict'
const RestaurantController = require('../controllers/RestaurantController')
const OrderController = require('../controllers/OrderController')
const ProductController = require('../controllers/ProductController')

module.exports = (options) => {
  const app = options.app

  // TODO: Include routes for restaurant described in the lab session wiki page.

  app.route('/restaurants')
    .get(RestaurantController.index)
    // creación restaurante (CRUD FR1 owner)
    .post(RestaurantController.create)

  app.route('/restaurants/:restaurantId')
    .get(RestaurantController.show)

  app.route('/restaurants/:restaurantId')
  // actualización restaurante
    .put(RestaurantController.update)

    .delete(RestaurantController.destroy)

  app.route('/restaurants/:restaurantId/orders')
    .get(OrderController.indexRestaurant)

  app.route('/restaurants/:restaurantId/products')
    .get(ProductController.indexRestaurant)

  app.route('restaurants/:restaurantId/analytics')
    .get(OrderController.analytics)
}
