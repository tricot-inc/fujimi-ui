export type Fit = 'contain' | 'cover' | 'scale-down' | 'none';

export type Layout = 'flexible' | 'fit' | 'fixed';

export function isImgixURL(src: string): boolean {
  try {
    const url = new URL(src);

    return url.host.indexOf('imgix.net') > -1;
  } catch (e) {
    return false;
  }
}

export function optimizationImageURL(
  src: string,
  width: number,
  height: number
): string {
  const buildId = process.env.NEXT_PUBLIC_BUILD_ID || 'local';

  // for imgix.net
  if (src.startsWith('https') && isImgixURL(src)) {
    const url = new URL(src);

    url.searchParams.set('w', width.toString());
    url.searchParams.set('h', height.toString());
    url.searchParams.set('auto', 'format');
    url.searchParams.set('fit', 'max');
    url.searchParams.set('revving', buildId);

    return url.toString();
  }

  // for Fastly Image Optimizer
  const params = new URLSearchParams();
  params.set('width', width.toString());
  params.set('height', height.toString());
  params.set('revving', buildId);

  return src + '?' + params.toString();
}

export function createSrcSet(src: string): string[] {
  const srcSet = [`${src}&dpr=1 1x`, `${src}&dpr=2 2x`, `${src}&dpr=3 3x`];

  return srcSet;
}

// @see https://www.w3.org/TR/html-aria/#img-alt
export function calcImageRole(
  role: string | undefined,
  alt: string | undefined
): string | undefined {
  return alt && role === 'img' ? undefined : role;
}

export function calcImageStyles(
  layout: Layout,
  {width, height}: {width: number; height: number}
): React.CSSProperties {
  switch (layout) {
    case 'fit':
      return {
        width: '100%',
        height: '100%',
      };
    case 'flexible':
      return {
        width: '100%',
        paddingBottom: `${(height / width) * 100}%`,
      };
    default:
      return {
        width: `${width}px`,
        paddingBottom: `${height}px`,
      };
  }
}
