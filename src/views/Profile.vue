<template>
    <section class="profile">
        <div class="profile-info">
            <span class="profile-info-img"><i class="fas fa-user-circle"></i></span>
            <p class="profile-info-name">Sarah Williams</p>
            <p class="profile-info-email">sarah.williams@gmail.com</p>
        </div>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M0.00,49.98 C147.85,150.48 373.59,-64.63 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none;"></path>
        </svg>
        <article class="profile-attend">
            <h2 class="profile-heading">Meetups I'm attending</h2>
        </article>
        <article class="profile-past">
            <h2 class="profile-heading">Past meetups</h2>
        </article>
    </section>
</template>

<script>
export default {
    name: 'Profile',
    computed: {
        userData() {
            return { userId: this.$route.params.userId };
        }
    }
}
</script>

<style lang="scss" scoped>
    .profile {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        &-info {
            @include gradient(0deg);
            display: grid;
            grid-template-columns: min-content 1fr;
            width: 100%;
            padding: 0 2rem;
            padding-top: 1rem;
            color: #fff;

            &-img {
                grid-row: span 2;
                background: rgba(0, 0, 0, .15);
                border-radius: 9rem;
                width: 8.5rem;
                height: 8.5rem;
                @include centeredFlex();
                font-size: 8rem;
                color: #fff;
                margin-right: 1rem;
            }
            &-name {
                font-size: 1.5rem;
                align-self: end;
            }
            &-email {
                font-size: .8rem;
                font-weight: 100;
                opacity: .8;
            }
        }
        &-attend, &-past {
            padding: 1rem 2rem;
            width: 100%;
        }
        &-heading {
            color: $pink;
        }
        svg {
            height: 3rem; 
            width: 100%;
            transform: scale(-1, -1);
            z-index: -1;
            margin-bottom: 2rem;
        }
        path {
            fill: $pink;
        }
    }
</style>