import React, {useMemo} from 'react';
import {
  createSrcSet,
  optimizationImageURL,
  calcImageRole,
  calcImageStyles,
  Layout,
  Fit,
  ImageStyle,
  BaseImageStyle,
} from 'fujimi-ui';
import {IntersectionBoundary} from '../../boundaries/IntersectionBoundary';
import styled from 'styled-components';

const Wrapper = styled.span<{circle?: boolean}>`
  ${ImageStyle};
`;

const BaseImage = styled.img`
  ${BaseImageStyle}
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
}

function renderPlaceholder({role, alt}: Props): React.ReactNode {
  return <span role={calcImageRole(role, alt)} aria-hidden={true} />;
}

function renderImage(props: Omit<Props, 'layout'>): React.ReactNode {
  const {src, fit, position, lazy, ...rest} = props;
  rest.loading =
    lazy === true && process.env.NEXT_PUBLIC_APP_ENV !== 'test'
      ? 'lazy'
      : undefined;

  const optimizedSrc = optimizationImageURL(src, rest.width, rest.height);
  const srcSet = createSrcSet(optimizedSrc);

  return (
    <picture>
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
