// backend/schemaTypes/projects.js
export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    { name: 'title', title: 'Project Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { 
      name: 'image', 
      title: 'Project Image', 
      type: 'image',
      options: { hotspot: true }
    },
    { 
      name: 'tech', 
      title: 'Tech Stack', 
      type: 'array', 
      of: [{type: 'string'}] // Allows you to add multiple tags like "React", "Node"
    },
    { name: 'projectLink', title: 'Live Demo URL', type: 'url' },
    { name: 'repoLink', title: 'GitHub Repo URL', type: 'url' }
  ]
}