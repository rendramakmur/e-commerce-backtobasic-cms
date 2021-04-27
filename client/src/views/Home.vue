<template>
  <div>
    <Headers></Headers>
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>
        <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4 overflow-auto" style="height: 650px;">
          <h1 class="text-center mt-4 mb-2">Content Management System Dashboard</h1>
          <hr>
          <router-view/>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from '../components/Headers'
import Sidebar from '../components/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    Headers,
    Sidebar
  }
}
</script>
