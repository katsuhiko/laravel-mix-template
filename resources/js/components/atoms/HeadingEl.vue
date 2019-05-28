<template>
  <component :is="container" v-bind="params"><slot /></component>
</template>

<script>
import HeadingContainer from './HeadingContainer.vue'
import HeadingPresenter from './HeadingPresenter.vue'

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
      presenter: HeadingPresenter
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
