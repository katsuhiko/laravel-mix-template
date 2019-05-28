import { storiesOf } from '@storybook/vue'
import ExampleComponent from './ExampleComponent.vue'

storiesOf('example-component', module)
  .add('デフォルト', () => ({
    components: { ExampleComponent },
    template: `<example-component />`
  }))
