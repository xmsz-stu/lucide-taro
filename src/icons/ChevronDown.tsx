import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m6 9 6 6 6-6"}]];

const ChevronDown = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronDown.displayName = 'ChevronDown';

export default ChevronDown;
