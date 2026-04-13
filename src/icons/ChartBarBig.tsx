import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{"x":"7","y":"13","rx":"1"}],["rect",{"x":"7","y":"5","rx":"1"}]];

const ChartBarBig = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChartBarBig.displayName = 'ChartBarBig';

export default ChartBarBig;
