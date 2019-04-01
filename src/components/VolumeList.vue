<template>
  <section class="volume-list">
    <volume-card
      v-for="volume in volumes"
      :key="volume.id"
      :volume="volume"></volume-card>
  </section>
</template>

<script>
import VolumeCard from './VolumeCard';

export default {
  name: 'VolumeList',
  components: { VolumeCard },
  props: {
    volumes: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
</style>
