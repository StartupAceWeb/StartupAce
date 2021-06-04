const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendmail(email) {


  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '1mv18is042@sirmvit.edu', // generated ethereal user
      pass: 'born@1998', // generated ethereal password
    },
  });

  // send mail with defined transport object
  try{let info = await transporter.sendMail({
    from: '"Truewalls 👻" <1mv18is042@sirmvit.edu>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<div style='padding:1.5rem;border:1px solid #dbdbdb;'><h1>Thanks for Subscribing</h1></div>", // html body
  });

  if(info){
      return true;
  }

}
catch(e)
{
    return false;
}
  

 

  
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = sendmail;