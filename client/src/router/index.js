import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../components/ProductTable.vue'),
        children: [
          {
            path: 'add',
            name: 'AddProduct',
            component: () => import('../views/AddProduct.vue')
          },
          {
            path: 'edit/:id',
            name: 'EditProduct',
            component: () => import('../views/EditProduct.vue')
          }
        ]
      },
      {
        path: 'banners',
        name: 'Banners',
        component: () => import('../components/BannerListContainer.vue'),
        children: [
          {
            path: 'add',
            name: 'AddBanner',
            component: () => import('../views/AddBanner.vue')
          },
          {
            path: 'edit/:id',
            name: 'EditBanner',
            component: () => import('../views/EditBanner.vue')
          }
        ]
      },
      {
        path: 'upload',
        name: 'Upload',
        component: () => import('../components/Upload.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token) {
    if (to.name !== 'Login') {
      next({ name: 'Login' })
    } else if (to.name === 'Login') {
      next()
    }
  } else {
    next()
  }
})

export default router
