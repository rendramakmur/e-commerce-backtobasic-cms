<template>
  <section>
    <div class="container-fluid">
      <div class="row mx-3">
        <div class="d-flex justify-content-center align-items-center" style="height: 650px;">
          <div class="col-sm-4">
            <h2 class="text-center">BackToBasic-CMS</h2>
            <hr>
            <h1 class="text-center">LOGIN</h1>
            <div class="col-sm-8 offset-sm-2">
              <label for="inputEmail" class="visually-hidden">Email address</label>
              <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" v-model="email">
              <label for="inputPassword" class="visually-hidden">Password</label>
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" v-model="password">
              <div class="d-flex justify-content-center">
                <div class="mt-2">
                    <a href="#" class="btn my-1 px-3 shadow bg-primary color-secondary" @click.prevent="login">Login</a>
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
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', user)
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style>

</style>
