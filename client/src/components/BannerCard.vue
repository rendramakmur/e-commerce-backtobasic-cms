<template>
  <div class="card mb-3 shadow-lg">
    <img :src="bannerDetail.image_url" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">{{ bannerDetail.title }}</h5>
      <p class="card-text">Status: {{ computedBannerStatus }}</p>
      <div class="my-3">
        <a class="small-button btn-edit" href="#" @click.prevent="editPage">Edit</a> <a class="small-button btn-delete" href="#" @click.prevent="deleteBanner">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerCard',
  data () {
    return {
      bannerStatus: ''
    }
  },
  methods: {
    editPage () {
      this.$router.push(`/dashboard/banners/edit/${this.bannerDetail.id}`)
      this.$store.dispatch('getBanner', this.bannerDetail.id)
    },
    status () {
      if (this.bannerDetail.status === true) {
        this.bannerStatus = 'Active'
      } else {
        this.bannerStatus = 'Disable'
      }
    },
    deleteBanner () {
      this.$store.dispatch('deleteBanner', this.bannerDetail.id)
    }
  },
  props: ['bannerDetail'],
  created () {
    this.status()
  },
  computed: {
    computedBannerStatus () {
      this.status()
      return this.bannerStatus
    }
  }
}
</script>

<style>

</style>
