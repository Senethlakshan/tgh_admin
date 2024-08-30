const UserRequest = require('../models/UserRequest');

exports.createUserRequest = async (req, res) => {
  try {
    const { username, email, requestType, message } = req.body;
    const userRequest = await UserRequest.create({
      username,
      email,
      requestType,
      message,
    });
    res.status(201).json(userRequest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUserRequests = async (req, res) => {
  try {
    const userRequests = await UserRequest.findAll();
    res.status(200).json(userRequests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserRequestById = async (req, res) => {
  try {
    const userRequest = await UserRequest.findByPk(req.params.id);
    if (!userRequest) return res.status(404).json({ error: 'Request not found' });
    res.status(200).json(userRequest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUserRequest = async (req, res) => {
  try {
    const { username, email, requestType, message, status, response } = req.body;
    const userRequest = await UserRequest.findByPk(req.params.id);
    if (!userRequest) return res.status(404).json({ error: 'Request not found' });

    userRequest.username = username || userRequest.username;
    userRequest.email = email || userRequest.email;
    userRequest.requestType = requestType || userRequest.requestType;
    userRequest.message = message || userRequest.message;
    userRequest.status = status || userRequest.status;
    userRequest.response = response || userRequest.response;

    await userRequest.save();
    res.status(200).json(userRequest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUserRequest = async (req, res) => {
  try {
    const userRequest = await UserRequest.findByPk(req.params.id);
    if (!userRequest) return res.status(404).json({ error: 'Request not found' });

    await userRequest.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//not use