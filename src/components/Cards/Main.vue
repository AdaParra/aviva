<template>
    <Card :ministerios='ministerios'/>  
</template>

<script>

import Card from './Card'

export default {
  name: 'Main',
  data () {
    return {
      ministerios: [
        { id: 0, nombreMinisterio: 'Matrimonios sobre la roca', logoMinisterio: require('./assets/heart.jpg'), fotoPastores: require('./assets/pareja3.jpg'), nombrePastores: 'Pastores Mejías', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', redesMinisterio: '@matrimonioSobrelaRoca', redesSociales: '@saramejias, @javiermejias' },
        { id: 1, nombreMinisterio: 'Generación 5PM', logoMinisterio: 'https://bulma.io/images/placeholders/1280x960.png', fotoPastores: 'https://bulma.io/images/placeholders/96x96.png', nombrePastores: 'Pastores Navarro', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', redesMinisterio: '@matrimonioSobrelaRoca', redesSociales: '@saramejias, @javiermejias' },
        { id: 2, nombreMinisterio: 'Adoracion Viva Kinds', logoMinisterio: 'https://bulma.io/images/placeholders/1280x960.png', fotoPastores: 'https://bulma.io/images/placeholders/96x96.png', nombrePastores: 'Pastores Castro', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', redesMinisterio: '@matrimonioSobrelaRoca', redesSociales: '@saramejias, @javiermejias' }
      ]
    }
  },
  components: {
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>