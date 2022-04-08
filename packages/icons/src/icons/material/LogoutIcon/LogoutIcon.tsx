import React from 'react';
import {Color} from 'fujimi-ui';

export type Props = React.ComponentPropsWithoutRef<'svg'> & {
  title?: string;
  color?: string;
};

export const LogoutIcon: React.VFC<Props> = ({
  color = Color.Primary.GRAY_50,
  title = '',
  ...rest
}) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
      <title>{title}</title>
      <path
        d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z"
        fill={color}
      />
    </svg>
  );
};
