
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [

      { path: '/main', component: () => import('pages/main') },
      { path: '/buttons', component: () => import('pages/buttons') },
      { path: '/cards', component: () => import('pages/cards') },
      { path: '/navigations', component: () => import('pages/navigations') },
      { path: '/groupings', component: () => import('pages/groupings') },
      { path: '/popups', component: () => import('pages/popups') },
      { path: '/progress', component: () => import('pages/progress') },
      { path: '/medias', component: () => import('pages/medias') },
      { path: '/scrolling', component: () => import('pages/scrolling') },
      { path: '/animation', component: () => import('pages/animation') },
      { path: '/touch', component: () => import('pages/touch') },
      { path: '/webapi', component: () => import('pages/webapi') },
      { path: '/tabs', component: () => import('pages/tabs') },


    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
