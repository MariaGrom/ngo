<template>
  <article class="container">
    <div class="block">
      <h1>{{ $store.state.test }}</h1>
      <img class="image" src="">
      <h1 class="title">Name of an artist</h1>
      <em class="subtitle">Country</em>
      <p>Description of an artist</p>
    </div>
  </article>
</template>

<script>
export default {
  
  computed: {
    guest() {
      // console.log(this.$route)
      const { id } = this.$route.params
      console.log(this.$route.params)
      return this.$store.getters.getCurrentGuest(id)
    }
  }
}
</script>

<style scoped>
.block {
  width: 60%;
  min-height: 650px;
  padding: 15px 30px;
  background: white;
  border-radius: 4px;
  text-align: left;
}

.image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.title {
  margin-bottom: 0;
}

.subtitle {
  display: block;
}</style>