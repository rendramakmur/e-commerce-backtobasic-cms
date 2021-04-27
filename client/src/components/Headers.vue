<template>
  <header class="navbar navbar-light bg-dark py-3 shadow">
      <button class="navbar-toggler position-absolute d-sm-none collapsed mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="navbar-nav px-3 ms-auto">
        <li class="nav-item">
          <router-link class="navbar-brand color-secondary" to="/dashboard">BackToBasic</router-link>
        </li>
      </ul>
  </header>
</template>

<script>
export default {
  name: 'Headers'
}
</script>

<style>

</style>
