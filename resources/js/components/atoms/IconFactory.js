import IconMixin from './IconMixin.vue'

export default function(icon) {
  return {
    mixins: [IconMixin],
    data() {
      return {
        icon: icon
      }
    }
  }
}
