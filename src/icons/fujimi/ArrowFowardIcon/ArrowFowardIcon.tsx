import React from 'react';
import {Color} from '../../../styles/variables';

export type Props = React.ComponentPropsWithoutRef<'svg'> & {
  title?: string;
  color?: string;
};

export const ArrowFowardIcon: React.VFC<Props> = ({
  color = Color.GRAY_ALPHA.GRAY_90,
  title = '',
  ...rest
}) => {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...rest}>
      <title>{title}</title>
      <path d="M2 19H30L20.3448 13" stroke={color} strokeLinejoin="round" />
    </svg>
  );
};
