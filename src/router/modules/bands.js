const bandsIndex = () => import(/* webpackChunkName: bandsIndex */ '@/views/bands/Index')
const bandAdd = () => import(/* webpackChunkName: bandsIndex */ '@/views/bands/Add')

export default [
  {
    path: '/bands',
    name: 'Bands index',
    component: bandsIndex,
  },
  {
    path: '/bands/add',
    name: 'Band add',
    component: bandAdd,
  },
]
