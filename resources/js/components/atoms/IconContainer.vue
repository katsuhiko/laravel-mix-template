<template>
  <component :is="presenter" v-bind="params"><slot /></component>
</template>

<script>
export default {
  props: {
    presenter: {
      type: Object,
      required: true
    },
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
  computed: {
    tagSrc() {
      return `/icons/${ this.icon }.svg`
    },
    isClickable() {
      return (this.onClick !== undefined)
    },
    tagOnClick() {
      if (!this.isClickable) {
        return function() { return false }
      }
      return this.onClick
    },
    params() {
      return {
        tagSrc: this.tagSrc,
        height: this.height,
        width: this.width,
        isClickable: this.isClickable,
        onClick: this.tagOnClick
      }
    }
  }
}
</script>
