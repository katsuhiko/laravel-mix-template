import { configure } from '@storybook/vue'

import Vue from 'vue'

function loadStories () {
  require('./../resources/stories')
}

configure(loadStories, module)
