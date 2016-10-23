var http = require('http'),
    twilio = require('twilio');

http.createServer(function (req, res) {
    // create TwiML response
    var twiml = new twilio.TwimlResponse();
    twiml.say("Connecting you with women's habitat...");
    // two hour time limit
    twiml.dial('+14162525829', { timeLimit: 2 * 60 * 60});
    // twiml.dial('+14162525829');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());

}).listen(1337);

console.log('TwiML servin\' server running');
