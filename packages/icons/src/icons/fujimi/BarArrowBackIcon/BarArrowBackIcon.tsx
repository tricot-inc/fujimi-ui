import React from 'react';
import {Color} from 'fujimi-ui';

export type Props = React.ComponentPropsWithoutRef<'svg'> & {
  title?: string;
  color?: string;
};

export const BarArrowBackIcon: React.VFC<Props> = ({
  color = Color.Primary.GRAY_50,
  title = '',
  ...rest
}) => {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...rest}>
      <title>{title}</title>
      <path d="M30 19L2 19L11.6552 13" stroke={color} strokeLinejoin="round" />
    </svg>
  );
};
