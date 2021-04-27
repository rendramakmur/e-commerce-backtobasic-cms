<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    if (localStorage.access_token) {
      this.$router.push('/dashboard')
    } else {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
