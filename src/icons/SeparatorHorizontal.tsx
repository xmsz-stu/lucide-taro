import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m16 16-4 4-4-4"}],["path",{"d":"M3 12h18"}],["path",{"d":"m8 8 4-4 4 4"}]];

const SeparatorHorizontal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SeparatorHorizontal.displayName = 'SeparatorHorizontal';

export default SeparatorHorizontal;
