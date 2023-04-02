<template>
    <h1>
        {{ title }}
    </h1>
</template>

<script>
    export default {
props:{
    title: {
        type: String,
        default: '',
    }
}
        
    }
</script>

<style scoped>
 h1 {
    color: #000;
  }
</style>