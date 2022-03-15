import React from 'react';
import {Image, Props} from './';
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'components/Image',
  component: Image,
  argTypes: {
    fit: {
      control: {
        type: 'select',
        options: ['contain', 'cover', 'scale-down', 'none'],
      },
    },
    layout: {
      control: {
        type: 'select',
        options: ['flexible', 'fit', 'fixed'],
      },
    },
  },
};

const Template: Story<Props> = args => <Image {...args} />;

const defaultProps: Props = {
  src: 'https://via.placeholder.com/600x400/000/fff.jpg/?text=image',
  srcSet: ['https://via.placeholder.com/1200x800/000/fff.jpg/?text=image 2x'],
  width: 600,
  height: 400,
  fit: 'contain',
  layout: 'fixed',
  lazy: true,
};

export const overview = Template.bind({});
overview.args = defaultProps;

const Wrapper: React.VFC<Props> = args => {
  return (
    <div style={{paddingTop: '3000px'}}>
      <Image {...args} />
    </div>
  );
};

const LazyloadTemplate: Story<Props> = args => <Wrapper {...args} />;

export const lazyload = LazyloadTemplate.bind({});
lazyload.args = {
  ...defaultProps,
  lazy: true,
};

export const layoutFlexible = Template.bind({});
layoutFlexible.args = {
  ...defaultProps,
  layout: 'flexible',
};

export const circle = Template.bind({});
circle.args = {
  ...defaultProps,
  width: 500,
  height: 500,
  src: 'https://via.placeholder.com/500x500/000/fff.jpg/?text=image',
  srcSet: ['https://via.placeholder.com/1000x1000/000/fff.jpg/?text=image 2x'],
  circle: true,
};
