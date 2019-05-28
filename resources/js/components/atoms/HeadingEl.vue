<script>
import HeadingMixin from './HeadingMixin.vue'
import HeadingPresenter from './HeadingPresenter.vue'
import HeadingUnderlinedPresenter from './HeadingUnderlinedPresenter.vue'

export default {
  mixins: [HeadingMixin],
  data() {
    return {
      presenter: HeadingPresenter
    }
  }
}

export const HeadingUnderlinedEl = {
  mixins: [HeadingMixin],
  data() {
    return {
      presenter: HeadingUnderlinedPresenter
    }
  }
}
</script>
