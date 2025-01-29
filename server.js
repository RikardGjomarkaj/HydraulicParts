<<<<<<< HEAD
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path'); // Required to handle file paths

// Initialize Express
const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (e.g., CSS, JS, images)
app.use(express.static('public')); // Store static files like CSS, JS in the 'public' folder

// Serve the HTML file when the user accesses the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Serve the HTML file
});

// Create a transporter using SMTP (e.g., Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use another service like Yahoo or Outlook
  auth: {
    user: 'presionituba@gmail.com', // Your email
    pass: 'vicv gucj jntp mqfd',   // Your email password or an app-specific password
  },
});

// Define the contact form route to handle form submissions
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  // Set up email data
  const mailOptions = {
    from: email,  // Sender's email
    to: 'g.emajl001@gmail.com',  // Your email address
    subject: `Contact form submission from ${name}`,
    text: `You have received a message from ${name} (${email}):\n\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
=======
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path'); // Required to handle file paths

// Initialize Express
const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (e.g., CSS, JS, images)
app.use(express.static('public')); // Store static files like CSS, JS in the 'public' folder

// Serve the HTML file when the user accesses the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Serve the HTML file
});

// Create a transporter using SMTP (e.g., Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use another service like Yahoo or Outlook
  auth: {
    user: 'presionituba@gmail.com', // Your email
    pass: 'vicv gucj jntp mqfd',   // Your email password or an app-specific password
  },
});

// Define the contact form route to handle form submissions
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  // Set up email data
  const mailOptions = {
    from: email,  // Sender's email
    to: 'g.emajl001@gmail.com',  // Your email address
    subject: `Contact form submission from ${name}`,
    text: `You have received a message from ${name} (${email}):\n\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
>>>>>>> c6ac78a (Initial commit)
