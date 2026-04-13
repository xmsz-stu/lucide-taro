import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 12a10 10 0 1 1 10 10"}],["path",{"d":"m2 22 10-10"}],["path",{"d":"M8 22H2v-6"}]];

const CircleArrowOutDownLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CircleArrowOutDownLeft.displayName = 'CircleArrowOutDownLeft';

export default CircleArrowOutDownLeft;
