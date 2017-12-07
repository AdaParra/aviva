<template>
<div>

    <Hero></Hero>
      <section class="hero" style="padding-top: 0px !important;">
          <!-- Hero content: will be in the middle -->
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title is-2 " style="font-family: 'Kaushan Script', cursive;">
                Nuestros ministerios
              </h1>
                <h2 class="subtitle is-5 ">
                  Conoce cada uno de nuestros ministerios y pastores.
                </h2>
            </div>
          </div>
        </section> 
      <Card></Card>
      <Tabs :tabsOne='tabsOne'></Tabs>
      <Shepherds></Shepherds>
      <About></About>
        <section class="hero">
          <!-- Hero content: will be in the middle -->
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title is-2 " style="font-family: 'Kaushan Script', cursive;">
                Nuestras Predicas
              </h1>
                <h2 class="subtitle is-5 ">
                  Estudia la palabra de Dios con la ayuda de cada una de nuestras predicas.
                </h2>
            </div>
          </div>
        </section> 
      <Material/>

      <Valores></Valores>
      <tabswhite :tabsWhite='tabsWhite'></tabswhite>
      <Team></Team>
      <avivaFooter></avivaFooter>

</div>


</template>

<script>

import Hero from './Hero/Main'
import Card from './Cards/Main'
import Tabs from './Tabs/tabs'
import tabswhite from './Tabs/tabsWhite'
import About from './About/about'
import Shepherds from './Shepherds/shepherds'
import Valores from './Valores/valores'
import Material from './Material/Main'
import Team from './Team/main'
import avivaFooter from './Footer/footer'

export default {
  name: 'home',
  data () {
    return {
      tabsOne: { title: 'Ministerios', description: 'Conoce más de nuestros ministerios' },
      tabsWhite: { title: 'Adoración viva presente en:', text: 'Expandiendo el Reino de Dios' }
    }
  },
  components: {
    Hero,
    Card,
    Tabs,
    tabswhite,
    About,
    Shepherds,
    Valores,
    Material,
    Team,
    avivaFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
