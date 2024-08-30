const { OneDayTourPackage } = require('../models');
const path = require('path');

exports.createOneDayTourPackage = async (req, res) => {
  try {
    const { title, description, benefits, packageDescription, activities, mapUrl, includes, excludes, bookingInfo, cancellationPolicy, packagePrices, discountRates, totalAmount, discountAmount, pickupLocations, requestToBookingOption, bookingStartDate, bookingNotAvailableOption, configuration } = req.body;
    const coverPhoto = req.files.coverPhoto ? req.files.coverPhoto[0].filename : null;
    const mainPhoto = req.files.mainPhoto ? req.files.mainPhoto[0].filename : null;
    const subPhotos = req.files.subPhotos ? req.files.subPhotos.map(file => file.filename) : [];

    const oneDayTourPackage = await OneDayTourPackage.create({
      title,
      description,
      coverPhoto,
      mainPhoto,
      benefits,
      packageDescription,
      activities,
      mapUrl,
      subPhotos,
      includes,
      excludes,
      bookingInfo,
      cancellationPolicy,
      packagePrices,
      discountRates,
      totalAmount,
      discountAmount,
      pickupLocations,
      requestToBookingOption,
      bookingStartDate,
      bookingNotAvailableOption,
      configuration
    });

    res.status(201).json(oneDayTourPackage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllOneDayTourPackages = async (req, res) => {
  try {
    const oneDayTourPackages = await OneDayTourPackage.findAll();
    res.status(200).json(oneDayTourPackages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOneDayTourPackageById = async (req, res) => {
  try {
    const oneDayTourPackage = await OneDayTourPackage.findByPk(req.params.id);
    if (!oneDayTourPackage) return res.status(404).json({ error: 'One Day Tour Package not found' });
    res.status(200).json(oneDayTourPackage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOneDayTourPackage = async (req, res) => {
  try {
    const { title, description, benefits, packageDescription, activities, mapUrl, includes, excludes, bookingInfo, cancellationPolicy, packagePrices, discountRates, totalAmount, discountAmount, pickupLocations, requestToBookingOption, bookingStartDate, bookingNotAvailableOption, configuration } = req.body;
    const coverPhoto = req.files.coverPhoto ? req.files.coverPhoto[0].filename : null;
    const mainPhoto = req.files.mainPhoto ? req.files.mainPhoto[0].filename : null;
    const subPhotos = req.files.subPhotos ? req.files.subPhotos.map(file => file.filename) : [];

    const oneDayTourPackage = await OneDayTourPackage.findByPk(req.params.id);
    if (!oneDayTourPackage) return res.status(404).json({ error: 'One Day Tour Package not found' });

    oneDayTourPackage.title = title;
    oneDayTourPackage.description = description;
    if (coverPhoto) oneDayTourPackage.coverPhoto = coverPhoto;
    if (mainPhoto) oneDayTourPackage.mainPhoto = mainPhoto;
    oneDayTourPackage.benefits = benefits;
    oneDayTourPackage.packageDescription = packageDescription;
    oneDayTourPackage.activities = activities;
    oneDayTourPackage.mapUrl = mapUrl;
    oneDayTourPackage.subPhotos = subPhotos;
    oneDayTourPackage.includes = includes;
    oneDayTourPackage.excludes = excludes;
    oneDayTourPackage.bookingInfo = bookingInfo;
    oneDayTourPackage.cancellationPolicy = cancellationPolicy;
    oneDayTourPackage.packagePrices = packagePrices;
    oneDayTourPackage.discountRates = discountRates;
    oneDayTourPackage.totalAmount = totalAmount;
    oneDayTourPackage.discountAmount = discountAmount;
    oneDayTourPackage.pickupLocations = pickupLocations;
    oneDayTourPackage.requestToBookingOption = requestToBookingOption;
    oneDayTourPackage.bookingStartDate = bookingStartDate;
    oneDayTourPackage.bookingNotAvailableOption = bookingNotAvailableOption;
    oneDayTourPackage.configuration = configuration;

    await oneDayTourPackage.save();
    res.status(200).json(oneDayTourPackage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteOneDayTourPackage = async (req, res) => {
  try {
    const oneDayTourPackage = await OneDayTourPackage.findByPk(req.params.id);
    if (!oneDayTourPackage) return res.status(404).json({ error: 'One Day Tour Package not found' });

    await oneDayTourPackage.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
