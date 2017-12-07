<template>

    <subHeader :id='id' :detail='detail' ></subHeader>
    
</template>

<script>

import subHeader from '../../Header/subHeader.vue'

export default {
  name: 'detail',
  data () {
    return {
    }
  },
  components: {
    subHeader
  },
  props: {
    id: {
      required: true
    },
    detail: {
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
    
</style>