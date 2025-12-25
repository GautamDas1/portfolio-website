export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    { name: 'name', title: 'Skill Name', type: 'string' },
    { 
      name: 'category', 
      title: 'Category', 
      type: 'string',
      options: {
        list: [
          { title: 'Programming Languages', value: 'languages' },
          { title: 'Web Technologies', value: 'web' },
          { title: 'Tools & Platforms', value: 'tools' },
          { title: 'Specializations', value: 'specializations' }
        ] // You can add more categories here if you want
      }
    },
    { 
      name: 'level', 
      title: 'Proficiency (0-100%)', 
      type: 'number', 
      validation: Rule => Rule.min(0).max(100) 
    },
    { name: 'icon', title: 'Icon (Optional)', type: 'image' }
  ]
}