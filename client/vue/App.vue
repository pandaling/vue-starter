<template>
  <b-container>
    <navbar></navbar>
    <b-row>
      <b-col>
        <router-view/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Navbar from './Navbar';

  export default {
    name: 'App',
    components: {
      Navbar,
    },
  }
</script>

<style scoped>
</style>