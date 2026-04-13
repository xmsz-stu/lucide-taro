import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m16 12-4-4-4 4"}],["path",{"d":"M12 16V8"}]];

const CircleArrowUp = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CircleArrowUp.displayName = 'CircleArrowUp';

export default CircleArrowUp;
