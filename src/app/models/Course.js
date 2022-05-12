const mongoose = require('mongoose');
var mongooseDelete = require('mongoose-delete');
var slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
const Course = new Schema(
    {
        name: {
            type: String,
            default: 'hahaha',
            maxlength: 255,
            required: true,
        },
        description: { type: String, default: 'hahaha', maxlength: 600 },
        image: {
            type: String,
            default: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
            max: 255,
        },
        slug: { type: String, slug: 'name', unique: true },
        videoId: {
            type: String,
            default: 'zCFOn4YXr00',
            max: 255,
            required: true,
        },
        level: { type: String, default: 'Trình độ cơ bản', max: 255 },
    },
    {
        timestamps: true,
    },
);

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course);
