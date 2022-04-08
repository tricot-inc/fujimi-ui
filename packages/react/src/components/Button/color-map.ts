import {Color} from '@fujimi/ui-core';

export type ButtonColor =
  | 'primary'
  | 'transparent'
  | 'outlinedLine'
  | 'filledLine'
  | 'protein'
  | 'blue'
  | 'outline'
  | 'purchase'
  | 'danger';

type ButtonColorStyle = {
  normal: {
    background: string;
    color: string;
    border?: string;
  };
  hover: {
    background?: string;
    color?: string;
    border?: string;
  };
  focus: {
    background?: string;
    border?: string;
  };
};

export const colorMap: Record<ButtonColor, ButtonColorStyle> = {
  outlinedLine: {
    normal: {
      background: Color.WHITE.WHITE_100,
      color: Color.THIRDPARTY.LINE,
      border: Color.THIRDPARTY.LINE,
    },
    hover: {
      border: Color.THIRDPARTY.LINE,
    },
    focus: {
      border: Color.THIRDPARTY.LINE,
    },
  },
  filledLine: {
    normal: {
      background: Color.THIRDPARTY.LINE,
      color: Color.WHITE.WHITE_100,
      border: Color.THIRDPARTY.LINE,
    },
    hover: {
      border: Color.THIRDPARTY.LINE,
    },
    focus: {
      border: Color.THIRDPARTY.LINE,
    },
  },
  primary: {
    normal: {
      background: Color.Primary.GRAY_50,
      border: Color.Primary.GRAY_50,
      color: Color.WHITE.WHITE_100,
    },
    hover: {
      background: Color.Primary.GRAY_60,
      border: Color.Primary.GRAY_60,
    },
    focus: {
      border: Color.FOCUS.BLUE_ALPHA,
    },
  },
  transparent: {
    normal: {
      background: 'transparent',
      border: 'transparent',
      color: Color.Primary.GRAY_50,
    },
    hover: {
      border: 'transparent',
    },
    focus: {},
  },
  protein: {
    normal: {
      background: '#E37D4E',
      color: Color.WHITE.WHITE_100,
      border: '#E37D4E',
    },
    hover: {
      border: '#E37D4E',
    },
    focus: {},
  },
  blue: {
    normal: {
      background: Color.BLUE.BLUE_90,
      color: Color.WHITE.WHITE_100,
      border: Color.BLUE.BLUE_90,
    },
    hover: {
      border: Color.BLUE.BLUE_90,
    },
    focus: {},
  },
  outline: {
    normal: {
      background: 'transparent',
      color: Color.Primary.GRAY_50,
      border: Color.Primary.GRAY_50,
    },
    hover: {
      border: Color.Primary.GRAY_50,
      background: '#F4F4F4',
    },
    focus: {
      border: Color.Primary.GRAY_50,
      background: '#F4F4F4',
    },
  },
  purchase: {
    normal: {
      background: Color.YELLOW.YELLOW_50,
      color: Color.GRAY_ALPHA.GRAY_90,
      border: Color.YELLOW.YELLOW_50,
    },
    hover: {
      background: Color.YELLOW.YELLOW_50,
      color: Color.GRAY_ALPHA.GRAY_90,
      border: Color.YELLOW.YELLOW_50,
    },
    focus: {
      background: Color.YELLOW.YELLOW_50,
      border: Color.YELLOW.YELLOW_50,
    },
  },
  danger: {
    normal: {
      background: Color.RED.RED_100,
      color: Color.WHITE.WHITE_100,
      border: Color.RED.RED_100,
    },
    hover: {
      background: Color.RED.RED_90,
      color: Color.WHITE.WHITE_100,
      border: Color.RED.RED_90,
    },
    focus: {
      background: Color.RED.RED_90,
      border: Color.RED.RED_90,
    },
  },
} as const;
