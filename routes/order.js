const express = require('express');
const router = express.Router();
const { updateOrdersTableWithTotalPrice,
  updateOrdersTableWithExpectedPickup,
  updateOrderStatusInOrdersTable, getOrdersPerUser } = require('../Query/user_queries');

module.exports = (db) => {
  // This should show ALL the orders for a user.
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log('id', id);
    getOrdersPerUser(db, id)
      .then(data => {
        const order = data;
        console.log('order', order);
        const templateVars = { order };
        res.render('order', templateVars)
        // res.status(200)
          // .json({ order })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post('/', (req, res) => {
    let orderDetails = JSON.parse(req.body.data);
    console.log(orderDetails);
    orderDetails.forEach(order => {
      updateOrdersTableWithTotalPrice(db, order.orderItemsId, order.id)
        .then(data => {
          const orderSubmit = data.rows;
          console.log(orderSubmit);
          const templateVars = { orderSubmit };
          res.render('order', templateVars);

          // apendOrdersTableWithCurrentOrderReturningOrderId(db, [order.id, id, order.qty]))
        })

      // router.post('/', (req, res) => {
      //   let orderInfo = JSON.parse(req.body.data);
      //   console.log(orderInfo);
      //   orderInfo.forEach(order=> {
      //     apendOrdersTableWithUserId(db, 4)
      //     .then(id => apendOrdersTableWithCurrentOrderReturningOrderId(db, [order.id, id, order.qty]))
      //  })
      // });

    });

    router.get('/:id', (req, res) => {

    })
    // This should show details about a specific order.
    // route.get('/:id', (req, res) => {
    //   // Write the query in here to get info for a specific order.
    // })

    // This route creates an order. POST To this route when the user clicks on the SUBMIT ORDER button to confirm the order.
    // router.post('/', (req, res) =>{
    //   const values = [3]
    //   db.query(`
    //       INSERT INTO order(user_id)
    //       VALUES($1)
    //       `, values).then(res => {console.log('res', res)})
    // })


  })
  return router;
};
