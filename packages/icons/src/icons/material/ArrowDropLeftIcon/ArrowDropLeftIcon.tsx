import React from 'react';
import {Color} from '@tricot-inc/fujimi-ui-core';

export type Props = React.ComponentPropsWithoutRef<'svg'> & {
  title?: string;
  color?: string;
};

export const ArrowDropLeftIcon: React.VFC<Props> = ({
  color = Color.Primary.GRAY_50,
  title = '',
  ...rest
}) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
      <title>{title}</title>
      <path d="M14 7L9 12L14 17V7Z" fill={color} />
    </svg>
  );
};
