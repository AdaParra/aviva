<template>
    <modal name="hello-world">
      {{inicio}}
    </modal>
</template>

<script>

export default {
  name: 'modal',
  data () {
    return {
      inicio: 'hello, world!'
    }
  },
  methods: {
    show () {
      this.$modal.show('hello-world')
    },
    hide () {
      this.$modal.hide('hello-world')
    }
  }
}
</script>