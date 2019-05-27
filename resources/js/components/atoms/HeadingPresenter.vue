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
    tagName: {
      type: String,
      required: true
    },
    visualLevel: {
      type: Number,
      required: true
    }
  },
  computed: {
    className() {
      return [this.$style.heading, this.$style[`heading${ this.visualLevel }`]]
    }
  }
}
</script>
