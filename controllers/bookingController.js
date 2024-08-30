const Booking = require('../models/booking');
const transporter = require('../config/email');


exports.createBooking = async (req, res) => {
  try {
    const {
      packageType,
      packageTitle,
      email,
      username,
      numberOfPaxCount,
      packageDetails,
      country,
      category,
      destination,
      startLocation,
      endLocation,
      pickupLocation,
      remarks,
      invoiceAmount,
      paymentId,
      paymentMethod,
      paymentStatus,
      amountPaid,
      paymentDate,
      userId
    } = req.body;

    // Check booking status is optional
    const bookingStatus = req.body.bookingStatus || 'pending'; 

    // Create the booking
    const booking = await Booking.create({
      packageType,
      packageTitle,
      email,
      username,
      numberOfPaxCount,
      packageDetails,
      country,
      category,
      destination,
      startLocation,
      endLocation,
      pickupLocation,
      remarks,
      invoiceAmount,
      paymentId,
      paymentMethod,
      paymentStatus,
      amountPaid,
      paymentDate,
      bookingStatus,
      userId
    });

    // Prepare the email content for the admin
    const adminMailOptions = {
      from: 'booking@tourglobalhub.com',
      to: 'info@tourglobalhub.com',
      subject: 'New Booking Created',
      html: `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; margin: 0; padding: 0; }
          .container { width: 80%; margin: auto; padding: 20px; background: #f4f4f4; }
          h1 { color: #007bff; }
          ul { list-style-type: none; padding: 0; }
          li { padding: 10px 0; }
          .footer { font-size: 0.8em; color: #888; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>TourGlobalHub.com</h1>
          <h1>New Booking Request</h1>
          <p>A new booking has been created with the following details:</p>
          <ul>
            <li><strong>Package Type:</strong> ${packageType}</li>
            <li><strong>Package Title:</strong> ${packageTitle}</li>
            <li><strong>Username:</strong> ${username}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Number of Pax Count:</strong> ${JSON.stringify(numberOfPaxCount)}</li>
            <li><strong>Package Details:</strong> ${JSON.stringify(packageDetails)}</li>
            <li><strong>Country:</strong> ${country}</li>
            <li><strong>Category:</strong> ${category}</li>
            <li><strong>Destination:</strong> ${destination}</li>
            <li><strong>Start Location:</strong> ${startLocation}</li>
            <li><strong>End Location:</strong> ${endLocation}</li>
            <li><strong>Pickup Location:</strong> ${pickupLocation}</li>
            <li><strong>Remarks:</strong> ${remarks}</li>
            <li><strong>Invoice Amount:</strong> ${invoiceAmount}</li>
            <li><strong>Payment ID:</strong> ${paymentId}</li>
            <li><strong>Payment Method:</strong> ${paymentMethod}</li>
            <li><strong>Payment Status:</strong> ${paymentStatus}</li>
            <li><strong>Amount Paid:</strong> ${amountPaid}</li>
            <li><strong>Payment Date:</strong> ${paymentDate}</li>
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
    
    // Prepare the email content for the user
const userMailOptions = {
  from: 'booking@tourglobalhub.com',
  to: email,
  subject: 'TourGlobalHub Booking Confirmation & Invoice',
  html: `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; margin: 0; padding: 0; }
          .container { width: 80%; margin: auto; padding: 20px; background: #f4f4f4; }
          h1 { color: #007bff; }
          h2 { color: #0056b3; }
          ul { list-style-type: none; padding: 0; }
          li { padding: 10px 0; }
          .footer { font-size: 0.8em; color: #888; margin-top: 20px; }
          .welcome { background: #e9f5ff; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="welcome">
            <h2>Welcome to TourGlobalHub.com!</h2>
            <p>Your gateway to extraordinary travel experiences around the world. At TourGlobalHub.com, we specialize in delivering unforgettable journeys tailored to your unique interests and preferences. Our commitment to exceptional service and personalized itineraries ensures every trip is a remarkable adventure. Thank you for choosing us!</p>
          </div>
          <h1>Booking Confirmation</h1>
          <p>Your booking has been confirmed with the following details:</p>
          <ul>
            <li><strong>Package Type:</strong> ${packageType}</li>
            <li><strong>Package Title:</strong> ${packageTitle}</li>
            <li><strong>Username:</strong> ${username}</li>
            <li><strong>Number of Pax Count:</strong> ${JSON.stringify(numberOfPaxCount)}</li>
            <li><strong>Package Details:</strong> ${JSON.stringify(packageDetails)}</li>
            <li><strong>Country:</strong> ${country}</li>
            <li><strong>Category:</strong> ${category}</li>
            <li><strong>Destination:</strong> ${destination}</li>
            <li><strong>Start Location:</strong> ${startLocation}</li>
            <li><strong>End Location:</strong> ${endLocation}</li>
            <li><strong>Pickup Location:</strong> ${pickupLocation}</li>
            <li><strong>Remarks:</strong> ${remarks}</li>
            <li><strong>Invoice Amount:</strong> ${invoiceAmount}</li>
            <li><strong>Payment ID:</strong> ${paymentId}</li>
            <li><strong>Payment Method:</strong> ${paymentMethod}</li>
            <li><strong>Payment Status:</strong> ${paymentStatus}</li>
            <li><strong>Amount Paid:</strong> ${amountPaid}</li>
            <li><strong>Payment Date:</strong> ${paymentDate}</li>
        
          </ul>
          <p>Thank you for choosing TourGlobalHub.com! We look forward to providing you with an exceptional travel experience.</p>
          <div class="footer">
            <p>Best Regards,</p>
            <p>Tour Global Hub Team</p>
            <p><a href="mailto:support@tourglobalhub.com">support@tourglobalhub.com</a></p>
            <p>Tour Global Hub, 123 Travel Lane, Adventure City, 56789</p>
            <p>Follow us on <a href="https://twitter.com/tourglobalhub">Twitter</a> | <a href="https://facebook.com/tourglobalhub">Facebook</a> | <a href="https://instagram.com/tourglobalhub">Instagram</a></p>
          </div>
        </div>
      </body>
    </html>
  `
};


    // Send the emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    // Respond with the created booking
    res.status(201).json({
      message: 'Booking created successfully! A confirmation email has been sent to the user.',
      booking
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({ include: ['User'] });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id, { include: ['User'] });
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const {
      packageType, packageTitle, email, username, numberOfPaxCount,
      packageDetails, country, category, destination, startLocation,
      endLocation, pickupLocation, remarks, invoiceAmount, paymentId,
      paymentMethod, paymentStatus, amountPaid, paymentDate, bookingStatus
    } = req.body;

    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });

    booking.packageType = packageType;
    booking.packageTitle = packageTitle;
    booking.email = email;
    booking.username = username;
    booking.numberOfPaxCount = numberOfPaxCount;
    booking.packageDetails = packageDetails;
    booking.country = country;
    booking.category = category;
    booking.destination = destination;
    booking.startLocation = startLocation;
    booking.endLocation = endLocation;
    booking.pickupLocation = pickupLocation;
    booking.remarks = remarks;
    booking.invoiceAmount = invoiceAmount;
    booking.paymentId = paymentId;
    booking.paymentMethod = paymentMethod;
    booking.paymentStatus = paymentStatus;
    booking.amountPaid = amountPaid;
    booking.paymentDate = paymentDate;
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
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get all bookings by user ID
exports.getBookingsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const bookings = await Booking.findAll({ where: { userId } });
    if (!bookings.length) return res.status(404).json({ error: 'No bookings found for this user' });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
