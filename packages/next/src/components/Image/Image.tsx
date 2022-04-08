import React, {useMemo} from 'react';
import {IntersectionBoundary} from '../../boundaries/IntersectionBoundary';
import styled from 'styled-components';
import Head from 'next/head';
import {
  ImageStyle,
  BaseImageStyle,
  createSrcSet,
  optimizationImageURL,
  calcImageRole,
  calcImageStyles,
  Layout,
  Fit,
} from 'fujimi-ui';

const Wrapper = styled.span<{circle?: boolean}>`
  ${ImageStyle};
`;

const BaseImage = styled.img`
  ${BaseImageStyle};
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
