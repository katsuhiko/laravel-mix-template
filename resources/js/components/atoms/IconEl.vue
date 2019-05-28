<template>
  <img :src="tagSrc" alt="" :height="height" :width="width" :class="className" @click="tagOnClick" />
</template>

<style module>
.clickable {
  cursor: pointer;
}
</style>

<script>
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
      type: Function,
      default: null
    }
  },
  data() {
    return {
      className: ''
    }
  },
  created() {
    if (this.onClick !== null) {
      this.className = this.$style.clickable
    }
  },
  computed: {
    tagSrc() {
      return `/icons/${ this.icon }.svg`
    },
    tagOnClick() {
      if (this.onClick === null) {
        return function() { return false }
      }
      return this.onClick
    },
  }
}
</script>
