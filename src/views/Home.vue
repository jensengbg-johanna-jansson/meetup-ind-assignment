<template>
  <div class="home">
    <locationDetails />
  </div>
</template>

<script>
// @ is an alias to /src
import locationDetails from '@/components/locationDetails.vue'

export default {
  name: 'Home',
  components: {
    locationDetails
  }
}
</script>
