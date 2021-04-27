<template>
  <div>
    <!-- Ini router view add product page -->
    <router-view/>
    <div class="overlay-auto" style="height: 50vw;">
      <BannerCard v-for="banner in banners" :key="banner.id" :bannerDetail="banner"></BannerCard>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BannerCard from './BannerCard'
export default {
  name: 'BannerListContainer',
  components: {
    BannerCard
  },
  methods: {
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    }
  },
  created () {
    this.fetchBanners()
  },
  computed: {
    ...mapState(['banners'])
  }
}
</script>

<style>

</style>
