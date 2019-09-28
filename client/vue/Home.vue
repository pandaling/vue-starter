<template>
  <div>
    <h1>{{ sentence }}</h1>
    <p>This is Home Page</p>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        sentence: 'Welcome to Home Page',
      }
    },
  }
</script>