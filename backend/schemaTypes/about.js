// backend/schemaTypes/about.js
export default {
  name: 'about',
  title: 'About & Contact',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'role', title: 'Role / Job Title', type: 'string' },
    { name: 'bio', title: 'Bio', type: 'text' },
    { name: 'profileImage', title: 'Profile Image', type: 'image', options: { hotspot: true } },
    
    // Contact Info
    { name: 'email', title: 'Email Address', type: 'string' },
    { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
    { name: 'github', title: 'GitHub URL', type: 'url' },
    { name: 'instagram', title: 'Instagram URL', type: 'url' },
  ]
}