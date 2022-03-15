import {css} from 'styled-components';
import {Alignment, CustomMedia} from '../../styles/variables';
import {getAlignmentValue} from '../../utils/AlignmentStyleUtils';

type Config = {
  gap?: number;
  horizontal?: boolean;
  wrap?: boolean;
  vAlign?: Alignment;
  hAlign?: Alignment;
};

function mergeConfig(...list: (Config | undefined)[]): Config {
  return list.reduce<Config>(
    (acc, cur) => ({
      ...acc,
      ...(cur != null ? cur : {}),
    }),
    {}
  );
}

function styles(
  config: Config | undefined,
  inherit?: Config
): string | undefined {
  if (config == null) {
    return undefined;
  }

  const cfg = {...(inherit != null ? inherit : {}), ...config};
  const arr: string[] = [];

  if (cfg.horizontal != null) {
    arr.push(`flex-direction: ${cfg.horizontal ? 'row' : 'column'};`);
  }

  if (cfg.wrap != null) {
    arr.push(`flex-wrap: ${cfg.wrap ? 'wrap' : 'nowrap'};`);
  }

  if (cfg.vAlign != null) {
    arr.push(`justify-content: ${getAlignmentValue(cfg.vAlign)};`);
  }

  if (cfg.hAlign != null) {
    arr.push(`align-items: ${getAlignmentValue(cfg.hAlign)};`);
  }

  if (cfg.gap != null) {
    arr.push(`& > :not(:first-child) {
      ${cfg.horizontal ? 'margin-left' : 'margin-top'}: ${cfg.gap}px;
      ${cfg.horizontal ? 'margin-top' : 'margin-left'}: 0;
    }`);
  }

  return arr.join(' ');
}

export const StackStyle = css<{
  mobile?: Config;
  tablet?: Config;
  desktop?: Config;
}>`
  display: flex;
  flex-direction: column;
  ${({mobile}): string | undefined => styles(mobile)}

  @media (${CustomMedia.Tablet}) {
    ${({mobile, tablet}): string | undefined => styles(tablet, mobile)}
  }

  @media (${CustomMedia.Desktop}) {
    ${({mobile, tablet, desktop}): string | undefined =>
      styles(desktop, mergeConfig(mobile, tablet))}
  }
`;
