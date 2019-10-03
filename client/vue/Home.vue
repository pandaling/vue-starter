<template>
  <div>
    <h1>{{ sentence }}</h1>
    <p></p>
    <Clock></Clock>
  </div>
</template>

<script>
  import Clock from './Clock';

  export default {
    name: 'Home',
    data() {
      return {
        sentence: '',
      }
    },

    components: {
      Clock,
    },
  }
</script>