// models/index.js
const sequelize = require('../config/db');
const Blog = require('./blog');
const MICE = require('./mice');
const Transfer = require('./transfer'); 
const ThingsToDo = require('./thingsToDo'); 
const OneDayTourPackage = require('./oneDayTourPackage'); 
const User = require('./user');
const BookingRequest = require('./bookingRequest');
const NewTransferInfo = require('./newtransferInfo');
const TravelPackage  = require('./travelPackage');
const Booking = require('./booking');
const UserRequest  = require('./UserRequest'); 


sequelize.sync({ force: false })
  .then(() => console.log('Tables have been synced'))
  .catch(err => console.log('Error syncing tables: ' + err));

module.exports = {
  Blog,
  MICE,
  Transfer,
  ThingsToDo,
  OneDayTourPackage,
  User,
  BookingRequest,
  NewTransferInfo,
  TravelPackage,
  Booking,
  UserRequest
  
};
