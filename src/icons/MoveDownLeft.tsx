import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M11 19H5V13"}],["path",{"d":"M19 5L5 19"}]];

const MoveDownLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MoveDownLeft.displayName = 'MoveDownLeft';

export default MoveDownLeft;
