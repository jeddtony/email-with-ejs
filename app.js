var express = require('express');

    app = express(),
    port = process.env.PORT || 4000;
    const nodemailer = require('nodemailer');
    const Email = require('email-templates');
    mailRoute = require('./route');

    mailRoute(app);

app.get('/', function (req, res) {

});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    console.info('>>> 🌎 Open http://localhost:%s/ in your browser.', port);
  })
  
  