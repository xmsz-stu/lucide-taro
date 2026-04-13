import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M4 10a8 8 0 1 1 8 8H4"}],["path",{"d":"m8 22-4-4 4-4"}]];

const IterationCw = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

IterationCw.displayName = 'IterationCw';

export default IterationCw;
