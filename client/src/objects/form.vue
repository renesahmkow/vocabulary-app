<template>
  <section>
    <form class="o-form" v-on:submit.prevent="sumbitForm">
      <label>
        <input type="text" class="o-form__input" id="inputEnglish" />
        Englisch
      </label>
      <label>
        <input type="text" class="o-form__input" id="inputGerman" />
        Deutsch
      </label>
      <OButton type="submit"></OButton>
    </form>
  </section>
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

      axios
        .post("http://localhost:5000/posts", {
          english: englishInput.value,
          german: germanInput.value
        })
        .then(() => {
          englishInput.value = "";
          germanInput.value = "";
        });
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
