export default ({
  name: 'ProfileInfo',
  title: 'ProfileInfo',
  type: 'document',
  fields: [
    
    ({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    ({
      name: 'about',
      title: 'About',
      type: 'text',
    }),
   
    {name: 'topskill1', type: 'string', title: 'TopSkill1'},{name: 'TopSkill2', type: 'string', title: 'TopSkill2'},{name: 'topskill3', type: 'string', title: 'Topskill3'},
  
   ({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
  
    ({
      name: 'profileimage',
      title: 'Profile image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    {
      name: 'socials',
      type: 'object',
      fields: [
        {
          name:'socials',
          type: 'reference',
          to: [{type: 'socials'}]
        }
      ]
    }
  ],

 
 
})
