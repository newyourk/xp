const InsertOrder = require('./InsertOrder');

const UpdateOrderStatus = require('./UpdateOrderStatus');
const GetAllOrdersByEmpId = require('./GetAllOrdersByEmpId');
const GetAllOrdersByExpertId = require('./GetAllOrdersByExpertId');
const GetAllOrdersByUId = require('./GetAllOrdersByUId');
const GetAllOrdersByUIdShort = require('./GetAllOrdersByUIdShort');
const GetOrderByOrderId = require('./GetOrderByOrderId');

const GetAllOrders = require('./GetAllOrders');
const UpdateOrder = require('./UpdateOrder');



module.exports = {
    InsertOrder,    
    UpdateOrderStatus,
    GetAllOrdersByExpertId,
    GetAllOrdersByEmpId,
    GetAllOrdersByUId,
    GetAllOrdersByUIdShort,
    GetOrderByOrderId,
    GetAllOrders,
    UpdateOrder,
}