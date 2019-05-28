<template>
  <component :is="container" v-bind="params"><slot /></component>
</template>

<script>
import HeadingContainer from './HeadingContainer.vue'

export default {
  props: {
    level: {
      type: Number,
      default: 2
    },
    visualLevel: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      container: HeadingContainer,
      presenter: undefined
    }
  },
  computed: {
    params() {
      return {
        presenter: this.presenter,
        level: this.level,
        visualLevel: this.visualLevel
      }
    }
  }
}
</script>
