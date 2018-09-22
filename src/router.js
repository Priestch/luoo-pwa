import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import TagDetail from './views/TagDetail.vue';
import VolumeDetail from './views/VolumeDetail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/tags/:tagId',
      name: 'tag',
      component: TagDetail,
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
