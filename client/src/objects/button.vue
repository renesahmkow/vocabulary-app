<template>
  <button class="o-button" :class="{ submit: submit }">Enter</button>
</template>

<script>
export default {
  name: "o-button",
  props: {
    submit: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss">
.o-button {
  min-width: 96px;
  min-height: 48px;
  border-radius: 16px;
  background-color: $color-yellow;
}
</style>
