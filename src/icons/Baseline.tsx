import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M4 20h16"}],["path",{"d":"m6 16 6-12 6 12"}],["path",{"d":"M8 12h8"}]];

const Baseline = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Baseline.displayName = 'Baseline';

export default Baseline;
