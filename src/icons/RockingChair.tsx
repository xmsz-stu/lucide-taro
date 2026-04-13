import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m15 13 3.708 7.416"}],["path",{"d":"M3 19a15 15 0 0 0 18 0"}],["path",{"d":"m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18"}],["path",{"d":"m9 13-3.708 7.416"}]];

const RockingChair = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

RockingChair.displayName = 'RockingChair';

export default RockingChair;
