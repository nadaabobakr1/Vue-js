<template>

    <h1>Student Details</h1>
  <div class="Student">
    <h2>Name:</h2>
    <h4>{{ this.$route.params.name }}</h4>
    <h2>Email:</h2>
    <h4> {{ this.$route.params.email }}</h4>
    <h2>Age:</h2>
    <h4> {{ this.$route.params.age }}</h4>
  </div>
    <router-link to="/"  class="btn bg-primary text-decoration-none  text-white">Back</router-link>
</template>

<script>
export default {
  
}
</script>
<style scoped>
    .Student {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

</style>