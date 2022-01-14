const getItemsPerOrderQuery =
`SELECT menu_items.item_name AS name, order_items.order_id AS order_id, order_items.quantity AS quantity from order_items
 JOIN menu_items ON order_items.menu_item_id = menu_items.id
 GROUP BY order_items.order_id, menu_items.item_name, order_items.quantity
 ORDER BY order_items.order_id;`;


const updateOrderStatusQuery =
`UPDATE orders
 SET status = $1
 WHERE id = $2
RETURNING *;`;


const getOrderByIdQuery =
`SELECT status, expected_pickup from orders WHERE id = $1;`;


const checkDbQuery =
`SELECT status, id FROM orders WHERE id = $1 AND status = $2;`


const getCompletedAndCancelledOrdersQuery =
`SELECT orders.id AS order_id, orders.status AS order_status, users.phone_number AS phone, users.id, orders.total_price AS total_price,
orders.placed_at AS date
FROM orders
RIGHT JOIN users ON orders.user_id = users.id
WHERE status = $1 OR
status = $2;`;

const getPendingAndPreparedOrdersQuery =
`Select orders.id AS order_id, orders.status from orders
 RIGHT JOIN users ON orders.user_id = users.id
 WHERE status = '$1
 OR status = $2;`;

const getReadyForPickUpOrdersQuery =
`SELECT orders.id, users.name, users.phone_number from orders
JOIN users ON orders.user_id = users.id
WHERE orders.status = $1;`;


function getPendingAndPreparedOrders(db) {
  return db.query(getPendingAndPreparedOrdersQuery).then(ordersFromQuery => {
    return ordersFromQuery.rows;
  })
};

function getOrderByOrderId(db, request) {
  const orderId = request.body.orderId;
  const status = request.body.status;
  return db.query(getOrderByIdQuery, [orderId]).then(orderFromQuery => {
    return (orderFromQuery.rows.length > 0);
  })
};

function getItemsPerOrder(db) {
  return db.query(getItemsPerOrderQuery).then(itemsFromQuery => {
    return itemsFromQuery.rows
  })
};

function checkDb(db, request) {
  const orderId = request.body.order_id;
  const orderStatus = request.body.current_status;
  return db.query(checkDbQuery, [orderId, orderStatus]).then(order => {
    if (order.rows[0]) {
      return order.rows[0].order_status === orderStatus;
    } else {
      return false;
    }
  })
    .catch((error) => {
      console.error(error);
      return false;
    })
};

function updateOrderStatus(db, request) {
  const newStatus = request.body.status;
  const orderId = request.body.order_id;
  const expected_pickup = request.body.order_expected_pickup;
  return db.query(updateOrderStatusQuery, [newStatus, expected_pickup, orderId]);
};

function getCompletedAndCancelledOrders(db) {
  return db.query(getCompletedAndCancelledOrdersQuery).then(orders => {
    return orders.rows;
  })
};


function getReadyForPickup(db) {
  return db.query(getReadyForPickUpOrdersQuery).then(orders => {
    return orders.rows;
  })
};

module.exports = {
  getPendingAndPreparedOrders,
  getItemsPerOrder,
  updateOrderStatus,
  getOrderByOrderId,
  checkDb,
  getCompletedAndCancelledOrders,
  getReadyForPickup
}
