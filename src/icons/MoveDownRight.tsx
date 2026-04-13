import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M19 13V19H13"}],["path",{"d":"M5 5L19 19"}]];

const MoveDownRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MoveDownRight.displayName = 'MoveDownRight';

export default MoveDownRight;
