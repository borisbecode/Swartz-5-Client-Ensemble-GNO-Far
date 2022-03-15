const mongoose = require("mongoose")
const Schema = mongoose.Schema

const parrainesSchema = new Schema({
    image: { type: String, required: true },
    childName: { type: String, required: true },
    status: {
        type: String, enum: ['created', 'published', 'draft', 'deleted', 'edited'], default:
            'draft'
    },
    isDeleted: { type: Boolean, default: false },
},
    {
        timestamps: true,
    }
)

const Parraines = mongoose.model("Parraines", parrainesSchema)

module.exports = Parraines