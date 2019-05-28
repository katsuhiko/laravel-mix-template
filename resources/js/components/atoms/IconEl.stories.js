import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { TrashCanIconEl, ChevronRightIconEl, SearchIconEl, SettingsIconEl } from './IconEl.vue'

storiesOf('icon-el', module)
  .add('TrashCanIcon', () => ({
    components: { TrashCanIconEl },
    template: `<trash-can-icon-el />`
  }))
  .add('ChevronRightIcon', () => ({
    components: { ChevronRightIconEl },
    template: `<chevron-right-icon-el />`
  }))
  .add('SearchIcon', () => ({
    components: { SearchIconEl },
    template: `<search-icon-el />`
  }))
  .add('SettingsIcon', () => ({
    components: { SettingsIconEl },
    template: `<settings-icon-el />`
  }))
  .add('クリッカブル', () => ({
    components: { TrashCanIconEl },
    template: `<trash-can-icon-el :on-click="action" />`,
    methods: { action: action('アイコンがクリックされました。') }
  }))
