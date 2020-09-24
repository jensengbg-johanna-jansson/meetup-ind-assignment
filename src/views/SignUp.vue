<template>
    <section class="sign-up">
        <div class="sign-up-header">
            <h1 class="sign-up-header-title">Sign Up</h1>
        </div>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M0.00,49.98 C147.85,150.48 373.59,-64.63 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none;"></path>
        </svg>
        <form class="sign-up-form">
            <input type="text" name="name" id="name" placeholder="Name">
            <input type="text" name="email" id="email" placeholder="Email">
            <input type="password" name="password" id="password" placeholder="Password">
            <input type="password" name="password2" id="password2" placeholder="Password Again">
            <filledButton :buttonText="'sign up'" class="sign-up-form-button" />
        </form>
        <p>Already have an account?</p>
        <primaryButton :buttonText="'sign in'" /> 
    </section>
</template>

<script>
import primaryButton from '@/components/ui-components/primaryButton.vue';
import filledButton from '@/components/ui-components/filledButton.vue';

export default {
    name: 'SignUp',
    components: {
        primaryButton,
        filledButton
    }
}
</script>

<style lang="scss" scoped>
    .sign-up {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        
        &-header {
            display: flex;
            align-items: center;
            @include gradient(0deg);
            width: 100%;
            padding: 2rem;
            
            &-title {
                color: #fff;
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
            &-button {
                margin-top: 2rem;
            }
        }
    }
</style>