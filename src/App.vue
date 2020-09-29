<template>
  <div id="app">
    <mainNav />
    <loader v-if="apiStateLoading" />
    <router-view v-if="apiStateLoaded" />
  </div>
</template>

<script>
  import mainNav from '@/components/nav.vue';
  import loader from '@/components/ui-components/loader.vue';
  import apiEnum from '@/js/apiEnum.js';

  export default { 
    components: {
      mainNav,
      loader
    },
    computed: {
      apiStateLoaded() {
        return this.$store.state.apiState === apiEnum.LOADED;
      },
      apiStateLoading() {
        return this.$store.state.apiState === apiEnum.LOADING || this.$store.state.apiState === apiEnum.INIT;
      },
    },
    created() {
      this.$store.dispatch('getData')
      .then(() => {
        this.$store.dispatch('isLoggedIn')
      })
    },
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
