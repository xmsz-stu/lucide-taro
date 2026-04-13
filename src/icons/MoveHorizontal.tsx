import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m18 8 4 4-4 4"}],["path",{"d":"M2 12h20"}],["path",{"d":"m6 8-4 4 4 4"}]];

const MoveHorizontal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MoveHorizontal.displayName = 'MoveHorizontal';

export default MoveHorizontal;
