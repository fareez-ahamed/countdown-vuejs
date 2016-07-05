import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: 'body',
  components: { App }
});

Vue.filter('two_digits', function (value) {
  if(value.toString().length <= 1)
  {
    return "0"+value.toString();
  }
  return value.toString();
});
