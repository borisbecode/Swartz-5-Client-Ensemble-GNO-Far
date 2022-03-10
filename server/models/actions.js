const mongoose = require("mongoose")
const Schema = mongoose.Schema

const actionsSchema = new Schema({
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true, },
    location: { type: String, required: false },
    link: { type: String, required: false },
    image: { type: String, required: false },
    status: {
        type: String, enum: ['created', 'published', 'draft', 'deleted'], default:
            'draft'
    },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date },
    updatedAt: { type: Date }
})

const Actions = mongoose.model("Actions", actionsSchema)

module.exports = Actions