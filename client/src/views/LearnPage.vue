<template>
  <section class="c-learnPage">
    <div
      class="c-learnPage__content c-learnPage__content--english"
      :class="{ active: this.showAnswer }"
    >
      {{ vocabularyList[counter].english }}
    </div>
    <div
      class="c-learnPage__content c-learnPage__content--german"
      :class="{ active: this.showAnswer }"
      @click="onTap"
    >
      <h3 v-if="!this.showAnswer">Antwort</h3>
      <div v-else class="c-learnPage__wrapper">
        <div>
          {{ vocabularyList[counter].german }}
        </div>
        <div class="c-learnPage__buttongroup">
          <button
            class="c-learnPage__button c-learnPage__button--wrong"
            @click.stop="checkVocabulary()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="24px"
              height="24px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          </button>
          <button
            class="c-learnPage__button c-learnPage__button--correct"
            @click.stop="checkVocabulary()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="24px"
              height="24px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
            </svg>
          </button>
        </div>
      </div>
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
  },
  methods: {
    onTap() {
      return (this.showAnswer = !this.showAnswer);
    },
    checkVocabulary() {
      if (this.counter < this.$store.state.vocabularys.list.length) {
        this.counter++;
      } else {
        this.counter = 0;
      }
    }
  }
};
</script>

<style lang="scss">
.c-learnPage {
  $self: &;
  height: calc(100% - 44px);

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    color: white;

    &--english {
      background-color: green;
      height: 75%;
      color: white;

      &.active {
        height: 25%;
      }
    }

    &--german {
      position: relative;
      top: -40px;
      background-color: red;
      height: calc(25% + 40px);
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;

      &.active {
        height: calc(75% + 40px);
      }
    }
  }

  &__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 60px 40px;
  }

  &__buttongroup {
    width: 100%;
    display: flex;
    justify-content: space-between;

    #{ $self }__button {
      background: blue;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      outline: none;

      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
