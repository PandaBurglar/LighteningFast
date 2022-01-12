const express = require('express');
const router  = express.Router();
const apendOrderItemsTableWithCurrentOrderQuery = require('../Query/user_queries');
const apendOrdersTableWithUserIdQuery = require('../Query/user_queries');

module.exports = (db) => {
router.get('/', (req, res) =>{
console.log('This getRoute should show the user what to display in their checkout cart');
  // db.query( `SELECT order_id, quantity, total_price as total, menu_items.item_name as item, menu_items.item_price as unit_price, menu_items.image, users.name as customer FROM order_items JOIN orders ON orders.id = order_id JOIN menu_items ON menu_items.id = order_items.menu_item_id JOIN users ON users.id = $1; `)
  // .then(data => {
  //   const checkout = data.rows;
  //   console.log('checkout:',checkout);
  //   const templateVars = {checkout};
  //   res.render('checkout', templateVars)
  // })
  // .catch(err => {
  //   res
  //     .status(500)
  //     .json({ error: err.message });
  // });
});

// router.post('/', (req, res) =>{
//   const values = [7]
//   db.query(`
//       INSERT INTO order(user_id)
//       VALUES($1)
//       `, values).then(res => {console.log('res', res)})
// });

router.post('/', (req, res) => {
  let orderInfo = JSON.parse(req.body.data);
  const values = [1, req.body.id, req.body.qty];
  apendOrdersTableWithUserIdQuery(db, )
  .then(res => apendOrderItemsTableWithCurrentOrderQuery(db, ))
  // apendOrderItemsTableWithCurrentOrderQuery(db, values)
  // .then(res => { console.log('res', res) })
});

return router;
};

