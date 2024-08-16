const Booking = require('../models/booking');

const transporter = require('../config/email');

exports.createBooking = async (req, res) => {
  try {
    const { packageType, packageTitle, email, username, numberOfPeople, totalCost, specialRequests } = req.body;
    
    // Check booking status is optional
    const bookingStatus = req.body.bookingStatus || 'pending'; 

    // Create the booking
    const booking = await Booking.create({
      packageType,
      packageTitle,
      email,
      username,
      numberOfPeople,
      totalCost,
      specialRequests,
      bookingStatus
    });

    // Prepare the email content
    const mailOptions = {
      from: 'booking@tourglobalhub.com', // Sender address
      to: 'info@tourglobalhub.com', // Replace with the admin's email address
      subject: 'New Booking Created',
      html: `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 0;
          }
          .container {
            width: 80%;
            margin: auto;
            padding: 20px;
            background: #f4f4f4;
          }
          h1 {
            color: #007bff;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            padding: 10px 0;
          }
          .footer {
            font-size: 0.8em;
            color: #888;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>TourGlobalHub.com </h1>
          <h1>New Booking Request</h1>
          <p>A new booking has been created with the following details:</p>
          <ul>
            <li><strong>Package Type:</strong> ${packageType}</li>
            <li><strong>Package Title:</strong> ${packageTitle}</li>
            <li><strong>Username:</strong> ${username}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Number of People:</strong> ${numberOfPeople}</li>
            <li><strong>Total Cost:</strong> ${totalCost}</li>
            <li><strong>Special Requests:</strong> ${specialRequests}</li>
            <li><strong>Booking Status:</strong> ${bookingStatus}</li>
          </ul>
          <div class="footer">
            <p>Admin @ Tour Global Hub.</p>
          </div>
        </div>
      </body>
    </html>
  `
      

    
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with the created booking
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};





// exports.createBooking = async (req, res) => {
//   try {
//     const { packageType, packageTitle, email, username, numberOfPeople, totalCost, specialRequests } = req.body;
    
//     // Check booking status is optional
//     const bookingStatus = req.body.bookingStatus || 'pending'; 

//     const booking = await Booking.create({
//       packageType,
//       packageTitle,
//       email,
//       username,
//       numberOfPeople,
//       totalCost,
//       specialRequests,
//       bookingStatus
//     });

//     res.status(201).json(booking);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };



exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const { packageType, packageTitle, email, username, numberOfPeople, totalCost, specialRequests, bookingStatus } = req.body;

    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });

    booking.packageType = packageType;
    booking.packageTitle = packageTitle;
    booking.email = email;
    booking.username = username;
    booking.numberOfPeople = numberOfPeople;
    booking.totalCost = totalCost;
    booking.specialRequests = specialRequests;
    booking.bookingStatus = bookingStatus;

    await booking.save();
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });

    await booking.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
