<template>
  <div id="app">
    <mainNav />
    <router-view/>
  </div>
</template>

<script>
  import mainNav from '@/components/nav.vue';
  export default { 
    components: {
      mainNav
    },
    created() {
      this.$store.dispatch('getData');
    }
  }
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto', sans-serif;
  letter-spacing: .2px;
  line-height: 1.4rem;
  color: $text;
}
</style>
