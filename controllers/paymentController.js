const { BookingRequest } = require('../models');

// Mock Payment Process
exports.processPayment = async (req, res) => {
  try {
    const { requestId, amount, paymentMethod } = req.body;

    const request = await BookingRequest.findOne({ where: { requestId } });
    if (!request) {
      return res.status(404).json({ message: 'Booking request not found' });
    }

    // Implement payment gateway logic here
    // Example: Stripe, PayPal, etc.

    request.status = 'complete';
    await request.save();

    res.status(200).json({ message: 'Payment successful, booking request complete', request });
  } catch (error) {
    res.status(500).json({ message: 'Error processing payment', error });
  }
};
