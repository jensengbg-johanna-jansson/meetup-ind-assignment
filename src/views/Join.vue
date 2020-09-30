<template>
    <section class="join">
        <span class="join-img"><i class="fas fa-user-check"></i></span>
        <p class="join-welcome-text">Welcome to</p>
        <p class="join-event">Hanami</p>
        <p class="join-message">Remember to check the event details before going to the event. You can find all events you are joining on your profile page.</p>

        <primaryButton @click.native="goToProfile" :buttonText="'check profile'" />
    </section>
</template>

<script>
import primaryButton from '@/components/ui-components/primaryButton.vue';
export default {
    name: 'Join',
    components: {
        primaryButton
    },
    methods: {
        goToProfile() {
            let userId = this.$store.state.user.userId;
            this.$router.push('/profile/' + userId);
        }
    }
}
</script>

<style lang="scss" scoped>
    .join {
        @include gradient(0deg);
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        padding: 2rem;

        &-img {
            @include centeredFlex();
            background: #fff;
            width: 15rem;
            height: 15rem;
            border-radius: 15rem;
            color: $pink;
            font-size: 6rem;
            margin-bottom: 3rem;
        }
        &-welcome-text {
            font-weight: bold;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        &-event {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            font-weight: 300;
        }
        &-message {
            font-weight: 300;
            opacity: .8;
            margin-bottom: 2rem;
            text-align: center;
        }
    }
</style>