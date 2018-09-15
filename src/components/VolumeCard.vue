<template>
  <section class="card">
    <div class="card-image">
      <router-link :to="getVolumeRouter(volume)">
        <figure class="image">
          <img
            :src="volume.cover"
            :alt="volume.name">
        </figure>
      </router-link>
    </div>

    <footer class="card-footer">
      <router-link
        :to="getVolumeRouter(volume)"
        class="card-footer-item volume-name">
        vol.{{ volume.vol_number }} {{ volume.name }}
      </router-link>
      <!--<span class="card-footer-item volume-data"></span>-->
    </footer>
  </section>
</template>

<script>
export default {
  name: 'VolumeCard',
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
.card {
  border-radius: 0 0 4px 4px;

  .card-footer {
    .card-footer-item {
      padding: 8px 12px;

      &.volume-name {
        font-size: 14px;
        justify-content: flex-start;
      }

      &.volume-data {
        justify-content: flex-end;
      }
    }
  }
}
</style>
