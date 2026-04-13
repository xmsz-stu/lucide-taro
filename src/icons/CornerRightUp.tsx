import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m10 9 5-5 5 5"}],["path",{"d":"M4 20h7a4 4 0 0 0 4-4V4"}]];

const CornerRightUp = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CornerRightUp.displayName = 'CornerRightUp';

export default CornerRightUp;
