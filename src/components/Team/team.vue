<template>

<section class="section" style="padding-top: 0px !important;">
    
    <div class="columns is-multiline">
        <div v-for='(equipo, index) in equipo' class="column is-3">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="equipo.url">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-5"> {{equipo.name}}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel'

export default{
  name: 'team',
  data () {
    return {
      title: 'Equipo'
    }
  },
  components: {
    Carousel,
    Slide
  },
  props: ['equipo']
}
</script>

<style scoped>

</style>