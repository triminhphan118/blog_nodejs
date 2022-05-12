// import express from 'express';
const express = require('express');

// import siteController from '../app/controllers/SiteController.js';
const meController = require('../app/controllers/MeController');

const router = express.Router();
router.get('/stored/courses', meController.stored_courses);
router.get('/trash/courses', meController.trash_courses);

module.exports = router;
