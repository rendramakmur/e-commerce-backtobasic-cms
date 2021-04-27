<template>
  <div>
    <!-- Ini router view add product page -->
    <router-view/>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="Pants" v-model="filterCategoryInput">
      <label for="floatingInput">Product Category</label>
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-sm">
        <thead>
          <tr class="align-middle text-center">
            <th>No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <ProductTableRow v-for="(product, i) in filterCategory" :key="product.id" :product="product" :tableNumber="tableNumber(i)"></ProductTableRow>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ProductTableRow from './ProductTableRow'
import { mapState } from 'vuex'
export default {
  name: 'ProductTable',
  components: {
    ProductTableRow
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    tableNumber (i) {
      return i + 1
    }
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    ...mapState(['products']),
    filterCategory () {
      return this.$store.getters.filterCategory
    },
    filterCategoryInput: {
      get: function () {
        return this.$store.state.filterCategoryInput
      },
      set: function (newValue) {
        this.$store.commit('filterCategoryMutations', newValue)
      }
    }
  }
}
</script>

<style>

</style>
