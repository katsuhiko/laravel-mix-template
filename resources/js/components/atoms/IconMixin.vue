<template>
  <component :is="container" v-bind="params"><slot /></component>
</template>

<script>
import IconContainer from './IconContainer.vue'
import IconPresenter from './IconPresenter.vue'

export default {
  props: {
    height: {
      type: Number,
      default: 20
    },
    width: {
      type: Number,
      default: 20
    },
    onClick: {
      type: Function
    }
  },
  data() {
    return {
      icon: '',
      container: IconContainer,
      presenter: IconPresenter
    }
  },
  computed: {
    params() {
      return {
        presenter: this.presenter,
        icon: this.icon,
        height: this.height,
        width: this.width,
        onClick: this.onClick
      }
    }
  }
}
</script>
