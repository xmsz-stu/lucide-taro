import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 22a10 10 0 1 1 10-10"}],["path",{"d":"M22 22 12 12"}],["path",{"d":"M22 16v6h-6"}]];

const CircleArrowOutDownRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CircleArrowOutDownRight.displayName = 'CircleArrowOutDownRight';

export default CircleArrowOutDownRight;
