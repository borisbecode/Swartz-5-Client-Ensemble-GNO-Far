const mongoose = require("mongoose")
const Schema = mongoose.Schema

const actionsSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    location: { type: String, required: false },
    link: { type: String, required: false },
    image: { type: String, required: false }
})

const Actions = mongoose.model("Actions", actionsSchema)

module.exports = Actions