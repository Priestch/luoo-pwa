<template>
  <section class="page">
    <section class="page-header">
      <tag-list />
    </section>
    <section class="page-body">
      <volume-list />
    </section>
  </section>
</template>

<script>
import VolumeList from '@/components/VolumeList';
import TagList from '@/components/TagList';

export default {
  name: 'Home',
  components: {
    TagList,
    VolumeList,
  },
};
</script>

<style scoped>
</style>
