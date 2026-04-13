import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m17 18-6-6 6-6"}],["path",{"d":"M7 6v12"}]];

const ChevronFirst = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronFirst.displayName = 'ChevronFirst';

export default ChevronFirst;
