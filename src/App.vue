<template>
  <div id="app">
      <Countdown date="August 15, 2016"></Countdown>
  </div>
</template>

<script>
import Countdown from './components/Countdown.vue';

export default {
    components: { Countdown },

  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

#app{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
}
</style>
