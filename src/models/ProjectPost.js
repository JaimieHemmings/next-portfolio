import { Schema, model, models } from 'mongoose'

const ProjectPostSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    unique: [true, 'Slug already exists'],
  },
  tags: {
    type: [String],
    default: [],
  },
  repoLink: {
    type: String,
    default: '',
  },
  liveSite: {
    type: String,
    default: '',
  },
  content1: {
    type: String,
    required: [true, 'Content is required'],
  },
  content2: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: 'https://picsum.photos/1200/630',
  },
  content3: {
    type: String,
    default: '',
  },
  title2: {
    type: String,
    default: '',
  },
  content4: {
    type: String,
    default: '',
  },
  content5: {
    type: String,
    default: '',
  },
  content6: {
    type: String,
    default: '',
  },
},{ timestamps: true })

const ProjectPost = models.ProjectPost || model('ProjectPost', ProjectPostSchema)

export default ProjectPost