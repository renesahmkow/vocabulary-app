<template>
  <form class="o-form" v-on:submit.prevent="sumbitForm">
    <div class="o-form__inputfield">
      <input
        type="text"
        class="o-form__input"
        id="inputEnglish"
        placeholder=""
      />
      <label>
        Englisch
      </label>
    </div>

    <div class="o-form__inputfield">
      <input type="text" class="o-form__input" id="inputGerman" />
      <label>Deutsch</label>
    </div>
    <OButton type="submit" submit></OButton>
  </form>
</template>

<script>
import OButton from './button';
import axios from 'axios';

export default {
  name: 'o-form',
  components: { OButton },
  mounted() {},
  methods: {
    sumbitForm() {
      const englishInput = document.querySelector('#inputEnglish');
      const germanInput = document.querySelector('#inputGerman');

      axios
        .post('http://localhost:5000/posts', {
          english: englishInput.value,
          german: germanInput.value
        })
        .then(() => {
          englishInput.value = '';
          germanInput.value = '';
        });
    }
  }
};
</script>

<style lang="scss">
.o-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 32px;
  width: 100%;
  height: 300px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.6);

  &__inputfield {
    width: 100%;
    position: relative;

    label {
      font-size: 16px;
      color: white;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.5s ease-in-out;
    }
  }

  &__input {
    width: 100%;
    height: 32px;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid white;
    font-size: 16px;
    color: white;

    &:focus ~ label {
      font-size: 12px;
      color: lightblue;
      top: -16px;
    }
  }
}
</style>
