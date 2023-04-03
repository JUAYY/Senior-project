<template>
  <main>
    <div class="container">
      <div class="row p-5" style="">
        <!-- navbar -->
        <ul class="nav nav-pills justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
      <!-- navbar -->

      <div class="row">
        <!-- right  -->
        <div class="col"></div>
        <!-- right  -->

        <!-- left  -->
        <div class="col">WELCOME</div>
        <!-- left  -->
      </div>
      <div>
        <b-button variant="primary">Primary</b-button>
      </div>
    </div>
  </main>
</template>

<!-- <script>

export default {
  methods: {
    submitData(username, password){
      const data = {
        username: this.username,
        password: this.password
      };
      this.$api.post("", data)
    }
  }
};
</script> -->

<script>
import { defineComponent } from 'vue'
import { useLoginUserStore } from '../stores/loginUserStore'

export default defineComponent({
  name: 'LoginView',
  // data() {
  //   return {
  //     form: {
  //       email: '',
  //       id: '',
  //       name: '',
  //       food: null,
  //       checked: []
  //     },
  //     foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
  //     show: true
  //   }
  // },
  // methods: {
  //   onSubmit(event) {
  //     event.preventDefault()
  //     alert(JSON.stringify(this.form))
  //   },
  //   onReset(event) {
  //     event.preventDefault()
  //     // Reset our form values
  //     this.form.email = ''
  //     this.form.name = ''
  //     this.form.food = null
  //     this.form.checked = []
  //     // Trick to reset/clear native browser form validation state
  //     this.show = false
  //     this.$nextTick(() => {
  //       this.show = true
  //     })
  //   }
  // }
})
</script>
