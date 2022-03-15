import React from 'react';
import {Color} from '@tricot-inc/fujimi-ui-core';

export type Props = React.ComponentPropsWithoutRef<'svg'> & {
  title?: string;
  color?: string;
};

export const MenuIcon: React.VFC<Props> = ({
  color = Color.Primary.GRAY_50,
  title = '',
  ...rest
}) => {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...rest}>
      <title>{title}</title>
      <path d="M1 11H31" stroke={color} />
      <path d="M1 21H31" stroke={color} />
    </svg>
  );
};
