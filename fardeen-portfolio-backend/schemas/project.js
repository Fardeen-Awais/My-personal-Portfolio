import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Project description',
      type: 'text',
    }),
    defineField({
      name: 'projectimage',
      title: 'Project image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],

 
 
})
