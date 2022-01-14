const accountSid = process.env.TWILIO_ACCOUNTSID;
const authToken = process.env.TWILIO_AUTHTOKEN;
const fromPhone = process.env.TWILIO_NUMBER;

const client = require('twilio')(accountSid, authToken);

function sendMessage(message) {
  return client.messages.create({
    body: `Hi ${message.body.userName},
    Thanks for ordering with Cloud Cafe.
    We have recieved your order.
    You will recieve another SMS when your order is confirmed`,
    from: fromPhone,
    to: `${message.body.sendText}`
  })
}

module.exports = { sendMessage };
