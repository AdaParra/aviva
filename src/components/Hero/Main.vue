<template>
<div class="background">
  <section class="hero is-medium">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <avivaMenu></avivaMenu>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-letf">
        <router-link :to="{ name: 'home' }">
            <img src="../../assets/logotipo.png">
        </router-link>
        <div class="fontGoogle">
          <h1 class="title is-1 is-spaced">
            {{ title }}
          </h1>
        </div>
        <h2 class="subtitle is-4" style="color: white;">
          {{ subtitle }}
        </h2>
      </div>
    </div>
  </section>
</div>

</template>

<script>

import avivaMenu from '../Header/Main'

export default {
  name: 'hero',
  data () {
    return {
      title: 'Adoración Viva',
      subtitle: 'Pasión por su presencia'
    }
  },
  components: {
    avivaMenu
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background{
    background-image: url('./assets/xmas.jpg');
    background-size: cover;
  }
  .fontGoogle{
    font-family: 'Kaushan Script', cursive;
    font-color: white;
  }
</style>