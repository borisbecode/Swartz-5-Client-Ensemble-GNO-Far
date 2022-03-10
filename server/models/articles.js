const mongoose = require("mongoose");
const Schema = mongoose.Schema

const articlesSchema = new Schema({

    user_id: { type: String, unique: true },
    title: { type: String, trim: true, required: true},
    subTitle: {type: String, required: true},
    contenu: { type: String, required: true, trim: true},
    status: { type: String, enum: ['created', 'edited', 'draft', 'deleted'], default: 'draft' },
    articleImage: {type: String, required: true},
    isDeleted: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date}
})

const Articles = mongoose.model("Articles", articlesSchema);

module.exports = Articles;
