// backend/schemaTypes/achievements.js
export default {
  name: 'achievements',
  title: 'Achievements',
  type: 'document',
  fields: [
    { name: 'title', title: 'Achievement Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' }
  ]
}