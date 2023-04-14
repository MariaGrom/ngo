<template>
  <div class="container">
    <h1>{{ $store.state.test }}</h1>
    <UserCard v-for="guest in $store.state.guests" :guest="guest" :key="guest.slug" />
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  //   data(){
  // return {
  //   guests: []
  // }
  //   },
  // created(){
  // axios.get('/api/guests-s')
  // .then(res => {
  //   this.guests = res.data.data;
  //   console.log(res, 'here is res')
  //   console.log(this.guests, 'this.guests')
  // })
  // },
  mounted() {
    this.$store.dispatch('getGuests')
  }
};
</script>

<style scoped>
.container {
  background: url('~static/images/bgd.jpeg') center no-repeat;
  background-size: cover;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  padding-top: 100px;

}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
