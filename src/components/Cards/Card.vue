<template>
<div>  
    <section class="section">  
      <div class="columns is-multiline">
        <div  v-for='(ministerios, index) in ministerios' class="column is-one-third">
          <router-link :to="{ name: 'detail', params: { id: index, detail: ministerios } }">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="ministerios.logoMinisterio" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img :src="ministerios.fotoPastores" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4 is-size-5-tablet"> {{ ministerios.nombreMinisterio }}</p>
                    <p class="subtitle is-6">{{ ministerios.nombrePastores }}</p>
                  </div>
                </div>

                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <br>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
</div>
    
</template>

<script>

export default {
  name: 'card',
  data () {
    return {
    }
  },
  props: ['ministerios']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>