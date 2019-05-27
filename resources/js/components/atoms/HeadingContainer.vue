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
    level: {
      type: Number,
      default: 2
    },
    visualLevel: {
      type: Number,
      default: null
    }
  },
  computed: {
    tagLevel() {
      return Math.max(1, Math.min(6, this.level))
    },
    tagName() {
      return `h${ this.tagLevel }`
    },
    tagVisualLevel() {
      return (this.visualLevel !== null) ? this.visualLevel : this.tagLevel;
    },
    params() {
      return {
        tagName: this.tagName,
        visualLevel: this.tagVisualLevel
      }
    }
  }
}
</script>
