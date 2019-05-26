import { storiesOf } from '@storybook/vue'

import ExampleComponent from './../js/components/ExampleComponent.vue'

storiesOf('ExampleComponent', module)
  .add('デフォルト', () => ({
    components: { ExampleComponent },
    template: `<ExampleComponent />`
  }))


import BalloonEl from './../js/components/atoms/BalloonEl.vue'

storiesOf('BalloonEl', module)
.add('2文字ラベル', () => ({
  components: { BalloonEl },
  template: `<BalloonEl>次へ</BalloonEl>`
}))
.add('4文字ラベル', () => ({
  components: { BalloonEl },
  template: `<BalloonEl>削除する</BalloonEl>`
}))
.add('絶対座標配置', () => ({
  components: { BalloonEl },
  template: `<BalloonEl :style="{ position: 'absolute', top: '200px', left: '200px' }">左上から 200px に配置</BalloonEl>`
}))
