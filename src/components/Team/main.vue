<template>
   <Team :equipo='equipo'/> 
</template>

<script>

import Team from './team'

export default{
  name: 'teamMain',
  data () {
    return {
      equipo: [
        { name: 'Venezuela', url: require('./assets/ve.png') },
        { name: 'Ecuador', url: require('./assets/ec.png') },
        { name: 'Curacao', url: require('./assets/cu.png') },
        { name: 'Dominicana', url: require('./assets/do.png') }
      ]
    }
  },
  components: {
    Team
  }
}
</script>