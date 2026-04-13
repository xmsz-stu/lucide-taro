import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m10 15 5 5 5-5"}],["path",{"d":"M4 4h7a4 4 0 0 1 4 4v12"}]];

const CornerRightDown = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CornerRightDown.displayName = 'CornerRightDown';

export default CornerRightDown;
