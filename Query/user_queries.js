const getIdFromUsersQuery = `SELECT id FROM users WHERE name = $1;`;

const getNameFromUsersQuery = `SELECT name FROM users WHERE id = $1;`;

const getOrdersPerUserQuery = 
`SELECT * FROM orders
JOIN order_items ON orders.id = order_id
JOIN menu_items ON menu_items.id = item_id
WHERE user_id = $1;`;

const getItemsPerUserQuery = 
` SELECT * FROM orders 
where user_id = $1;`;

const apendOrdersTableWithUserIdQuery = `
  INSERT INTO orders (user_id)
  VALUES ($1)
  RETURNING id;
`;

const apendOrderItemsTableWithCurrentOrderQuery = 
` INSERT INTO order_items (
  menu_item_id
  order_id 
  quantity )
  VALUES ($1, $2, $3)
  RETURNING order_id;`;

const updateOrdersTableWithTotalPriceQuery = 
`UPDATE orders 
  SET total_price = (
    SELECT sum(menu_item.item_price * order_items.quantity) FROM order_items
    JOIN order_items ON orders.id = order_id
    JOIN menu_items ON menu_items.id = menu_items_id
    WHERE order_id = $1 )
    WHERE id = $1;
`;

 
const getIdandOrderStatusQuery = 
`
  SELECT id, order_status, user_id
  FROM orders
  WHERE id = $1
`;

const getIdandOrderStatusQuery = `
  SELECT id, order_status, user_id
  FROM orders
  WHERE id = $1
`;

const getMenuItemsQuery = 
`
SELECT *
FROM menu_items;
`;


// NEXT: HOW TO GET ORDER STATUSES FROM ENUM //

function apendOrdersTableWithCurrentOrderReturningOrderId(, foodData) {
  return db.query(apendOrderItemsTableWithCurrentOrderQuery, foodData);  
};

function apendOrdersTableWithUserId(db, userId) {
  return db.query(apendOrdersTableWithUserIdQuery, [userId])
    .then((data) => {
      return data.rows[0].id;
    });
}

function updateOrdersTableWithTotalPrice(db, orderId) {
  return db.query(updateOrdersTableWithTotalPriceQuery, [orderId]);
}

function getUserIdFromName(, userName) {
  return db.query(getIdFromUsersQuery, [userName])
    .then((data) => {
      return data.rows[0].id;
    });
};

function getNameFromUserId(db, userData) {
  return db.query(getNameFromUsersQuery, [userData])
    .then(user => {
      return user.rows[0].name;
    })
};

function getOrdersPerUser(db, userId) {
  return db.query(getOrdersPerUserQuery, [userId])
    .then(orderData => {
      return orderData.rows;
    });
}; 

function getIdandOrderStatus(, orderId) {
  return .query(getIdandOrderStatusQuery, [orderId]).then(data => {
    return data.rows[0];
  })
};

function getItemsPerUser(, userId) {
  return .query(getItemsPerUserQuery, [userId])
    .then(orderStatusData => {
      return orderStatusData.rows
    })
};

function getMenuItems() {
  return .query(getMenuItemsQuery)
    .then(menuItemsData => {
      return menuItemsData.rows
    })
};

module.exports = {
  apendOrdersTableWithUserId,
  apendOrdersTableWithCurrentOrderReturningOrderId,
  updateOrdersTableWithTotalPrice,
  getUserIdFromName,
  getNameFromUserId,
  getOrdersPerUser,
  getItemsPerUser,
  getIdandOrderStatus,
  getMenuItems
}