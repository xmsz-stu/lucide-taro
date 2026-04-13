import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21 5H3"}],["path",{"d":"M15 12H3"}],["path",{"d":"M17 19H3"}]];

const AlignLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignLeft.displayName = 'AlignLeft';

export default AlignLeft;
