<template>
  <form class="o-form" v-on:submit.prevent="sumbitForm">
    <div class="o-form__inputfield">
      <input type="text" class="o-form__input" id="inputEnglish" placeholder />
      <label>Englisch</label>
    </div>

    <div class="o-form__inputfield">
      <input type="text" class="o-form__input" id="inputGerman" />
      <label>Deutsch</label>
    </div>

    <div class="o-form__inputfield">
      <input type="textfield" class="o-form__input" id="inputExampleText" />
      <label>Beispielsatz</label>
    </div>

    <OButton type="submit" submit></OButton>
  </form>
</template>

<script>
import OButton from "./button";
import axios from "axios";

export default {
  name: "o-form",
  components: { OButton },
  mounted() {},
  methods: {
    sumbitForm() {
      const englishInput = document.querySelector("#inputEnglish");
      const germanInput = document.querySelector("#inputGerman");
      const exampleInput = document.querySelector("#inputExampleText");

      axios
        .post("http://localhost:5000/posts", {
          english: englishInput.value,
          german: germanInput.value,
          text: exampleInput.value
        })
        .then(() => {
          englishInput.value = "";
          germanInput.value = "";
          exampleInput.value = "";
        });
    }
  }
};
</script>

<style lang="scss">
.o-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px;
  width: 100%;
  min-height: 300px;
  border-radius: 16px;
  background: $color-blue;

  &__inputfield {
    width: 100%;
    position: relative;
    margin-bottom: 16px;

    label {
      font-size: 16px;
      color: $color-light;
      position: absolute;
      top: 16px;
      left: 0;
      transition: all 0.5s ease-in-out;
    }
  }

  &__input {
    width: 100%;
    height: 48px;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid $color-light;
    font-size: 16px;
    color: $color-light;

    &:focus ~ label {
      font-size: 12px;
      color: $color-orange;
      top: -8px;
    }
  }
}
</style>
