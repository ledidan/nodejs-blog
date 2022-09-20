const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
// const AutoIncrement = require('mongoose-sequence')(mongoose);
const AccountSchema = new Schema({
    _id: {
        type: Number
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {
    _id: false,
    timestamps: true,
});

// Custom query helpers
AccountSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
    }
    return this;
};
// Add Plugin
mongoose.plugin(slug);
AccountSchema.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true
});
// AccountSchema.plugin(AutoIncrement);
module.exports = mongoose.model('Account', AccountSchema);