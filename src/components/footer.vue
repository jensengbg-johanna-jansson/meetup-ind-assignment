<template>
    <footer class="footer">
        <article class="footer-links">
            <h3>My Account</h3>
            <a href="">Sign Up</a>
            <a href="">Sign In</a>
            <a href="">Help</a>
        </article>
        <article class="footer-links">
            <h3>Discover</h3>
            <a href="">Near You</a>
            <a href="">Special Events</a>
            <a href="">Calendar</a>
        </article>
        <article class="footer-links">
            <h3>Legal</h3>
            <a href="">Terms of Use</a>
            <a href="">Privacy Policy</a>
            <a href="">Coockie Policy</a>
        </article>
        <p class="footer-copy">Copywrite MiitoAppu 2020</p>
    </footer>
</template>

<script>
export default {
    name: 'mainFooter'
}
</script>

<style lang="scss" scoped>
    .footer {
        display: flex;
        flex-wrap: wrap;
        background: $pink;
        color: #fff;
        font-size: .9rem;
        font-weight: 300;
        padding: $mainPadding;
        margin-top: 2rem;

        &-links {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            
            h3 {
                margin-bottom: 1rem;
                font-weight: 400;
            }
            a {
                text-decoration: none;
                color: #fff;
                margin-bottom: .5rem;
            }
        }
        &-copy {
            width: 100vw;
            font-weight: 100;
            opacity: .8;
            text-align: center;
        }
    }
</style>