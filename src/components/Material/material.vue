<template>
<div>  
    <section class="section" style="padding-top: 0px !important;"> 
      <div class="columns is-multiline">
        <div  v-for='(material, index) in materiales' class="column is-one-quarter">
          <div class="card">
            <router-link :to="{ name: 'detail', params: { id: index, detail: material } }">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="material.logoMinisterio" alt="Placeholder image">
              </figure>
            </div>
            </router-link>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4 is-size-5-tablet"> {{ material.nombreMinisterio }}</p>
                  <p class="subtitle is-6">{{ material.nombrePastores }}</p>
                </div>
              </div>

              <div class="content has-text-justified">
                {{ material.descripcion }}
                <br>
                <a class="color-a">{{ material.palabraClave }}</a> <a class="color-a">{{ material.citabiblica }}</a>
                <br>
                <nav class="level is-mobile">
                  <div class="level-left">

                    <a :href="material.shareTwitter" class="button is-link level-item" target="_blank" alt="Twitter">
                      <span class="icon is-medium"><i class="fa fa-twitter"></i></span> 
                      <span> Twitter </span>
                    </a>
                    <a :href="material.shareFacebook" class="button is-info level-item" target="_blank">
                      <span class="icon is-medium"><i class="fa fa-facebook"></i></span>
                      <span> Facebook </span>
                    </a>
                  </div>
                </nav>
                <!--
                <span class="icon is-medium">
                  <i class="fa fa-group"></i>
                </span>
                <span> {{ tabsOne.title }}</span>
                <social-sharing url="http://cciadoracionviva.com" inline-template>
                  <div>
                    <network network="facebook">
                      <i class="fa fa-fw fa-facebook"></i> Facebook
                    </network>
                    <network network="twitter">
                      <i class="fa fa-fw fa-twitter"></i> Twitter
                    </network>
                    </div>
                    </social-sharing> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
    
</template>

<script>

export default {
  name: 'material-1',
  data () {
    return {
    }
  },
  props: ['materiales']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color-a{
  color: black !important;
  cursor: auto !important;
}
</style>