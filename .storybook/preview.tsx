import {MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';
import {addDecorator} from '@storybook/react';
import {customViewports} from './viewports';
import {ArgsTable, Title} from '@storybook/addon-docs';
import {addReadme} from 'storybook-readme';

export const parameters = {
  options: {
    isFullscreen: false,
    isToolshown: true,
  },
  backgrounds: {
    default: 'app background',
    values: [
      {name: 'app background', value: '#fff'},
      {name: 'satsuki background', value: '#F3F3F4'},
    ],
  },
  viewport: {
    viewports: {...customViewports, ...MINIMAL_VIEWPORTS},
  },
  readme: {
    // This setting is needed not to apply css of storybook-readme to DocsPage
    highlightContent: false,
  },
  docs: {
    source: {type: 'dynamic'},
    page: () => (
      <>
        <Title />
        <ArgsTable />
      </>
    ),
  },
};

addDecorator(addReadme);
