import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M12 8v8"}],["path",{"d":"m8 12 4 4 4-4"}]];

const CircleArrowDown = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CircleArrowDown.displayName = 'CircleArrowDown';

export default CircleArrowDown;
