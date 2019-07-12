'use strict';

const nodeMailer = require('nodemailer');
const Email = require('email-templates');

exports.sendMail = function(req,res){
  const transporter = nodeMailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 25,
    secure: false,  //true for 465 port, false for other ports
    auth: {
      user: 'username',
      pass: 'password'
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
      from: 'sender@yourdomain.com',
      to: 'recipient@anydomain.com',
    },
    locals: {
      fname: 'Jed',
      lname: 'Tony'
    }
  }).then(() => console.log('email has been sent!'));

}