import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import IconEl from './IconEl.vue'
import IconTrashCanEl from './IconTrashCanEl.vue'
import IconChevronRightEl from './IconChevronRightEl.vue'
import IconSearchEl from './IconSearchEl.vue'
import IconSettingsEl from './IconSettingsEl.vue'

storiesOf('icon-el', module)
  .add('TrashCanIcon', () => ({
    components: { IconTrashCanEl },
    template: `<icon-trash-can-el />`
  }))
  .add('ChevronRightIcon', () => ({
    components: { IconChevronRightEl },
    template: `<icon-chevron-right-el />`
  }))
  .add('SearchIcon', () => ({
    components: { IconSearchEl },
    template: `<icon-search-el />`
  }))
  .add('SettingsIcon', () => ({
    components: { IconSettingsEl },
    template: `<icon-settings-el />`
  }))
  .add('クリッカブル', () => ({
    components: { IconTrashCanEl },
    template: `<icon-trash-can-el :on-click="action" />`,
    methods: { action: action('アイコンがクリックされました。') }
  }))
  .add('汎用Icon', () => ({
    components: { IconEl },
    template: `<icon-el icon='trash-can' />`
  }))
