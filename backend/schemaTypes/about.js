export default {
    name: 'about',
    title: 'About & Contact',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'role',
        title: 'Role / Job Title',
        type: 'string',
        placeholder: 'e.g. Full Stack Developer'
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'text',
        rows: 4
      },
      {
        name: 'profileImage',
        title: 'Profile Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'isOpenToWork',
        title: 'Open to Work Status',
        type: 'boolean',
        description: 'Toggle this ON to show the green "Open to Work" badge.',
        initialValue: true 
      },
      {
        name: 'email',
        title: 'Email Address',
        type: 'string'
      },
      {
        name: 'linkedin',
        title: 'LinkedIn URL',
        type: 'url'
      },
      {
        name: 'github',
        title: 'GitHub URL',
        type: 'url'
      },
      // 👇 THIS IS THE NEW RESUME FIELD
      {
        name: 'resume',
        title: 'Resume / CV (PDF)',
        type: 'file',
        description: 'Upload your Resume in PDF format here.',
        options: {
            accept: '.pdf' 
        }
      }
    ]
  }