<template>
  <img :src="tagSrc" alt="" :height="height" :width="width" :class="className" @click="onClick" />
</template>

<style module>
.clickable {
  cursor: pointer;
}
</style>

<script>
export default {
  props: {
    tagSrc: {
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
    isClickable: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  computed: {
    className() {
      return (this.isClickable) ? this.$style.clickable : ''
    }
  }
}
</script>
