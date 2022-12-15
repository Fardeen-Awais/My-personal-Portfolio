import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ProfileInfo',
  title: 'ProfileInfo',
  type: 'document',
  fields: [
    
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'text',
    }),
   
    {name: 'topskill1', type: 'string', title: 'TopSkill1'},{name: 'TopSkill2', type: 'string', title: 'TopSkill2'},{name: 'topskill3', type: 'string', title: 'Topskill3'},
  
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
  
    defineField({
      name: 'profileimage',
      title: 'Profile image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
