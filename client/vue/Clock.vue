<template>
  <div id="clock">
    <h1 id="greet">{{ greet }}</h1>
    <h1 id="time">{{ timer }}</h1>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'Clock',
    data() {
      return {
        time: Date.now(),
      };
    },

    computed: {
      timer() {
        return moment(this.time).format('LTS');
      },
      greet() {
        if (moment().format('LTS').split(' ')[1] === 'AM')
          return 'Good Morning';
        else
          return 'Good Evening';
      }
    },

    created() {
      setInterval(() => {
        this.time = Date.now();
      }, 1000);
    },
  }
</script>

<style lang="scss">
  #clock {
    margin-top: 100px;
  }
  #time {
    font-size: 60px;
    text-align: center;
  }
  #greet {
    text-align: center;
    font-size: 80px;
  }
</style>