import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories/index');
}

configure(loadStories, module);
