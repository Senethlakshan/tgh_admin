
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Rating = require('../models/Ratings');

const OneDayTourPackage = sequelize.define('OneDayTourPackage', {
  packageId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: () => 'OneDay' + Math.floor(1000 + Math.random() * 9000),
  },
  packageType: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'OneDay',
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  startLocation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  endLocation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  coverPhoto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mainPhoto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  benefits: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  packageDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  activities: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  mapUrl: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  subPhotos: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  includes: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  excludes: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  bookingInfo: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  cancellationPolicy: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  packagePrices: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  discountRates: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  totalAmount: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  discountAmount: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  pickupLocations: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  requestToBookingOption: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bookingStartDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  bookingNotAvailableOption: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  configuration: {
    type: DataTypes.JSON,
    allowNull: true,
  }
});




// In oneday model file
OneDayTourPackage.hasMany(Rating, {
  foreignKey: 'packageId',
  constraints: false,
  scope: {
    packageType: 'OneDay',
  },
});
Rating.belongsTo(OneDayTourPackage, { foreignKey: 'packageId', constraints: false });


module.exports = OneDayTourPackage;










// {
//   "country": "USA",
//   "category": "City Tour",
//   "destination": "New York",
//   "startLocation": "Hotel",
//   "endLocation": "Central Park",
//   "duration": "1 Day",
//   "title": "Explore the City in a Day",
//   "description": "A one-day guided tour through the city's most famous landmarks.",
//   "benefits": {
//     "transportation": "Air-conditioned vehicle",
//     "guide": "English-speaking guide",
//     "meals": "Lunch included"
//   },
//   "packageDescription": "Join us on a thrilling one-day adventure through the heart of the city. Visit historical sites, enjoy local cuisine, and discover hidden gems with our expert guide.",
//   "activities": [
//     {
//       "time": "09:00 AM",
//       "activity": "Visit the ancient temple"
//     },
//     {
//       "time": "11:00 AM",
//       "activity": "Explore the local market"
//     },
//     {
//       "time": "01:00 PM",
//       "activity": "Lunch at a traditional restaurant"
//     },
//     {
//       "time": "03:00 PM",
//       "activity": "Visit the museum"
//     }
//   ],
//   "mapUrl": "https://example.com/maps/tour-route",
//   "subPhotos": [
//     "https://example.com/images/sub1.jpg",
//     "https://example.com/images/sub2.jpg",
//     "https://example.com/images/sub3.jpg"
//   ],
//   "includes": {
//     "accommodation": "None",
//     "meals": "Lunch only",
//     "guide": "English-speaking guide",
//     "entranceFees": "Included"
//   },
//   "excludes": {
//     "personalExpenses": "Not included",
//     "travelInsurance": "Not included"
//   },
//   "bookingInfo": {
//     "advanceBooking": "Required 14 days in advance",
//     "fullPayment": "Required at time of booking"
//   },
//   "cancellationPolicy": {
//     "freeCancellation": "Up to 7 days before departure",
//     "lateCancellation": "50% cancellation fee within 7 days"
//   },
//   "packagePrices": {
//     "seasonType1": {
//       "seasonStartDate": "2024-06-01",
//       "seasonEndDate": "2024-08-31",
//       "adults": [
//         { "paxCount": 1, "rate": 100 },
//         { "paxCount": 2, "rate": 180 }
//       ],
//       "childs": [
//         { "paxCount": 1, "rate": 50 },
//         { "paxCount": 2, "rate": 90 }
//       ],
//       "additionalCost": [
//         { "costName": "Extra Guide Service", "rate": 150 },
//         { "costName": "Luxury Transport", "rate": 200 }
//       ],
//       "pickupLocations": [
//         { "locationName": "Hotel", "rate": 30 },
//         { "locationName": "Airport", "rate": 50 }
//       ]
//     }
//   },
//   "discountRates": {
//     "earlyBird": "10% off for bookings 30 days in advance"
//   },
//   "totalAmount": 200,
//   "discountAmount": 20,
//   "requestToBookingOption": "N",
//   "bookingStartDate": "2024-06-01",
//   "bookingNotAvailableOption": "N",
//   "configuration": {
//     "createdDate": "2024-05-01",
//     "packageStartDate": "2024-06-01",
//     "packageEndDate": "2024-12-31",
//     "createdBy": "Admin",
//     "publishStatus": "Draft"
//   }
// }

