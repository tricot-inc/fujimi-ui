import type {Alignment} from '../styles/variables';

const nameMap: {[key in Alignment]?: string} = {
  start: 'flex-start',
  end: 'flex-end',
};

export function getAlignmentValue(align: Alignment): string {
  return nameMap[align] != null ? (nameMap[align] as string) : align;
}
