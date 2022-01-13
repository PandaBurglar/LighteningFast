const express = require('express');
const router = express.Router();
const { apendOrdersTableWithCurrentOrderReturningOrderId, apendOrdersTableWithUserId, getCheckoutPage } = require('../Query/user_queries');

module.exports = (db) => {
  router.get('/', (req, res) => {
    console.log('This getRoute should show the user what to display in their checkout cart');
    getCheckoutPage(db, 4)
    .then(data => {
      const checkout = data;
      console.log('checkout:', checkout);
      const templateVars = {checkout};
      res.render('checkout', templateVars)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  router.post('/', (req, res) => {
    let orderInfo = JSON.parse(req.body.data);
    console.log(orderInfo);
    orderInfo.forEach(order=> {
      apendOrdersTableWithUserId(db, 4)
      .then(id => apendOrdersTableWithCurrentOrderReturningOrderId(db, [order.id, id, order.qty]))
 })
});

return router;
};

  // router.post('/', (req, res) =>{
  //   const values = [7]
  //   db.query(`
  //       INSERT INTO order(user_id)
  //       VALUES($1)
  //       `, values).then(res => {console.log('res', res)})
  // });

// const values = [req.body.id, res, req.body.qty];
// apendOrderItemsTableWithCurrentOrderQuery(db, values)
// .then(res => { console.log('res', res) })
