<template>
  <div>
    <div class="container-fluid">
      <h3 class="text-center my-4">Upload Image</h3>
      <div class="d-flex justify-content-center">
        <input class="form-control mb-3 col-4" type="file" id="formFile" accept="image/" @change="getImageData">
      </div>
      <div class="text-center mb-2" v-if="imageShow === true">
        <p class="very-small-text">Upload progress:</p>
        <p class="very-small-text">{{ uploadValue }}%</p>
      </div>
      <div class="d-flex justify-content-center">
        <div>
            <a v-if="uploadValue === 0" href="#" class="btn medium-button px-4 mb-3 shadow bg-primary color-secondary" @click.prevent="onUpload">Upload</a>
            <a v-if="uploadValue === 100" href="#" class="btn medium-button px-4 mb-3 shadow bg-primary color-secondary" @click.prevent="newUploadFile">Upload Another Image</a>
        </div>
      </div>
      <div>
        <div class="d-flex justify-content-center">
          <div class="card mb-4" style="width: 28rem;">
            <a v-if="imageShow === true" target="_blank" :href="imageUrl"><img :src="imageUrl" class="card-img-top" alt=""></a>
            <div class="card-body">
              <p class="small-text">Image URL:</p>
              <p v-if="imageShow === true" class="very-small-text my-3">{{ imageUrl }}</p>
              <p v-if="imageShow === true" class="very-small-text">*Copy image url to input</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Swal from 'sweetalert2'

export default {
  name: 'Upload',
  data () {
    return {
      imageUrl: '',
      imageShow: false,
      uploadValue: 0,
      imageData: ''
    }
  },
  methods: {
    onUpload () {
      if (this.imageData && this.uploadValue === 0) {
        console.log(process.env.VUE_APP_FIREBASE_API_KEY, process.env.VUE_APP_FIREBASE_AUTH_DOMAIN, process.env.VUE_APP_FIREBASE_PROJECT_ID, process.env.VUE_APP_FIREBASE_STORAGE_BUCKET, process.env.VUE_APP_MESSAGING_SENDER_ID, process.env.VUE_APP_APP_ID)
        this.imageShow = true
        const storageRef = firebase.storage().ref(`${this.imageData.name}`).put(this.imageData)

        storageRef.on('state_changed', snapshot => {
          this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        }, error => { console.log(error) }, () => {
          this.uploadValue = 100
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.imageUrl = url
          })
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Select file first'
        })
      }
    },
    getImageData (event) {
      this.imageData = event.target.files[0]
    },
    newUploadFile () {
      this.uploadValue = 0
      this.imageShow = false
    }
  }
}
</script>

<style>

</style>
