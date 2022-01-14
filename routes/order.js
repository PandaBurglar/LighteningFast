const express = require('express');
const router = express.Router();
const { updateOrdersTableWithTotalPrice,
  updateOrdersTableWithExpectedPickup,
  updateOrderStatusInOrdersTable, getOrdersPerUser } = require('../Query/user_queries');
  const {updateOrderStatus} = require('../Query/restaurant_queries');

module.exports = (db) => {
  // This should show ALL the orders for a user.
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    getOrdersPerUser(db, id)
      .then(data => {
        const order = data;
        const templateVars = { order };
        res.render('order', templateVars)
        location.reload();
      })

      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post('/', (req, res) => {
    let orderDetails = JSON.parse(req.body.data)

    const accountSid = process.env.TWILIO_ACC_SID;
    const authToken = process.env.TWILIO_AUTH;
    const client = require("twilio")(accountSid, authToken);

    client.messages.create({
      to: '+17633479658',
      from: '+16479551772',
      body: 'Thank you for placing an order with Cloud Cafe. Your order has been confirmed.'
    })
      .then((message) => console.log(message.sid));

    orderDetails.forEach(order => {
      updateOrdersTableWithTotalPrice(db, order.orderItemsId, order.id)
        .then(data => {
          updateOrdersTableWithExpectedPickup(db, order.time, order.id)
          const orderSubmit = data.rows;
          console.log(orderSubmit);
          const templateVars = { orderSubmit };
          res.render('order', templateVars);

        })

    })

  })
  return router;
};
