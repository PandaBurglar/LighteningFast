const express = require('express');
const router  = express.Router();


module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`
    SELECT *
    FROM menu_items;
    `)
      .then(data => {
        const menu = data.rows;
        // console.log(menu);
        const templateVars = {menu};
        res.render('menu', templateVars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
