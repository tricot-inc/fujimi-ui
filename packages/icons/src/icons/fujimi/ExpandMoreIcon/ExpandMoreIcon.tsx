import React from 'react';
import {Color} from 'fujimi-ui';

export type Props = React.ComponentPropsWithoutRef<'svg'> & {
  title?: string;
  color?: string;
};

export const ExpandMoreIcon: React.VFC<Props> = ({
  color = Color.Primary.GRAY_50,
  title = '',
  ...rest
}) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
      <title>{title}</title>
      <path d="M4 8L12 16L20 8" stroke={color} />
    </svg>
  );
};
