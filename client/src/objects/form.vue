<template>
  <section>
    <form class="o-form" v-on:submit.prevent="sumbitForm">
      <label>
        <input type="text" class="o-form__input" />
        Englisch
      </label>
      <label>
        <input type="text" class="o-form__input" />
        Deutsch
      </label>
      <OButton type="submit"></OButton>
    </form>
  </section>
</template>

<script>
import OButton from './button';
// import axios from 'axios';

export default {
  name: 'o-form',
  components: { OButton },
  mounted() {
    // axios.post('http://localhost:5000/posts', {
    //   english: 'House',
    //   german: 'Haus'
    // });
  },
  methods: {
    sumbitForm() {
      console.log('submit');
    }
  }
};
</script>

<style lang="scss">
.o-form {
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 8px;
  }
}
</style>
