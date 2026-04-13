import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M8 18L12 22L16 18"}],["path",{"d":"M12 2V22"}]];

const MoveDown = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MoveDown.displayName = 'MoveDown';

export default MoveDown;
