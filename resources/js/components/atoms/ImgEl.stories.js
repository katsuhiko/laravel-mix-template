import { storiesOf } from '@storybook/vue'
import ImgEl from './ImgEl.vue'

storiesOf('img-el', module)
  .add('デフォルト', () => ({
    components: { ImgEl },
    template: `<img-el src="/mock/images/img01.jpg" width="128" height="72" />`
  }))
