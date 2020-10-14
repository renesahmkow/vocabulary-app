<template>
  <section class="c-learnPage">
    <div class="c-learnPage__english" :class="{ active: this.showAnswer }">
      {{ vocabularyList[counter].english }}
    </div>
    <div
      class="c-learnPage__german"
      :class="{ active: this.showAnswer }"
      v-hammer:tap="onTap"
    >
      <h3>Antwort</h3>
      <div v-if="this.showAnswer">{{ vocabularyList[counter].german }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LearningPage',
  data: () => {
    return {
      vocularyList: [],
      counter: 0,
      showAnswer: false
    };
  },
  computed: {},
  beforeMount() {
    this.vocabularyList = this.$store.state.vocabularys.list;

    console.log(this.vocabularyList);
  },
  methods: {
    onTap() {
      console.log('HI');
      return (this.showAnswer = !this.showAnswer);
    }
  }
};
</script>

<style lang="scss">
.c-learnPage {
  height: 100%;
  &__english {
    background-color: green;
    height: 75%;

    &.active {
      height: 25%;
    }
  }

  &__german {
    position: relative;
    top: -40px;
    background-color: red;
    height: 25%;
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    &.active {
      height: 75%;
    }
  }
}
</style>
