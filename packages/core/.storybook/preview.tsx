import {MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';
import {customViewports} from './viewports';
import {ArgsTable, Title} from '@storybook/addon-docs';

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
