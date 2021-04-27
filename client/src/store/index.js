import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    filterCategoryInput: '',
    banners: [],
    banner: {}
  },
  mutations: {
    fetchProducts (state, payload) {
      state.products = payload
    },
    getProductDetail (state, payload) {
      state.product = payload
    },
    filterCategoryMutations (state, payload) {
      state.filterCategoryInput = payload
    },
    fetchBanners (state, payload) {
      state.banners = payload
    },
    getBannerDetail (state, payload) {
      state.banner = payload
    }
  },
  actions: {
    login (context, payload) {
      axios.post('/login', {
        email: payload.email,
        password: payload.password
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.access_token = data.access_token
          localStorage.id = data.id
          localStorage.name = data.name
          localStorage.role = data.role
          router.push('/dashboard')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    fetchProducts (context) {
      axios.get('/products', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('fetchProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios.post('/products', payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          console.log('Add product success')
          context.dispatch('fetchProducts')
          router.push('/dashboard/products')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.errors.join('\n')
          })
        })
    },
    deleteProduct (context, payload) {
      axios.delete('/products/' + payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    getProduct (context, payload) {
      axios.get('/products/' + payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('getProductDetail', data)
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    },
    editProduct (context, payload) {
      const editedProduct = {
        name: context.state.product.name,
        category: context.state.product.category,
        stock: context.state.product.stock,
        price: context.state.product.price,
        image_url: context.state.product.image_url
      }
      axios.put('/products/' + payload, editedProduct, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log('Berhasil diedit')
          context.dispatch('fetchProducts')
          router.push('/dashboard/products')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.errors.join('\n')
          })
        })
    },
    fetchBanners (context) {
      axios.get('/banners', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('fetchBanners', data)
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    },
    addBanner (context, payload) {
      axios.post('/banners', payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          console.log('Add banner success')
          context.dispatch('fetchBanners')
          router.push('/dashboard/banners')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.errors.join('\n')
          })
        })
    },
    getBanner (context, payload) {
      axios.get('/banners/' + payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('getBannerDetail', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editBanner (context, payload) {
      const editedBanner = {
        title: context.state.banner.title,
        status: context.state.banner.status,
        image_url: context.state.banner.image_url
      }

      axios.put('/banners/' + payload, editedBanner, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchBanners')
          router.push('/dashboard/banners')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.errors.join('\n')
          })
        })
    },
    deleteBanner (context, payload) {
      axios.delete('/banners/' + payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchBanners')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    }
  },
  getters: {
    filterCategory (state) {
      return state.products.filter(product => product.category.toLowerCase().includes(state.filterCategoryInput.toLowerCase()))
    }
  }
})
