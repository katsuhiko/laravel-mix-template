<template>
  <component :is="container" v-bind="params"><slot /></component>
</template>

<script>
import IconContainer from './IconContainer.vue'
import IconPresenter from './IconPresenter.vue'

export default {
  props: {
    icon: {
      type: String,
      required: true
    },
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
  components: {
    IconContainer,
    IconPresenter
  },
  computed: {
    container() {
      return IconContainer
    },
    params() {
      return {
        presenter: IconPresenter,
        icon: this.icon,
        height: this.height,
        width: this.width,
        onClick: this.onClick
      }
    }
  }
}
</script>
