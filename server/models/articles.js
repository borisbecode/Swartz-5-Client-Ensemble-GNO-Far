const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articlesSchema = new Schema(
  {
    title: { type: String, trim: true, required: true },
    subTitle: { type: String, required: true },
    contenu: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ['created', 'published', 'edited', 'draft', 'deleted'],
      default: 'draft',
    },
    articleImage: { type: String, required: false },
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

const Articles = mongoose.model('Articles', articlesSchema)

module.exports = Articles
