<template>
    <Material :materiales='materiales'/>  
</template>

<script>

import Material from './material'

export default {
  name: 'material',
  data () {
    return {
      materiales: [
        { id: 0, nombreMinisterio: 'El Poder esta en Ti a través del Evangelio', logoMinisterio: require('./assets/elpoder.jpeg'), fotoPastores: 'https://bulma.io/images/placeholders/96x96.png', nombrePastores: 'Apostol Isrrael Díaz', descripcion: '“El poder que te fue dado es pára establecer a Cristo en el corazón de las personas”', citabiblica: '#Hechos 1:8', palabraClave: '#ElPoderEstaenTI', shareFacebook: 'https://www.facebook.com/sharer/sharer.php?u=http://cciadoracionviva.com/static/img/elpoder.0a690a8.jpeg', shareTwitter: 'https://twitter.com/share?url=http://cciadoracionviva.com/static/img/elpoder.0a690a8.jpeg&amp;text=El poder que te fue dado es ára establecer a Cristo en el corazón de las personas' },
        { id: 1, nombreMinisterio: 'El Poder esta en Ti a través del Evangelio', logoMinisterio: require('./assets/elpoder.jpeg'), fotoPastores: 'https://bulma.io/images/placeholders/96x96.png', nombrePastores: 'Apostol Isrrael Díaz', descripcion: '“El poder que te fue dado es pára establecer a Cristo en el corazón de las personas”', citabiblica: '#Hechos 1:8', palabraClave: '#ElPoderEstaenTI', shareFacebook: 'https://www.facebook.com/sharer/sharer.php?u=http://cciadoracionviva.com/static/img/elpoder.0a690a8.jpeg', shareTwitter: 'https://twitter.com/share?url=http://cciadoracionviva.com/static/img/elpoder.0a690a8.jpeg&amp;text=El poder que te fue dado es ára establecer a Cristo en el corazón de las personas' },
        { id: 2, nombreMinisterio: 'El Poder esta en Ti a través del Evangelio', logoMinisterio: require('./assets/elpoder.jpeg'), fotoPastores: 'https://bulma.io/images/placeholders/96x96.png', nombrePastores: 'Apostol Isrrael Díaz', descripcion: '“El poder que te fue dado es pára establecer a Cristo en el corazón de las personas”', citabiblica: '#Hechos 1:8', palabraClave: '#ElPoderEstaenTI', shareFacebook: 'https://www.facebook.com/sharer/sharer.php?u=http://cciadoracionviva.com/static/img/elpoder.0a690a8.jpeg', shareTwitter: 'https://twitter.com/share?url=http://cciadoracionviva.com/static/img/elpoder.0a690a8.jpeg&amp;text=El poder que te fue dado es ára establecer a Cristo en el corazón de las personas' },
        { id: 3, nombreMinisterio: 'El Poder esta en Ti a través del Evangelio', logoMinisterio: require('./assets/elpoder.jpeg'), fotoPastores: 'https://bulma.io/images/placeholders/96x96.png', nombrePastores: 'Apostol Isrrael Díaz', descripcion: '“El poder que te fue dado es pára establecer a Cristo en el corazón de las personas”', citabiblica: '#Hechos 1:8', palabraClave: '#ElPoderEstaenTI', shareFacebook: 'https://www.facebook.com/sharer/sharer.php?u=http://cciadoracionviva.com/static/img/elpoder.0a690a8.jpeg', shareTwitter: 'https://twitter.com/share?url=http://cciadoracionviva.com/static/img/elpoder.0a690a8.jpeg&amp;text=El poder que te fue dado es ára establecer a Cristo en el corazón de las personas' }
      ]
    }
  },
  components: {
    Material
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>