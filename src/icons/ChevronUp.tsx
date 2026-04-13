import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m18 15-6-6-6 6"}]];

const ChevronUp = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronUp.displayName = 'ChevronUp';

export default ChevronUp;
