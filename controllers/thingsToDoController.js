const { ThingsToDo, Rating } = require('../models');

exports.createThingsToDo = async (req, res) => {
  try {
    const { title, description, prices, country, category, destination, mapUrl, packageContent } = req.body;
    const coverPhoto = req.file ? req.file.filename : null;
    const thingsToDo = await ThingsToDo.create({ 
      title, description, coverPhoto, prices, country, category, destination, mapUrl, packageContent 
    });
    res.status(201).json(thingsToDo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllThingsToDo = async (req, res) => {
  try {
    const thingsToDo = await ThingsToDo.findAll({ include: Rating });
    res.status(200).json(thingsToDo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getThingsToDoById = async (req, res) => {
  try {
    const thingsToDo = await ThingsToDo.findByPk(req.params.id, { include: Rating });
    if (!thingsToDo) return res.status(404).json({ error: 'Things to Do not found' });
    res.status(200).json(thingsToDo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateThingsToDo = async (req, res) => {
  try {
    const { title, description, prices, country, category, destination, mapUrl, packageContent } = req.body;
    const coverPhoto = req.file ? req.file.filename : null;
    const thingsToDo = await ThingsToDo.findByPk(req.params.id);
    if (!thingsToDo) return res.status(404).json({ error: 'Things to Do not found' });

    thingsToDo.title = title;
    thingsToDo.description = description;
    thingsToDo.prices = prices;
    thingsToDo.country = country;
    thingsToDo.category = category;
    thingsToDo.destination = destination;
    thingsToDo.mapUrl = mapUrl;
    thingsToDo.packageContent = packageContent;
    if (coverPhoto) thingsToDo.coverPhoto = coverPhoto;

    await thingsToDo.save();
    res.status(200).json(thingsToDo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteThingsToDo = async (req, res) => {
  try {
    const thingsToDo = await ThingsToDo.findByPk(req.params.id);
    if (!thingsToDo) return res.status(404).json({ error: 'Things to Do not found' });

    await thingsToDo.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Rating related actions (Add, Update, Delete)

// exports.addRating = async (req, res) => {
//   try {
//     const { packageId, rating, reviews } = req.body;
//     const ratingEntry = await Rating.create({ packageId, rating, reviews });
//     res.status(201).json(ratingEntry);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.updateRating = async (req, res) => {
//   try {
//     const { rating, reviews } = req.body;
//     const ratingEntry = await Rating.findByPk(req.params.id);
//     if (!ratingEntry) return res.status(404).json({ error: 'Rating not found' });

//     ratingEntry.rating = rating;
//     ratingEntry.reviews = reviews;
//     await ratingEntry.save();
//     res.status(200).json(ratingEntry);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.deleteRating = async (req, res) => {
//   try {
//     const ratingEntry = await Rating.findByPk(req.params.id);
//     if (!ratingEntry) return res.status(404).json({ error: 'Rating not found' });

//     await ratingEntry.destroy();
//     res.status(204).end();
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
