import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import "./registerServiceWorker";
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
