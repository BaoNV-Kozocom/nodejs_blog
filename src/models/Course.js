const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: {
            type: String,
            maxLength: 255,
        },
        desc: {
            type: String,
            maxLength: 600,
        },
        img: {
            type: String,
            maxLength: 255,
        },
        slug: {
            type: String,
            unique: true,
            slug: 'name',
        },
        videoId: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

Course.pre('save', function (next) {
    this.slug = this.name.split(' ').join('-');
    next();
});

Course.plugin(mongoose_delete, { overrideMethods: true, deletedAt: true });

module.exports = mongoose.model('Course', Course);
