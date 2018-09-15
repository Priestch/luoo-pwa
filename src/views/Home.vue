<template>
  <section class="page container">
    <tag-list :tags="tags" />

    <volume-list :volumes="volumes" />
  </section>
</template>

<script>
import http from '@/http';

import VolumeList from '@/components/VolumeList';
import TagList from '@/components/TagList';

export default {
  name: 'Home',
  components: {
    TagList,
    VolumeList,
  },
  data() {
    return {
      volumes: [],
      tags: [],
    };
  },
  async created() {
    this.initialize();
  },
  methods: {
    async fetchVolumes() {
      return await http.get('/volumes');
    },
    async fetchTags() {
      return await http.get('/tags');
    },
    async initialize() {
      this.volumes = await this.fetchVolumes();
      this.tags = await this.fetchTags();
    },
  },
};
</script>

<style scoped lang="scss">
.page {
  .tag-list,
  .volume-list {
    margin: 0 auto;
    width: $volume-card-width;
  }

  .volume-list {
    margin-top: 40px;

    /deep/ .card {
      margin-bottom: 30px;
    }
  }
}
</style>
