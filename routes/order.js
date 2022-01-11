const express = require('express');
const router  = express.Router();

router.get('/status', (req, res) =>{
  res.render('order_status')
});

module.exports = router
