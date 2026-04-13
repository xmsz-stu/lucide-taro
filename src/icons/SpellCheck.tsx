import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m6 16 6-12 6 12"}],["path",{"d":"M8 12h8"}],["path",{"d":"m16 20 2 2 4-4"}]];

const SpellCheck = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SpellCheck.displayName = 'SpellCheck';

export default SpellCheck;
