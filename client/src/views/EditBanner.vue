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
                                    <a type="button" class="btn-close me-2" aria-label="Close" href="#" @click.prevent="backToBanner"></a>
                                </div>
                                <div class="card-body">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="banner-title" placeholder="Banner Title" v-model="banner.title">
                                        <label for="banner-title">Banner Title</label>
                                    </div>

                                    <label for="banner-status">Status</label>
                                    <select class="form-select mb-3" id="banner-status" v-model="banner.status">
                                        <option style="color: #00A8FF" value="true">Active</option>
                                        <option style="color: #DB382D" value="false">Disable</option>
                                    </select>

                                    <div class="form-floating mb-3">
                                      <input type="url" class="form-control" id="image_url" placeholder="Image URL" v-model="banner.image_url">
                                      <label for="image_url">Image URL</label>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <div class="mt-2">
                                            <a href="#" class="btn medium-button my-1 px-4 shadow bg-primary color-secondary" @click.prevent="submitEditBanner">Submit</a>
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
  name: 'EditBanner',
  methods: {
    backToBanner () {
      this.$router.push('/dashboard/banners')
    },
    submitEditBanner () {
      this.$store.dispatch('editBanner', this.banner.id)
    }
  },
  computed: {
    ...mapState(['banner'])
  }
}
</script>

<style>

</style>
