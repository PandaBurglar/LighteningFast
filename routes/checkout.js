const express = require('express');
const router = express.Router();
const { apendOrdersTableWithCurrentOrderReturningOrderId, apendOrdersTableWithUserId, getCheckoutPage } = require('../Query/user_queries');

module.exports = (db) => {
  router.get('/', (req, res) => {
    getCheckoutPage(db, 8)
      .then(data => {
        const checkout = data;
        const templateVars = { checkout };
        res.render('checkout', templateVars)
        location.reload();
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
      // location.reload();
  });

  router.post('/', (req, res) => {
    let orderInfo = JSON.parse(req.body.data);
    apendOrdersTableWithUserId(db, 8)
      .then
      (id => orderInfo.forEach(order => {
        apendOrdersTableWithCurrentOrderReturningOrderId(db, [order.id, id, order.qty])
      }
      ))
  });

  return router;
};


