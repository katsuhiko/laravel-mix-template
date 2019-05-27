import { storiesOf } from '@storybook/vue'

import ExampleComponent from './../js/components/ExampleComponent.vue'
storiesOf('example-component', module)
  .add('デフォルト', () => ({
    components: { ExampleComponent },
    template: `<example-component />`
  }))

import BalloonEl from './../js/components/atoms/BalloonEl.vue'
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

import ImgEl from './../js/components/atoms/ImgEl.vue'
storiesOf('img-el', module)
  .add('デフォルト', () => ({
    components: { ImgEl },
    template: `<img-el src="/mock/images/img01.jpg" width="128" height="72" />`
  }))

import HeadingEl from './../js/components/atoms/HeadingEl.vue'
import HeadingUnderlinedEl from './../js/components/atoms/HeadingUnderlinedEl.vue'
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
