/* eslint-disable @next/next/no-img-element */
import React, {useMemo} from 'react';
import {
  createSrcSet,
  optimizationImageURL,
  calcImageRole,
  calcImageStyles,
  Layout,
  Fit,
} from '../../utils/ImageUtils';
import {IntersectionBoundary} from '../../boundaries/IntersectionBoundary';
import Head from 'next/head';
import styled from 'styled-components';

const Wrapper = styled.span<{circle?: boolean}>`
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

const BaseImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  vertical-align: bottom;
  object-fit: contain;
`;

export interface Props
  extends Omit<React.ComponentPropsWithoutRef<'img'>, 'srcSet'> {
  src: string;
  srcSet?: string[];
  width: number;
  height: number;
  fit?: Fit;
  layout?: Layout;
  lazy?: boolean;
  position?: string;
  circle?: boolean;
  preload?: boolean;
}

function renderPlaceholder({role, alt}: Props): React.ReactNode {
  return <span role={calcImageRole(role, alt)} aria-hidden={true} />;
}

function renderImage(props: Omit<Props, 'layout'>): React.ReactNode {
  const {src, fit, position, lazy, preload, ...rest} = props;
  rest.loading =
    lazy === true && process.env.NEXT_PUBLIC_APP_ENV !== 'test'
      ? 'lazy'
      : undefined;

  const optimizedSrc = optimizationImageURL(src, rest.width, rest.height);
  const srcSet = createSrcSet(optimizedSrc);

  return (
    <picture>
      {preload && (
        <Head>
          <link rel="preload" as="image" href={optimizedSrc} />
          {srcSet.map(href => (
            <link rel="preload" as="image" href={href} key={href} />
          ))}
        </Head>
      )}
      <source srcSet={srcSet.join(',')} />
      <BaseImage
        {...rest}
        src={optimizedSrc}
        srcSet={srcSet.join(',')}
        style={{objectFit: fit, objectPosition: position}}
      />
    </picture>
  );
}

export const Image: React.VFC<Props> = ({layout, circle, lazy, ...props}) => {
  const style = useMemo(
    () =>
      calcImageStyles(layout as Layout, {
        width: props.width,
        height: props.height,
      }),
    [props.height, layout, props.width]
  );

  return (
    <Wrapper style={style} circle={circle}>
      {lazy && process.env.NEXT_PUBLIC_APP_ENV !== 'test' ? (
        <IntersectionBoundary once rootMargin="300px">
          {({inview}): React.ReactNode =>
            inview ? renderImage(props) : renderPlaceholder(props)
          }
        </IntersectionBoundary>
      ) : (
        renderImage(props)
      )}
    </Wrapper>
  );
};
