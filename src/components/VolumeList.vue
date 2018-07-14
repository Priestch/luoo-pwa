<template>
  <section class="volume-list">
    <volume
      v-for="volume in volumes"
      :key="volume.id"
      :volume="volume" />
  </section>
</template>

<script>
import Volume from './Volume';
export default {
  name: 'VolumeList',
  components: { Volume },
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
