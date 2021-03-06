// import express from 'express';
const express = require('express');

// import siteController from '../app/controllers/SiteController.js';
const siteController = require('../app/controllers/SiteController');

const router = express.Router();

router.get('/search', siteController.search);
router.get('/', siteController.home);

module.exports = router;
