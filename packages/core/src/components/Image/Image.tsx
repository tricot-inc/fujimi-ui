import {css} from 'styled-components';

export const ImageStyle = css<{circle?: boolean}>`
  position: relative;
  display: inline-block;
  vertical-align: bottom;
  overflow: hidden;
  border-radius: ${(props): string => (props.circle ? '50%' : '0px')};
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const BaseImageStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  vertical-align: bottom;
  object-fit: contain;
`;
