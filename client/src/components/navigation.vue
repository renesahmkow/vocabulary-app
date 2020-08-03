<template>
  <section id="nav" class="c-navigation">
    <div class="c-navigation__menu">
      <div
        class="c-navigation__burgermenu"
        :class="{ isActive: menuIsActive }"
        @click="toggelBurgerMenu"
      >
        <div class="menuBar menuBar--half menuBar--top"></div>
        <div class="menuBar"></div>
        <div class="menuBar menuBar--half menuBar--bottom"></div>
      </div>

      <h2 v-if="menuIsActive" class="c-navigation__menu__headline">
        Was möchtest du machen ?
      </h2>
    </div>

    <!-- <router-link class="c-navigation__link" to="/">Home</router-link>|
    <router-link class="c-navigation__link" to="/learning">Learning</router-link
    >|
    <router-link class="c-navigation__link" to="/create">Create</router-link>|
    <router-link class="c-navigation__link" to="/overview"
      >Overview</router-link
    > -->
  </section>
</template>

<script>
export default {
  name: 'o-navigation',
  data() {
    return {
      menuIsActive: false
    };
  },
  mounted() {},
  methods: {
    toggelBurgerMenu: function() {
      this.menuIsActive = !this.menuIsActive;
    }
  }
};
</script>

<style lang="scss">
.c-navigation {
  width: 100%;
  padding: 16px;
  position: fixed;
  top: 0;

  &__link {
  }

  &__menu {
    display: flex;

    &__headline {
      margin-left: 16px;
      align-self: center;
    }
  }

  &__burgermenu {
    width: 30px;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.isActive {
      .menuBar {
        transform: rotate(360deg);
        &--half {
          width: 100%;
        }

        &--bottom {
          transform: rotate(-45deg);
          top: -9px;
        }
        &--top {
          transform: rotate(45deg);
          top: 9px;
        }

        &:nth-of-type(2) {
          opacity: 0;
        }
      }
    }
  }
}

.menuBar {
  width: 100%;
  height: 3px;
  border-radius: 16px;
  background-color: black;
  margin-bottom: 2px;
  transition: all 0.3s ease-in-out;
  position: relative;
  opacity: 1;

  &--half {
    width: 66%;
  }

  &--bottom {
    align-self: flex-end;
  }
}
</style>
