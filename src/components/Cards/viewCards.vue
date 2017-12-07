<template>
  <div>
    <div class="background">
      <section class="hero">
        <!-- Hero head: will stick at the top -->
        <div class="hero-head">
          <avivaHeader></avivaHeader>
        </div>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
          <div class="container has-text-letf">
            <router-link :to="{ name: 'home' }">
              <img src="../../assets/logotipo.png">
            </router-link>
            <div class="fontGoogle">
              <h1 class="title is-1 is-spaced">
                Nuestros ministerios
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Card :ministerios='ministerios'/>  
    <avivaFooter></avivaFooter>
  </div>
</template>

<script>

import avivaHeader from '../Header/Main'
import avivaFooter from '../Footer/footer'
import Card from './Card'

export default {
  name: 'viewcards',
  data () {
    return {
      ministerios: [
        { id: 0, nombreMinisterio: 'Matrimonio sobre la roca', logoMinisterio: 'https://bulma.io/images/placeholders/1280x960.png', fotoPastores: 'https://bulma.io/images/placeholders/96x96.png', nombrePastores: 'Pastores Mejías', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', redesMinisterio: '@matrimonioSobrelaRoca', redesSociales: '@saramejias, @javiermejias' },
        { id: 1, nombreMinisterio: 'Generación 5PM', logoMinisterio: 'https://bulma.io/images/placeholders/1280x960.png', fotoPastores: 'https://bulma.io/images/placeholders/96x96.png', nombrePastores: 'Pastores Navarro', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', redesMinisterio: '@matrimonioSobrelaRoca', redesSociales: '@saramejias, @javiermejias' },
        { id: 2, nombreMinisterio: 'Adoracion Viva Kinds', logoMinisterio: 'https://bulma.io/images/placeholders/1280x960.png', fotoPastores: 'https://bulma.io/images/placeholders/96x96.png', nombrePastores: 'Pastores Castro', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', redesMinisterio: '@matrimonioSobrelaRoca', redesSociales: '@saramejias, @javiermejias' },
        { id: 3, nombreMinisterio: 'Pasión por su presencia', logoMinisterio: 'https://bulma.io/images/placeholders/1280x960.png', fotoPastores: 'https://bulma.io/images/placeholders/96x96.png', nombrePastores: 'Pastores Perdomo', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', redesMinisterio: '@matrimonioSobrelaRoca', redesSociales: '@saramejias, @javiermejias' },
        { id: 4, nombreMinisterio: 'Seguridad y Protocolo', logoMinisterio: 'https://bulma.io/images/placeholders/1280x960.png', fotoPastores: 'https://bulma.io/images/placeholders/96x96.png', nombrePastores: 'Pastores Rafael & Kati', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', redesMinisterio: '@matrimonioSobrelaRoca', redesSociales: '@saramejias, @javiermejias' },
        { id: 5, nombreMinisterio: 'Intersección', logoMinisterio: 'https://bulma.io/images/placeholders/1280x960.png', fotoPastores: 'https://bulma.io/images/placeholders/96x96.png', nombrePastores: 'Pastores Aramis & Noris', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', redesMinisterio: '@matrimonioSobrelaRoca', redesSociales: '@saramejias, @javiermejias' },
        { id: 6, nombreMinisterio: 'Lazos de Amistad', logoMinisterio: 'https://bulma.io/images/placeholders/1280x960.png', fotoPastores: 'https://bulma.io/images/placeholders/96x96.png', nombrePastores: 'Apostol Ana Diaz', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', redesMinisterio: '@matrimonioSobrelaRoca', redesSociales: '@saramejias, @javiermejias' },
        { id: 5, nombreMinisterio: 'Estableciendo del Reino', logoMinisterio: 'https://bulma.io/images/placeholders/1280x960.png', fotoPastores: 'https://bulma.io/images/placeholders/96x96.png', nombrePastores: 'Pastores Flores', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', redesMinisterio: '@matrimonioSobrelaRoca', redesSociales: '@saramejias, @javiermejias' },
        { id: 7, nombreMinisterio: 'Formación de adoradores', logoMinisterio: 'https://bulma.io/images/placeholders/1280x960.png', fotoPastores: 'https://bulma.io/images/placeholders/96x96.png', nombrePastores: 'Pastores Perdomo', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', redesMinisterio: '@matrimonioSobrelaRoca', redesSociales: '@saramejias, @javiermejias' }
      ]
    }
  },
  components: {
    avivaHeader,
    avivaFooter,
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background{
    background-image: url('../../assets/xmas.jpg');
    background-size: cover;
  }
  .fontGoogle{
    font-family: 'Kaushan Script', cursive;
    font-color: white;
  }
</style>