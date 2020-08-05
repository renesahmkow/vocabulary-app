<template>
  <button class="o-button" :class="{ submit: submit }">Enter</button>
</template>

<script>
export default {
  name: 'o-button',
  props: {
    submit: {
      type: Boolean
    }
  }
};
</script>

<style>
.o-button {
  min-width: 96px;
  min-height: 40px;
  border-radius: 8px;
}
</style>
