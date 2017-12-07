<template>

<div>
    <subHeader :id='id' :detail='detail' ></subHeader>
    <section class="section">
        <div class="columns is-centered">
            <div class="column is-10">
                <p class="has-text-justified"> {{texto}}</p> 
            </div>
        </div>

        <div class="columns is-centered">
            <div class="column is-6">
                <img src="./assets/pastores-2.png">
            </div>
        </div>

    </section>
    <viewFooter></viewFooter>
</div>
    
</template>

<script>

import subHeader from '../Header/subHeader.vue'
import viewFooter from '../Footer/footer'

export default {
  name: 'shepherdsview',
  data () {
    return {
      detail: { nombreMinisterio: 'Apostoles Isarrael y Ana Díaz' },
      id: '1',
      texto: 'Isrrael Josué Díaz Vernales y Ana López Jaimes, son los pastores principales de la comunidad cristiana internacional Adoración Viva. El Pastor Isrrael, por mas de 20 años ha estado involucrado en el ministerio pastoral. Egresado del Seminario Teológico Bautista de Venezuela donde obtuvo una licenciatura en Ministerio sagrado mensión teologia. Obtuvo también una maestria en Teologia Mención Comunicación y un Doctorado en Teología Mensión Eduacación Cristiana en el Seminario Alfa y Omega. Ha sido profesor de ministerio pastoral ética cristiana, asi como tambien es conferencista nacional e internacional; llevando el mensaje de Dios en cuanto a liderazgo, familia y visión de la iglesia. Es casado con la licenciada Ana López y es padre de Isaac Josué con quienes tiene el privilegio de compartir a experiencia de servir al Señor en el ministerio desarrollando cristianos apacionados por su presencia. Esa pasión por el señor los ha llevado a desarrollar un ministerio con una visión de ir a las naciones estableciendo el Reino de Dios en cada corazón. De esta manera la CCI Adoración Viva esta presente en Curacao, Ecuador y Republica Dominicana con miras a establecerse en todas las naciones que el Señor nos lo permita. ¡A Él sea la Gloria!.'
    }
  },
  components: {
    subHeader,
    viewFooter
  }
}
</script>

<style scoped>
  .fontGoogle{
    font-family: 'Kaushan Script', cursive;
  }
</style>