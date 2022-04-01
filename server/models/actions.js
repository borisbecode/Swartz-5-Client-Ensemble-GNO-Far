const mongoose = require("mongoose")
const Schema = mongoose.Schema

const actionsSchema = new Schema({
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true, },
    location: { type: String, required: false },
    link: { type: String, required: false },
    image: { type: String, required: true },
    status: {
        type: String, enum: ['created', 'published', 'draft', 'deleted', 'edited'], default:
            'draft'
    },
    isDeleted: { type: Boolean, default: false },
    users: [{
        type: new mongoose.Schema({
            id: { type: String, required: true },
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },
            email: { type: String, required: true },
            status: {
                type: String, enum: ['created', 'published', 'draft', 'deleted', 'edited'], default:
                    'draft'
            },
        },
            { timestamps: true }
        )
    }]
},
    {
        timestamps: true,
    }
)

const Actions = mongoose.model("Actions", actionsSchema)

module.exports = Actions