'use strict';
// require our dependencies
const nodeMailer = require('nodemailer');
// const nodemailMailgun = require("nodemailer-mailgun-transport");
const Email = require('email-templates');

exports.sendMail = function(req,res){
  // define our authentication method for mailgun, since we're using this we would not be using smtp
  // you can get the details below on your mailgun dashboard. 
    const auth = {
        auth:{
            api_key:'YOUR_API_KEY', // This should look like 897521949586a1043f15f212bded313c-4eb051d1-10942p80
            domain:'mailgun.yourdomain.com' // give an example of how this would look light
        }
    }

    
    let transporter = nodeMailer.createTransport(nodemailMailgun(auth));
    // let transporter = nodeMailer.createTransport(mailgunAuth);
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
        from: 'info@rosabon-finance.com',
        to: 'nowjdeji@gmail.com',
      },
      locals: {
        fname: 'John',
        lname: 'Snow',
      }
    }).then(() => console.log('email has been sent!'));
  
    
}