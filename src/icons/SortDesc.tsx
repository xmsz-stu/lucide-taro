import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m3 16 4 4 4-4"}],["path",{"d":"M7 20V4"}],["path",{"d":"M11 4h10"}],["path",{"d":"M11 8h7"}],["path",{"d":"M11 12h4"}]];

const SortDesc = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SortDesc.displayName = 'SortDesc';

export default SortDesc;
