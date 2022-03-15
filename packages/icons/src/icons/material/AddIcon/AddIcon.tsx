import React from 'react';
import {Color} from '@tricot-inc/fujimi-ui-core';

export type Props = React.ComponentPropsWithoutRef<'svg'> & {
  title?: string;
  color?: string;
};

export const AddIcon: React.VFC<Props> = ({
  color = Color.Primary.GRAY_50,
  title = '',
  ...rest
}) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
      <title>{title}</title>
      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill={color} />
    </svg>
  );
};
