import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import '@/assets/settings.scss';
import './fontawesome';

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: 'fas',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
