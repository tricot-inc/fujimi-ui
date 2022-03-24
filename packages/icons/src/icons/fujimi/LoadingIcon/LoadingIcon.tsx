import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {Color} from '@tricot-inc/fujimi-ui';

const Keyframes = createGlobalStyle`
  @keyframes scale {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    45% {
      opacity: 0.7;
      transform: scale(0.2);
    }
    80% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Icon = styled.div<Required<Props>>`
  display: flex;
  align-items: center;

  & > div {
    display: inline-block;
    margin: 2px;
    width: ${({width}): number => width}px;
    height: ${({height}): number => height}px;
    border-radius: 50%;
    background-color: ${({color}): string => color};
  }

  & > div:nth-child(1) {
    animation: scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }

  & > div:nth-child(2) {
    animation: scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }

  & > div:nth-child(3) {
    animation: scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }
`;

export interface Props {
  color?: string;
  height?: number;
  width?: number;
}

export const LoadingIcon: React.VFC<Props> = ({
  color = Color.GRAY_ALPHA.GRAY_60,
  height = 15,
  width = 15,
}) => {
  return (
    <Icon color={color} height={height} width={width}>
      <div />
      <div />
      <div />

      <Keyframes />
    </Icon>
  );
};
