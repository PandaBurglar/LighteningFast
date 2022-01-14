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

  $('.submit-btn2').on('click', function() {
    console.log('data.stringify', JSON.stringify(order));
    const orderSubmit = [];
    $('.item').each(function() {
      console.log('this is it -------', this);

      const newOrder = {};
      const id = $(this).attr('id');
      const total = $(this).children('.total').children('.price').text();
      console.log('total--', total.substring(2));
      const orderItemsId = $(this).attr('id');
      const time = $('#timepicker').val();
      
      newOrder.id = id;
      newOrder.total = Number(total.substring(2));
<<<<<<< HEAD
      newOrder.orderItemsId = orderItemsId;
=======
      newOrder.orderItemsId= orderItemsId;
      newOrder.time = (time);
>>>>>>> 66d14493e82d4c33ae30ff9f6cb8e660319f0ace

      orderSubmit.push(newOrder);
    }); 

    // const id = $(this).attr('id');
    console.log('orderSubmit', orderSubmit);
    $.ajax({
      url: '/order',
      method: "POST",
      data: { data: JSON.stringify(orderSubmit) },
      success: function() {
        console.log('success');
      }
    });
 
  });
  $(function () {
    // INITIALIZE DATEPICKER PLUGIN
    $('.datepicker').datepicker({
        clearBtn: true,
        format: "dd/mm/yyyy"
    });
  });

  $.ajax({
    url: '/order/1',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      console.log("data---->", data);
    }

  })
});
