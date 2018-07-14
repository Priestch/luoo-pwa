<template>
  <section class="volume">
    {{ volume }}
  </section>
</template>

<script>
export default {
  name: 'Volume',
  props: {
    volume: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
</style>
