'use strict';
module.exports = function(app) {
  
  var SendMailController = require('./MailgunController');
  var MailtrapController = require('./MailtrapController');

  app.route('/sendmail').get(SendMailController.sendMail);

  app.route('/sendmailtrap').get(MailtrapController.sendMail);

};