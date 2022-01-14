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
    console.log('TESTING!!');
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

      newOrder.orderItemsId= orderItemsId;
      newOrder.time = (time);

      orderSubmit.push(newOrder);
    });

    $.ajax({
      url: '/order',
      method: "POST",
      data: { data: JSON.stringify(orderSubmit) },
      success: function() {
        console.log('success');
      }
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

