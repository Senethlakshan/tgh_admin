const { User, BookingRequest } = require('../models');

// Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

// Update User
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, role } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.role = role || user.role;

    await user.save();

    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy();

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};

// Get All Booking Requests
exports.getAllBookingRequests = async (req, res) => {
  try {
    const requests = await BookingRequest.findAll();
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching booking requests', error });
  }
};

// Update Booking Request
exports.updateBookingRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const request = await BookingRequest.findByPk(id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    request.status = status;
    await request.save();

    res.status(200).json({ message: 'Booking request updated successfully', request });
  } catch (error) {
    res.status(500).json({ message: 'Error updating booking request', error });
  }
};

// Delete Booking Request
exports.deleteBookingRequest = async (req, res) => {
  try {
    const { id } = req.params;

    const request = await BookingRequest.findByPk(id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    await request.destroy();

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting booking request', error });
  }
};

// Notify Admin on New Request
exports.notifyAdmin = async (req, res) => {
  try {
    const { userId, packageId, packageType } = req.body;

    // Assume you have a function to send emails
    // sendEmailToAdmin(userId, packageId, packageType);

    const request = await BookingRequest.create({
      userId,
      packageId,
      packageType,
    });

    res.status(201).json({ message: 'Request created and admin notified', request });
  } catch (error) {
    res.status(500).json({ message: 'Error creating request', error });
  }
};
