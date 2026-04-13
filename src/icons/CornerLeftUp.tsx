import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M14 9 9 4 4 9"}],["path",{"d":"M20 20h-7a4 4 0 0 1-4-4V4"}]];

const CornerLeftUp = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CornerLeftUp.displayName = 'CornerLeftUp';

export default CornerLeftUp;
