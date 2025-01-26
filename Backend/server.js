const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'tmetiko@gmail.com',  // Your email here
    subject: 'New Message from Portfolio Contact Form',
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Failed to send message');
  }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
