<template>
<div>
    <subHeader :id='id' :detail='detail' ></subHeader>
    <section class="section" style="padding-top: 0px !important;"></section>
    <section class="section" style="padding-top: 0px !important;">
        <div class="container has-text-justified">
            <p>Mantenemos una estructura simple fundamentada en el trabajo en equipo el cual ésta integrado de la siguiente manera: Los pastores, los lideres que forman parte del equipo pastoral y los servidores, que éstan siempre dispuestos a servir y ayudar en todo lo que sea necesario. 
            <br><br>
            Los Pastores, después del Señor tiene la autoridad de su función en la iglesia. Y a su vez, al igual que los lideres del equipo tienen la autoridad para aconsejar, orientar, ministrar en oración, corregir y convocar a cualquier miembro de la iglesia para soluciones de conflictos, entre otras cosas. 
            <br><br>
            Cada persona que forma parte de la CCI ADORACION VIVA debe tener el mismo respeto y la misma consideración para con los lideres que forman parte del equipo pastoral, al igual que lo tienen con los pastores principales. 
            <br><br>
            Así que cada miembro de la CCI ADORACIÓN VIVA puede acudir a cualquier lider el equipo pastoral con toda confianza cuando su situación así lo amerite, antes de acudir a los pastores principales. De manera que si su problema es mayor o si desea hablar con los pastores principales puede hacerlo con toda confianza; pero si su problema es menos acuda a uno de los lideres del equipo y ellos le ayudarán a buscar una solución a su problema. No debemos olvidar que en toda organización existen lineas de autoridad, no somos la excepción por tanto, no vaya más allá de los límites establecidos en cuanto a esto se refiere. No sobrecargue a los pastores principales, acuda a los lideres del equipos pastoral, ellos con mucho gusto lo atenderán y le ayudarán en cualquier área.</p>
        </div>
        <div class="container has-text-centered">
            <div class="fontGoogle">  
                <p class="title is-primary is-3"> ¡Bendiciones, Les amamos!</p>
            </div>
        </div>
    </section>
    <Footer></Footer>
</div>
</template>

<script>

import subHeader from '../Header/subHeader.vue'
import Footer from '../Footer/footer'

export default {
  name: 'estructura',
  data () {
    return {
      detail: { nombreMinisterio: 'Nuestra Estructura' },
      id: '1'
    }
  },
  components: {
    subHeader,
    Footer
  }
}
</script>

<style scoped>
  .fontGoogle{
    font-family: 'Kaushan Script', cursive;
    font-color: white;
  }
</style>