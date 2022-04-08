import React from 'react';
import {Button, Props} from './';
import {Story} from '@storybook/react/types-6-0';
import {CartIcon} from 'fujimi-ui-icons';
import {BarArrowFowardIcon} from 'fujimi-ui-icons';

export default {
  title: 'components/Button',
  component: Button,
};

const Template: Story<Props> = args => <Button {...args} />;

const defaultProps: Props = {
  children: 'ログイン',
};

export const overview = Template.bind({});
overview.args = defaultProps;

export const withSizeLG = Template.bind({});
withSizeLG.args = {
  ...defaultProps,
  size: 'lg',
};

export const withLoading = Template.bind({});
withLoading.args = {
  ...defaultProps,
  children: 'ローディング中',
  loading: true,
};

export const withHref = Template.bind({});
withHref.args = {
  ...defaultProps,
  href: '#',
};

export const withPurchase = Template.bind({});
withPurchase.args = {
  ...defaultProps,
  children: '今すぐ購入する',
  color: 'purchase',
  size: 'lg',
  icon: {
    left: <CartIcon />,
    right: <BarArrowFowardIcon />,
  },
};

export const withGoastButton = Template.bind({});
withGoastButton.args = {
  ...defaultProps,
  color: 'transparent',
};
