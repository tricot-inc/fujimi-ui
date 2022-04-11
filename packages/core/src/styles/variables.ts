import {css} from 'styled-components';

export const Color = {
  Primary: {
    /**
     * ボタンを始めとする主要なコンポーネントをホバーした時などに使います。
     */
    GRAY_60: '#596773',
    /**
     * サービスを始めとする主要なコンポーネントに使います。
     */
    GRAY_50: '#667684',
    /**
     * ボタンやラジオボタンを始めとするPrimary Colorを使ったコンポーネントをdisabledにしたい時に使います。
     */
    GRAY_10: '#D3D5D6',
    /**
     * テキストやセレクトボックスをdisabledにする時に使います。
     */
    GRAY_5: '#EEEEEE',
  },
  GRAY_ALPHA: {
    /**
     * サービスのあらゆる場所でタイトル・説明文などに使います。
     */
    GRAY_90: 'rgba(20, 24, 26, 0.9)',
    /**
     * サブテキストに主に使います。
     */
    GRAY_60: 'rgba(20, 24, 26, 0.6)',
    /**
     * disabled時の文字や、存在を薄めたい文字に使います。
     */
    GRAY_40: 'rgba(20, 24, 26, 0.4)',
  },
  GRAY: {
    /**
     * テキスト以外にメインのテキストカラーを使いたい時に使います。
     * コンポーネントのFocus Ringに使うこともあります。
     */
    GRAY_90: '#2C2F31',
    /**
     * コンポーネントのボーダーに使います。
     */
    GRAY_20: '#D0D1D1',
    /**
     * 背景に使います。
     */
    GRAY_5: '#F3F3F4',
  },
  WHITE: {
    /**
     * 背景色の上に載せるSurface Colorとして使います。また、ボタン等のテキストカラーとしても使います。
     */
    WHITE_100: '#FFFFFF',
  },
  RED: {
    /**
     * danger buttonのホバー字などに使う色です。
     */
    RED_90: '#C05048',
    /**
     * エラー時に使います。
     */
    RED_100: '#A6453E',
    /**
     * Toast / Errorなどエラーテキストの背景に使います。
     * エラーテキストの背景以外でこの色を使わないでください。
     */
    RED_5: '#F9EFEE',
  },
  GREEN: {
    /**
     * サクセス時に使います。
     */
    GREEN_100: '#3D664D',
    /**
     * サクセステキストの背景に使います。
     * サクセステキストの背景以外でこの色を使わないでください。
     */
    GREEN_5: '#EFF3F1',
  },
  FOCUS: {
    /**
     * Focus Ringに使います。
     */
    BLUE_ALPHA: 'rgba(65, 101, 173, 0.86)',
  },
  MOSS_GREEN: {
    /**
     * Facemaskの香り等、拡張性をもたせたい時に使います。
     */
    MOSS_GREEN_90: '#6D7953',
  },
  BLUE: {
    /**
     * Facemaskの香り等、拡張性をもたせたい時に使います。
     */
    BLUE_90: '#007BB6',
  },
  BROWN: {
    /**
     * Facemaskの香り等、拡張性をもたせたい時に使います。
     */
    BROWN_90: '#8D6E56',
  },
  YELLOW: {
    /**
     * リザルトページのコンバージョンに使います。
     */
    YELLOW_60: '#DCBB45',
    /**
     * コンバージョンのホバー時に使います。
     */
    YELLOW_50: '#F4D04D',
  },
  LINK: {
    /**
     * リンクの色に使います。
     */
    BLUE: '#2264cd',
  },
  THIRDPARTY: {
    /**
     * LINEのリンクなどに使います。
     */
    LINE: '#06C755',
  },
} as const;

export const Depth = {
  HEADER: 100,
  CONCIERGE: 200,
  DRAWER_MENU: 300,
  SNACKBAR: 400,
  NOTIFICATION: 500,
  MODAL: 600,
  DIALOG: 700,
} as const;

export const Radius = {
  SMALL: '2px',
  MEDIUM: '4px',
} as const;

export const BreakPoint = {
  MOBILE: 375,
  TABLET: 768,
  DESKTOP: 1024,
} as const;

export const CustomMedia = {
  SE: 'max-width: 320px',
  Tablet: `min-width: ${BreakPoint.TABLET}px`,
  Desktop: `min-width: ${BreakPoint.DESKTOP}px`,
} as const;

