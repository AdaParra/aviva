<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

  @import './scss/main.scss'

</style>

<style>

.columns{
    margin: 0 !important;
}

.navbar-item{
    color: #DA5A23 !important;
}

.navbar-item:hover{
    color: white !important;
}

.icon:hover{
    color: #DA5A23 !important;
}

#app {
    font-family: 'Comfortaa', cursive;
}

</style>
