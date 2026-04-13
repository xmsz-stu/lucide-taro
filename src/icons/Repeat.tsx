import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m17 2 4 4-4 4"}],["path",{"d":"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{"d":"m7 22-4-4 4-4"}],["path",{"d":"M21 13v1a4 4 0 0 1-4 4H3"}]];

const Repeat = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Repeat.displayName = 'Repeat';

export default Repeat;
