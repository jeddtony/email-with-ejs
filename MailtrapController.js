'use strict';

const nodeMailer = require('nodemailer');
const Email = require('email-templates');

exports.sendMail = function(req,res){
  const transporter = nodeMailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 25,
    secure: false,  //true for 465 port, false for other ports
    auth: {
      user: 'a0f693b4b819ab',
      pass: 'ae4df4830fe496'
    },
    tls:{
        rejectUnauthorized: false
    }
  });

  const email = new Email({
    transport: transporter,
    send: true,
    preview: false,
    views: {
      options: {
        extension: 'ejs',
      },
      root: './emails', //this refers to the emails folder in our root directory
    },
  });

  email.send({
    template: 'emailtemplates',
    message: {
      from: 'info@rosabon-finance.com',
      to: 'nowjdeji@gmail.com',
    },
    locals: {
      fname: 'John',
      lname: 'Snow',
    }
  }).then(() => console.log('email has been sent!'));

}