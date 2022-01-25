import React from 'react';

export interface Props extends React.ComponentPropsWithoutRef<'svg'> {
  size?: keyof typeof sizeMap;
  color?: string;
}

const sizeMap = {
  middle: {width: 86, height: 12},
  large: {width: 129, height: 18},
};

export const HeaderLogoIcon: React.VFC<Props> = ({
  color,
  size = 'middle',
  ...rest
}) => {
  const wh = sizeMap[size];

  return (
    <svg viewBox="0 0 85 13" fill="none" {...wh} {...rest}>
      <title>FUJIMI</title>
      <path
        d="M2.25724 1.84746V5.54103H7.09302V7.39804H2.25724V12.6198H0V0H7.93521V1.84746H2.25724Z"
        fill={color}
      />
      <path
        d="M2.41349 1.84746V5.54103H7.2479V7.39804H2.41349V12.6198H0.15625V0H8.09146V1.84746H2.41349Z"
        fill={color}
      />
      <path
        d="M21.0065 10.6086C21.4412 10.6086 21.8295 10.5335 22.1727 10.3848C22.5159 10.2361 22.8043 10.0246 23.0381 9.75445C23.2719 9.48428 23.4524 9.15545 23.5782 8.77068C23.704 8.38454 23.7668 7.95337 23.7668 7.47582V0H26.0159V7.47445C26.0159 8.21671 25.8997 8.90303 25.6686 9.53341C25.4376 10.1638 25.1053 10.7082 24.6733 11.1653C24.2413 11.6224 23.7163 11.9799 23.0969 12.235C22.479 12.4915 21.7817 12.6198 21.0065 12.6198C20.2258 12.6198 19.5272 12.4915 18.9078 12.235C18.2899 11.9799 17.7635 11.6224 17.3315 11.1653C16.8994 10.7082 16.5686 10.1638 16.3375 9.53341C16.1064 8.90303 15.9902 8.21671 15.9902 7.47445V0H18.2393V7.46626C18.2393 7.94382 18.3022 8.37499 18.4279 8.76113C18.5537 9.14727 18.7342 9.4761 18.9707 9.74899C19.2072 10.0219 19.4971 10.2347 19.8403 10.3835C20.1821 10.5335 20.5717 10.6086 21.0065 10.6086Z"
        fill={color}
      />
      <path
        d="M38.7649 8.04479C38.7649 8.74748 38.6815 9.38059 38.5147 9.9441C38.3479 10.509 38.0977 10.9893 37.7668 11.385C37.4346 11.782 37.0217 12.0877 36.5254 12.3005C36.0291 12.5134 35.4522 12.6198 34.7945 12.6198C34.4938 12.6198 34.1984 12.6007 33.9086 12.5638C33.6188 12.5256 33.3152 12.4683 32.998 12.3865C33.0145 12.1559 33.0336 11.9266 33.0568 11.6961C33.0787 11.4655 33.0992 11.2349 33.1156 11.0043C33.132 10.8788 33.1813 10.7764 33.2619 10.6986C33.3426 10.6222 33.4588 10.5827 33.6092 10.5827C33.7035 10.5827 33.8279 10.6031 33.9811 10.6427C34.1342 10.6836 34.327 10.7027 34.5621 10.7027C34.8793 10.7027 35.161 10.6563 35.407 10.5608C35.6518 10.4667 35.8569 10.3152 36.0223 10.1078C36.1864 9.90044 36.3108 9.63165 36.3942 9.30145C36.4776 8.96989 36.5199 8.56874 36.5199 8.09664V0H38.769V8.04479H38.7649Z"
        fill={color}
      />
      <path d="M50.3393 0H48.082V12.6198H50.3393V0Z" fill={color} />
      <path
        d="M72.6893 0V12.6184H70.7083V4.41945C70.7083 4.09744 70.7247 3.74814 70.7589 3.37565L67.1057 10.4626C66.9334 10.8023 66.6682 10.9715 66.3114 10.9715H65.9942C65.6373 10.9715 65.3721 10.8023 65.1998 10.4626L61.5043 3.34972C61.5207 3.53938 61.5344 3.72631 61.5467 3.91051C61.5576 4.09471 61.5631 4.2639 61.5631 4.41945V12.6184H59.582V0H61.2801C61.3799 0 61.466 0.0027289 61.5385 0.00818669C61.611 0.0150089 61.6766 0.0286534 61.7354 0.0518491C61.7942 0.0750447 61.8461 0.111885 61.894 0.163734C61.9418 0.215583 61.9869 0.28517 62.032 0.37113L65.6524 7.30253C65.7467 7.48673 65.8342 7.67639 65.9163 7.87287C65.9969 8.06799 66.0762 8.26992 66.1541 8.47732C66.2321 8.26447 66.3127 8.05843 66.3961 7.85922C66.4795 7.66138 66.5684 7.46899 66.6641 7.28479L70.2339 0.37113C70.279 0.28517 70.3255 0.215583 70.376 0.163734C70.4266 0.111885 70.48 0.0750447 70.5387 0.0518491C70.5975 0.0286534 70.6632 0.0150089 70.7356 0.00818669C70.8081 0.0027289 70.8942 0 70.994 0H72.6893V0Z"
        fill={color}
      />
      <path d="M84.2651 0H82.0078V12.6184H84.2651V0Z" fill={color} />
    </svg>
  );
};

HeaderLogoIcon.defaultProps = {
  size: 'middle',
  color: '#fff',
};