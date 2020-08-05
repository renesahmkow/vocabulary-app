<template>
  <section class="c-createPage">
    <OForm></OForm>
  </section>
</template>

<script>
import OForm from '../objects/form';

export default {
  name: 'CreatePage',
  components: { OForm }
};
</script>

<style lang="scss">
.c-createPage {
  display: flex;
  justify-content: center;
}
</style>
