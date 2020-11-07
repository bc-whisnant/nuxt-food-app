<template>
  <nav>
    <ul>
      <li><nuxt-link exact to="/"><AppLogo /></nuxt-link></li>
      <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
    </ul>
    <nuxt-link to="/cart">Cart <span v-if="cartCount > 0" class="smallnum">{{ cartCount }}</span></nuxt-link>
  </nav>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue';
import { mapGetters } from 'vuex'

export default {
  components: {
    AppLogo
  },
  computed: {
    ...mapGetters(['cartCount'])
  }
};

</script>

<style lang="scss" scoped>

</style>
