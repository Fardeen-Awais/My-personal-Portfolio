import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    
    defineField({
      name: 'Skill',
      title: 'Skill',
      type: 'string',
    }),
    
    defineField({
      name: 'Progress',
      title: 'Progress',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
    }),
    defineField({
      name: 'skillimg',
      title: 'Skill picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  
  ],

 
 
})
