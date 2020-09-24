<template>
    <section class="sign-in">
        <div class="sign-in-header">
            <h1 class="sign-in-header-title">Sign Up</h1>
        </div>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M0.00,49.98 C147.85,150.48 373.59,-64.63 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none;"></path>
        </svg>
        <form class="sign-in-form">
            <input type="text" name="email" id="email" placeholder="Email">
            <input type="password" name="password" id="password" placeholder="Password">
            <a href="" class="sign-in-form-forgot">Forgot your password?</a>
            <filledButton :buttonText="'sign in'" class="sign-in-form-button" />
        </form>
    </section>
</template>

<script>
import filledButton from '@/components/ui-components/filledButton.vue';

export default {
    name: 'SignIn',
    components: {
        filledButton
    }
}
</script>

<style lang="scss" scoped>
    .sign-in {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        
        &-header {
            display: flex;
            align-items: center;
            @include gradient(0deg);
            width: 100%;
            padding: 3rem 2rem;
            
            &-title {
                color: #fff;
                font-size: 2rem;
            }
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
        &-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: $mainPadding;
            margin-bottom: 1rem;

            input {
                width: 100%;
                padding: .8rem 1.5rem;
                border-radius: 5rem;
                border: 1px solid $pink;
                margin: .5rem 0;
                font-size: 1rem;
            }
            input:focus {
                outline: none;
            }
            &-forgot {
                color: $orange;
                align-self: flex-start;
                margin-left: 1rem;
            }
            &-button {
                margin-top: 2rem;
            }
        }
    }
</style>