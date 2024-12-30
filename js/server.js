const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post("/send-email", async (req, res) => {
    const { name, email, mobile, serviceType, message } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "nextgencodeinnovators@gmail.com", // Your email
            pass: "WebDev@1234", // Your email password or app password
        },
    });

    // Email details
    const mailOptions = {
        from: email,
        to: "recipient-email@example.com", // Replace with your email
        subject: "New Appointment Request",
        text: `
            Name: ${name}
            Email: ${email}
            Mobile: ${mobile}
            Service Type: ${serviceType}
            Message: ${message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error sending email.");
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
