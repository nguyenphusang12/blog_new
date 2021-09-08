const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const ObjectId = Schema.ObjectId;
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Course = new Schema({
    _id: Number,
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String },
    level: { type: String },
}, { timestamps: true, _id: false });

mongoose.plugin(slug);
Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

Course.query.sortable = function(req) {

    if (req.query.hasOwnProperty('_sort')) {
        const validateType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: validateType ? req.query.type : 'asc'
        })
    }
    return this
};

module.exports = mongoose.model('Course', Course);