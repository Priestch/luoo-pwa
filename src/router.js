import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import TagVolume from './views/TagVolume.vue';
import VolumeDetail from './views/VolumeDetail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tags/:tagId',
      name: 'tag',
      component: TagVolume,
      props: true,
    },
    {
      path: '/volume/:volumeId',
      name: 'volume',
      component: VolumeDetail,
      props: true,
    },
  ],
});
