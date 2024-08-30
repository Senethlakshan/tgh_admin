const BookRequest = require('../models/BookRequest');
const transporter = require('../config/email');

// Create a new BookRequest
exports.createBookRequest = async (req, res) => {
  try {
    const newRequest = await BookRequest.create(req.body);

    // Prepare the email content for the admin
    const adminMailOptions = {
      from: 'booking@tourglobalhub.com',
      to: 'info@tourglobalhub.com',
      subject: 'New Booking Request Received',
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
            <h1>New Book Request Received</h1>
            <p>A new book request has been created with the following details:</p>
            <ul>
             
              <li><strong>Package Type:</strong> ${newRequest.packageType}</li>
              <li><strong>Package Title:</strong> ${newRequest.packageTitle}</li>
               <li><strong>Country:</strong> ${newRequest.country}</li>
              <li><strong>Category:</strong> ${newRequest.category}</li>
              <li><strong>Username:</strong> ${newRequest.username}</li>
              <li><strong>Email:</strong> ${newRequest.email}</li>
              <li><strong>Contact Number:</strong> ${newRequest.contact_number}</li>
              <li><strong>Request Details:</strong> ${newRequest.requestDetails || 'N/A'}</li>
              <li><strong>Remarks:</strong> ${newRequest.remarks || 'N/A'}</li>
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
    to: newRequest.email,
    subject: 'Booking Request Confirmation',
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
          .welcome { background: #e9f5ff; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
          .welcome h2 { color: #007bff; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="welcome">
            <h2>Welcome to Tour Global Hub!</h2>
            <p>Your gateway to extraordinary travel experiences around the world. We specialize in delivering unforgettable journeys tailored to your unique interests and preferences, ensuring every trip is a remarkable adventure. Our commitment to exceptional service and personalized itineraries makes us your ideal travel partner for exploring the globe.</p>
          </div>
          <h1>Thank you for your booking request!</h1>
          <p>Your request has been received with the following details:</p>
          <ul>
            <li><strong>Package Type:</strong> ${newRequest.packageType}</li>
            <li><strong>Package Title:</strong> ${newRequest.packageTitle}</li>
             <li><strong>Country:</strong> ${newRequest.country}</li>
            <li><strong>Category:</strong> ${newRequest.category}</li>
        
          </ul>
          <p>Our agent will get back to you shortly.</p>
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

    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a BookRequest
exports.updateBookRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await BookRequest.update(req.body, { where: { id } });

    if (updated === 0) {
      return res.status(404).json({ message: 'BookRequest not found' });
    }

    const bookRequest = await BookRequest.findByPk(id);
    res.status(200).json(bookRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a BookRequest
exports.deleteBookRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await BookRequest.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: 'BookRequest not found' });
    }

    res.status(200).json({ message: 'BookRequest deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all BookRequests
exports.getAllBookRequests = async (req, res) => {
  try {
    const requests = await BookRequest.findAll();
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get BookRequest by userId
exports.getBookRequestsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const requests = await BookRequest.findAll({ where: { userId } });

    if (requests.length === 0) {
      return res.status(404).json({ message: 'No BookRequests found for this user' });
    }

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
