<template>

    <div id='about' class="background">
        <section class="hero">
        <!-- Hero content: will be in the middle -->
            <div class="hero-body">
              <div class="container has-text-centered">
                <div class="fontGoogle">
                  <h1 class="title is-1 is-spaced" style="font-family: 'Kaushan Script', cursive;">
                    {{ title }}
                  </h1>
                </div>
              </div>
            </div>
        </section>        
         <section class="section" style="padding-top: 0px;">  
            <div class="columns has-text-centered">
                <div class="column is-3">
                    <div class="box">
                        <p class="subtitle is-4 typeStyle"> {{ mision.title }} </p> 
                            <p class="has-text-justified typeStyle">
                                {{ mision.texto }}
                            </p>
                    </div>
                </div>
                <div class="column is-3">
                    <div class="box">
                        <p class="subtitle is-4 typeStyle">Visión</p>
                            <p class="has-text-justified typeStyle">
                                Que cada miembro del cuerpo de Cristo mediante su adoración a Dios, impacte al mundo, se multiplique y restaure familias para cristo.
                                <br class="is-hidden-mobile">
                                <br class="is-hidden-mobile">
                                <br class="is-hidden-mobile">
                            </p>
                    </div>
                </div>
                <div class="column is-3 ">
                    <div class="box">
                    <p class="subtitle is-4 typeStyle">Próposito</p>
                            <p class="typeStyle">
                                <ul>
                                    <li>Adorar a Dios.</li>
                                    <li>Estudiar su palabra.</li>
                                    <li>Ganar a las personas para Cristo.</li>
                                    <li>Discipular.</li>
                                    <li>Desarrollar integralmente.</li>
                                </ul>
                                <br class="is-hidden-mobile">
                            </p>
                    </div>
                </div>
                <div class="column is-3 ">
                    <div class="box">
                    <p class="subtitle is-4 typeStyle">Estrategias</p>
                            <p class="typeStyle">
                                <ul>
                                    <li>Adoración Viva Familiar.</li>
                                    <li>Ministerios.</li>
                                    <li>Servicios Inspiradores.</li>
                                    <li>Campamentos.</li>
                                    <li>Compartir Familiar.</li>
                                </ul>
                                <br class="is-hidden-mobile">
                                <br class="is-hidden-mobile">
                            </p>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column has-text-centered">
                    <router-link :to="{ name: 'estructura' }" class="button is-large is-primary is-inverted"> 
                        <span class="icon is-medium">
                          <i class="fa fa-object-group"></i>
                        </span>
                        <span> Nuestra Estructura </span>
                    </router-link>
                </div>
            </div>
         </section>   
    </div>
    
</template>

<script>

export default {
  name: 'about',
  data () {
    return {
      title: 'Conoce nuestra iglesia',
      mision: { title: 'Mision', texto: 'Glorificar a Dios, bajo la dirección del Espiritu Santo y predicar el evangelio haciendo discipulos enseñandoles a adorar y a desarrollar una vida de intimidad, compromiso, sujeción y lealtad.' }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background{
    background-image: url('../../assets/background7.jpg');
    background-size: cover;
  }
    .typeStyle {
        font-family: 'Comfortaa', cursive;
        color: white;
    }
</style>