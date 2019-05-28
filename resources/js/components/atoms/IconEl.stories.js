import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import IconEl from './IconEl.vue'

storiesOf('icon-el', module)
  .add('TrashCanIcon', () => ({
    components: { IconEl },
    template: `<icon-el icon="trash-can" />`
  }))
  .add('クリッカブル', () => ({
    components: { IconEl },
    template: `<icon-el icon="trash-can" :on-click="action" />`,
    methods: { action: action('アイコンがクリックされました。') }
  }))
