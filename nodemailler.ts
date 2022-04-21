const nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
    port:465,
    host: "smtp.gmail.com",
    auth: {
        user: "xxxx",
        pass: "xxxx",
    },
    secure: true,
});

export const mailOptions = {
    from: "xxx",
    to: "",
    text: "",
}

