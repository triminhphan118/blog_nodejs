// import express from 'express';
const express = require('express');

// import siteController from '../app/controllers/SiteController.js';
const courseController = require('../app/controllers/CourseController');

const router = express.Router();
router.get('/create', courseController.create);
router.post('/store', courseController.store);

router.get('/edit/:id', courseController.edit);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.patch);

router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy);

router.get('/:slug', courseController.detail);

module.exports = router;
