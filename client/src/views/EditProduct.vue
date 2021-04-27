<template>
  <section>
    <div id="add-task-page">
        <div class="container-fluid">
            <!-- Masukin overlay di sini -->
            <div class="overlay">
                <div class="row mx-3">
                    <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
                        <div class="col-sm-4">
                            <div class="card mt-3 mb-5 shadow-lg">
                                <div class="card-header d-flex justify-content-between">
                                    <p class="medium-text ms-2">Edit Product</p>
                                    <!-- Close button -->
                                    <router-link type="button" class="btn-close me-2" aria-label="Close" to="/dashboard/products"></router-link>
                                </div>
                                <div class="card-body">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="product-name" placeholder="Product Name" v-model="product.name">
                                        <label for="product-name">Product Name</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="category" placeholder="Product Category" v-model="product.category">
                                        <label for="category">Category</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                      <input type="number" class="form-control" id="stock" placeholder="Stock" v-model="product.stock">
                                      <label for="stock">Stock</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                      <input type="number" class="form-control" id="price" placeholder="Price" v-model="product.price">
                                      <label for="price">Price</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                      <input type="url" class="form-control" id="image_url" placeholder="Image URL" v-model="product.image_url">
                                      <label for="image_url">Image URL</label>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <div class="mt-2">
                                            <a href="#" class="btn medium-button my-1 px-4 shadow bg-primary color-secondary" @click.prevent="submitEdit">Submit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EditProductPage',
  methods: {
    submitEdit () {
      const id = this.product.id
      this.$store.dispatch('editProduct', id)
    }
  },
  computed: {
    ...mapState(['product'])
  }
}
</script>

<style>

</style>
