<template>
  <section>
    <div v-if="loading">Loading Animation</div>
    <div v-else class="home">HomePage</div>
  </section>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      loading: false
    };
  },
  computed: {},
  async created() {
    this.loading = true;

    await this.$store.dispatch("getData");

    this.loading = false;
  },
  mounted() {}
};
</script>
