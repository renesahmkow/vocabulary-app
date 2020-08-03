<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/learning">Learning</router-link>|
      <router-link to="/create">Create</router-link>|
      <router-link to="/overview">Overview</router-link>
    </div>
    <section class="container">
      <router-view />
    </section>
  </div>
</template>

<style lang="scss">
@import "./scss/_resets.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 4px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  height: 100vh;
  width: 100%;
}
</style>
