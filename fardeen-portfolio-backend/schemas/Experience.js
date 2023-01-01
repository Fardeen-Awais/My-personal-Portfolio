import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    
    defineField({
      name: 'framework',
      title: 'Framework',
      type: 'string',
    }),
    
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'string',
    }),
  
    defineField({
      name: 'frameworkimg',
      title: 'Framework image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    {name: 'point1', type: 'string', title: 'Point1'},{name: 'point2', type: 'string', title: 'Point2'},{name: 'point3', type: 'string', title: 'Point3'},{name: 'point4', type: 'string', title: 'Point4'},{name: 'point5', type: 'string', title: 'Point5'}
  ],

 
 
})
