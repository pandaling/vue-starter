<template>
  <b-container id="main">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #main {
    background-image: url('../../asset/office_2.jpg');
    height: 100vh;
  }
</style>