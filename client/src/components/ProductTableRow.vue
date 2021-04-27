<template>
  <tr class="text-center">
    <td class="align-middle" style="word-wrap: break-word;min-width: 20px;max-width: 30px;">{{ tableNumber }}</td>
    <td class="img-fluid align-middle" style="word-wrap: break-word;min-width: 250px;max-width: 250px;"><img :src="product.image_url" :alt="product.name" style="width: 200px;" class="rounded shadow-sm"></td>
    <td class="align-middle" style="word-wrap: break-word;min-width: 100px;max-width: 100px;">{{ product.name }}</td>
    <td class="align-middle" style="word-wrap: break-word;min-width: 100px;max-width: 100px;">{{ product.category }}</td>
    <td class="align-middle" style="word-wrap: break-word;min-width: 100px;max-width: 100px;">Rp.{{ product.price }}</td>
    <td class="align-middle" style="word-wrap: break-word;min-width: 100px;max-width: 100px;">{{ product.stock }}</td>
    <td class="align-middle" style="word-wrap: break-word;min-width: 50px;max-width: 50px;">{{ product.id }}</td>
    <td class="align-middle" style="word-wrap: break-word;min-width: 80px;max-width: 80px;">
      <div class="my-3">
        <a class="small-button btn-edit" href="#" @click.prevent="changeEditPage">Edit</a>
      </div>
      <div class="my-3">
        <a class="small-button btn-delete" href="#" @click.prevent="deleteProduct">Delete</a>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductTableRow',
  props: ['product', 'tableNumber'],
  methods: {
    changeEditPage () {
      const id = this.product.id
      this.$router.push(`/dashboard/products/edit/${id}`)
      this.$store.dispatch('getProduct', id)
    },
    deleteProduct () {
      const id = this.product.id
      this.$store.dispatch('deleteProduct', id)
    }
  }
}
</script>

<style>

</style>
