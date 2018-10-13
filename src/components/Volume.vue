<template>
  <article class="volume">
    <header>
      <span class="volume-number">{{ volume.vol_number }}</span>
      <span>{{ volume.name }}</span>
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

  header {
    position: relative;
    padding-bottom: 20px;
    font-size: 30px;
    line-height: 63px;

    .volume-number {
      display: inline-block;
      height: 64px;
      width: 64px;
      border-radius: 50%;
      margin-right: 20px;
      font-size: 18px;
      text-align: center;
      color: #fff;
      background-color: $primary-color;
    }
  }

  .volume-description {
    font-size: 14px;
  }

  .volume-cover {
    margin-bottom: 22px;
  }
}
</style>
