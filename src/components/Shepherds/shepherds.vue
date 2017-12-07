<template>
<div>
    <section class="hero">
    <!-- Hero content: will be in the middle -->
        <div class="hero-body" style="padding-bottom: 0px;">
            <div class="container has-text-centered">
                <div class="fontGoogle">
                    <h1 class="title is-1 is-spaced">
                        {{ title }}
                    </h1>
                </div>
            </div>
        </div>
            
        <div class="columns has-text-centered">
            <div class="column is-1 is-hidden-mobile"></div>
                <div class="column is-6 has-text-justified">
                    <section class="section">
                        <p class="typeStyle is-medium">
                            {{ text }}
                        </p>
                        <div class="has-text-centered-mobile">
                            <router-link :to="{ name: 'shepherdsview' } " class="button is-medium is-primary"> 
                                <span> {{ textButton }} </span>
                            </router-link>
                        </div>
                    </section>
                </div>
                <div class="column is-4 is-one-third is-hidden-mobile">
                    <section class="section">  
                        <img class="is-hidden-mobile" src="./assets/pastores.png">
                    </section>
                </div>
                <div class="column is-1 is-hidden-mobile"></div>
        </div>
    </section> 
</div>
</template>

<script>
export default {
  name: 'shepherds',
  data () {
    return {
      title: 'Apostoles Isrrael y Ana Díaz',
      text: 'Isrrael Josué Díaz Vernales y Ana López Jaimes, son los pastores principales de la comunidad cristiana internacional Adoración Viva. El Pastor Isrrael, por mas de 20 años ha estado involucrado en el ministerio pastoral. Egresado del Seminario Teológico Bautista de Venezuela donde obtuvo una licenciatura en Ministerio sagrado mensión teologia. Obtuvo también una maestria en Teologia Mención Comunicación y un Doctorado en Teología Mensión Eduacación Cristiana en el Seminario Alfa y Omega. Ha sido profesor de ministerio pastoral ética cristiana, asi como tambien es conferencista nacional e internacional; llevando el mensaje de Dios en cuanto a liderazgo, familia y visión de la iglesia. ',
      textButton: 'Conoce más'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .fontGoogle{
        font-family: 'Kaushan Script', cursive;
    }
    .typeStyle {
        font-family: 'Comfortaa', cursive;
    }
</style>