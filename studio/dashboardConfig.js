export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5df25b6b763644a1a453d6a7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qmzmt8wa',
                  apiId: '64332371-9c68-4c0b-9c23-40325dc8f1fe'
                },
                {
                  buildHookId: '5df25b6b77e6dcbab57316fc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bekhzigt',
                  apiId: '4a20d4ff-a12c-4b94-8e43-905f29a2895d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LeighDaubermann/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bekhzigt.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
