const express = require('express');
const router = express.Router();
const apendOrderItemsTableWithCurrentOrderQuery = require('../Query/user_queries');


module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`
    SELECT *
    FROM menu_items;
    `)
      .then(data => {
        const menu = data.rows;
        console.log(menu);
        const templateVars = { menu };
        res.render('menu', templateVars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // router.post('/', (req, res) => {
  //   console.log('req==', req);
  //   const values = [1, 6, 1];
  //   apendOrderItemsTableWithCurrentOrderQuery(db, values)
  //   .then(res => { console.log('res', res) })
  // });


  return router;
};
