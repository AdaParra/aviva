<template>

    <nav class="navbar is-transparent">
      <div class="container">
        <div class="navbar-brand">
            <router-link :to="{ name: 'home' }" class="navbar-item">
              <span class="icon">
                <i class="fa fa-home"></i>
              </span>
              {{ inicio }}
            </router-link>
          <button id="idBurger" class="button navbar-burger" v-on:click="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="navbar-menu" id="idMenu">
          <div class="navbar-start">  
            <router-link :to="{ name: 'viewcards' }" class="navbar-item">
              <span class="icon">
                <i class="fa fa-group"></i>
              </span>
              {{ ministerios }}
            </router-link>       
            <router-link :to="{ name: 'estructura' }" class="navbar-item">
              <span class="icon">
                <i class="fa fa-heart"></i>
              </span>
              {{ conocenos }}
            </router-link>
          </div>
            <div class="navbar-end">
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fa fa-phone"></i>
                </span>
                <span> {{ contactanos }}</span>
              </a>
            </span>
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fa fa-calendar"></i>
                </span>
                <span> {{ horarios }}</span>
              </a>
            </span>
            </div>
        </div>
      </div>
    </nav>
</template>

<script>

export default {
  name: 'menu',
  data () {
    return {
      inicio: 'Inicio',
      ministerios: 'Ministerios',
      contactanos: 'Contactanos',
      conocenos: 'Conocenos',
      horarios: 'Eventos'
    }
  },
  methods: {
    navMenu () {
      let idBurger = document.getElementById('idBurger')
      let idMenu = document.getElementById('idMenu')
      idBurger.classList.toggle('is-active')
      idMenu.classList.toggle('is-active')
    }
  },
  created: function () {
    this.navMenu()
    console.log('llamo?')
  }
}
</script>
