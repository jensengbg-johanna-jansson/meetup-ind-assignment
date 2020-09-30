<template>
    <button class="add-button" :disabled="hasJoined || hasEnded">
        <i v-if="!hasJoined" class="fas fa-user-plus button-icon"></i>
        <i v-else class="fas fa-user-check button-icon"></i>
    </button>
</template>

<script>
export default {
    name: 'addButton',
    props: {
        hasEnded: Boolean
    },
    computed: {
        hasJoined() {
            let eventId = parseInt(this.$route.params.eventId);
            let eventList = this.$store.state.user.userData.events;

            if(eventList.includes(eventId)) {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .add-button {
        width: 3.5rem;
        height: 3.5rem;
        @include centeredFlex();
        background: #fff;
        border: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, .5);
        border-radius: 4rem;

        .button-icon {
            font-size: 1.5rem;
            color: $pink;
        }
    }
    .add-button:focus {
        outline: none;
    }
    .add-button:disabled {
        background: #c7c7c7;
        
        .button-icon {
            color: #888;
        }
    }
</style>