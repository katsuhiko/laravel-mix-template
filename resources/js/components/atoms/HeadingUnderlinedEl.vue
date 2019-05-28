<template>
  <component :is="container" v-bind="params"><slot /></component>
</template>

<script>
import HeadingContainer from './HeadingContainer.vue'
import HeadingUnderlinedPresenter from './HeadingUnderlinedPresenter.vue'

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
      presenter: HeadingUnderlinedPresenter
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
