'use strict';
// require our dependencies
const nodeMailer = require('nodemailer');
const nodemailMailgun = require("nodemailer-mailgun-transport");
const Email = require('email-templates');

exports.sendMail = function(req,res){
  // define our authentication method for mailgun, since we're using this we would not be using smtp
  // you can get the details below on your mailgun dashboard. 
    const auth = {
        auth:{
            api_key:'YOUR_API_KEY', 
            domain:'mailgun.yourdomain.com' 
        }
    }

    
    let transporter = nodeMailer.createTransport(nodemailMailgun(auth));
    const email = new Email({
      transport: transporter,
      send: true,
      preview: false,
      views: {
        options: {
          extension: 'ejs',
        },
        root: './emails',
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