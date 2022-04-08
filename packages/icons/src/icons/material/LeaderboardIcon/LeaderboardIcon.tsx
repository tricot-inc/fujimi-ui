import React from 'react';
import {Color} from 'fujimi-ui';

export type Props = React.ComponentPropsWithoutRef<'svg'> & {
  title?: string;
  color?: string;
};

export const LeaderboardIcon: React.VFC<Props> = ({
  color = Color.Primary.GRAY_50,
  title = '',
  ...rest
}) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
      <title>{title}</title>
      <path
        d="M7.5 21H2V9H7.5V21ZM14.75 3H9.25V21H14.75V3ZM22 11H16.5V21H22V11Z"
        fill={color}
      />
    </svg>
  );
};
