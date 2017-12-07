<template>

        <section class="hero">
          <!-- Hero content: will be in the middle -->
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title is-2 " style="font-family: 'Kaushan Script', cursive;">
                {{tabsWhite.title}}
              </h1>
                <h2 class="subtitle is-5 ">
                  {{tabsWhite.text}}
                </h2>
            </div>
          </div>
        </section> 
</template>

<script>

export default{
  name: 'tabswhite',
  data () {
    return {
      title: 'Tabs'
    }
  },
  props: ['tabsWhite']
}
</script>

<style scoped>
    
</style>