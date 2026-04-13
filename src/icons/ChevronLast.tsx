import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m7 18 6-6-6-6"}],["path",{"d":"M17 6v12"}]];

const ChevronLast = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronLast.displayName = 'ChevronLast';

export default ChevronLast;
