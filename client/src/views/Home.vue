<template>
  <section>
    <div v-if="loading">Loading Animation</div>
    <div v-else class="homepage">
      <router-link class="homepage__startbutton" to="/learning">
        Lernen beginnen !
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      loading: false
    };
  },
  computed: {},
  async created() {
    this.loading = true;

    await this.$store.dispatch('getData');

    this.loading = false;
  },
  mounted() {}
};
</script>

<style lang="scss">
.homepage {
  width: 100%;
  height: 100vh;
  &__startbutton {
    width: 100%;
    height: 300px;
    padding: 8px;
    background-color: lightblue;
    background-blend-mode: multiply;
    background-image: url('../assets/learn.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    border-radius: 16px;

    display: flex;
    align-items: flex-end;

    font-size: 36px;
    color: white;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  }
}
</style>
