const { ThingsToDo } = require('../models');

exports.createThingsToDo = async (req, res) => {
  try {
    const { title, description, prices } = req.body;
    const coverPhoto = req.file ? req.file.filename : null;
    const thingsToDo = await ThingsToDo.create({ title, description, coverPhoto, prices });
    res.status(201).json(thingsToDo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllThingsToDo = async (req, res) => {
  try {
    const thingsToDo = await ThingsToDo.findAll();
    res.status(200).json(thingsToDo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getThingsToDoById = async (req, res) => {
  try {
    const thingsToDo = await ThingsToDo.findByPk(req.params.id);
    if (!thingsToDo) return res.status(404).json({ error: 'Things to Do not found' });
    res.status(200).json(thingsToDo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateThingsToDo = async (req, res) => {
  try {
    const { title, description, prices } = req.body;
    const coverPhoto = req.file ? req.file.filename : null;
    const thingsToDo = await ThingsToDo.findByPk(req.params.id);
    if (!thingsToDo) return res.status(404).json({ error: 'Things to Do not found' });

    thingsToDo.title = title;
    thingsToDo.description = description;
    if (coverPhoto) thingsToDo.coverPhoto = coverPhoto;
    thingsToDo.prices = prices;

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
