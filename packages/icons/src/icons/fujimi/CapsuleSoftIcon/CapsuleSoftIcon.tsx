import React from 'react';
import {Color} from '@fujimi/ui-core';

export type Props = React.ComponentPropsWithoutRef<'svg'> & {
  title?: string;
  color?: string;
};

export const CapsuleSoftIcon: React.VFC<Props> = ({
  color = Color.Primary.GRAY_50,
  title = '',
  ...rest
}) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
      <title>{title}</title>
      <path
        d="M12 3.6C13.0639 3.6 14.1532 4.38327 15.011 5.92742C15.8576 7.45125 16.4 9.59705 16.4 12C16.4 14.4029 15.8576 16.5487 15.011 18.0726C14.1532 19.6167 13.0639 20.4 12 20.4C10.9361 20.4 9.84682 19.6167 8.98896 18.0726C8.14239 16.5487 7.6 14.4029 7.6 12C7.6 9.59705 8.14239 7.45125 8.98896 5.92742C9.84682 4.38327 10.9361 3.6 12 3.6Z"
        stroke={color}
        strokeWidth="1.2"
      />
    </svg>
  );
};
