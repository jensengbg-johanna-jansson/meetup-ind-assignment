<template>
  <section class="home">
        <div class="home-header">
            <p class="home-header-slogan">Meet, discuss, learn, laugh</p>
            <p class="home-header-text">find a meet up that fits you!</p>
            <primaryButton @click.native="goToSignUp" :buttonText="'sign up now'" class="home-header-sign-up-button" /> 
        </div>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M0.00,49.98 C147.85,150.48 373.59,-64.63 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none;"></path>
        </svg>
        <article class="home-find-event">
          <h2 class="home-heading">Find a meetup</h2>
          <searchBar />
        </article>
        <article class="home-find-event mock-content">
          <h2 class="home-heading">Meetups near you</h2>
        </article>
  </section>
</template>

<script>
import primaryButton from '@/components/ui-components/primaryButton.vue';
import searchBar from '@/components/ui-components/searchBar.vue';
export default {
  name: 'Home',
  components: {
    primaryButton,
    searchBar
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    &-heading {
      color: $pink;
      text-align: left;
      margin-bottom: 1rem;
    }
    &-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      @include gradient(0deg);
      width: 100%;
      padding: 3rem 2rem;
      
      &-slogan {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 500;
      }
      &-text {
          color: #fff;
          font-size: 1rem;
          opacity: .6;
      }
      &-sign-up-button {
        margin-top: 2rem;
      }
    }
    &-find-event {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      width: 100%;
      padding: $mainPadding;
    }
    .mock-content {
      height: 40vh;
    }
    svg {
      height: 3rem; 
      width: 100%;
      transform: scale(-1, -1);
      z-index: -1;
    }
    path {
      fill: $pink;
    }
  }
</style>