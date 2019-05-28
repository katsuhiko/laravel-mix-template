import { storiesOf } from '@storybook/vue'
import BalloonEl from './BalloonEl.vue'

storiesOf('balloon-el', module)
  .add('2文字ラベル', () => ({
    components: { BalloonEl },
    template: `<balloon-el>次へ</balloon-el>`
  }))
  .add('4文字ラベル', () => ({
    components: { BalloonEl },
    template: `<balloon-el>削除する</balloon-el>`
  }))
  .add('絶対座標配置', () => ({
    components: { BalloonEl },
    template: `<balloon-el :style="{ position: 'absolute', top: '200px', left: '200px' }">左上から 200px に配置</balloon-el>`
  }))
