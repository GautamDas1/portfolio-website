// backend/schemaTypes/certificates.js
export default {
  name: 'certificates',
  title: 'Certificates',
  type: 'document',
  fields: [
    { name: 'title', title: 'Certificate Name', type: 'string' },
    { name: 'issuer', title: 'Issuer (e.g. Coursera)', type: 'string' },
    { name: 'date', title: 'Date Issued', type: 'date' },
    { name: 'link', title: 'Certificate URL', type: 'url' },
    { name: 'image', title: 'Certificate Image', type: 'image' }
  ]
}