// script should run monthly
// releases old number and acquires new number
var accountSid = "";
var authToken = "";
var client = require('twilio')(accountSid, authToken);

// release current phone number
client.incomingPhoneNumbers.list(function(err, data) {
    data.incomingPhoneNumbers.forEach(function(number) {
        client.incomingPhoneNumbers(number.sid).delete(function(err, deleted) {
            if (err) {
              console.log(err);
            } else {
              console.log('Released ' + number.phoneNumber);
            }
          });
    });
});

// acquire new number
  client.incomingPhoneNumbers.create({
    AreaCode: '647',
    voiceUrl: 'http://twimlets.com/forward?PhoneNumber=5676983575',
  }, function(err, purchasedNumber) {
    console.log('Acquired ' + purchasedNumber.phone_number);
  });
