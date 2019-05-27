<template>
  <component :is="tagName" :class="className"><slot /></component>
</template>

<style module>
.heading {
  font-weight: 700;
  line-height: 1.5;
}
.heading1 { font-size: 2.0rem; }
.heading2 { font-size: 1.8rem; }
.heading3 { font-size: 1.6rem; }
.heading4 { font-size: 1.4rem; }
.heading5 { font-size: 1.2rem; }
.heading6 { font-size: 1.0rem; }
</style>

<script>
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
  computed: {
    tagLevel() {
      return Math.max(1, Math.min(6, this.level))
    },
    tagVisualLevel() {
      return (this.visualLevel !== null) ? this.visualLevel : this.tagLevel;
    },
    tagName() {
      return `h${ this.tagLevel }`
    },
    className() {
      return [this.$style.heading, this.$style[`heading${ this.tagVisualLevel }`]]
    }
  }
}
</script>
