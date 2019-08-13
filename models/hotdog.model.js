const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Hotdog = new Schema({
    hotdog_description : {
        type: String
    },
    hotdog_responsible: {
        type: String
    },
    hotdog_priority: {
        type: String
    },
    hotdog_complited: {
        type: Boolean
    }
});

module.exports = mongoose.model('Hotdog', Hotdog);