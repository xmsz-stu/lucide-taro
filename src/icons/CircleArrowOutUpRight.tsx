import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M22 12A10 10 0 1 1 12 2"}],["path",{"d":"M22 2 12 12"}],["path",{"d":"M16 2h6v6"}]];

const CircleArrowOutUpRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CircleArrowOutUpRight.displayName = 'CircleArrowOutUpRight';

export default CircleArrowOutUpRight;
