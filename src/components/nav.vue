<template>
    <header>
        <div class="menu">
            <button @click="toggleNav" class="menu-button"><i class="fas fa-bars"></i></button>
            <h1 class="menu-logo">MiitoAppu</h1>
            <button class="menu-user"><i class="fas fa-user-circle"></i></button>
        </div>
        <span class="spacer"></span>
        <nav v-if="showNav" class="menu-nav">
            <router-link to="/">Home</router-link>
            <router-link to="/search">Meetups</router-link>
            <router-link to="/">About</router-link>
            <router-link to="/">Contact</router-link>
            <router-link to="/profile">Profile</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'mainNav',
    data() {
        return {
            showNav: false
        }
    },
    methods: {
        toggleNav() {
            this.showNav = !this.showNav;
        },
        onUrlChange() {
            this.showNav = false;
        }
    },
    watch: {
        '$route': {
            handler: 'onUrlChange',
            immediate: true,
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu {
        width: 100vw;
        height: 4rem;
        background: $orange;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
        
        button {
            background: none;
            border: none;
            font-size: 2.5rem;
            color: #fff;
        }
        &-logo {
            font-size: 1.5rem;
            letter-spacing: .5px;
        }
        &-user {
            height: 2.5rem;
            width: 2.5rem;
            border-radius: 3rem;
        }
        &-button:focus {
            outline: none;
        }
        &-nav {
            position: absolute;
            top: 0;
            left: 0;
            height: 100vh;
            width: 60vw;
            padding-top: 4rem;
            @include gradient(0deg);
            display: flex;
            flex-direction: column;
            box-shadow: 40vw 0 5px rgba(255, 255, 255, .5);
            z-index: 1;

            a {
                color: #fff;
                text-decoration: none;
                text-transform: uppercase;
                font-size: 2rem;
                font-weight: 300;
                padding: 2rem;
            }
        }
    }
    .spacer {
        height: 4rem;
        width: 100vw;  
        display: block;      
    }

</style>