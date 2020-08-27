<template>
  <div id="app">
    <CNavigation />
    <div class="content" :class="{ open: showNav }">
      <div id="navigation-icon" v-if="mobileView" @click="toggleNavigation">
        <i class="fas fa-bars"></i>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import CNavigation from "./components/navigation/navigation";
import { mapActions, mapState } from "vuex";

export default {
  name: "app",
  components: { CNavigation },
  data: () => {
    return {
      mobileView: true
    };
  },
  computed: mapState({
    showNav: state => state.navigation.show
  }),
  methods: {
    ...mapActions(["toggleNav"]),
    toggleNavigation() {
      this.toggleNav(!this.showNav);
    }
  }
};
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

html,
* {
  &,
  &:before,
  &:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
}

body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma;
  background-color: $color-blue;
}

html {
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6,
blockquote,
p,
pre,
dl,
dd,
ol,
ul,
figure,
hr,
fieldset,
legend {
  max-width: 100%;
  margin: 0;
  padding: 0;
}

/**
 * Remove trailing margins from nested lists.
 */

li > {
  ol,
  ul {
    margin-bottom: 0;
  }
}

/**
 * Remove default table spacing.
 */

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/**
 * 1. Reset Chrome and Firefox behaviour which sets a `min-width: min-content;`
 *    on fieldsets.
 */

fieldset {
  min-width: 0; /* [1] */
  border: 0;
}

/* Change Autocomplete styles in Chrome*/
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px gray inset;
}

// Remove scrollbars

::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track-piece {
  background-color: transparent;
  -webkit-border-radius: 6px;
}

a {
  text-decoration: none;
  color: black;
}

button {
  border: none;
  background: none;
}

html,
#app {
  min-height: 100%;
  user-select: none;
}

#app {
  position: relative;
  width: 100%;
  height: calc(100vh - 20px);
  padding: 10px;
  color: #333;
  overflow: hidden;
}

.content {
  position: absolute;
  top: 10px;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  padding: 20px;
  background-color: $color-light;
  border-radius: 24px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
}

#navigation-icon {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  i {
    font-size: 24px;
  }
}

.open {
  transform: translateX(200px);
}
</style>
