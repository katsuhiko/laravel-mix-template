import { storiesOf } from '@storybook/vue'
import HeadingUnderlinedEl from './HeadingUnderlinedEl.vue'

storiesOf('heading-underlined-el', module)
  .add('下線付き', () => ({
    components: { HeadingUnderlinedEl },
    template: `<heading-underlined-el>見出し</heading-underlined-el>`
  }))
  .add('下線付き、レベル1', () => ({
    components: { HeadingUnderlinedEl },
    template: `<heading-underlined-el :level="1">見出しレベル1</heading-underlined-el>`
  }))
  .add('下線付き、レベル1、見た目2', () => ({
    components: { HeadingUnderlinedEl },
    template: `<heading-underlined-el :level="1" :visual-level="2" >見出しレベル1、見た目2</heading-underlined-el>`
  }))
