const mongoose = require("mongoose");
const Schema = mongoose.Schema

const articlesSchema = new Schema({

    title: {type: String, required: true},
    subTitle: {type: String, required: false},
    content: {type: String, required: false},
    image: {type: String, required: false},
    date: {type: String, required: true},
    emailUser: {type: String, required: true}
})

const Articles = mongoose.model("Articles", articlesSchema);

module.exports = Articles;