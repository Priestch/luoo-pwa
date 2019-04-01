<template>
  <div>
    <volume
      v-if="volume"
      :volume="volume"></volume>
  </div>
</template>

<script>
import Volume from '@/components/Volume';
import { fetchVolume } from '../api/volume.api';

export default {
  name: 'VolumeDetail',
  components: {
    Volume,
  },
  props: {
    volumeId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      volume: null,
    };
  },
  computed: {
    id() {
      return Number(this.volumeId);
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    async initialize() {
      this.volume = await fetchVolume(this.id);
    },
  },
};
</script>

<style scoped>
.volume {
  margin: 0 auto;
}
</style>
