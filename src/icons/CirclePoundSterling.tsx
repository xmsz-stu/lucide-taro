import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M10 16V9.5a1 1 0 0 1 5 0"}],["path",{"d":"M8 12h4"}],["path",{"d":"M8 16h7"}]];

const CirclePoundSterling = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CirclePoundSterling.displayName = 'CirclePoundSterling';

export default CirclePoundSterling;
