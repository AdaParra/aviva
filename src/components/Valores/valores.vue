<template>

    <div class="backgroundHero">   
        <section class="hero">
          <!-- Hero content: will be in the middle -->
          <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title is-1 " style="font-family: 'Kaushan Script', cursive;">
                {{ msg }}
              </h1>
            </div>
          </div>
        </section>
        <section class="section" style="padding-top: 0px;">    
            <div class="columns has-text-centered">
                <div class="column is-3 is-hidden-mobile"></div>
                <div class="column is-2">
                    <p class="subtitle is-4 typeStyle"> Fe </p>
                </div>
                <div class="column is-2">
                    <p class="subtitle is-4 typeStyle"> Amor </p>
                </div>
                <div class="column is-2">
                    <p class="subtitle is-4 typeStyle"> Familia </p>
                </div>
                <div class="column is-3 is-hidden-mobile"></div>
            </div> 
            <div class="columns has-text-centered">
                <div class="column is-3 is-hidden-mobile"></div>
                <div class="column is-2">
                    <p class="subtitle is-4 typeStyle"> Obediencia </p>
                </div>
                <div class="column is-2">
                    <p class="subtitle is-4 typeStyle"> Humildad </p>
                </div>
                <div class="column is-2">
                    <p class="subtitle is-4 typeStyle"> Lealtad </p>
                </div>
                <div class="column is-3 is-hidden-mobile"></div>
            </div>
            <div class="columns has-text-centered">
                <div class="column is-3 is-hidden-mobile"></div>
                <div class="column is-2">
                    <p class="subtitle is-4 typeStyle"> Respeto </p>
                </div>
                <div class="column is-2">
                    <p class="subtitle is-4 typeStyle"> Amistad </p>
                </div>
                <div class="column is-2">
                    <p class="subtitle is-4 typeStyle"> Generosidad </p>
                </div>
                <div class="column is-3 is-hidden-mobile"></div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
  name: 'valores',
  data () {
    return {
      msg: 'Nuestros Valores',
      valores: [
        { name: 'Fe' },
        { name: 'Amor' },
        { name: 'Familia' },
        { name: 'Obediencia' },
        { name: 'Humildad' },
        { name: 'Lealtad' },
        { name: 'Respeto' },
        { name: 'Amistad' },
        { name: 'Generosidad' }

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .backgroundHero{
        background-image: url('./assets/gift.jpg');
        background-size: cover;
    }
    .typeStyle {
        font-family: 'Comfortaa', cursive;
        color: white;
        font-weight: bold;
    }

</style>