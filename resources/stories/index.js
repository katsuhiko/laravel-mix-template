import { storiesOf } from '@storybook/vue'

import ExampleComponent from './../js/components/ExampleComponent.vue'

storiesOf('ExampleComponent', module)
  .add('simple', () => ({
    components: { ExampleComponent },
    template: `<ExampleComponent></ExampleComponent>`
  }))
