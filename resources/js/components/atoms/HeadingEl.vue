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
  components: {
    HeadingContainer,
    HeadingPresenter
  },
  computed: {
    container() {
      return HeadingContainer
    },
    params() {
      return {
        presenter: HeadingPresenter,
        level: this.level,
        visualLevel: this.visualLevel
      }
    }
  }
}
</script>
