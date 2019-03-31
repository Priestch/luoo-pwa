<template>
  <section class="page">
    <tag-list :tags="tags" />

    <volume-list :volumes="volumes" />

    <b-pagination
      :total="pager.total"
      :current.sync="pager.page"
      :rounded="true"
      :per-page="pager.perPage"
      order="is-centered" />
  </section>
</template>

<script>
import _ from 'lodash';
import VolumeList from '@/components/VolumeList';
import TagList from '@/components/TagList';
import { getVolumes } from '../service/volume.service';
import { getTags } from '../service/tag.service';

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
      pager: {
        page: 1,
        perPage: 5,
        total: null,
      },
    };
  },
  computed: {
    currentPage() {
      return this.pager.page;
    },
  },
  watch: {
    currentPage() {
      this.initVolumes();
    },
  },
  async created() {
    this.initialize();
  },
  methods: {
    async initVolumes() {
      const params = this.pickPagerProps();
      const resp = await getVolumes(params);
      this.volumes = resp.items;
      return resp;
    },
    async fetchTags() {
      return await getTags();
    },
    async initialize() {
      const resp = await this.initVolumes();
      this.pager.total = resp.total;
      this.tags = await this.fetchTags();
    },
    pickPagerProps() {
      return _.pick(this.pager, ['page', 'perPage']);
    },
  },
};
</script>

<style scoped lang="scss">
.page {
  .tag-list,
  .volume-list {
    margin: 0 auto;
    width: $volume-large-cover-width;
  }

  .volume-list {
    margin-top: 40px;

    ::-v-deep .card {
      margin-bottom: 30px;
    }
  }

  .pagination {
    margin: 0 auto;
    width: 40%;
  }
}
</style>
