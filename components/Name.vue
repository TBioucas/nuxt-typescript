<template>
  <div>{{ name }}</div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['name']),
  },
};
</script>
