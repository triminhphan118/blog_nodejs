// import express from 'express';
const express = require('express');
// import newsController from '../app/controllers/NewsController.js';

const newsController = require('../app/controllers/NewsControllers');
const { route } = require('./site');
const router = express.Router();

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

// export default router;
module.exports = router;
