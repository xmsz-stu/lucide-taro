import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m15 18-6-6 6-6"}]];

const ChevronLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronLeft.displayName = 'ChevronLeft';

export default ChevronLeft;
