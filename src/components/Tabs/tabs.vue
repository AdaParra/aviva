<template>

    <div class="backgroundHero">    
        <section class="hero">
          <!-- Hero content: will be in the middle -->
          <div class="hero-body">
            <div class="container has-text-centered">
              <h2 class="subtitle is-4" style="font-family: 'Kaushan Script', cursive; color: white;">
                {{ tabsOne.description }}
              </h2>
            <router-link :to="{ name: 'viewcards' }" class="button is-large is-primary is-inverted"> 
                <span class="icon is-medium">
                  <i class="fa fa-group"></i>
                </span>
                <span> {{ tabsOne.title }}</span>
            </router-link>
            </div>
          </div>
        </section>
    </div>
    
</template>

<script>

export default {
  name: 'tabs',
  data () {
    return {
    }
  },
  props: ['tabsOne']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .backgroundHero{
        background-image: url('./assets/book.jpg');
        background-size: cover;
    }

</style>