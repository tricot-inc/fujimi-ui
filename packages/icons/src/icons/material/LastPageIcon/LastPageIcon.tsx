import React from 'react';
import {Color} from '@tricot-inc/fujimi-ui-core';

export type Props = React.ComponentPropsWithoutRef<'svg'> & {
  title?: string;
  color?: string;
};

export const LastPageIcon: React.VFC<Props> = ({
  color = Color.Primary.GRAY_50,
  title = '',
  ...rest
}) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
      <title>{title}</title>
      <path
        d="M5.58997 7.41L10.18 12L5.58997 16.59L6.99997 18L13 12L6.99997 6L5.58997 7.41ZM16 6H18V18H16V6Z"
        fill={color}
      />
    </svg>
  );
};
