import {
  isImgixURL,
  optimizationImageURL,
  createSrcSet,
  calcImageRole,
  calcImageStyles,
  Layout,
} from '../ImageUtils';

describe('ImageUtils', () => {
  test.each([
    ['https://assets-fujimi.imgix.net/hoge', true],
    ['https://fujimi.imgix.net/hoge', true],
    ['https://fujimi.imgix.net', true],
    ['https://fujimi.me', false],
    //NOTE: new URLをしているのでURL validじゃない文字列にも耐えれるかをテスト
    ['hoge', false],
  ])('isCdnUrl(%p) = %p', (input, expected) => {
    expect(isImgixURL(input)).toBe(expected);
  });

  test('optimizationImageURL', () => {
    const src = 'https://fujimi.imgix.net/hoge.png';
    expect(optimizationImageURL(src, 100, 100)).toBe(
      `${src}?w=100&h=100&auto=format&fit=max&revving=local`
    );
  });

  test.each([
    ['img', 'alt', undefined],
    [undefined, 'alt', undefined],
    ['img', undefined, 'img'],
    [undefined, undefined, undefined],
  ])('calcImageRole(%p, %p) = %p', (role, alt, expected) => {
    expect(calcImageRole(role, alt)).toBe(expected);
  });

  test.each<[Layout, {width: number; height: number}, any]>([
    ['fit', {width: 100, height: 100}, {width: '100%', height: '100%'}],
    [
      'flexible',
      {width: 100, height: 100},
      {width: '100%', paddingBottom: '100%'},
    ],
    [
      'fixed',
      {width: 100, height: 100},
      {width: '100px', paddingBottom: '100px'},
    ],
  ])('calcImageStyles(%p, %p) = %p', (layout, size, expected) => {
    expect(calcImageStyles(layout, size)).toEqual(expected);
  });

  test('createSrcSet', () => {
    const src = 'https://fujimi.imgix.net/hoge.png';
    const expectedSrc = `${src}?w=100&h=100&auto=format&fit=max&revving=local`;
    expect(createSrcSet(optimizationImageURL(src, 100, 100))).toEqual([
      `${expectedSrc}&dpr=1 1x`,
      `${expectedSrc}&dpr=2 2x`,
      `${expectedSrc}&dpr=3 3x`,
    ]);
  });
});
