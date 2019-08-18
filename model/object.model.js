const mongoose = require('mongoose');
const schema = mongoose.Schema;

let objectSchema = new schema({
    type: {type: String},
    crux: {type: String},
    color: {type: String},
    title: {type: String}
})

module.exports = mongoose.model('Attribute', objectSchema);