<template>
    <header>
        <div class="menu">
            <button @click="toggleNav" class="menu-button"><i class="fas fa-bars"></i></button>
            <h1 class="menu-logo">MiitoAppu</h1>
            <button v-if="isLoggedIn" 
                class="menu-user menu-profile" 
                @click="goToProfile">
                <i class="fas fa-user-circle"></i>
            </button>
            <button v-else 
                class="menu-user menu-sign-in" 
                @click="goToSignIn">
                <i class="fas fa-sign-in-alt"></i>
            </button>
        </div>
        <span class="spacer"></span>
        <nav v-if="showNav" class="menu-nav">
            <router-link to="/">Home</router-link>
            <router-link to="/search">Meetups</router-link>
            <router-link to="/">About</router-link>
            <router-link to="/">Contact</router-link>
            <router-link to="/profile">Profile</router-link>
            <button class="menu-nav-sign-out" @click="signOut">Sign Out</button>
        </nav>
    </header>
</template>

<script>
import getUser from '@/js/userDataFunctions.js';
export default {
    name: 'mainNav',
    data() {
        return {
            showNav: false,
        }
    },
    methods: {
        toggleNav() {
            this.showNav = !this.showNav;
        },
        onUrlChange() {
            this.showNav = false;
        },
        goToProfile() {
            let userId = this.$store.state.user.userId;
            this.$router.push('/profile/' + userId);
        },
        goToSignIn() {
            this.$router.push('/signin');
        },
        signOut() {
            getUser.END_SESSION();
            this.$router.push('/');
        }
    },
    computed: {
        isLoggedIn() {
            let userId = this.$store.state.user.userId;

            if(userId != null) {
                return true;
            } else {
                return false;
            }
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
        button:focus {
            outline: none;
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

            a, &-sign-out {
                color: #fff;
                text-decoration: none;
                text-transform: uppercase;
                font-size: 2rem;
                font-weight: 300;
                padding: 2rem;
            }
            &-sign-out {
                background: none;
                border: none;
                text-align: left;
            }
        }
    }
    .spacer {
        height: 4rem;
        width: 100vw;  
        display: block;      
    }

</style>