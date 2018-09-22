<template>
  <article class="volume">
    <header>
      <h3>{{ volume.name }}</h3>
    </header>

    <section class="volume-cover">
      <router-link :to="getVolumeRouter(volume)">
        <figure class="image">
          <img
            :src="volume.cover"
            :alt="volume.name">
        </figure>
      </router-link>
    </section>

    <section class="volume-description">
      <p
        v-for="(paragraph, index) in volume.description"
        :key="index">
        {{ paragraph }}
      </p>
    </section>

    <section class="volume-author" />
  </article>
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
  computed: {
    description() {
      return this.volume.description.join('<br />');
    },
  },
  methods: {
    getVolumeRouter(volume) {
      return { name: 'volume', params: { volumeId: volume.id } };
    },
  },
};
</script>

<style scoped lang="scss">
.volume {
  width: $volume-large-cover-width;
}
</style>
