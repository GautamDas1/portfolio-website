// backend/schemaTypes/education.js
export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    { name: 'institution', title: 'University / School', type: 'string' },
    { name: 'degree', title: 'Degree', type: 'string' },
    { name: 'startDate', title: 'Start Date', type: 'date' },
    { name: 'endDate', title: 'End Date', type: 'date' }, 
    { name: 'grade', title: 'Grade / GPA', type: 'string' }
  ]
}