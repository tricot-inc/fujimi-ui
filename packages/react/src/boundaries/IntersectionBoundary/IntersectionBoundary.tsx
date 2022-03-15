import React, {RefObject, useCallback, useEffect, useState} from 'react';
import {useIntersection} from 'use-intersection';

export interface ChildProps {
  inview: boolean;
}

export type ChildRenderer = (props: ChildProps) => React.ReactNode;

export type IntersectionTarget = HTMLElement | string | null;

export interface Props extends React.HTMLAttributes<HTMLElement> {
  component?: keyof JSX.IntrinsicElements;
  root?: RefObject<Element>;
  rootMargin?: string;
  threshold?: number | number[];
  target?: IntersectionTarget;
  once?: boolean;
  children: ChildRenderer | React.ReactNode;
  onIntersect?(inview: boolean): void;
}

function getTarget(target: IntersectionTarget): Element | null {
  if (target == null) {
    return null;
  }

  return typeof target === 'string' ? document.querySelector(target) : target;
}

export const IntersectionBoundary: React.VFC<Props> = ({
  target,
  children,
  component,
  root,
  rootMargin,
  once,
  threshold,
  onIntersect,
  ...props
}) => {
  const [inview, setInview] = useState<boolean>(false);

  /**
   * NOTE
   * polyfillのintersectionObserverではthresholdの値に関わらずisIntersectingを返しているが
   * 各ブラウザではintersectionRatioがthresholdを超えたかどうかでisIntersectingを返しています。
   * iOSの12への対応のためpolyfillを読み込んでおり、挙動を合わせるためにこの処理を追加しています。
   * @see https://github.com/Financial-Times/polyfill-library/blob/master/polyfills/IntersectionObserver/polyfill.js#L35
   * @see https://github.com/w3c/IntersectionObserver/issues/432
   */
  const callback = useCallback(
    (entry: IntersectionObserverEntry) => {
      let isIntersecting = entry.isIntersecting;

      if (threshold != null) {
        const thresholds = Array.isArray(threshold) ? threshold : [threshold];
        isIntersecting = thresholds.some(
          item => entry.intersectionRatio >= item
        );
      }
      setInview(isIntersecting);

      return onIntersect?.(isIntersecting);
    },

    [onIntersect, threshold]
  );

  const [targetElement, setTargetElement] = useState<Element | null>(null);

  const targetRef = useCallback((node: Element) => {
    if (node == null) {
      return;
    }

    setTargetElement(node);
  }, []);

  useEffect(() => {
    if (target == null) {
      return;
    }

    setTargetElement(getTarget(target));
  }, [target]);

  useIntersection(
    targetElement,
    {
      root,
      rootMargin,
      once,
      threshold,
    },
    callback
  );

  const Component = component as any;

  return (
    <Component ref={targetRef} {...props}>
      {typeof children === 'function'
        ? (children as ChildRenderer)({inview})
        : children}
    </Component>
  );
};

IntersectionBoundary.defaultProps = {
  component: 'div',
  rootMargin: '0px',
  target: null,
  once: false,
};
