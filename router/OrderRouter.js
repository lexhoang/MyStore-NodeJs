//Khai báo thư viện express
const express = require('express');


//Import Middleware
const { OrderMiddleware } = require('../middleware/OrderMiddleware');

//Khai báo router
const OrderRouter = express.Router();

//Sử dụng Middleware
OrderRouter.use(OrderMiddleware)

//Sử dụng controller
const { createOrderOfCustomer, getCustomerByOrderId, getAllOrder, getAllOrderOfCustomer, getOrderById, updateOrder, deleteOrderOfCustomer } = require('../controller/OrderController');

//KHAI BÁO API

// Create Order Of Customer
OrderRouter.post('/customers/:customerId/orders', createOrderOfCustomer);

//Get ALL
OrderRouter.get('/orders', getAllOrder);


// Get All Order Of Customer
OrderRouter.get('/customers/:customerId/orders', getAllOrderOfCustomer);

//Get Order BY ID
OrderRouter.get('/orders/:orderId', getOrderById);

//Update Order
OrderRouter.put('/orders/:orderId', updateOrder)

// Delete Order Of Customer
OrderRouter.delete("/customers/:customerId/orders/:orderId", deleteOrderOfCustomer)



module.exports = OrderRouter;