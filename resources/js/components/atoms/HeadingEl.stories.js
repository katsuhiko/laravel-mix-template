import { storiesOf } from '@storybook/vue'
import HeadingEl from './HeadingEl.vue'

storiesOf('heading-el', module)
  .add('デフォルト', () => ({
    components: { HeadingEl },
    template: `<heading-el>見出し</heading-el>`
  }))
  .add('レベル1', () => ({
    components: { HeadingEl },
    template: `<heading-el :level="1">見出しレベル1</heading-el>`
  }))
  .add('レベル1、見た目2', () => ({
    components: { HeadingEl },
    template: `<heading-el :level="1" :visual-level="2" >見出しレベル1、見た目2</heading-el>`
  }))
