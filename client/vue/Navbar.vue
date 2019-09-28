<template>
  <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand href="/home">Vue-Node-Parcel</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-for="item in links" :href="item.link">{{ item.text }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        links: [
          {
            text: 'Home',
            link: '/home',
          },
          {
            text: 'About',
            link: '/about',
          },
          {
            text: 'Login',
            link: '/login',
          },
        ],
      }
    }
  }
</script>