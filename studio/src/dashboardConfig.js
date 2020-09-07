export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f56bb39e319eeaa6d5d7da3',
                  title: 'Sanity Studio',
                  name: 'sapphire-inspires-blog-studio',
                  apiId: 'ddcd0863-ff25-487d-9c55-54abc1fd9f35'
                },
                {
                  buildHookId: '5f56bb391e2b2f4f23b67998',
                  title: 'Blog Website',
                  name: 'sapphire-inspires-blog',
                  apiId: '1cd2c2b4-ba49-498e-9e32-c1054a184338'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Frema1/sapphire-inspires-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sapphire-inspires-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
