<template>
  <section id="nav" class="c-navigation">
    <div class="c-navigation__menu">
      <h2 class="c-navigation__menu__headline">
        Menü
      </h2>
    </div>
    <div class="c-navigation__linkList">
      <router-link
        @click.native="toggleNavigation"
        class="c-navigation__linkList__item"
        to="/"
        >Home</router-link
      >
      <router-link
        @click.native="toggleNavigation"
        class="c-navigation__linkList__item"
        to="/learning"
        >Learning</router-link
      >
      <router-link
        @click.native="toggleNavigation"
        class="c-navigation__linkList__item"
        to="/create"
        >Create</router-link
      >
      <router-link
        @click.native="toggleNavigation"
        class="c-navigation__linkList__item"
        to="/overview"
        >Overview</router-link
      >
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'o-navigation',
  data() {
    return {};
  },
  computed: mapState({
    showNav: (state) => state.navigation.show
  }),
  methods: {
    ...mapActions(['toggleNav']),
    toggleNavigation() {
      this.toggleNav(!this.showNav);
    }
  }
};
</script>

<style lang="scss">
.c-navigation {
  width: 200px;
  height: calc(100vh - 20px);
  padding: 16px;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;

  &__linkList {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.4s ease-in-out;
    border-top: 2px solid white;
    padding-top: 32px;

    &__item {
      color: white;
      font-size: 24px;
      margin-bottom: 32px;
    }
  }

  &__menu {
    display: flex;
    margin-bottom: 32px;
    color: white;

    &__headline {
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
