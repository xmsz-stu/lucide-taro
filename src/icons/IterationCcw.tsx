import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m16 14 4 4-4 4"}],["path",{"d":"M20 10a8 8 0 1 0-8 8h8"}]];

const IterationCcw = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

IterationCcw.displayName = 'IterationCcw';

export default IterationCcw;
