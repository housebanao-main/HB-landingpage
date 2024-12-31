import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phoneNumber, plotLocation } = req.body;
// console.log(req.body);

    const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'gomaterial.development@gmail.com', // Replace with your dummy email
    //     pass: 'material.go@122018', // Replace with your dummy email password
    //   },
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
            user: 'gomaterial.development@gmail.com', // Replace with your dummy email
            pass: 'ouci hmui ixnt igax ', // Replace with your dummy email password
          },
    });

    const mailOptions = {
      from: 'gomaterial.development@gmail.com', // Replace with your dummy email
      to: 'support@housebanao.com', // Replace with recipient email
      subject: 'New Lead Generated',
      text: `Name: ${name}\nPhone Number: ${phoneNumber}\nPlot Location: ${plotLocation}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.log(error.message);
        
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
