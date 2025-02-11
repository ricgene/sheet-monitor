/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */

const nodemailer = require('nodemailer');

exports.sheetEmail1 = async (req, res) => {
  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'foilboy808@gmail.com',
      // Use an App Password if using Gmail
      // Generate at: https://myaccount.google.com/apppasswords
      pass: 'yzru bfxj fwtx qaed'  
    }
  });

  // Email options
  const mailOptions = {
    from: 'foilboy808@gmail.com',
    to: 'foilboy808@gmail.com',
    subject: 'Spreadsheet Updated',
    text: `Sheet was modified: ${JSON.stringify(req.body, null, 2)}`
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};