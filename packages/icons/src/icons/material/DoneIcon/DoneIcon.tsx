import React from 'react';
import {Color} from '@tricot-inc/fujimi-ui';

export type Props = React.ComponentPropsWithoutRef<'svg'> & {
  title?: string;
  color?: string;
};

export const DoneIcon: React.VFC<Props> = ({
  color = Color.Primary.GRAY_50,
  title = '',
  ...rest
}) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
      <title>{title}</title>
      <path
        d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
        fill={color}
      />
    </svg>
  );
};
