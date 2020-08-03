<template>
  <div id="app">
    <section class="container">
      <CNavigation></CNavigation>
      <router-view />
    </section>
  </div>
</template>

<script>
import CNavigation from './components/navigation';

export default {
  name: 'app',
  components: { CNavigation }
};
</script>

<style lang="scss">
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

html {
  scroll-behavior: smooth;
}

body,
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

html,
body,
#app {
  min-height: 100%;
  user-select: none;
}

.container {
  position: relative;
  height: 100vh;
  width: 100%;
}
</style>
