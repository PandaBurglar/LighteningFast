// Client facing scripts here

$(document).ready(function() {

  const order = [];
  $('.submit-btn').on('click', function(event) {
    event.preventDefault();
    const newObj = {};
    const id = $(this).attr('id');
    newObj.qty = $(this).parent().siblings('.price-qty').children('form').children('input').val();
    newObj.id = id;
    order.push(newObj);
    // const randNum = Math.floor(Math.random() * (10000 - 1) + 1);
    // order[randNum] = newObj;
  })
  $('.checkout-btn').on('click', function() {
    console.log('data.stringify', JSON.stringify(order));
    $.ajax({
      url: '/checkout',
      method: "POST",
      data: { data: JSON.stringify(order) },
      success: function() {
        console.log('success');
      }
    });



  })

});

