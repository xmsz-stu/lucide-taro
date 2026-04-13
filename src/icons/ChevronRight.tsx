import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m9 18 6-6-6-6"}]];

const ChevronRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronRight.displayName = 'ChevronRight';

export default ChevronRight;
