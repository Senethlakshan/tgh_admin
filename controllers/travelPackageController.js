const { TravelPackage } = require('../models');
const path = require('path');

exports.createTravelPackage = async (req, res) => {
  try {
    const {
      Pkgtype,
      duration,
      title,
      description,
      itinerary,
      includes,
      excludes,
      packageDetails,
      otherData,
      mapUrl,
      configuration,
      country,
      category,
      destination,
      startLocation,
      endLocation,
      discountRates,
      totalAmount,
      discountAmount,
      requestTobookingOption,
      bookingStartDate,
      BookingNotAvaibleOption
    } = req.body;

    const coverPhoto = req.files.coverPhoto ? req.files.coverPhoto[0].filename : null;
    const mainPhoto = req.files.mainPhoto ? req.files.mainPhoto[0].filename : null;
    const subPhotos = req.files.subPhotos ? req.files.subPhotos.map(file => file.filename) : [];

    const travelPackage = await TravelPackage.create({
      Pkgtype,
      duration,
      title,
      description,
      coverPhoto,
      mainPhoto,
      subPhotos,
      itinerary,
      includes,
      excludes,
      packageDetails,
      otherData,
      mapUrl,
      configuration,
      country,
      category,
      destination,
      startLocation,
      endLocation,
      discountRates,
      totalAmount,
      discountAmount,
      requestTobookingOption,
      bookingStartDate,
      BookingNotAvaibleOption
    });

    res.status(201).json(travelPackage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllTravelPackages = async (req, res) => {
  try {
    const travelPackages = await TravelPackage.findAll();
    res.status(200).json(travelPackages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTravelPackageById = async (req, res) => {
  try {
    const travelPackage = await TravelPackage.findByPk(req.params.id);
    if (!travelPackage) return res.status(404).json({ error: 'Travel Package not found' });
    res.status(200).json(travelPackage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTravelPackage = async (req, res) => {
  try {
    const {
      Pkgtype,
      duration,
      title,
      description,
      itinerary,
      includes,
      excludes,
      packageDetails,
      otherData,
      mapUrl,
      configuration,
      country,
      category,
      destination,
      startLocation,
      endLocation,
      discountRates,
      totalAmount,
      discountAmount,
      requestTobookingOption,
      bookingStartDate,
      BookingNotAvaibleOption
    } = req.body;

    const coverPhoto = req.files.coverPhoto ? req.files.coverPhoto[0].filename : null;
    const mainPhoto = req.files.mainPhoto ? req.files.mainPhoto[0].filename : null;
    const subPhotos = req.files.subPhotos ? req.files.subPhotos.map(file => file.filename) : [];

    const travelPackage = await TravelPackage.findByPk(req.params.id);
    if (!travelPackage) return res.status(404).json({ error: 'Travel Package not found' });

    travelPackage.Pkgtype = Pkgtype;
    travelPackage.duration = duration;
    travelPackage.title = title;
    travelPackage.description = description;
    if (coverPhoto) travelPackage.coverPhoto = coverPhoto;
    if (mainPhoto) travelPackage.mainPhoto = mainPhoto;
    travelPackage.subPhotos = subPhotos;
    travelPackage.itinerary = itinerary;
    travelPackage.includes = includes;
    travelPackage.excludes = excludes;
    travelPackage.packageDetails = packageDetails;
    travelPackage.otherData = otherData;
    travelPackage.mapUrl = mapUrl;
    travelPackage.configuration = configuration;
    travelPackage.country = country;
    travelPackage.category = category;
    travelPackage.destination = destination;
    travelPackage.startLocation = startLocation;
    travelPackage.endLocation = endLocation;
    travelPackage.discountRates = discountRates;
    travelPackage.totalAmount = totalAmount;
    travelPackage.discountAmount = discountAmount;
    travelPackage.requestTobookingOption = requestTobookingOption;
    travelPackage.bookingStartDate = bookingStartDate;
    travelPackage.BookingNotAvaibleOption = BookingNotAvaibleOption;

    await travelPackage.save();
    res.status(200).json(travelPackage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTravelPackage = async (req, res) => {
  try {
    const travelPackage = await TravelPackage.findByPk(req.params.id);
    if (!travelPackage) return res.status(404).json({ error: 'Travel Package not found' });

    await travelPackage.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
