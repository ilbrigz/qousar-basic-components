
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '/buttons', component: () => import('pages/buttons') },
      { path: '/cards', component: () => import('pages/cards') }

    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
