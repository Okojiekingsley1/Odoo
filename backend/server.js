// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve static files (HTML, CSS, JS)
// app.use(express.static('public'));

// // Handle form submissions
// app.post('/submit', (req, res) => {
//     const { name, email, message } = req.body;

//     // Create a transporter using nodemailer
//     const transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: 'okojiekingsley20@gmail.com',
//             pass: 'olu123456789'
//         }
//     });

//     // Email content
//     const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: 'recipient@example.com',
//         subject: 'New Message from Your Website',
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//     };

//     // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Error:', error);
//             res.status(500).send('Error sending email');
//         } else {
//             console.log('Email sent:', info.response);
//             res.status(200).send('Email sent successfully');
//         }
//     });
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });












const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data

// Replace with your actual email credentials
const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587, // Secure port
    secure: false, // Use TLS/STARTTLS
    auth: {
        user: 'okojiekingsley20@gmail.com',
        pass: 'olu123456789'
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/booking.html'); // Serve booking form
});

app.post('/booking', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; // Optional message field

    const mailOptions = {
        from: 'your_email@example.com',
        to: 'okojiekingsley20@gmail.com',
        subject: 'Booking Confirmation',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` // Include message if provided
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
            res.send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.send('Booking successful! Check your email for confirmation.');
        }
    });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
