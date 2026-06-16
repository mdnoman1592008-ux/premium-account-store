const App = require("../models/App");

exports.getApps = async (req, res) => {
  try {
    const apps = await App.findAll({
      order: [["createdAt", "DESC"]]
    });

    res.json({
      success: true,
      data: apps
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getApp = async (req, res) => {
  try {
    const app = await App.findByPk(req.params.id);

    if (!app) {
      return res.status(404).json({
        success: false,
        message: "App not found"
      });
    }

    res.json({
      success: true,
      data: app
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.createApp = async (req, res) => {
  try {
    const app = await App.create(req.body);

    res.status(201).json({
      success: true,
      data: app
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateApp = async (req, res) => {
  try {
    const app = await App.findByPk(req.params.id);

    if (!app) {
      return res.status(404).json({
        success: false,
        message: "App not found"
      });
    }

    await app.update(req.body);

    res.json({
      success: true,
      data: app
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.deleteApp = async (req, res) => {
  try {
    const app = await App.findByPk(req.params.id);

    if (!app) {
      return res.status(404).json({
        success: false,
        message: "App not found"
      });
    }

    await app.destroy();

    res.json({
      success: true,
      message: "App deleted"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