export const Shadow = {
  Lv0: '0 0 20px rgba(0, 0, 0, 0.1)',
  Lv1: '0 0 30px rgba(0, 0, 0, 0.1)',
  Lv2: '0 0 40px rgba(0, 0, 0, 0.1)',
} as const;

export const FontFamily = {
  MINCHO: "'Mincho Std', sans-serif;",
  AVENIR: "'Avenir', sans-serif;",
  SF: "'-apple-system', 'BlinkMacSystemFont', sans-serif;",
};

export const Typography = {
  /**
   * font-size: 32px
   */
  SF_DENSE_32: css`
    letter-spacing: 0.12em;
    font-size: 2rem;
    font-family: ${FontFamily.SF};
    line-height: 1;
  `,
  /**
   * font-size: 24px
   */
  SF_DENSE_24: css`
    letter-spacing: 0.12em;
    font-size: 1.5rem;
    font-family: ${FontFamily.SF};
    line-height: 1;
  `,
  /**
   * font-size: 20px
   */
  SF_DENSE_20: css`
    letter-spacing: 0.12em;
    font-size: 1.25rem;
    font-family: ${FontFamily.SF};
    line-height: 1;
  `,
  /**
   * font-size: 18px
   */
  SF_DENSE_18: css`
    letter-spacing: 0.12em;
    font-size: 1.125rem;
    font-family: ${FontFamily.SF};
    line-height: 1;
  `,
  /**
   * font-size: 16px
   */
  SF_DENSE_16: css`
    letter-spacing: 0.12em;
    font-size: 1rem;
    font-family: ${FontFamily.SF};
    line-height: 1;
  `,
  /**
   * font-size: 14px
   */
  SF_DENSE_14: css`
    letter-spacing: 0.12em;
    font-size: 0.875rem;
    font-family: ${FontFamily.SF};
    line-height: 1;
  `,
  /**
   * font-size: 12px
   */
  SF_DENSE_12: css`
    letter-spacing: 0.12em;
    font-size: 0.75rem;
    font-family: ${FontFamily.SF};
    line-height: 1;
  `,
  /**
   * font-size: 10px
   */
  SF_DENSE_10: css`
    letter-spacing: 0.12em;
    font-size: 0.625rem;
    font-family: ${FontFamily.SF};
    line-height: 1;
  `,
  /**
   * font-size: 32px
   */
  SF_NORMAL_32: css`
    letter-spacing: 0.12em;
    font-size: 2rem;
    font-family: ${FontFamily.SF};
    line-height: 1.5;
  `,
  /**
   * font-size: 24px
   */
  SF_NORMAL_24: css`
    letter-spacing: 0.12em;
    font-size: 1.5rem;
    font-family: ${FontFamily.SF};
    line-height: 1.5;
  `,
  /**
   * font-size: 20px
   */
  SF_NORMAL_20: css`
    letter-spacing: 0.12em;
    font-size: 1.25rem;
    font-family: ${FontFamily.SF};
    line-height: 1.5;
  `,
  /**
   * font-size: 18px
   */
  SF_NORMAL_18: css`
    letter-spacing: 0.12em;
    font-size: 1.125rem;
    font-family: ${FontFamily.SF};
    line-height: 1.5;
  `,
  /**
   * font-size: 16px
   */
  SF_NORMAL_16: css`
    letter-spacing: 0.12em;
    font-size: 1rem;
    font-family: ${FontFamily.SF};
    line-height: 1.5;
  `,
  /**
   * font-size: 14px
   */
  SF_NORMAL_14: css`
    letter-spacing: 0.12em;
    font-size: 0.875rem;
    font-family: ${FontFamily.SF};
    line-height: 1.5;
  `,
  /**
   * font-size: 12px
   */
  SF_NORMAL_12: css`
    letter-spacing: 0.12em;
    font-size: 0.75rem;
    font-family: ${FontFamily.SF};
    line-height: 1.5;
  `,
  /**
   * font-size: 10px
   */
  SF_NORMAL_10: css`
    letter-spacing: 0.12em;
    font-size: 0.625rem;
    font-family: ${FontFamily.SF};
    line-height: 1.5;
  `,
  /**
   * font-size: 32px
   */
  SF_COMFORT_32: css`
    letter-spacing: 0.12em;
    font-size: 2rem;
    font-family: ${FontFamily.SF};
    line-height: 2;
  `,
  /**
   * font-size: 24px
   */
  SF_COMFORT_24: css`
    letter-spacing: 0.12em;
    font-size: 1.5rem;
    font-family: ${FontFamily.SF};
    line-height: 2;
  `,
  /**
   * font-size: 20px
   */
  SF_COMFORT_20: css`
    letter-spacing: 0.12em;
    font-size: 1.25rem;
    font-family: ${FontFamily.SF};
    line-height: 2;
  `,
  /**
   * font-size: 18px
   */
  SF_COMFORT_18: css`
    letter-spacing: 0.12em;
    font-size: 1.125rem;
    font-family: ${FontFamily.SF};
    line-height: 2;
  `,
  /**
   * font-size: 16px
   */
  SF_COMFORT_16: css`
    letter-spacing: 0.12em;
    font-size: 1rem;
    font-family: ${FontFamily.SF};
    line-height: 2;
  `,
  /**
   * font-size: 14px
   */
  SF_COMFORT_14: css`
    letter-spacing: 0.12em;
    font-size: 0.875rem;
    font-family: ${FontFamily.SF};
    line-height: 2;
  `,
  /**
   * font-size: 12px
   */
  SF_COMFORT_12: css`
    letter-spacing: 0.12em;
    font-size: 0.75rem;
    font-family: ${FontFamily.SF};
    line-height: 2;
  `,
  /**
   * font-size: 10px
   */
  SF_COMFORT_10: css`
    letter-spacing: 0.12em;
    font-size: 0.625rem;
    font-family: ${FontFamily.SF};
    line-height: 2;
  `,
  /**
   * font-size: 32px
   */
  MINCHO_COMFORT_32: css`
    letter-spacing: 0.12em;
    font-size: 2rem;
    font-family: ${FontFamily.MINCHO};
    line-height: 1.5;
  `,
  /**
   * font-size: 24px
   */
  MINCHO_COMFORT_24: css`
    letter-spacing: 0.12em;
    font-size: 1.5rem;
    font-family: ${FontFamily.MINCHO};
    line-height: 1.5;
  `,
  /**
   * font-size: 20px
   */
  MINCHO_COMFORT_20: css`
    letter-spacing: 0.12em;
    font-size: 1.25rem;
    font-family: ${FontFamily.MINCHO};
    line-height: 1.5;
  `,
  /**
   * font-size: 18px
   */
  MINCHO_COMFORT_18: css`
    letter-spacing: 0.12em;
    font-size: 1.125rem;
    font-family: ${FontFamily.MINCHO};
    line-height: 1.5;
  `,
  /**
   * font-size: 16px
   */
  MINCHO_COMFORT_16: css`
    letter-spacing: 0.12em;
    font-size: 1rem;
    font-family: ${FontFamily.MINCHO};
    line-height: 1.5;
  `,
  /**
   * font-size: 14px
   */
  MINCHO_COMFORT_14: css`
    letter-spacing: 0.12em;
    font-size: 0.875rem;
    font-family: ${FontFamily.MINCHO};
    line-height: 1.5;
  `,
  /**
   * font-size: 12px
   */
  MINCHO_COMFORT_12: css`
    letter-spacing: 0.12em;
    font-size: 0.75rem;
    font-family: ${FontFamily.MINCHO};
    line-height: 1.5;
  `,
  /**
   * font-size: 10px
   */
  MINCHO_COMFORT_10: css`
    letter-spacing: 0.12em;
    font-size: 0.625rem;
    font-family: ${FontFamily.MINCHO};
    line-height: 1.5;
  `,
} as const;

export const Duration = {
  FADE_IN: 150,
  FADE_OUT: 75,
  HOVER_EFFECT: 256,
  SMALL_IN: 500,
  FIRSTVIEW_EFFECT: 512,
  MODAL_OPEN: 750,
} as const;

export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export const LineHeight = {
  INHERIT: 'inherit',
  SMALL: '1',
  BIG_SMALL: '1.2',
  X_MIDDLE: '1.5',
  MIDDLE: '2',
  LARGE: '3',
} as const;

export const LetterSpacing = {
  INHERIT: 'inherit',
  NONE: '0',
  SMALL: '0.05em',
  MIDDLE: '0.1em',
  LARGE: '0.15em',
} as const;

export type FontWeight = 'normal' | 'bold';

export type Alignment =
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'baseline'
  | 'stretch';
